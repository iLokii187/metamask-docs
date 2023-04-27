"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5412],{3905:(e,a,n)=>{n.d(a,{Zo:()=>u,kt:()=>b});var t=n(7294);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=t.createContext({}),i=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},u=function(e){var a=i(e.components);return t.createElement(o.Provider,{value:a},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=i(n),c=l,b=m["".concat(o,".").concat(c)]||m[c]||d[c]||r;return n?t.createElement(b,s(s({ref:a},u),{},{components:n})):t.createElement(b,s({ref:a},u))}));function b(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,s=new Array(r);s[0]=c;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p[m]="string"==typeof e?e:l,s[1]=p;for(var i=2;i<r;i++)s[i]=n[i];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5143:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>p,metadata:()=>i,toc:()=>m});var t=n(7462),l=(n(7294),n(3905)),r=n(4866),s=n(5162);const p={title:"Options"},o="Snaps command line options",i={unversionedId:"reference/cli/options",id:"reference/cli/options",title:"Options",description:"b, bundle",source:"@site/snaps/reference/cli/options.md",sourceDirName:"reference/cli",slug:"/reference/cli/options",permalink:"/dependabot/npm_and_yarn/json5-2.2.3/snaps/reference/cli/options",draft:!1,tags:[],version:"current",frontMatter:{title:"Options"},sidebar:"snapsSidebar",previous:{title:"Snaps command line interface",permalink:"/dependabot/npm_and_yarn/json5-2.2.3/snaps/reference/cli/"},next:{title:"Subcommands",permalink:"/dependabot/npm_and_yarn/json5-2.2.3/snaps/reference/cli/subcommands"}},u={},m=[{value:"b, bundle",id:"b-bundle",level:2},{value:"d, dist",id:"d-dist",level:2},{value:"depsToTranspile",id:"depstotranspile",level:2},{value:"e, eval",id:"e-eval",level:2},{value:"fix, writeManifest",id:"fix-writemanifest",level:2},{value:"h, help",id:"h-help",level:2},{value:"m, manifest",id:"m-manifest",level:2},{value:"n, outfileName",id:"n-outfilename",level:2},{value:"p, port",id:"p-port",level:2},{value:"r, root",id:"r-root",level:2},{value:"s, src",id:"s-src",level:2},{value:"sourceMaps",id:"sourcemaps",level:2},{value:"strip, stripComments",id:"strip-stripcomments",level:2},{value:"suppressWarnings",id:"suppresswarnings",level:2},{value:"transpilationMode",id:"transpilationmode",level:2},{value:"verboseErrors",id:"verboseerrors",level:2},{value:"version",id:"version",level:2}],d={toc:m};function c(e){let{components:a,...n}=e;return(0,l.kt)("wrapper",(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"snaps-command-line-options"},"Snaps command line options"),(0,l.kt)("h2",{id:"b-bundle"},"b, bundle"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--bundle <file>\n"))),(0,l.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"-b out/bundle.js\n"))),(0,l.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"bundle: 'out/bundle.js' \n")))),(0,l.kt)("p",null,"Path to the snap ",(0,l.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/json5-2.2.3/snaps/concepts/anatomy#bundle-file"},"bundle file"),".\nThe default is ",(0,l.kt)("inlineCode",{parentName:"p"},"dist/bundle.js"),"."),(0,l.kt)("p",null,"You can use this option with the ",(0,l.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/json5-2.2.3/snaps/reference/cli/subcommands#e-eval"},(0,l.kt)("inlineCode",{parentName:"a"},"eval"))," subcommand."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-b")," is an alias for ",(0,l.kt)("inlineCode",{parentName:"p"},"--bundle"),"."),(0,l.kt)("h2",{id:"d-dist"},"d, dist"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--dist <directory>\n"))),(0,l.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"-d out\n"))),(0,l.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"dist: 'out'\n")))),(0,l.kt)("p",null,"Path to the output directory.\nThe default is ",(0,l.kt)("inlineCode",{parentName:"p"},"dist"),"."),(0,l.kt)("p",null,"You can use this option with the ",(0,l.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/json5-2.2.3/snaps/reference/cli/subcommands#b-build"},(0,l.kt)("inlineCode",{parentName:"a"},"build"))," and\n",(0,l.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/json5-2.2.3/snaps/reference/cli/subcommands#w-watch"},(0,l.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-d")," is an alias for ",(0,l.kt)("inlineCode",{parentName:"p"},"--dist"),"."),(0,l.kt)("h2",{id:"depstotranspile"},"depsToTranspile"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--depsToTranspile <array>\n"))),(0,l.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--depsToTranspile dep1,dep2\n"))),(0,l.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"depsToTranspile: ['dep1','dep2']\n")))),(0,l.kt)("p",null,"List of dependencies to transpile, if ",(0,l.kt)("a",{parentName:"p",href:"#transpilationmode"},(0,l.kt)("inlineCode",{parentName:"a"},"--transpilationMode"))," is set to\n",(0,l.kt)("inlineCode",{parentName:"p"},"localAndDeps"),"."),(0,l.kt)("p",null,"You can use this option with the ",(0,l.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/json5-2.2.3/snaps/reference/cli/subcommands#b-build"},(0,l.kt)("inlineCode",{parentName:"a"},"build"))," and\n",(0,l.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/json5-2.2.3/snaps/reference/cli/subcommands#w-watch"},(0,l.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,l.kt)("h2",{id:"e-eval"},"e, eval"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--eval <boolean>\n"))),(0,l.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"-e false\n"))),(0,l.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"eval: false\n")))),(0,l.kt)("p",null,"Indicates whether to attempt to evaluate the snap bundle in SES.\nThe default is ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,l.kt)("p",null,"You can use this option with the ",(0,l.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/json5-2.2.3/snaps/reference/cli/subcommands#b-build"},(0,l.kt)("inlineCode",{parentName:"a"},"build"))," and\n",(0,l.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/json5-2.2.3/snaps/reference/cli/subcommands#w-watch"},(0,l.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-e")," is an alias for ",(0,l.kt)("inlineCode",{parentName:"p"},"--eval"),"."),(0,l.kt)("h2",{id:"fix-writemanifest"},"fix, writeManifest"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--fix <boolean>\n"))),(0,l.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--fix false\n"))),(0,l.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"fix: false\n")))),(0,l.kt)("p",null,"When validating the snap ",(0,l.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/json5-2.2.3/snaps/concepts/anatomy#manifest-file"},"manifest file")," using the\n",(0,l.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/json5-2.2.3/snaps/reference/cli/subcommands#m-manifest"},(0,l.kt)("inlineCode",{parentName:"a"},"manifest"))," subcommand, indicates whether to make necessary changes to\nthe manifest file.\nThe default is ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--fix")," is an alias for ",(0,l.kt)("inlineCode",{parentName:"p"},"--writeManifest"),"."),(0,l.kt)("h2",{id:"h-help"},"h, help"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"-h, --help\n")),(0,l.kt)("p",null,"Displays the help message and exits.\nYou can use this option with ",(0,l.kt)("inlineCode",{parentName:"p"},"mm-snap")," or any ",(0,l.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/json5-2.2.3/snaps/reference/cli/subcommands"},"subcommand"),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-h")," is an alias for ",(0,l.kt)("inlineCode",{parentName:"p"},"--help"),"."),(0,l.kt)("h2",{id:"m-manifest"},"m, manifest"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--manifest <boolean>\n"))),(0,l.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"-m false\n"))),(0,l.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"manifest: false\n")))),(0,l.kt)("p",null,"Indicates whether to validate the snap ",(0,l.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/json5-2.2.3/snaps/concepts/anatomy#manifest-file"},"manifest file"),".\nThe default is ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,l.kt)("p",null,"You can use this option with the ",(0,l.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/json5-2.2.3/snaps/reference/cli/subcommands#b-build"},(0,l.kt)("inlineCode",{parentName:"a"},"build"))," and\n",(0,l.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/json5-2.2.3/snaps/reference/cli/subcommands#w-watch"},(0,l.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-m")," is an alias for ",(0,l.kt)("inlineCode",{parentName:"p"},"--manifest"),"."),(0,l.kt)("h2",{id:"n-outfilename"},"n, outfileName"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--outfileName <string>\n"))),(0,l.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"-n snap.js\n"))),(0,l.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"outfileName: 'snap.js'\n")))),(0,l.kt)("p",null,"Output file name when building a snap from source.\nThe default is ",(0,l.kt)("inlineCode",{parentName:"p"},"bundle.js"),"."),(0,l.kt)("p",null,"You can use this option with the ",(0,l.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/json5-2.2.3/snaps/reference/cli/subcommands#b-build"},(0,l.kt)("inlineCode",{parentName:"a"},"build"))," and\n",(0,l.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/json5-2.2.3/snaps/reference/cli/subcommands#w-watch"},(0,l.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-n")," is an alias for ",(0,l.kt)("inlineCode",{parentName:"p"},"--outfileName"),"."),(0,l.kt)("h2",{id:"p-port"},"p, port"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--port <number>\n"))),(0,l.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"-p 9000\n"))),(0,l.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"port: 9000\n")))),(0,l.kt)("p",null,"Local server port for testing.\nThe default is ",(0,l.kt)("inlineCode",{parentName:"p"},"8081"),"."),(0,l.kt)("p",null,"You can use this option with the ",(0,l.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/json5-2.2.3/snaps/reference/cli/subcommands#s-serve"},(0,l.kt)("inlineCode",{parentName:"a"},"serve"))," and\n",(0,l.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/json5-2.2.3/snaps/reference/cli/subcommands#w-watch"},(0,l.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-p")," is an alias for ",(0,l.kt)("inlineCode",{parentName:"p"},"--port"),"."),(0,l.kt)("h2",{id:"r-root"},"r, root"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--root <directory>\n"))),(0,l.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"-r out\n"))),(0,l.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"root: 'out'\n")))),(0,l.kt)("p",null,"Server root directory.\nThe default is the current working directory (",(0,l.kt)("inlineCode",{parentName:"p"},"."),")."),(0,l.kt)("p",null,"You can use this option with the ",(0,l.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/json5-2.2.3/snaps/reference/cli/subcommands#s-serve"},(0,l.kt)("inlineCode",{parentName:"a"},"serve"))," and\n",(0,l.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/json5-2.2.3/snaps/reference/cli/subcommands#w-watch"},(0,l.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-r")," is an alias for ",(0,l.kt)("inlineCode",{parentName:"p"},"--root"),"."),(0,l.kt)("h2",{id:"s-src"},"s, src"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--src <file>\n"))),(0,l.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"-s lib/index.js\n"))),(0,l.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"src: 'lib/index.js'\n")))),(0,l.kt)("p",null,"Path to the snap source file.\nThe default is ",(0,l.kt)("inlineCode",{parentName:"p"},"src/index.js"),"."),(0,l.kt)("p",null,"You can use this option with the ",(0,l.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/json5-2.2.3/snaps/reference/cli/subcommands#b-build"},(0,l.kt)("inlineCode",{parentName:"a"},"build"))," and\n",(0,l.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/json5-2.2.3/snaps/reference/cli/subcommands#w-watch"},(0,l.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-s")," is an alias for ",(0,l.kt)("inlineCode",{parentName:"p"},"--src"),"."),(0,l.kt)("h2",{id:"sourcemaps"},"sourceMaps"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--sourceMaps <boolean>\n"))),(0,l.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--sourceMaps true\n"))),(0,l.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"sourceMaps: true\n")))),(0,l.kt)("p",null,"Indicates whether builds should include source maps.\nThe default is ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,l.kt)("p",null,"You can use this option with the ",(0,l.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/json5-2.2.3/snaps/reference/cli/subcommands#b-build"},(0,l.kt)("inlineCode",{parentName:"a"},"build"))," and\n",(0,l.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/json5-2.2.3/snaps/reference/cli/subcommands#w-watch"},(0,l.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,l.kt)("h2",{id:"strip-stripcomments"},"strip, stripComments"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--strip <boolean>\n"))),(0,l.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--strip false\n"))),(0,l.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"strip: false\n")))),(0,l.kt)("p",null,"Indicates whether to remove code comments from the build output.\nThe default is ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,l.kt)("p",null,"You can use this option with the ",(0,l.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/json5-2.2.3/snaps/reference/cli/subcommands#b-build"},(0,l.kt)("inlineCode",{parentName:"a"},"build"))," and\n",(0,l.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/json5-2.2.3/snaps/reference/cli/subcommands#w-watch"},(0,l.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--strip")," is an alias for ",(0,l.kt)("inlineCode",{parentName:"p"},"--stripComments"),"."),(0,l.kt)("h2",{id:"suppresswarnings"},"suppressWarnings"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--suppressWarnings <boolean>\n"))),(0,l.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--suppressWarnings true\n"))),(0,l.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"suppressWarnings: true\n")))),(0,l.kt)("p",null,"Indicates whether to suppress warnings.\nThe default is ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,l.kt)("p",null,"You can use this option with any ",(0,l.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/json5-2.2.3/snaps/reference/cli/subcommands"},"subcommand"),"."),(0,l.kt)("h2",{id:"transpilationmode"},"transpilationMode"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--transpilationMode <string>\n"))),(0,l.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--transpilationMode localAndDeps\n"))),(0,l.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"transpilationMode: 'localAndDeps'\n")))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://babeljs.io/"},"Babel")," transpilation mode.\nSpecify ",(0,l.kt)("inlineCode",{parentName:"p"},"localAndDeps")," to transpile all source code including dependencies, ",(0,l.kt)("inlineCode",{parentName:"p"},"localOnly")," to transpile\nlocal source code only, and ",(0,l.kt)("inlineCode",{parentName:"p"},"none")," to transpile nothing."),(0,l.kt)("p",null,"The default is ",(0,l.kt)("inlineCode",{parentName:"p"},"localOnly"),"."),(0,l.kt)("p",null,"You can use this option with the ",(0,l.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/json5-2.2.3/snaps/reference/cli/subcommands#b-build"},(0,l.kt)("inlineCode",{parentName:"a"},"build"))," and\n",(0,l.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/json5-2.2.3/snaps/reference/cli/subcommands#w-watch"},(0,l.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"For TypeScript snaps, ",(0,l.kt)("inlineCode",{parentName:"p"},"--transpilationMode")," must be set to either ",(0,l.kt)("inlineCode",{parentName:"p"},"localOnly")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"localAndDeps"),".")),(0,l.kt)("h2",{id:"verboseerrors"},"verboseErrors"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--verboseErrors <boolean>\n"))),(0,l.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--verboseErrors false\n"))),(0,l.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"verboseErrors: false\n")))),(0,l.kt)("p",null,"Indicates whether to display original errors.\nThe default is ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,l.kt)("p",null,"You can use this option with any ",(0,l.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/json5-2.2.3/snaps/reference/cli/subcommands"},"subcommand"),". "),(0,l.kt)("h2",{id:"version"},"version"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--version\n")),(0,l.kt)("p",null,"Displays the version number and exits."))}c.isMDXComponent=!0},5162:(e,a,n)=>{n.d(a,{Z:()=>s});var t=n(7294),l=n(6010);const r="tabItem_Ymn6";function s(e){let{children:a,hidden:n,className:s}=e;return t.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,s),hidden:n},a)}},4866:(e,a,n)=>{n.d(a,{Z:()=>T});var t=n(7462),l=n(7294),r=n(6010),s=n(2466),p=n(6550),o=n(1980),i=n(7392),u=n(12);function m(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:n,attributes:t,default:l}}=e;return{value:a,label:n,attributes:t,default:l}}))}function d(e){const{values:a,children:n}=e;return(0,l.useMemo)((()=>{const e=a??m(n);return function(e){const a=(0,i.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function c(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function b(e){let{queryString:a=!1,groupId:n}=e;const t=(0,p.k6)(),r=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,o._X)(r),(0,l.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(t.location.search);a.set(r,e),t.replace({...t.location,search:a.toString()})}),[r,t])]}function k(e){const{defaultValue:a,queryString:n=!1,groupId:t}=e,r=d(e),[s,p]=(0,l.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!c({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:r}))),[o,i]=b({queryString:n,groupId:t}),[m,k]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[t,r]=(0,u.Nk)(n);return[t,(0,l.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:t}),f=(()=>{const e=o??m;return c({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{f&&p(f)}),[f]);return{selectedValue:s,selectValue:(0,l.useCallback)((e=>{if(!c({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);p(e),i(e),k(e)}),[i,k,r]),tabValues:r}}var f=n(2389);const h="tabList__CuJ",N="tabItem_LNqP";function y(e){let{className:a,block:n,selectedValue:p,selectValue:o,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,s.o5)(),d=e=>{const a=e.currentTarget,n=u.indexOf(a),t=i[n].value;t!==p&&(m(a),o(t))},c=e=>{let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;a=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;a=u[n]??u[u.length-1];break}}a?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},a)},i.map((e=>{let{value:a,label:n,attributes:s}=e;return l.createElement("li",(0,t.Z)({role:"tab",tabIndex:p===a?0:-1,"aria-selected":p===a,key:a,ref:e=>u.push(e),onKeyDown:c,onClick:d},s,{className:(0,r.Z)("tabs__item",N,s?.className,{"tabs__item--active":p===a})}),n??a)})))}function g(e){let{lazy:a,children:n,selectedValue:t}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=r.find((e=>e.props.value===t));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==t}))))}function v(e){const a=k(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",h)},l.createElement(y,(0,t.Z)({},e,a)),l.createElement(g,(0,t.Z)({},e,a)))}function T(e){const a=(0,f.Z)();return l.createElement(v,(0,t.Z)({key:String(a)},e))}}}]);