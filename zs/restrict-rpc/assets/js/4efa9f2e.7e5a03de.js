"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2274],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=s,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:s,a[1]=i;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91476:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),s=(n(67294),n(3905));const o={description:"Request and revoke permissions to call restricted methods.",sidebar_position:6},a="Manage permissions",i={unversionedId:"how-to/manage-permissions",id:"how-to/manage-permissions",title:"Manage permissions",description:"Request and revoke permissions to call restricted methods.",source:"@site/wallet/how-to/manage-permissions.md",sourceDirName:"how-to",slug:"/how-to/manage-permissions",permalink:"/zs/restrict-rpc/wallet/how-to/manage-permissions",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/manage-permissions.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{description:"Request and revoke permissions to call restricted methods.",sidebar_position:6},sidebar:"walletSidebar",previous:{title:"Display custom modals",permalink:"/zs/restrict-rpc/wallet/how-to/display/custom-modals"},next:{title:"Use MetaMask SDK",permalink:"/zs/restrict-rpc/wallet/how-to/use-sdk/"}},l={},p=[{value:"Request permissions example",id:"request-permissions-example",level:2},{value:"Revoke permissions example",id:"revoke-permissions-example",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...o}=e;return(0,s.kt)(m,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"manage-permissions"},"Manage permissions"),(0,s.kt)("p",null,"To call a restricted RPC method, your dapp must request permission from the user using\nthe ",(0,s.kt)("a",{parentName:"p",href:"/wallet/reference/wallet_requestPermissions"},(0,s.kt)("inlineCode",{parentName:"a"},"wallet_requestPermissions"))," RPC method.\nYou can get the user's current permissions using ",(0,s.kt)("a",{parentName:"p",href:"/wallet/reference/wallet_getPermissions"},(0,s.kt)("inlineCode",{parentName:"a"},"wallet_getPermissions")),",\nand revoke permissions previously granted to your dapp using\n",(0,s.kt)("a",{parentName:"p",href:"/wallet/reference/wallet_revokePermissions"},(0,s.kt)("inlineCode",{parentName:"a"},"wallet_revokePermissions")),".\nThese methods are specified by ",(0,s.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-2255"},"EIP-2255")," and\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-improvement-proposals/blob/main/MIPs/mip-2.md"},"MIP-2"),"."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"wallet_requestPermissions")," creates a confirmation asking the user to connect to an account and\nallow the dapp to call the requested method.\nThe confirmation screen describes the functions and data the requested method can access.\nFor example, something like the following confirmation displays when you request permission to call\nthe ",(0,s.kt)("a",{parentName:"p",href:"/wallet/reference/eth_accounts"},(0,s.kt)("inlineCode",{parentName:"a"},"eth_accounts"))," restricted method:"),(0,s.kt)("div",{class:"row margin-bottom--md"},(0,s.kt)("div",{class:"column"},(0,s.kt)("img",{src:n(37960).Z,alt:"Request permissions confirmation 1",style:{border:"1px solid gray"}})),(0,s.kt)("div",{class:"column"},(0,s.kt)("img",{src:n(36613).Z,alt:"Request permissions confirmation 2",style:{border:"1px solid gray"}}))),(0,s.kt)("admonition",{title:"note",type:"info"},(0,s.kt)("p",{parentName:"admonition"},"To access accounts, we recommend using ",(0,s.kt)("a",{parentName:"p",href:"/wallet/reference/eth_requestAccounts"},(0,s.kt)("inlineCode",{parentName:"a"},"eth_requestAccounts")),",\nwhich automatically asks for permission to use ",(0,s.kt)("inlineCode",{parentName:"p"},"eth_accounts")," by calling ",(0,s.kt)("inlineCode",{parentName:"p"},"wallet_requestPermissions"),"\ninternally.\nSee ",(0,s.kt)("a",{parentName:"p",href:"/zs/restrict-rpc/wallet/how-to/connect/access-accounts"},"how to access a user's accounts")," for more information.")),(0,s.kt)("h2",{id:"request-permissions-example"},"Request permissions example"),(0,s.kt)("p",null,"The following example uses ",(0,s.kt)("inlineCode",{parentName:"p"},"wallet_requestPermissions")," to request permission from the user to call ",(0,s.kt)("inlineCode",{parentName:"p"},"eth_accounts"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'document.getElementById("requestPermissionsButton", requestPermissions);\n\nfunction requestPermissions() {\n    provider // Or window.ethereum if you don\'t support EIP-6963.\n        .request({\n            method: "wallet_requestPermissions",\n            params: [{ eth_accounts: {} }],\n        })\n        .then((permissions) => {\n            const accountsPermission = permissions.find(\n                (permission) => permission.parentCapability === "eth_accounts"\n            );\n            if (accountsPermission) {\n                console.log("eth_accounts permission successfully requested!");\n            }\n        })\n        .catch((error) => {\n            if (error.code === 4001) {\n                // EIP-1193 userRejectedRequest error\n                console.log("Permissions needed to continue.");\n            } else {\n                console.error(error);\n            }\n        });\n}\n')),(0,s.kt)("h2",{id:"revoke-permissions-example"},"Revoke permissions example"),(0,s.kt)("p",null,"The following example uses ",(0,s.kt)("inlineCode",{parentName:"p"},"wallet_revokePermissions")," to revoke the dapp's permission to call ",(0,s.kt)("inlineCode",{parentName:"p"},"eth_accounts"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'await provider // Or window.ethereum if you don\'t support EIP-6963.\n    .request({\n        method: "wallet_revokePermissions",\n        params: [\n            {\n                eth_accounts: {},\n            },\n        ],\n    });\n')))}u.isMDXComponent=!0},36613:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/request-permissions-2-7526e02a3555f5aeaa609955aea97821.png"},37960:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/request-permissions-81ec11205503d1b5dfde85316a3da5a1.png"}}]);