<template>
  <ul class="tree" v-b-visible="load">
    <li>
      <b-button v-if="pagination" size="sm" variant="light" :disabled="true">
        <b-icon-three-dots />
      </b-button>
      <template v-else-if="mayHaveChildren">
        <b-button size="sm" variant="light" @click="toggle">
          <b-icon-folder-minus v-if="expanded" />
          <b-icon-folder-plus v-else />
        </b-button>
      </template>
      <b-button v-else size="sm" variant="light" :disabled="true">
        <b-icon-file-earmark-richtext />
      </b-button>
      
      <b-button size="sm" variant="light" :class="{path: onPath || active}" :disabled="active || !to" :to="to">
        {{ title }}
      </b-button>

      <template v-if="expanded && mayHaveChildren">
        <ul v-if="loading" class="tree">
          <li><b-spinner label="Loading..." small /></li>
        </ul>
        <ul v-else-if="childs.length === 0" class="tree">
          <li>
            <b-button size="sm" variant="light" disabled>
              No children available.
            </b-button>
          </li>
        </ul>
        <template v-else>
          <Tree v-for="(child, i) in shownChilds" :key="i" :item="child" :parent="stac" :path="path" />
          <b-button class="show-more" v-if="hasMore" @click="showMore" variant="light" v-b-visible.200="showMore">Show more...</b-button>
        </template>
      </template>
    </li>
  </ul>
</template>

<script>
import { BIconFileEarmarkRichtext, BIconFolderMinus, BIconFolderPlus, BIconThreeDots } from "bootstrap-vue";
import { mapGetters, mapState } from 'vuex';
import Utils from '../utils';
import STAC from '../models/stac';

export default {
  name: 'Tree',
  components: {
    BIconFileEarmarkRichtext,
    BIconFolderMinus,
    BIconFolderPlus,
    BIconThreeDots
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    parent: {
      type: Object,
      default: null
    },
    path: {
      type: Array,
      default: () => ([])
    }
  },
  data() {
    return {
      expanded: false,
      loading: false,
      chunk: 1,
      childs: []
    };
  },
  computed: {
    ...mapState(['data']),
    ...mapGetters(['getStac']),
    stac() {
      if (this.pagination) {
        return null;
      }
      else if (this.item instanceof STAC) {
        let stac = this.getStac(this.item.getAbsoluteUrl());
        if (!this.loading && stac) {
          return stac;
        }
        else {
          return this.item;
        }
      }
      else {
        return this.getStac(this.link);
      }
    },
    link() {
      if (this.pagination) {
        if (this.parent) {
          return this.parent.getAbsoluteUrl();
        }
        else {
          return null;
        }
      }
      else if (Utils.isObject(this.item) && typeof this.item.href === 'string') {
        if (this.parent) {
          return Utils.toAbsolute(this.item.href, this.parent.getAbsoluteUrl());
        }
        else {
          return this.item.href;
        }
      }
      return null;
    },
    mayHaveChildren() {
      if (this.item instanceof STAC) {
        return this.item.isCatalogLike();
      }
      else if (this.link) {
        return this.item.rel !== 'item';
      }
      return false;
    },
    to() {
      if (this.pagination) {
        if (this.parent && this.parent.getAbsoluteUrl() !== this.data.getAbsoluteUrl()) {
          return this.parent.getBrowserPath();
        }
        else {
          return null;
        }
      }
      else if (this.stac instanceof STAC) {
        return this.stac.getBrowserPath();
      }
      return null;
    },
    title() {
      if (this.pagination) {
        return 'more pages available for Collection';
      }
      return STAC.getDisplayTitle([this.item, this.stac]);
    },
    hasMore() {
      return this.childs.length > this.shownChilds.length;
    },
    shownChilds() {
      return this.childs.slice(0, this.chunk * 50);
    },
    onPath() {
      if (!Array.isArray(this.path) || !this.stac) {
        return false;
      }
      return this.path.includes(this.stac);
    },
    active() {
      return this.stac === this.data;
    },
    pagination() {
      return ['next', 'prev', 'previous'].includes(this.item.rel);
    }
  },
  watch: {
    onPath: {
      immediate: true,
      handler() {
        if (this.onPath) {
          this.expanded = true;
        }
      }
    },
    stac: {
      immediate: true,
      handler(newStac, oldStac) {
        if (newStac instanceof STAC) {
          newStac.setApiDataListener('tree', () => this.updateChilds());
        }
        if (oldStac instanceof STAC) {
          oldStac.setApiDataListener('tree');
        }
        this.updateChilds();
      }
    }
  },
  methods: {
    updateChilds() {
      if (this.stac instanceof STAC) {
        this.childs = this.stac.getChildren();
      }
      else {
        this.childs = [];
      }
    },
    showMore() {
      this.chunk++;
    },
    load(visible) {
      if (!this.stac && this.link && !this.pagination) {
        this.$store.commit(visible ? 'queue' : 'unqueue', this.link);
      }
    },
    async toggle() {
      this.expanded = !this.expanded;
      if (this.expanded && !this.pagination) {
        this.loading = true;
        let url = this.item instanceof STAC ? this.item.getAbsoluteUrl() : this.item.href;
        await this.$store.dispatch("load", { url, loadApi: true });
        this.loading = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.tree {
  list-style-type: none;
  margin: 0;
  padding: 0;

  > li {
    white-space: nowrap;
  }

  .path {
    font-weight: bold;
  }

  .tree {
    margin-left: 1.5em;
  }

  .show-more {
    width: calc(100% - 1.5em);
    box-sizing: border-box;
    margin-left: 1.5em;
  }
}
</style>