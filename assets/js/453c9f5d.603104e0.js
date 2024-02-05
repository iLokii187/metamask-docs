"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9360],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(a),m=n,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return a?r.createElement(h,i(i({ref:t},p),{},{components:a})):r.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},39453:(e,t,a)=>{a.d(t,{Z:()=>c});var r=a(67294),n=a(86010),o=a(39960),i=a(26112);function s(e){let{item:t}=e;const a=r.createElement(r.Fragment,null,t.title&&r.createElement("h2",{className:(0,n.Z)(i.Z.cardTitle)},t.icon&&r.createElement("img",{src:t.icon,className:i.Z.cardIcon}),r.createElement("span",null,t.title)),t.description&&r.createElement("p",null,t.description)),s=(0,n.Z)("card","padding--lg",i.Z.cardContainer,{[i.Z.flaskOnly]:t.flaskOnly});return t.href?r.createElement(o.Z,{className:s,href:t.href},a):r.createElement("div",{className:s},a)}function c(e){const{items:t}=e;return r.createElement("section",{className:"row"},t.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(s,{item:e})))))}},90414:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=a(87462),n=(a(67294),a(3905)),o=a(39453);const i={title:"Introduction"},s="Integrate your dapp with the MetaMask wallet",c={unversionedId:"index",id:"index",title:"Introduction",description:"Integrate your dapp with the MetaMask wallet using the MetaMask APIs.",source:"@site/wallet/index.mdx",sourceDirName:".",slug:"/",permalink:"/wallet/",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/index.mdx",tags:[],version:"current",frontMatter:{title:"Introduction"},sidebar:"walletSidebar",next:{title:"Quickstart",permalink:"/wallet/quickstart"}},l={},p=[{value:"Supported platforms",id:"supported-platforms",level:2},{value:"New to developing on MetaMask?",id:"new-to-developing-on-metamask",level:2},{value:"Questions?",id:"questions",level:2}],u={toc:p},d="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"integrate-your-dapp-with-the-metamask-wallet"},"Integrate your dapp with the MetaMask wallet"),(0,n.kt)("p",null,"Integrate your dapp with the MetaMask wallet using the ",(0,n.kt)("a",{parentName:"p",href:"/wallet/concepts/apis"},"MetaMask APIs"),".\nYou can interact with your users' Ethereum accounts, performing tasks such as the following:"),(0,n.kt)(o.Z,{items:[{href:"how-to/detect-wallet",title:"\ud83d\udd0e Detect MetaMask",description:"Detect MetaMask and other wallets in your users' browsers."},{href:"how-to/sign-data",title:"\ud83d\udd8a\ufe0f Sign data",description:"Request signatures from users, and allow them to sign in with Ethereum."},{href:"how-to/display",title:"\ud83d\udcc4 Display in MetaMask",description:"Display tokens, contract methods, and icons in MetaMask."},{href:"how-to/use-sdk",title:"\ud83d\udcf1 Connect to extension & mobile",description:"Connect to the MetaMask extension and mobile app using MetaMask SDK."}],mdxType:"CardList"}),(0,n.kt)("h2",{id:"supported-platforms"},"Supported platforms"),(0,n.kt)("p",null,"You can connect to your users' Ethereum accounts from the following dapp platforms:"),(0,n.kt)(o.Z,{items:[{href:"quickstart/javascript",title:"\ud83d\udcbb JavaScript",description:"Integrate your JavaScript dapp with MetaMask."},{href:"quickstart/react",title:"\ud83d\udcbb React",description:"Integrate your React dapp with MetaMask."},{href:"how-to/use-sdk/mobile",title:"\ud83d\udcf1 Mobile",description:"Integrate your React Native, iOS, or Android dapp with MetaMask."},{href:"how-to/use-sdk/gaming",title:"\ud83c\udfae Gaming",description:"Integrate your Unity game with MetaMask."}],mdxType:"CardList"}),(0,n.kt)("h2",{id:"new-to-developing-on-metamask"},"New to developing on MetaMask?"),(0,n.kt)("p",null,"If you're new integrating dapps with MetaMask, check out the following topics:"),(0,n.kt)(o.Z,{items:[{href:"concepts/architecture",title:"\ud83d\udcd0 Architecture",description:"Learn about the high-level MetaMask architecture."},{href:"concepts/apis",title:"\ud83c\udf10 About the APIs",description:"Learn about the MetaMask Ethereum provider API and JSON-RPC API."},{href:"concepts/sdk",title:"\u2194\ufe0f About MetaMask SDK",description:"Learn about the benefits of the SDK and how the SDK connects to MetaMask."},{href:"tutorials/react-dapp-local-state",title:"\ud83d\udee0\ufe0f Create a React dapp tutorial",description:"Follow the tutorial to create a React dapp and integrate it with MetaMask."}],mdxType:"CardList"}),(0,n.kt)("h2",{id:"questions"},"Questions?"),(0,n.kt)("p",null,"If you have questions about integrating your dapp with MetaMask, you can interact with the MetaMask\nteam and community on the MetaMask channels on ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/consensys"},"Consensys Discord"),"."))}m.isMDXComponent=!0},26112:(e,t,a)=>{a.d(t,{Z:()=>r});const r={cardContainer:"cardContainer_C0Dw",flaskOnly:"flaskOnly_ADUl",cardTitle:"cardTitle_ZNcV",cardIcon:"cardIcon_naep"}}}]);