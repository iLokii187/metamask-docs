"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9196],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,s(s({ref:t},l),{},{components:r})):n.createElement(f,s({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:a,s[1]=c;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},47454:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_label:"Electron",sidebar_position:6},s="Use MetaMask SDK with Electron",c={unversionedId:"how-to/connect/set-up-sdk/javascript/electron",id:"how-to/connect/set-up-sdk/javascript/electron",title:"Use MetaMask SDK with Electron",description:"Import MetaMask SDK into your Electron dapp to enable your users",source:"@site/wallet/how-to/connect/set-up-sdk/javascript/electron.md",sourceDirName:"how-to/connect/set-up-sdk/javascript",slug:"/how-to/connect/set-up-sdk/javascript/electron",permalink:"/add-metametrics/wallet/how-to/connect/set-up-sdk/javascript/electron",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/connect/set-up-sdk/javascript/electron.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_label:"Electron",sidebar_position:6},sidebar:"walletSidebar",previous:{title:"Node.js",permalink:"/add-metametrics/wallet/how-to/connect/set-up-sdk/javascript/nodejs"},next:{title:"Gaming",permalink:"/add-metametrics/wallet/how-to/connect/set-up-sdk/gaming/"}},i={},p=[],l={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"use-metamask-sdk-with-electron"},"Use MetaMask SDK with Electron"),(0,a.kt)("p",null,"Import ",(0,a.kt)("a",{parentName:"p",href:"/add-metametrics/wallet/concepts/sdk/"},"MetaMask SDK")," into your Electron dapp to enable your users\nto easily connect to the MetaMask browser extension and MetaMask Mobile."),(0,a.kt)("p",null,"On the frontend, see the instructions to ",(0,a.kt)("a",{parentName:"p",href:"/add-metametrics/wallet/how-to/connect/set-up-sdk/javascript/react/"},"use the SDK with React"),".\nOn the backend, see the instructions to ",(0,a.kt)("a",{parentName:"p",href:"/add-metametrics/wallet/how-to/connect/set-up-sdk/javascript/nodejs"},"use the SDK with Node.js"),"."),(0,a.kt)("admonition",{title:"example",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"See the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples/electronjs"},"example Electron dapp"),"\nin the JavaScript SDK GitHub repository for advanced use cases.")))}d.isMDXComponent=!0}}]);