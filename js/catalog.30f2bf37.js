(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[701,160],{160:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return b}});var s=function(){var t=this,e=t._self._c;return e("b-card",{directives:[{name:"b-visible",rawName:"v-b-visible.200",value:t.load,expression:"load",modifiers:{200:!0}}],class:t.classes,attrs:{"no-body":"","img-right":t.isList}},[t.hasImage?e("b-card-img",{staticClass:"thumbnail",attrs:{src:t.thumbnail.href,alt:t.thumbnail.title,crossorigin:t.crossOriginMedia,right:t.isList},on:{error:t.hideBrokenImg}}):t._e(),e("b-card-body",[e("b-card-title",[e("StacLink",{staticClass:"stretched-link",attrs:{data:[t.data,t.catalog]}})],1),t.data&&(t.data.description||t.data.deprecated)?e("b-card-text",{staticClass:"intro"},[t.data.deprecated?e("b-badge",{staticClass:"deprecated",attrs:{variant:"warning"}},[t._v("Deprecated")]):t._e(),t._v(" "+t._s(t._f("stripCommonmark")(t.data.description))+" ")],1):t._e(),t.temporalExtent?e("b-card-text",{staticClass:"datetime"},[e("span",{domProps:{innerHTML:t._s(t.temporalExtent)}})]):t._e()],1)],1)},i=[],r=a(629),n=a(3636),o=a(9898),l=a(6525),c=a.n(l),d=a(5834),h=a(5108),m={name:"Catalog",components:{StacLink:n["default"]},filters:{stripCommonmark(t){return c()(t)}},props:{catalog:{type:Object,required:!0},showThumbnail:{type:Boolean,default:!0}},data(){return{thumbnailShown:!1}},computed:{...(0,r.rn)(["crossOriginMedia","cardViewMode"]),...(0,r.Se)(["getStac"]),classes(){let t=["catalog-card"];return this.data||t.push("queued"),this.data&&this.data.deprecated&&t.push("deprecated"),this.hasImage&&t.push("has-thumbnail"),this.temporalExtent&&t.push("has-extent"),t},isList(){return"list"===this.cardViewMode},hasImage(){return this.showThumbnail&&this.thumbnail&&this.thumbnailShown},data(){return this.catalog instanceof o.Z?this.catalog:this.getStac(this.catalog.href)},thumbnail(){if(this.data){let t=this.data.getThumbnails(!0,"thumbnail");if(t.length>0)return t[0]}return null},temporalExtent(){var t,e,a;if(null!==(t=this.data)&&void 0!==t&&t.isCollection()&&(null===(e=this.data.extent)||void 0===e||null===(a=e.temporal)||void 0===a?void 0:a.interval.length)>0){let t=this.data.extent.temporal.interval[0];if(Array.isArray(t)&&("string"===typeof t[0]||"string"===typeof t[1]))return(0,d.formatTemporalExtent)(this.data.extent.temporal.interval[0],!0)}return null}},methods:{hideBrokenImg(t){h.log(`Hiding catalog thumbnail for ${t.srcElement.src} as it can't be loaded.`),this.thumbnailShown=null},load(t){t&&null!==this.thumbnailShown&&(this.thumbnailShown=!0),this.catalog instanceof o.Z||this.$store.commit(t?"queue":"unqueue",this.catalog.href)}}},p=m,u=a(1001),g=(0,u.Z)(p,s,i,!1,null,null,null),b=g.exports},5132:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return u}});var s=function(){var t=this,e=t._self._c;return e("b-card",{directives:[{name:"b-visible",rawName:"v-b-visible.200",value:t.load,expression:"load",modifiers:{200:!0}}],staticClass:"item-card",class:{queued:!t.data,deprecated:t.isDeprecated},attrs:{"no-body":""}},[t.thumbnail&&t.thumbnailShown?e("b-card-img",{staticClass:"thumbnail",attrs:{src:t.thumbnail.href,alt:t.thumbnail.title,crossorigin:t.crossOriginMedia},on:{error:t.hideBrokenImg}}):t._e(),e("b-card-body",[e("b-card-title",[e("StacLink",{staticClass:"stretched-link",attrs:{data:[t.data,t.item]}})],1),e("b-card-text",[e("small",{staticClass:"text-muted"},[t.extent?[t._v(t._s(t._f("formatTemporalExtent")(t.extent)))]:t.data&&t.data.properties.datetime?[t._v(t._s(t._f("formatTimestamp")(t.data.properties.datetime)))]:[t._v("No time given")]],2)]),t.fileFormats.length>0||t.isDeprecated?e("b-card-text",[t._l(t.fileFormats,(function(a){return e("b-badge",{key:a,staticClass:"mr-1 mt-1 fileformat",attrs:{variant:"secondary"}},[t._v(t._s(t._f("formatMediaType")(a)))])})),t.isDeprecated?e("b-badge",{staticClass:"mr-1 mt-1 deprecated",attrs:{variant:"warning"}},[t._v("Deprecated")]):t._e()],2):t._e()],1)],1)},i=[],r=a(629),n=a(3636),o=a(9898),l=a(5834),c=a(5108),d={name:"Item",components:{StacLink:n["default"]},filters:{formatMediaType:l.formatMediaType,formatTemporalExtent:l.formatTemporalExtent,formatTimestamp:l.formatTimestamp},props:{item:{type:Object,required:!0}},data(){return{thumbnailShown:!1}},computed:{...(0,r.rn)(["crossOriginMedia"]),...(0,r.Se)(["getStac"]),data(){return this.item instanceof o.Z?this.item:this.getStac(this.item.href)},thumbnail(){if(this.data){let t=this.data.getThumbnails(!0,"thumbnail");if(t.length>0)return t[0]}return{href:null,title:""}},extent(){return this.data&&(this.data.properties.start_datetime||this.data.properties.end_datetime)?[this.data.properties.start_datetime,this.data.properties.end_datetime]:null},fileFormats(){return this.data?Object.values(this.data.assets).filter((t=>Array.isArray(t.roles)&&t.roles.includes("data")&&"string"===typeof t.type)).map((t=>t.type)).filter(((t,e,a)=>a.indexOf(t)===e)):[]},isDeprecated(){return this.data instanceof o.Z&&Boolean(this.data.properties.deprecated)}},methods:{hideBrokenImg(t){c.log(`Hiding item thumbnail for ${t.srcElement.src} as it can't be loaded.`),this.thumbnailShown=null},load(t){t&&null!==this.thumbnailShown&&(this.thumbnailShown=!0),this.item instanceof o.Z||this.$store.commit(t?"queue":"unqueue",this.item.href)}}},h=d,m=a(1001),p=(0,m.Z)(h,s,i,!1,null,null,null),u=p.exports},5680:function(t,e,a){"use strict";a.d(e,{Z:function(){return y}});var s=function(){var t=this,e=t._self._c;return e("section",{staticClass:"items mb-4"},[e("h2",[e("span",{staticClass:"title"},[t._v("Items")]),t.api?t._e():e("b-badge",{attrs:{pill:"",variant:"dark ml-2"}},[t._v(t._s(t.items.length))]),t.api?t._e():e("SortButtons",{staticClass:"ml-4",model:{value:t.sort,callback:function(e){t.sort=e},expression:"sort"}})],1),t.showPagination?e("Pagination",{ref:"topPagination",attrs:{pagination:t.pagination,placement:"top"},on:{paginate:t.paginate}}):t._e(),t.allowFilter?[t.api?e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.itemFilter",modifiers:{itemFilter:!0}}],staticClass:"mb-4 mt-2",class:{"ml-3":t.showPagination},attrs:{pressed:t.filtersOpen,variant:"outline-primary"}},[e("b-icon-search"),t._v(" Filter ")],1):t._e(),e("b-collapse",{attrs:{id:"itemFilter"},model:{value:t.filtersOpen,callback:function(e){t.filtersOpen=e},expression:"filtersOpen"}},[t.filtersOpen?e("ItemFilter",t._b({attrs:{stac:t.stac,value:t.filters,collectionOnly:!0},on:{input:t.emitFilter}},"ItemFilter",t.filterComponentProps,!1)):t._e()],1)]:t._e(),e("section",{staticClass:"list"},[t.loading?e("Loading",{attrs:{fill:"",top:""}}):t._e(),t.chunkedItems.length>0?e("b-card-group",{attrs:{columns:""}},t._l(t.chunkedItems,(function(t){return e("Item",{key:t.href,attrs:{item:t}})})),1):e("b-alert",{attrs:{variant:t.hasFilters?"warning":"info",show:""}},[t.hasFilters?[t._v("No items found for the given filters.")]:[t._v("No items available for this collection.")]],2)],1),t.showPagination?e("Pagination",{attrs:{pagination:t.pagination},on:{paginate:t.paginate}}):t.hasMore?e("b-button",{directives:[{name:"b-visible",rawName:"v-b-visible.200",value:t.showMore,expression:"showMore",modifiers:{200:!0}}],attrs:{variant:"primary"},on:{click:t.showMore}},[t._v("Show more...")]):t._e()],2)},i=[],r=a(5132),n=a(7024),o=function(){var t=this,e=t._self._c;return e("b-button-group",{class:t.classes},[e("b-button",{attrs:{disabled:!t.pagination.first,variant:"primary"},on:{click:function(e){return t.paginate(t.pagination.first)}}},[t._v("« First")]),e("b-button",{attrs:{disabled:!t.pagination.prev,variant:"primary"},on:{click:function(e){return t.paginate(t.pagination.prev)}}},[t._v("‹ Previous")]),e("b-button",{attrs:{disabled:!t.pagination.next,variant:"primary"},on:{click:function(e){return t.paginate(t.pagination.next)}}},[t._v("Next ›")]),t.pagination.last?e("b-button",{attrs:{variant:"primary"},on:{click:function(e){return t.paginate(t.pagination.last)}}},[t._v("Last »")]):t._e()],1)},l=[],c={name:"Pagination",props:{pagination:{type:Object,default:()=>({})},placement:{type:String,default:"bottom"}},computed:{classes(){return"top"===this.placement?"mb-4 mt-2":"mb-2 mt-2"}},methods:{paginate(t){this.$emit("paginate",t,this.placement)}}},d=c,h=a(1001),m=(0,h.Z)(d,o,l,!1,null,null,null),p=m.exports,u=a(1688),g=a(8019),b=a(8661),f=a(9898),v=a(2510),_={name:"Items",components:{BCollapse:u.k,BIconSearch:g.Lln,Item:r["default"],ItemFilter:()=>Promise.all([a.e(353),a.e(449),a.e(981),a.e(907),a.e(58)]).then(a.bind(a,9907)),Loading:n.Z,Pagination:p,SortButtons:()=>a.e(313).then(a.bind(a,2313))},mixins:[(0,v.ZP)(!0)],props:{items:{type:Array,required:!0},loading:{type:Boolean,default:!1},stac:{type:Object,required:!0},api:{type:Boolean,default:!1},allowFilter:{type:Boolean,default:!0},apiFilters:{type:Object,default:()=>({})},pagination:{type:Object,default:()=>({})},chunkSize:{type:Number,default:90}},data(){return{shownItems:this.chunkSize,filters:this.apiFilters,filtersOpen:!1,sort:0}},computed:{hasMore(){return this.items.length>this.shownItems},hasFilters(){return Object.values(this.apiFilters).filter((t=>!(null===t||0===b.ZP.size(t)))).length>1},chunkedItems(){let t=this.items;return 0!==this.sort&&(t=t.slice(0).sort(((t,e)=>f.Z.getDisplayTitle(t).localeCompare(f.Z.getDisplayTitle(e)))),-1===this.sort&&(t=t.reverse())),!this.api&&this.items.length>this.chunkSize?t.slice(0,this.shownItems):t},showPagination(){if(this.api){if(this.hasFilters)return!0;if(this.items.length>0)return Object.values(this.pagination).some((t=>!!t))}return!1}},methods:{emitFilter(t,e){this.$emit("filterItems",t,e)},showMore(){this.shownItems+=this.chunkSize},paginate(t,e){"bottom"===e&&this.$refs.topPagination&&b.ZP.scrollTo(this.$refs.topPagination.$el),this.$emit("paginate",t)}}},w=_,C=(0,h.Z)(w,s,i,!1,null,"14862149",null),y=C.exports},7128:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return E}});var s=function(){var t=this,e=t._self._c;return e("div",{key:t.data.id,class:{cc:!0,[t.data.type.toLowerCase()]:!0,mixed:t.hasCatalogs&&t.hasItems,empty:!t.hasCatalogs&&!t.hasItems}},[e("b-row",[e("b-col",{staticClass:"meta"},[e("section",{staticClass:"intro"},[e("h2",[t._v("Description")]),t.data.deprecated?e("DeprecationNotice",{attrs:{data:t.data}}):t._e(),t.data["anon:warning"]?e("AnonymizedNotice",{attrs:{warning:t.data["anon:warning"]}}):t._e(),t.data.description?e("ReadMore",{attrs:{lines:10}},[e("Description",{attrs:{description:t.data.description}})],1):t._e(),Array.isArray(t.data.keywords)&&t.data.keywords.length>0?e("Keywords",{attrs:{keywords:t.data.keywords}}):t._e(),t.isCollection?e("section",{staticClass:"metadata mb-4"},[t.licenses?e("b-row",[e("b-col",{staticClass:"label",attrs:{md:"4"}},[t._v("License")]),e("b-col",{staticClass:"value",attrs:{md:"8"},domProps:{innerHTML:t._s(t.licenses)}})],1):t._e(),t.temporalExtents?e("b-row",[e("b-col",{staticClass:"label",attrs:{md:"4"}},[t._v("Temporal Extents")]),e("b-col",{staticClass:"value",attrs:{md:"8"},domProps:{innerHTML:t._s(t.temporalExtents)}})],1):t._e()],1):t._e()],1),t.isCollection||t.thumbnails.length>0?e("section",{staticClass:"mb-4"},[e("b-card",{staticClass:"maps-preview",attrs:{"no-body":""}},[e("b-tabs",{ref:"tabs",attrs:{pills:"",card:"",vertical:"",end:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[t.isCollection?e("b-tab",{attrs:{title:"Map","no-body":""}},[e("Map",{attrs:{stac:t.data,stacLayerData:t.catalogAsFc},on:{mapClicked:t.mapClicked,dataChanged:t.dataChanged}})],1):t._e(),t.thumbnails.length>0?e("b-tab",{attrs:{title:"Preview","no-body":""}},[e("Thumbnails",{attrs:{thumbnails:t.thumbnails}})],1):t._e()],1)],1)],1):t._e(),t.hasAssets?e("Assets",{attrs:{assets:t.assets,context:t.data,shown:t.shownAssets},on:{showAsset:t.showAsset}}):t._e(),t.hasItemAssets&&!t.hasItems?e("Assets",{attrs:{assets:t.data.item_assets,definition:!0}}):t._e(),t.hasProviders?e("Providers",{attrs:{providers:t.data.providers}}):t._e(),e("Metadata",{staticClass:"mb-4",attrs:{title:"Metadata",type:t.data.type,data:t.data,ignoreFields:t.ignoredMetadataFields}}),t.additionalLinks.length>0?e("Links",{attrs:{title:"Additional resources",links:t.additionalLinks}}):t._e()],1),t.hasCatalogs?e("b-col",{staticClass:"catalogs-container"},[e("Catalogs",{attrs:{catalogs:t.catalogs,hasMore:t.hasMoreCollections},on:{loadMore:t.loadMoreCollections}})],1):t._e(),t.hasItems?e("b-col",{staticClass:"items-container"},[e("Items",{attrs:{stac:t.data,items:t.items,api:t.isApi,apiFilters:t.apiItemsFilter,pagination:t.itemPages,loading:t.apiItemsLoading},on:{paginate:t.paginateItems,filterItems:t.filterItems}}),t.hasItemAssets?e("Assets",{attrs:{assets:t.data.item_assets,definition:!0}}):t._e()],1):t._e()],1)],1)},i=[],r=a(629),n=function(){var t=this,e=t._self._c;return e("section",{staticClass:"catalogs mb-4"},[e("h2",[e("span",{staticClass:"title"},[t._v("Catalogs")]),t.hasMore?t._e():e("b-badge",{attrs:{pill:"",variant:"dark ml-2"}},[t._v(t._s(t.catalogs.length))]),e("ViewButtons",{staticClass:"ml-4",model:{value:t.view,callback:function(e){t.view=e},expression:"view"}}),t.hasMore?t._e():e("SortButtons",{staticClass:"ml-2",model:{value:t.sort,callback:function(e){t.sort=e},expression:"sort"}})],1),t.hasMore?t._e():e("SearchBox",{staticClass:"mt-3 mb-2",attrs:{placeholder:"Filter catalogs by title"},model:{value:t.searchTerm,callback:function(e){t.searchTerm=e},expression:"searchTerm"}}),t.searchTerm&&0===t.catalogView.length?e("b-alert",{attrs:{variant:"warning",show:""}},[t._v("No catalogs found for the given search term.")]):t._e(),e(t.cardsComponent,t._b({tag:"component"},"component",t.cardsComponentProps,!1),t._l(t.catalogView,(function(t){return e("Catalog",{key:t.href,attrs:{catalog:t}})})),1),t.hasMore?e("b-button",{directives:[{name:"b-visible",rawName:"v-b-visible.200",value:t.loadMore,expression:"loadMore",modifiers:{200:!0}}],attrs:{variant:"primary"},on:{click:t.loadMore}},[t._v("Load more...")]):t._e()],1)},o=[],l=a(160),c=a(9898),d=function(){var t=this,e=t._self._c;return e("b-button-group",{attrs:{title:"Sort",size:"sm"}},[e("b-button",{attrs:{title:"Show as tiles",variant:"outline-primary",pressed:"cards"===t.value},on:{click:function(e){return t.toggle("cards")}}},[e("b-icon-bricks"),t._v(" "),e("span",{staticClass:"button-label"},[t._v("Tiles")])],1),e("b-button",{attrs:{title:"Show as list",variant:"outline-primary",pressed:"list"===t.value},on:{click:function(e){return t.toggle("list")}}},[e("b-icon-list-task"),t._v(" "),e("span",{staticClass:"button-label"},[t._v("List")])],1)],1)},h=[],m=a(8019),p={id:"SortButtons",components:{BIconBricks:m.S3S,BIconListTask:m.WPR},props:{value:{type:String,default:"cards"}},methods:{toggle(t){this.value!==t&&this.$emit("input",t)}}},u=p,g=a(1001),b=(0,g.Z)(u,d,h,!1,null,null,null),f=b.exports,v={components:{ViewButtons:f},computed:{cardsComponent(){return"list"===this.view?"div":"b-card-group"},cardsComponentProps(){return"list"===this.view?{class:["card-list"]}:{columns:!0}},view:{get(){return this.$store.state.cardViewMode},set(t){this.$store.commit("config",{cardViewMode:t})}}}},_=a(8661),w={name:"Catalogs",components:{Catalog:l["default"],SearchBox:()=>Promise.all([a.e(353),a.e(589)]).then(a.bind(a,4589)),SortButtons:()=>a.e(313).then(a.bind(a,2313))},mixins:[v],props:{catalogs:{type:Array,required:!0},hasMore:{type:Boolean,default:!1}},data(){return{searchTerm:"",sort:0}},computed:{...(0,r.Se)(["getStac"]),catalogView(){if(this.hasMore)return this.catalogs;let t=this.catalogs.map((t=>{if(!(t instanceof c.Z)){let e=this.getStac(t.href);if(e)return e}return t}));return this.searchTerm&&(t=t.filter((t=>{let e=[t.title];return t instanceof c.Z?(e.push(t.id),Array.isArray(t.keywords)&&(e=e.concat(t.keywords))):e.push(t.href),_.ZP.search(this.searchTerm,e)}))),this.hasMore||0===this.sort||(t=t.slice(0).sort(((t,e)=>c.Z.getDisplayTitle(t).localeCompare(c.Z.getDisplayTitle(e)))),-1===this.sort&&(t=t.reverse())),t}},methods:{loadMore(t=!0){t&&this.$emit("loadMore")}}},C=w,y=(0,g.Z)(C,n,o,!1,null,"765af7b0",null),k=y.exports,x=a(8346),I=a(5680),S=a(6924),M=a(1970),T=a(8907),L=a.n(T),P=a(8028),A=a(5834),F=a(2996),$=a(1015);const Z="Sorry, can't load the list of items.";var B={name:"Catalog",components:{AnonymizedNotice:()=>a.e(596).then(a.bind(a,4596)),Assets:()=>a.e(740).then(a.bind(a,740)),BTabs:F.M,BTab:$.L,Catalogs:k,DeprecationNotice:()=>a.e(920).then(a.bind(a,8920)),Description:x.Z,Items:I.Z,Keywords:()=>a.e(333).then(a.bind(a,3333)),Links:S.Z,Map:()=>a.e(597).then(a.bind(a,5597)),Metadata:M.Z,Providers:()=>a.e(565).then(a.bind(a,9565)),ReadMore:L(),Thumbnails:()=>a.e(447).then(a.bind(a,7447))},mixins:[P.Z],data(){return{ignoredMetadataFields:["stac_version","stac_extensions","id","type","title","description","keywords","providers","license","extent","summaries","links","assets","item_assets","proj:bbox","proj:geometry","conformsTo","deprecated","anon:warning"]}},computed:{...(0,r.rn)(["data","url","apiItems","apiItemsLink","apiItemsPagination","apiItemsFilter","apiItemsLoading"]),...(0,r.Se)(["additionalLinks","catalogs","isCollection","items","hasMoreCollections"]),licenses(){return this.isCollection&&this.data.license?(0,A.formatLicense)(this.data.license,null,null,this.data):null},hasProviders(){return this.isCollection&&Array.isArray(this.data.providers)&&this.data.providers.length>0},temporalExtents(){if(this.data&&this.data.isCollection()&&this.data.extent.temporal.interval.length>0){let t=this.data.extent.temporal.interval;return t.length>1&&(t=t.slice(1)),(0,A.formatTemporalExtents)(t)}return null},hasItemAssets(){var t;return _.ZP.size(null===(t=this.data)||void 0===t?void 0:t.item_assets)>0},itemPages(){let t=Object.assign({},this.apiItemsPagination);return!t.first&&this.data&&this.apiItemsLink&&"items"!==this.apiItemsLink.rel&&(t.first=_.ZP.addFiltersToLink(this.data.getApiItemsLink(),this.apiItemsFilter)),t},isApi(){return Boolean(this.apiItemsLink)},hasItems(){return this.items.length>0||this.isApi},hasCatalogs(){return this.catalogs.length>0},catalogAsFc(){return{type:"FeatureCollection",features:this.items}}},methods:{loadMoreCollections(){this.$store.dispatch("loadNextApiCollections",{show:!0})},async paginateItems(t){try{await this.$store.dispatch("loadApiItems",{link:t,show:!0})}catch(e){this.$root.$emit("error",e,Z)}},async filterItems(t,e){e&&this.$store.commit("resetApiItems");try{await this.$store.dispatch("loadApiItems",{link:this.apiItemsLink,show:!0,filters:t})}catch(a){this.$root.$emit("error",a,e?Z:"Sorry, can't load the filtered list of items.")}},mapClicked(){}}},O=B,q=(0,g.Z)(O,s,i,!1,null,null,null),E=q.exports},6525:function(t,e,a){var s=a(5108);t.exports=function(t,e){e=e||{},e.listUnicodeChar=!!e.hasOwnProperty("listUnicodeChar")&&e.listUnicodeChar,e.stripListLeaders=!e.hasOwnProperty("stripListLeaders")||e.stripListLeaders,e.gfm=!e.hasOwnProperty("gfm")||e.gfm,e.useImgAltText=!e.hasOwnProperty("useImgAltText")||e.useImgAltText;var a=t||"";a=a.replace(/^(-\s*?|\*\s*?|_\s*?){3,}\s*$/gm,"");try{e.stripListLeaders&&(a=e.listUnicodeChar?a.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm,e.listUnicodeChar+" $1"):a.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm,"$1")),e.gfm&&(a=a.replace(/\n={2,}/g,"\n").replace(/~{3}.*\n/g,"").replace(/~~/g,"").replace(/`{3}.*\n/g,"")),a=a.replace(/<[^>]*>/g,"").replace(/^[=\-]{2,}\s*$/g,"").replace(/\[\^.+?\](\: .*?$)?/g,"").replace(/\s{0,2}\[.*?\]: .*?$/g,"").replace(/\!\[(.*?)\][\[\(].*?[\]\)]/g,e.useImgAltText?"$1":"").replace(/\[(.*?)\][\[\(].*?[\]\)]/g,"$1").replace(/^\s{0,3}>\s?/g,"").replace(/^\s{1,2}\[(.*?)\]: (\S+)( ".*?")?\s*$/g,"").replace(/^(\n)?\s{0,}#{1,6}\s+| {0,}(\n)?\s{0,}#{0,} {0,}(\n)?\s{0,}$/gm,"$1$2$3").replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g,"$2").replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g,"$2").replace(/(`{3,})(.*?)\1/gm,"$2").replace(/`(.+?)`/g,"$1").replace(/\n{2,}/g,"\n\n")}catch(i){return s.error(i),t}return a}},2510:function(t,e,a){"use strict";var s=a(629);const i="http://www.opengis.net/spec/ogcapi-features-1/1.*/conf/core",r="http://www.opengis.net/spec/cql2/1.*/conf/cql2-text",n="http://www.opengis.net/spec/cql2/1.*/conf/cql2-json",o="https://api.stacspec.org/v1.*/item-search#sort",l="https://api.stacspec.org/v1.*/ogcapi-features#sort",c="https://api.stacspec.org/v1.*/item-search#filter*",d="http://www.opengis.net/spec/ogcapi-features-3/1.*/*/features-filter";e["ZP"]=t=>({computed:{...(0,s.Se)(["supportsConformance"]),canSort(){return this.supportsConformance(t?l:o)},canFilterExtents(){return!t||this.supportsConformance(i)},canFilterCql(){return this.supportsConformance(t?d:c)&&this.cqlModes.includes("Text")},cqlModes(){let t=[];return this.supportsConformance(r)&&t.push("Text"),this.supportsConformance(n)&&t.push("JSON"),t},filterComponentProps(){return{canSort:this.canSort,canFilterCql:this.canFilterCql,canFilterExtents:this.canFilterExtents}}}})}}]);
//# sourceMappingURL=catalog.30f2bf37.js.map