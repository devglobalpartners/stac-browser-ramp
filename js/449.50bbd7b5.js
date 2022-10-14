"use strict";(self["webpackChunk_devglobalpartners_stac_browser_ramp"]=self["webpackChunk_devglobalpartners_stac_browser_ramp"]||[]).push([[449],{6449:function(t,e,i){i.d(e,{x:function(){return Q}});var r=i(4689),n=i(3935),l=i(2299),a=i(824),o=i(494),s=i(1572),c=i(9968),u=i(4679),p=i(1440),d=i(8265),b=i(3284),f=i(3954),v=i(7040),h=i(451),g=i(5505),y=i(3727),m=i(8280),C=i(725),P=i(6310),k=i(1666),w=i(2307),N=i(144),O=i(9558),_=(0,h.y2)({ariaLive:(0,h.pi)(l.N0),forceShow:(0,h.pi)(l.U5,!1),id:(0,h.pi)(l.N0),role:(0,h.pi)(l.N0),state:(0,h.pi)(l.U5,null),tag:(0,h.pi)(l.N0,"div"),tooltip:(0,h.pi)(l.U5,!1)},r.rc),j=N.ZP.extend({name:r.rc,functional:!0,props:_,render:function(t,e){var i=e.props,r=e.data,n=e.children,l=i.tooltip,a=i.ariaLive,o=!0===i.forceShow||!0===i.state;return t(i.tag,(0,O.b)(r,{class:{"d-block":o,"valid-feedback":!l,"valid-tooltip":l},attrs:{id:i.id||null,role:i.role||null,"aria-live":a||null,"aria-atomic":a?"true":null}}),n)}});function x(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function A(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?x(Object(i),!0).forEach((function(e){S(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):x(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function S(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var U=["input","select","textarea"],D=U.map((function(t){return"".concat(t,":not([disabled])")})).join(),F=[].concat(U,["a","button","label"]),L=function(){return(0,h.y2)((0,v.GE)(A(A(A(A({},y.N),g.N),(0,c.QC)().reduce((function(t,e){return t[(0,h.wv)(e,"contentCols")]=(0,h.pi)(l.jy),t[(0,h.wv)(e,"labelAlign")]=(0,h.pi)(l.N0),t[(0,h.wv)(e,"labelCols")]=(0,h.pi)(l.jy),t}),(0,v.Ue)(null))),{},{description:(0,h.pi)(l.N0),disabled:(0,h.pi)(l.U5,!1),feedbackAriaLive:(0,h.pi)(l.N0,"assertive"),invalidFeedback:(0,h.pi)(l.N0),label:(0,h.pi)(l.N0),labelClass:(0,h.pi)(l.wA),labelFor:(0,h.pi)(l.N0),labelSize:(0,h.pi)(l.N0),labelSrOnly:(0,h.pi)(l.U5,!1),tooltip:(0,h.pi)(l.U5,!1),validFeedback:(0,h.pi)(l.N0),validated:(0,h.pi)(l.U5,!1)})),r.te)},Q={name:r.te,mixins:[y.t,g.J,m.Z],get props(){return delete this.props,this.props=L()},data:function(){return{ariaDescribedby:null}},computed:{contentColProps:function(){return this.getColProps(this.$props,"content")},labelAlignClasses:function(){return this.getAlignClasses(this.$props,"label")},labelColProps:function(){return this.getColProps(this.$props,"label")},isHorizontal:function(){return(0,v.XP)(this.contentColProps).length>0||(0,v.XP)(this.labelColProps).length>0}},watch:{ariaDescribedby:function(t,e){t!==e&&this.updateAriaDescribedby(t,e)}},mounted:function(){var t=this;this.$nextTick((function(){t.updateAriaDescribedby(t.ariaDescribedby)}))},methods:{getAlignClasses:function(t,e){return(0,c.QC)().reduce((function(i,r){var n=t[(0,h.wv)(r,"".concat(e,"Align"))]||null;return n&&i.push(["text",r,n].filter(d.y).join("-")),i}),[])},getColProps:function(t,e){return(0,c.QC)().reduce((function(i,r){var n=t[(0,h.wv)(r,"".concat(e,"Cols"))];return n=""===n||(n||!1),(0,b.jn)(n)||"auto"===n||(n=(0,f.Z3)(n,0),n=n>0&&n),n&&(i[r||((0,b.jn)(n)?"col":"cols")]=n),i}),{})},updateAriaDescribedby:function(t,e){var i=this.labelFor;if(n.Qg&&i){var r=(0,p.Ys)("#".concat((0,u.Q)(i)),this.$refs.content);if(r){var l="aria-describedby",o=(t||"").split(a.Qf),c=(e||"").split(a.Qf),b=((0,p.UK)(r,l)||"").split(a.Qf).filter((function(t){return!(0,s.kI)(c,t)})).concat(o).filter((function(t,e,i){return i.indexOf(t)===e})).filter(d.y).join(" ").trim();b?(0,p.fi)(r,l,b):(0,p.uV)(r,l)}}},onLegendClick:function(t){if(!this.labelFor){var e=t.target,i=e?e.tagName:"";if(-1===F.indexOf(i)){var r=(0,p.a8)(D,this.$refs.content).filter(p.pn);1===r.length&&(0,p.KS)(r[0])}}}},render:function(t){var e=this.computedState,i=this.feedbackAriaLive,r=this.isHorizontal,n=this.labelFor,l=this.normalizeSlot,a=this.safeId,s=this.tooltip,c=a(),u=!n,p=t(),b=l(o.gN)||this.label,f=b?a("_BV_label_"):null;if(b||r){var v=this.labelSize,h=this.labelColProps,g=u?"legend":"label";this.labelSrOnly?(b&&(p=t(g,{class:"sr-only",attrs:{id:f,for:n||null}},[b])),p=t(r?C.l:"div",{props:r?h:{}},[p])):p=t(r?C.l:g,{on:u?{click:this.onLegendClick}:{},props:r?A(A({},h),{},{tag:g}):{},attrs:{id:f,for:n||null,tabindex:u?"-1":null},class:[u?"bv-no-focus-ring":"",r||u?"col-form-label":"",!r&&u?"pt-0":"",r||u?"":"d-block",v?"col-form-label-".concat(v):"",this.labelAlignClasses,this.labelClass]},[b])}var y=t(),m=l(o.Cn)||this.invalidFeedback,N=m?a("_BV_feedback_invalid_"):null;m&&(y=t(w.h,{props:{ariaLive:i,id:N,state:e,tooltip:s},attrs:{tabindex:m?"-1":null}},[m]));var O=t(),_=l(o.k8)||this.validFeedback,x=_?a("_BV_feedback_valid_"):null;_&&(O=t(j,{props:{ariaLive:i,id:x,state:e,tooltip:s},attrs:{tabindex:_?"-1":null}},[_]));var S=t(),U=l(o.iC)||this.description,D=U?a("_BV_description_"):null;U&&(S=t(k.m,{attrs:{id:D,tabindex:"-1"}},[U]));var F=this.ariaDescribedby=[D,!1===e?N:null,!0===e?x:null].filter(d.y).join(" ")||null,L=t(r?C.l:"div",{props:r?this.contentColProps:{},ref:"content"},[l(o.Pq,{ariaDescribedby:F,descriptionId:D,id:c,labelId:f})||t(),y,O,S]);return t(u?"fieldset":r?P.d:"div",{staticClass:"form-group",class:[{"was-validated":this.validated},this.stateClass],attrs:{id:c,disabled:u?this.disabled:null,role:u?null:"group","aria-invalid":this.computedAriaInvalid,"aria-labelledby":u&&r?f:null}},r&&u?[t(P.d,[p,L])]:[p,L])}}},2307:function(t,e,i){i.d(e,{h:function(){return c}});var r=i(144),n=i(9558),l=i(4689),a=i(2299),o=i(451),s=(0,o.y2)({ariaLive:(0,o.pi)(a.N0),forceShow:(0,o.pi)(a.U5,!1),id:(0,o.pi)(a.N0),role:(0,o.pi)(a.N0),state:(0,o.pi)(a.U5,null),tag:(0,o.pi)(a.N0,"div"),tooltip:(0,o.pi)(a.U5,!1)},l.BP),c=r.ZP.extend({name:l.BP,functional:!0,props:s,render:function(t,e){var i=e.props,r=e.data,l=e.children,a=i.tooltip,o=i.ariaLive,s=!0===i.forceShow||!1===i.state;return t(i.tag,(0,n.b)(r,{class:{"d-block":s,"invalid-feedback":!a,"invalid-tooltip":a},attrs:{id:i.id||null,role:i.role||null,"aria-live":o||null,"aria-atomic":o?"true":null}}),l)}})},1666:function(t,e,i){i.d(e,{m:function(){return u}});var r=i(144),n=i(9558),l=i(4689),a=i(2299),o=i(451);function s(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var c=(0,o.y2)({id:(0,o.pi)(a.N0),inline:(0,o.pi)(a.U5,!1),tag:(0,o.pi)(a.N0,"small"),textVariant:(0,o.pi)(a.N0,"muted")},l.F6),u=r.ZP.extend({name:l.F6,functional:!0,props:c,render:function(t,e){var i=e.props,r=e.data,l=e.children;return t(i.tag,(0,n.b)(r,{class:s({"form-text":!i.inline},"text-".concat(i.textVariant),i.textVariant),attrs:{id:i.id}}),l)}})},4679:function(t,e,i){i.d(e,{Q:function(){return l}});var r=i(6595),n=function(t){return"\\"+t},l=function(t){t=(0,r.BB)(t);var e=t.length,i=t.charCodeAt(0);return t.split("").reduce((function(r,l,a){var o=t.charCodeAt(a);return 0===o?r+"�":127===o||o>=1&&o<=31||0===a&&o>=48&&o<=57||1===a&&o>=48&&o<=57&&45===i?r+n("".concat(o.toString(16)," ")):0===a&&45===o&&1===e?r+n(l):o>=128||45===o||95===o||o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122?r+l:r+n(l)}),"")}}}]);
//# sourceMappingURL=449.50bbd7b5.js.map