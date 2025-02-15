<template>
  <b-container id="stac-browser">
    <Authentication v-if="doAuth.length > 0" />
    <b-sidebar id="sidebar" title="Browse" shadow lazy>
      <Sidebar />
    </b-sidebar>
    <!-- Header -->
    <header>
      <section class="logo-container">
        <a href="https://dev.global" target="_blank">
          <img class="logo primary" src="https://dev.global/wp-content/uploads/2021/12/Standard-Logo-Color.png">
        </a>
        <a href="https://rampml.global" target="_blank">
          <img class="logo secondary" src="https://rampml.global/wp-content/uploads/2021/12/Ramp_Green_logo.png">
        </a>
      </section>
      <StacHeader />
    </header>
    <!-- Content (Item / Catalog) -->
    <main>
      <ErrorAlert class="global-error" v-if="globalError" v-bind="globalError" @close="hideError" />
      <router-view />
    </main>
    <footer>
      <small class="poweredby text-muted">
        Powered by <a href="https://github.com/radiantearth/stac-browser">STAC Browser</a> v{{ browserVersion }}
      </small>
    </footer>
  </b-container>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";
import { mapGetters, mapState } from 'vuex';
import getRoutes from "./router";
import getStore from "./store";

import {
  AlertPlugin, BadgePlugin, ButtonGroupPlugin, ButtonPlugin,
  CardPlugin, LayoutPlugin, SidebarPlugin, SpinnerPlugin,
  VBToggle, VBVisible } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import Clipboard from 'v-clipboard';

import ErrorAlert from './components/ErrorAlert.vue';
import Sidebar from './components/Sidebar.vue';
import StacHeader from './components/StacHeader.vue';

import Utils from './utils';
import URI from 'urijs';

const CONFIG_FILE = require(CONFIG_PATH);

Vue.use(Clipboard);

Vue.use(AlertPlugin);
Vue.use(ButtonGroupPlugin);
Vue.use(ButtonPlugin);
Vue.use(BadgePlugin);
Vue.use(CardPlugin);
Vue.use(LayoutPlugin);
Vue.use(SidebarPlugin);
Vue.use(SpinnerPlugin);

// For collapsibles / accordions
Vue.directive('b-toggle', VBToggle);
// Used to detect when a catalog/item becomes visible so that further data can be loaded
Vue.directive('b-visible', VBVisible);

const CONFIG = Object.assign(CONFIG_FILE, CONFIG_CLI);

// Setup router
Vue.use(VueRouter);
const router = new VueRouter({
  mode: CONFIG.historyMode,
  base: CONFIG.pathPrefix,
  routes: getRoutes(CONFIG)
});

// Pass Config through from props to vuex
let Props = {};
let Watchers = {};
for(let key in CONFIG) {
  Props[key] = {
    default: ['object', 'function'].includes(typeof CONFIG[key]) ? () => CONFIG[key] : CONFIG[key]
  };
  Watchers[key] = {
    immediate: true,
    handler: function(newValue) {
      this.$store.commit('config', {
        [key]: newValue
      });
    }
  };
}

export default {
  name: 'StacBrowser',
  router,
  store: getStore(CONFIG),
  components: {
    Authentication: () => import('./components/Authentication.vue'),
    ErrorAlert,
    Sidebar,
    StacHeader
  },
  props: {
    ...Props
  },
  data() {
    return {
      error: null
    };
  },
  computed: {
    ...mapState(['title', 'doAuth', 'globalError', 'stateQueryParameters']),
    ...mapState({catalogUrlFromVueX: 'catalogUrl'}),
    ...mapGetters(['displayCatalogTitle']),
    browserVersion() {
      return STAC_BROWSER_VERSION;
    },
    appStateAsParams () {
      const out = {};
      for (const [key, value] of Object.entries(this.$store.state.stateQueryParameters)) {
        if (Array.isArray(value) && value.length > 0) {
          out[`.${key}`] = value;
        }
      }
      return out;
    }
  },
  watch: {
    ...Watchers,
    title(title) {
      document.title = title;
    },
    catalogUrlFromVueX(url) {
      if (url) {
        // Load the root catalog data if not available (e.g. after page refresh or external access)
        this.$store.dispatch("load", { url, loadApi: true });
      }
    }
  },
  created() {
    // The handling of unwatch and this.$watch sequence below explictly attaches the watcher
    // for stateQueryParameters AFTER the router has navigated to the page, and AFTER 
    // the parseQuery method has been run which modifies the stateQueryParameters.
    // The updateUrlOnStateChange method causes navigation to happen with vue-router, so we
    // we don't want to happen on initial page render when the we're already at the right location
    let unwatch = null;
    this.$router.onReady(() => {
      this.parseQuery(this.$route);
      unwatch = this.$watch('stateQueryParameters', this.updateUrlOnStateChange, {deep: true});
    });

    // When we're navigating to a completely different STAC page (denoted by a different path)
    // we need to clear out out the stateQueryParameters (eg what tabs were open etc)
    this.$router.beforeEach((to, from, next) => {
      if (to.path !== from.path) {
        if (typeof unwatch === 'function') {
          unwatch();
        }
        unwatch = null;
        this.$store.commit('resetStateQueryParameters');
      }
      next();
    });

    this.$router.afterEach((to, from) => {
      if (to.path === from.path) {
        return;
      }
      this.parseQuery(to);
      unwatch = this.$watch('stateQueryParameters', this.updateUrlOnStateChange, {deep: true});
    });
  },
  mounted() {
    this.$root.$on('error', this.showError);
    setInterval(() => this.$store.dispatch('loadBackground', 3), 200);
  },
  methods: {
    parseQuery(route) {
      let privateFromHash = {};
      if (this.historyMode === 'history') {
        let uri = new URI(route.hash.replace(/^#/, ''));
        privateFromHash = uri.query(true);
      }
      let query = Object.assign({}, route.query, privateFromHash);
      let params = {};
      for(let key in query) {
        // Store all private query parameters (start with ~) and replace them in the shown URI
        if (key.startsWith('~')) {
          params.private = Utils.isObject(params.private) ? params.private : {};
          params.private[key.substr(1)] = query[key];
          delete query[key];
        }
        // Store all state related parameters (start with .)
        else if (key.startsWith('.')) {
          params.state = Utils.isObject(params.state) ? params.state : {};
          params.state[key.substr(1)] = query[key];
        }
        // All other parameters should be appended to the catalog requests
        else {
          params.request = Utils.isObject(params.request) ? params.request : {};
          params.request[key] = query[key];
        }
      }
      if (Utils.size(params) > 0) {
        this.$store.commit("queryParameters", params);
      }
      if (Utils.size(params.private) > 0) {
        this.$router.replace({
          ...route,
          query
        });
      }

    },
    updateUrlOnStateChange () {
      // Force vue-router to read some values as arrays
      for (const [key, value] of Object.entries(this.$route.query)) {
        if (Array.isArray(this.appStateAsParams[key]) && !(Array.isArray(value))) {
          this.$route.query[key] = [value];
        }
      }

      this.$router.replace({ query: this.appStateAsParams }).catch(error => {
        if (!VueRouter.isNavigationFailure(error, VueRouter.NavigationFailureType.duplicated)) {
          throw Error(error);
        }
      });
    },
    showError(error, message) {
      this.$store.commit('showGlobalError', {
        error, 
        message
      });
    },
    hideError() {
      this.$store.commit('showGlobalError', null);
    }
  }
};
</script>

<style lang="scss">
@import "./theme/variables.scss";
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';
@import "./theme/page.scss";
@import "./theme/custom.scss";
</style>