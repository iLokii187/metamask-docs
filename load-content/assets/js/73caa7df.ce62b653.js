/*! For license information please see 73caa7df.ce62b653.js.LICENSE.txt */
"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3793],{6022:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),i=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),f=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,y={};function _(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||p}function h(){}function v(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||p}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=_.prototype;var E=v.prototype=new h;E.constructor=v,b(E,_.prototype),E.isPureReactComponent=!0;var k=Array.isArray,g=Object.prototype.hasOwnProperty,S={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var a,l={},o=null,c=null;if(null!=t)for(a in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(o=""+t.key),t)g.call(t,a)&&!C.hasOwnProperty(a)&&(l[a]=t[a]);var i=arguments.length-2;if(1===i)l.children=r;else if(1<i){for(var u=Array(i),s=0;s<i;s++)u[s]=arguments[s+2];l.children=u}if(e&&e.defaultProps)for(a in i=e.defaultProps)void 0===l[a]&&(l[a]=i[a]);return{$$typeof:n,type:e,key:o,ref:c,props:l,_owner:S.current}}function I(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var N=/\/+/g;function Z(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function L(e,t,a,l,o){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var i=!1;if(null===e)i=!0;else switch(c){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case n:case r:i=!0}}if(i)return o=o(i=e),e=""===l?"."+Z(i,0):l,k(o)?(a="",null!=e&&(a=e.replace(N,"$&/")+"/"),L(o,t,a,"",(function(e){return e}))):null!=o&&(I(o)&&(o=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,a+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(N,"$&/")+"/")+e)),t.push(o)),1;if(i=0,l=""===l?".":l+":",k(e))for(var u=0;u<e.length;u++){var s=l+Z(c=e[u],u);i+=L(c,t,a,s,o)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),u=0;!(c=e.next()).done;)i+=L(c=c.value,t,a,s=l+Z(c,u++),o);else if("object"===c)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function P(e,t,n){if(null==e)return e;var r=[],a=0;return L(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function x(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var R={current:null},$={transition:null},A={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:$,ReactCurrentOwner:S};t.Children={map:P,forEach:function(e,t,n){P(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!I(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=_,t.Fragment=a,t.Profiler=o,t.PureComponent=v,t.StrictMode=l,t.Suspense=s,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=b({},e.props),l=e.key,o=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,c=S.current),void 0!==t.key&&(l=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(u in t)g.call(t,u)&&!C.hasOwnProperty(u)&&(a[u]=void 0===t[u]&&void 0!==i?i[u]:t[u])}var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){i=Array(u);for(var s=0;s<u;s++)i[s]=arguments[s+2];a.children=i}return{$$typeof:n,type:e.type,key:l,ref:o,props:a,_owner:c}},t.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=w,t.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=I,t.lazy=function(e){return{$$typeof:m,_payload:{_status:-1,_result:e},_init:x}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=$.transition;$.transition={};try{e()}finally{$.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return R.current.useCallback(e,t)},t.useContext=function(e){return R.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return R.current.useDeferredValue(e)},t.useEffect=function(e,t){return R.current.useEffect(e,t)},t.useId=function(){return R.current.useId()},t.useImperativeHandle=function(e,t,n){return R.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return R.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return R.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return R.current.useMemo(e,t)},t.useReducer=function(e,t,n){return R.current.useReducer(e,t,n)},t.useRef=function(e){return R.current.useRef(e)},t.useState=function(e){return R.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return R.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return R.current.useTransition()},t.version="18.2.0"},397:(e,t,n)=>{e.exports=n(6022)},8612:(e,t,n)=>{n.d(t,{Z:()=>J});var r=n(7294),a=n(7524),l=n(6010),o=n(6668),c=n(1327),i=n(5999),u=n(6023);const s="collapseSidebarButton_PEFL",d="collapseSidebarButtonIcon_kv0_";function m(e){let{onClick:t}=e;return r.createElement("button",{type:"button",title:(0,i.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,i.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.Z)("button button--secondary button--outline",s),onClick:t},r.createElement(u.Z,{className:d}))}var f=n(5281),p=n(9689),b=n(2466),y=n(7462),_=n(902);const h=Symbol("EmptyContext"),v=r.createContext(h);function E(e){let{children:t}=e;const[n,a]=(0,r.useState)(null),l=(0,r.useMemo)((()=>({expandedItem:n,setExpandedItem:a})),[n]);return r.createElement(v.Provider,{value:l},t)}var k=n(6043),g=n(3438),S=n(8596),C=n(9960),w=n(2389);function I(e){let{categoryLabel:t,onClick:n}=e;return r.createElement("button",{"aria-label":(0,i.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function N(e){let{item:t,onItemClick:n,activePath:a,level:c,index:i,...u}=e;const{items:s,label:d,collapsible:m,className:p,href:b}=t,{docs:{sidebar:{autoCollapseCategories:E}}}=(0,o.L)(),N=function(e){const t=(0,w.Z)();return(0,r.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,g.Wl)(e):void 0),[e,t])}(t),Z=(0,g._F)(t,a),L=(0,S.Mg)(b,a),{collapsed:P,setCollapsed:x}=(0,k.u)({initialState:()=>!!m&&(!Z&&t.collapsed)}),{expandedItem:R,setExpandedItem:$}=function(){const e=(0,r.useContext)(v);if(e===h)throw new _.i6("DocSidebarItemsExpandedStateProvider");return e}(),A=function(e){void 0===e&&(e=!P),$(e?null:i),x(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:a}=e;const l=(0,_.D9)(t);(0,r.useEffect)((()=>{t&&!l&&n&&a(!1)}),[t,l,n,a])}({isActive:Z,collapsed:P,updateCollapsed:A}),(0,r.useEffect)((()=>{m&&null!=R&&R!==i&&E&&x(!0)}),[m,R,i,x,E]),r.createElement("li",{className:(0,l.Z)(f.k.docs.docSidebarItemCategory,f.k.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":P},p)},r.createElement("div",{className:(0,l.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":L})},r.createElement(C.Z,(0,y.Z)({className:(0,l.Z)("menu__link",{"menu__link--sublist":m,"menu__link--sublist-caret":!b&&m,"menu__link--active":Z}),onClick:m?e=>{n?.(t),b?A(!1):(e.preventDefault(),A())}:()=>{n?.(t)},"aria-current":L?"page":void 0,"aria-expanded":m?!P:void 0,href:m?N??"#":N},u),d),b&&m&&r.createElement(I,{categoryLabel:d,onClick:e=>{e.preventDefault(),A()}})),r.createElement(k.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:P},r.createElement(M,{items:s,tabIndex:P?-1:0,onItemClick:n,activePath:a,level:c+1})))}var Z=n(3919),L=n(9471);const P="menuExternalLink_NmtK";function x(e){let{item:t,onItemClick:n,activePath:a,level:o,index:c,...i}=e;const{href:u,label:s,className:d,autoAddBaseUrl:m}=t,p=(0,g._F)(t,a),b=(0,Z.Z)(u);return r.createElement("li",{className:(0,l.Z)(f.k.docs.docSidebarItemLink,f.k.docs.docSidebarItemLinkLevel(o),"menu__list-item",d),key:s},r.createElement(C.Z,(0,y.Z)({className:(0,l.Z)("menu__link",!b&&P,{"menu__link--active":p}),autoAddBaseUrl:m,"aria-current":p?"page":void 0,to:u},b&&{onClick:n?()=>n(t):void 0},i),s,!b&&r.createElement(L.Z,null)))}const R="menuHtmlItem_M9Kj";function $(e){let{item:t,level:n,index:a}=e;const{value:o,defaultStyle:c,className:i}=t;return r.createElement("li",{className:(0,l.Z)(f.k.docs.docSidebarItemLink,f.k.docs.docSidebarItemLinkLevel(n),c&&[R,"menu__list-item"],i),key:a,dangerouslySetInnerHTML:{__html:o}})}function A(e){let{item:t,...n}=e;switch(t.type){case"category":return r.createElement(N,(0,y.Z)({item:t},n));case"html":return r.createElement($,(0,y.Z)({item:t},n));default:return r.createElement(x,(0,y.Z)({item:t},n))}}function j(e){let{items:t,...n}=e;return r.createElement(E,null,t.map(((e,t)=>r.createElement(A,(0,y.Z)({key:t,item:e,index:t},n)))))}const M=(0,r.memo)(j),D="menu_SIkG",O="menuWithAnnouncementBar_GW3s";function T(e){let{path:t,sidebar:n,className:a}=e;const o=function(){const{isActive:e}=(0,p.nT)(),[t,n]=(0,r.useState)(e);return(0,b.RF)((t=>{let{scrollY:r}=t;e&&n(0===r)}),[e]),e&&t}();return r.createElement("nav",{"aria-label":(0,i.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,l.Z)("menu thin-scrollbar",D,o&&O,a)},r.createElement("ul",{className:(0,l.Z)(f.k.docs.docSidebarMenu,"menu__list")},r.createElement(M,{items:n,activePath:t,level:1})))}const F="sidebar_njMd",H="sidebarWithHideableNavbar_wUlq",U="sidebarHidden_VK0M",B="sidebarLogo_isFc";function V(e){let{path:t,sidebar:n,onCollapse:a,isHidden:i}=e;const{navbar:{hideOnScroll:u},docs:{sidebar:{hideable:s}}}=(0,o.L)();return r.createElement("div",{className:(0,l.Z)(F,u&&H,i&&U)},u&&r.createElement(c.Z,{tabIndex:-1,className:B}),r.createElement(T,{path:t,sidebar:n}),s&&r.createElement(m,{onClick:a}))}const q=r.memo(V);var z=n(3102),W=n(3163);const K=e=>{let{sidebar:t,path:n}=e;const a=(0,W.e)();return r.createElement("ul",{className:(0,l.Z)(f.k.docs.docSidebarMenu,"menu__list")},r.createElement(M,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1}))};function G(e){return r.createElement(z.Zo,{component:K,props:e})}const Y=r.memo(G);function J(e){const t=(0,a.i)(),n="desktop"===t||"ssr"===t,l="mobile"===t;return r.createElement(r.Fragment,null,n&&r.createElement(q,e),l&&r.createElement(Y,e))}},6023:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7462),a=n(7294);function l(e){return a.createElement("svg",(0,r.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}},8104:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=r(n(397)),l=n(8612).Z,o=r(n(7452)),c=n(5042).Z;t.default=function(e){const t=[{label:"OpenRPC",description:"OpenRPC is a specification for machine-readable JSON-RPC services. It allows for automatic code generation, documentation, and discovery.",items:e.openrpcDocument.methods.map((e=>({type:"link",label:e.name,href:`/api-playground#${e.name}`}))),type:"category",collapsed:!1,collapsible:!0}];return a.default.createElement(o.default,null,a.default.createElement("div",{className:"docPage_node_modules-@docusaurus-theme-classic-lib-theme-DocPage-Layout-styles-module"},a.default.createElement("aside",{className:"theme-doc-sidebar-container docSidebarContainer_node_modules-@docusaurus-theme-classic-lib-theme-DocPage-Layout-Sidebar-styles-module"},a.default.createElement("div",{className:"sidebarViewport_node_modules-@docusaurus-theme-classic-lib-theme-DocPage-Layout-Sidebar-styles-module"},a.default.createElement(l,{path:e.route.path,sidebar:t}))),a.default.createElement("main",{className:"docMainContainer_node_modules-@docusaurus-theme-classic-lib-theme-DocPage-Layout-Main-styles-module"},a.default.createElement("div",{className:"container padding-top--md padding-bottom--lg"},a.default.createElement("div",{className:"row"},a.default.createElement("div",{className:"col col--12"},a.default.createElement(c,null,a.default.createElement(e.openrpcMarkdown,null))))))))}},255:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(6010),a=n(7294);const l={pill:"pill_TFFj","pill--green":"pill--green_r196","pill--red":"pill--red_AgbU","pill--blue":"pill--blue_wiL1","pill--yellow":"pill--yellow_HHCe"},o=new Set(["green","red","yellow","blue"]);const c={...n(2195).Z,Pill:function(e){let{color:t,children:n}=e;if(!o.has(t))throw new Error(`Invalid color: ${t}. Available colors are: ${Array.from(o).join(", ")}`);return a.createElement("mark",{role:"note",className:(0,r.Z)(l.pill,l[`pill--${t}`])},n)}}}}]);