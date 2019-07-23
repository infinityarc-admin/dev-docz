!function(e){function n(n){for(var s,r,o=n[0],a=n[1],d=n[2],i=n[3]||[],u=0,c=[];u<o.length;u++)r=o[u],D[r]&&c.push(D[r][0]),D[r]=0;for(s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s]);for(L&&L(n),_.push.apply(_,i);c.length;)c.shift()();return S.push.apply(S,d||[]),t()}function t(){for(var e,n=0;n<S.length;n++){for(var t=S[n],s=!0,r=1;r<t.length;r++){var o=t[r];0!==D[o]&&(s=!1)}s&&(S.splice(n--,1),e=M(M.s=t[0]))}return 0===S.length&&(_.forEach(function(e){if(void 0===D[e]){D[e]=null;var n=document.createElement("link");n.crossOrigin="anonymous",M.nc&&n.setAttribute("nonce",M.nc),n.rel="prefetch",n.as="script",n.href=E(e),document.head.appendChild(n)}}),_.length=0),e}var s=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,n){if(!w[e]||!k[e])return;for(var t in k[e]=!1,n)Object.prototype.hasOwnProperty.call(n,t)&&(h[t]=n[t]);0===--b&&0===x&&C()}(e,n),s&&s(e,n)};var r,o=!0,a="b68715e5f28cd8fdf97a",d=1e4,i={},u=[],c=[];function l(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:r!==e,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"===typeof e)n._selfAccepted=e;else if("object"===typeof e)for(var s=0;s<e.length;s++)n._acceptedDependencies[e[s]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"===typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},check:z,apply:O,status:function(e){if(!e)return g;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var n=p.indexOf(e);n>=0&&p.splice(n,1)},data:i[e]};return r=void 0,n}var p=[],g="idle";function f(e){g=e;for(var n=0;n<p.length;n++)p[n].call(null,e)}var m,h,v,b=0,x=0,y={},k={},w={};function j(e){return+e+""===e?+e:e}function z(e){if("idle"!==g)throw new Error("check() is only allowed in idle status");return o=e,f("check"),(n=d,n=n||1e4,new Promise(function(e,t){if("undefined"===typeof XMLHttpRequest)return t(new Error("No browser support"));try{var s=new XMLHttpRequest,r=M.p+""+a+".hot-update.json";s.open("GET",r,!0),s.timeout=n,s.send(null)}catch(o){return t(o)}s.onreadystatechange=function(){if(4===s.readyState)if(0===s.status)t(new Error("Manifest request to "+r+" timed out."));else if(404===s.status)e();else if(200!==s.status&&304!==s.status)t(new Error("Manifest request to "+r+" failed."));else{try{var n=JSON.parse(s.responseText)}catch(o){return void t(o)}e(n)}}})).then(function(e){if(!e)return f("idle"),null;k={},y={},w=e.c,v=e.h,f("prepare");var n=new Promise(function(e,n){m={resolve:e,reject:n}});for(var t in h={},D)P(t);return"prepare"===g&&0===x&&0===b&&C(),n});var n}function P(e){w[e]?(k[e]=!0,b++,function(e){var n=document.createElement("script");n.charset="utf-8",n.src=M.p+""+e+"."+a+".hot-update.js",n.crossOrigin="anonymous",document.head.appendChild(n)}(e)):y[e]=!0}function C(){f("ready");var e=m;if(m=null,e)if(o)Promise.resolve().then(function(){return O(o)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var t in h)Object.prototype.hasOwnProperty.call(h,t)&&n.push(j(t));e.resolve(n)}}function O(n){if("ready"!==g)throw new Error("apply() is only allowed in ready status");var t,s,r,o,d;function c(e){for(var n=[e],t={},s=n.map(function(e){return{chain:[e],id:e}});s.length>0;){var r=s.pop(),a=r.id,d=r.chain;if((o=q[a])&&!o.hot._selfAccepted){if(o.hot._selfDeclined)return{type:"self-declined",chain:d,moduleId:a};if(o.hot._main)return{type:"unaccepted",chain:d,moduleId:a};for(var i=0;i<o.parents.length;i++){var u=o.parents[i],c=q[u];if(c){if(c.hot._declinedDependencies[a])return{type:"declined",chain:d.concat([u]),moduleId:a,parentId:u};-1===n.indexOf(u)&&(c.hot._acceptedDependencies[a]?(t[u]||(t[u]=[]),l(t[u],[a])):(delete t[u],n.push(u),s.push({chain:d.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function l(e,n){for(var t=0;t<n.length;t++){var s=n[t];-1===e.indexOf(s)&&e.push(s)}}n=n||{};var p={},m=[],b={},x=function(){console.warn("[HMR] unexpected require("+k.moduleId+") to disposed module")};for(var y in h)if(Object.prototype.hasOwnProperty.call(h,y)){var k;d=j(y);var z=!1,P=!1,C=!1,O="";switch((k=h[y]?c(d):{type:"disposed",moduleId:y}).chain&&(O="\nUpdate propagation: "+k.chain.join(" -> ")),k.type){case"self-declined":n.onDeclined&&n.onDeclined(k),n.ignoreDeclined||(z=new Error("Aborted because of self decline: "+k.moduleId+O));break;case"declined":n.onDeclined&&n.onDeclined(k),n.ignoreDeclined||(z=new Error("Aborted because of declined dependency: "+k.moduleId+" in "+k.parentId+O));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(k),n.ignoreUnaccepted||(z=new Error("Aborted because "+d+" is not accepted"+O));break;case"accepted":n.onAccepted&&n.onAccepted(k),P=!0;break;case"disposed":n.onDisposed&&n.onDisposed(k),C=!0;break;default:throw new Error("Unexception type "+k.type)}if(z)return f("abort"),Promise.reject(z);if(P)for(d in b[d]=h[d],l(m,k.outdatedModules),k.outdatedDependencies)Object.prototype.hasOwnProperty.call(k.outdatedDependencies,d)&&(p[d]||(p[d]=[]),l(p[d],k.outdatedDependencies[d]));C&&(l(m,[k.moduleId]),b[d]=x)}var S,_=[];for(s=0;s<m.length;s++)d=m[s],q[d]&&q[d].hot._selfAccepted&&b[d]!==x&&_.push({module:d,errorHandler:q[d].hot._selfAccepted});f("dispose"),Object.keys(w).forEach(function(e){!1===w[e]&&function(e){delete D[e]}(e)});for(var E,A,I=m.slice();I.length>0;)if(d=I.pop(),o=q[d]){var H={},L=o.hot._disposeHandlers;for(r=0;r<L.length;r++)(t=L[r])(H);for(i[d]=H,o.hot.active=!1,delete q[d],delete p[d],r=0;r<o.children.length;r++){var T=q[o.children[r]];T&&((S=T.parents.indexOf(d))>=0&&T.parents.splice(S,1))}}for(d in p)if(Object.prototype.hasOwnProperty.call(p,d)&&(o=q[d]))for(A=p[d],r=0;r<A.length;r++)E=A[r],(S=o.children.indexOf(E))>=0&&o.children.splice(S,1);for(d in f("apply"),a=v,b)Object.prototype.hasOwnProperty.call(b,d)&&(e[d]=b[d]);var U=null;for(d in p)if(Object.prototype.hasOwnProperty.call(p,d)&&(o=q[d])){A=p[d];var N=[];for(s=0;s<A.length;s++)if(E=A[s],t=o.hot._acceptedDependencies[E]){if(-1!==N.indexOf(t))continue;N.push(t)}for(s=0;s<N.length;s++){t=N[s];try{t(A)}catch(R){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:d,dependencyId:A[s],error:R}),n.ignoreErrored||U||(U=R)}}}for(s=0;s<_.length;s++){var Q=_[s];d=Q.module,u=[d];try{M(d)}catch(R){if("function"===typeof Q.errorHandler)try{Q.errorHandler(R)}catch(V){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:V,originalError:R}),n.ignoreErrored||U||(U=V),U||(U=R)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:d,error:R}),n.ignoreErrored||U||(U=R)}}return U?(f("fail"),Promise.reject(U)):(f("idle"),new Promise(function(e){e(m)}))}var q={},D={1:0},S=[],_=[];function E(e){return M.p+"static/js/"+({2:"src-pages-about-docz-about-docz",3:"src-pages-circle-back-circle-back",4:"src-pages-gcloud-vm-snapshot-gloud-vm-snapshot",5:"src-pages-landing-index",6:"src-pages-mongo-ubuntu-mongodb-ubuntu",7:"src-pages-ms-sql-server-docker-ms-sql-server-docker",8:"src-pages-ms-sql-server-ubuntu-ms-sql-server-ubuntu",9:"src-pages-publidh-npm-publish-npm",10:"src-pages-scaffolding-docz-app-scaffolding-docz-app",11:"src-pages-setup-live-server-setup-live-server",12:"src-pages-stup-nextjs-setup-nextjs",13:"src-pages-ubuntu-swap-mem-ubuntu-swap-mem",14:"src-pages-vscode-dev-extensions-vscode-dev-extensions"}[e]||e)+"."+{2:"d294da15",3:"34ca6e6a",4:"ad29e5fe",5:"6dfd314d",6:"e9fb3dd9",7:"ad534950",8:"e95bbc71",9:"ff33a8dc",10:"336870f1",11:"2059e9de",12:"5465c8b5",13:"e4758230",14:"1281a9e7"}[e]+".js"}function M(n){if(q[n])return q[n].exports;var t=q[n]={i:n,l:!1,exports:{},hot:l(n),parents:(c=u,u=[],c),children:[]};return e[n].call(t.exports,t,t.exports,function(e){var n=q[e];if(!n)return M;var t=function(t){return n.hot.active?(q[t]?-1===q[t].parents.indexOf(e)&&q[t].parents.push(e):(u=[e],r=t),-1===n.children.indexOf(t)&&n.children.push(t)):(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),u=[]),M(t)},s=function(e){return{configurable:!0,enumerable:!0,get:function(){return M[e]},set:function(n){M[e]=n}}};for(var o in M)Object.prototype.hasOwnProperty.call(M,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(t,o,s(o));return t.e=function(e){return"ready"===g&&f("prepare"),x++,M.e(e).then(n,function(e){throw n(),e});function n(){x--,"prepare"===g&&(y[e]||P(e),0===x&&0===b&&C())}},t.t=function(e,n){return 1&n&&(e=t(e)),M.t(e,-2&n)},t}(n)),t.l=!0,t.exports}M.e=function(e){var n=[],t=D[e];if(0!==t)if(t)n.push(t[2]);else{var s=new Promise(function(n,s){t=D[e]=[n,s]});n.push(t[2]=s);var r,o=document.createElement("script");o.charset="utf-8",o.timeout=120,M.nc&&o.setAttribute("nonce",M.nc),o.src=E(e),0!==o.src.indexOf(window.location.origin+"/")&&(o.crossOrigin="anonymous");var a=new Error;r=function(n){o.onerror=o.onload=null,clearTimeout(d);var t=D[e];if(0!==t){if(t){var s=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;a.message="Loading chunk "+e+" failed.\n("+s+": "+r+")",a.name="ChunkLoadError",a.type=s,a.request=r,t[1](a)}D[e]=void 0}};var d=setTimeout(function(){r({type:"timeout",target:o})},12e4);o.onerror=o.onload=r,document.head.appendChild(o)}return Promise.all(n)},M.m=e,M.c=q,M.d=function(e,n,t){M.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},M.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},M.t=function(e,n){if(1&n&&(e=M(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(M.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var s in e)M.d(t,s,function(n){return e[n]}.bind(null,s));return t},M.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return M.d(n,"a",n),n},M.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},M.p="/",M.oe=function(e){throw console.error(e),e},M.h=function(){return a};var A=window.webpackJsonp=window.webpackJsonp||[],I=A.push.bind(A);A.push=n,A=A.slice();for(var H=0;H<A.length;H++)n(A[H]);var L=I,T=(S.push([0,0]),t());n([[],{},0,[0,2,3,4,5,6,7,8,9,10,11,12,13,14]])}({"./.docz/app/db.json":function(e){e.exports={config:{title:"My Dev Docz",description:"This is my awesome documentation",menu:["Landing","Things about docz","Circle back","GCLOUD Create VM snapshot","Installing MongoDB on ubuntu","MS SQL Server - Docker","MS SQL Server - Ubuntu","Publish to NPM","Setting up Next.js","Scaffolding a DOCZ app","Setup Live-server","Setting up Next.js","VS Code Dev extensions","Setting up swapemory - Ubuntu"],version:"1.0.0",repository:"https://github.com/CliffCrerar/dev-docz",native:!1,codeSandbox:!0,themeConfig:{mode:"light"},separator:"-",hashRouter:!0,files:["src/**/*.{md,markdown,mdx}"],base:"/",public:"/public",indexHtml:"index.html",dest:"/dist"},entries:[{key:"src/pages/_landing/index.mdx",value:{name:"Landing",route:"/",parent:"Pages",id:"b4c561a89372e0db9ca07ac9ef5bbc08",filepath:"src/pages/_landing/index.mdx",link:"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/_landing/index.mdx",slug:"src-pages-landing-index",menu:"",headings:[{slug:"my-dev-docz",depth:1,value:"My Dev Docz"},{slug:"spot-for-scribbling-things",depth:3,value:"Spot for scribbling things"}]}},{key:"src/pages/about-docz/about-docz.mdx",value:{name:"Things about docz",route:"/things-about-docz",parent:"Pages",id:"ec162412758ad33ae7e4de369ddf8443",filepath:"src/pages/about-docz/about-docz.mdx",link:"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/about-docz/about-docz.mdx",slug:"src-pages-about-docz-about-docz",menu:"",headings:[{slug:"things-about-docz",depth:1,value:"Things about docz"},{slug:"tuning-the-logo",depth:2,value:"Tuning the logo"},{slug:"files",depth:2,value:"Files"},{slug:"public",depth:2,value:"Public"},{slug:"theme",depth:2,value:"Theme"},{slug:"example-project-structure",depth:2,value:"Example project structure:"},{slug:"menu",depth:2,value:"Menu"}]}},{key:"src/pages/circle-back/circle-back.mdx",value:{name:"Circle back",route:"/circle-back",parent:"Pages",id:"ddf45c78e4757ed4f75e435c369b93cb",filepath:"src/pages/circle-back/circle-back.mdx",link:"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/circle-back/circle-back.mdx",slug:"src-pages-circle-back-circle-back",menu:"",headings:[{slug:"pages-of-interest-to-revisit",depth:1,value:"Pages of interest to revisit"}]}},{key:"src/pages/gcloud-vm-snapshot/gloud-vm-snapshot.mdx",value:{name:"GCLOUD Create VM snapshot",route:"/gcloud-vm-snapshot",parent:"Pages",id:"ebdf6abb73cf504b282686c5775dc8ab",filepath:"src/pages/gcloud-vm-snapshot/gloud-vm-snapshot.mdx",link:"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/gcloud-vm-snapshot/gloud-vm-snapshot.mdx",slug:"src-pages-gcloud-vm-snapshot-gloud-vm-snapshot",menu:"",headings:[{slug:"gcloud-create-vm-snapshot",depth:1,value:"GCLOUD Create VM snapshot"}]}},{key:"src/pages/mongo-ubuntu/mongodb-ubuntu.mdx",value:{name:"Installing MongoDB on ubuntu",route:"/installing-mongodb-ubuntu",parent:"Pages",id:"f6bc60d3539dc5a16a44cc8df4002190",filepath:"src/pages/mongo-ubuntu/mongodb-ubuntu.mdx",link:"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/mongo-ubuntu/mongodb-ubuntu.mdx",slug:"src-pages-mongo-ubuntu-mongodb-ubuntu",menu:"",headings:[{slug:"installing-mongodb-on-ubuntu",depth:1,value:"Installing MongoDB on ubuntu"},{slug:"todo----",depth:2,value:"TODO . . . ."}]}},{key:"src/pages/ms-sql-server-docker/ms-sql-server-docker.mdx",value:{name:"MS SQL Server - Docker",route:"/sql-server-docker",id:"162c31e0a5cd864707e006675ba3818b",filepath:"src/pages/ms-sql-server-docker/ms-sql-server-docker.mdx",link:"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/ms-sql-server-docker/ms-sql-server-docker.mdx",slug:"src-pages-ms-sql-server-docker-ms-sql-server-docker",menu:"",headings:[{slug:"running-docker-instance-of-sql-server",depth:1,value:"Running Docker instance of SQL server"},{slug:"puling-the-docker-file",depth:2,value:"Puling the docker file"},{slug:"starting-and-running",depth:2,value:"Starting and running"},{slug:"normal",depth:3,value:"Normal"},{slug:"2017",depth:3,value:"2017"},{slug:"sql-express",depth:3,value:"SQL Express"},{slug:"environment-variables",depth:2,value:"Environment Variables"},{slug:"other",depth:2,value:"Other"},{slug:"related-repos",depth:2,value:"Related repos"}]}},{key:"src/pages/ms-sql-server-ubuntu/ms-sql-server-ubuntu.mdx",value:{name:"MS SQL Server - Ubuntu",route:"/sql-server-ubuntu",id:"72463f3472672fe0ad0b05a9a41ffb96",filepath:"src/pages/ms-sql-server-ubuntu/ms-sql-server-ubuntu.mdx",link:"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/ms-sql-server-ubuntu/ms-sql-server-ubuntu.mdx",slug:"src-pages-ms-sql-server-ubuntu-ms-sql-server-ubuntu",menu:"",headings:[{slug:"installing-sql-server-on-ubuntu",depth:1,value:"Installing SQL server on ubuntu"}]}},{key:"src/pages/publidh-npm/publish-npm.mdx",value:{name:"Publish to NPM",route:"/publish-to-node-package-manager",parent:"Pages",id:"84cb11d5c44c812d2013b3a4e87c28f8",filepath:"src/pages/publidh-npm/publish-npm.mdx",link:"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/publidh-npm/publish-npm.mdx",slug:"src-pages-publidh-npm-publish-npm",menu:"",headings:[{slug:"publishing-a-package-to-npm",depth:1,value:"Publishing a package to NPM"}]}},{key:"src/pages/scaffolding-docz-app/scaffolding-docz-app.mdx",value:{name:"Scaffolding a DOCZ app",route:"/scaffolding-docz-app-quickly",parent:"Pages",id:"78f3cce6897d85620f321190211fbd63",filepath:"src/pages/scaffolding-docz-app/scaffolding-docz-app.mdx",link:"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/scaffolding-docz-app/scaffolding-docz-app.mdx",slug:"src-pages-scaffolding-docz-app-scaffolding-docz-app",menu:"",headings:[{slug:"scaffold-a-docz-for-use-quickly",depth:1,value:"Scaffold a DOCZ for use quickly"},{slug:"this-doc-will-show-you-how-to-quickly-scaffold-a-docs-app-without-having-to-decrypt-the-official-documents-first-following-theses-steps-will-have-you-up-and-running-in-no-time",depth:3,value:"This doc will show you how to quickly scaffold a docs app without having to decrypt the official documents first. following theses steps will have you up and running in no time"},{slug:"prepare",depth:4,value:"Prepare:"},{slug:"setup-project",depth:3,value:"Setup project"},{slug:"add-scripts-in-packagejson",depth:3,value:"Add scripts in  package.json"},{slug:"add--page-in-root-dir",depth:3,value:"Add  page in root dir"},{slug:"add--build-folder-to-gitignore-echo-docz--gitignore",depth:3,value:"Add  build folder to gitignore  echo \\.docz >> .gitignore"},{slug:"add-doczrcjs-config-file",depth:3,value:"Add  doczrc.js  config file."},{slug:"create-env-file-with-content",depth:3,value:"Create  .env  file with content:"},{slug:"create-source-directory",depth:3,value:"Create source directory"},{slug:"install-environment-variables-package",depth:3,value:"Install environment variables package"},{slug:"add-config-entries",depth:3,value:"Add config entries:"},{slug:"add-environment-variable-to-env",depth:3,value:"Add environment variable to  .env"},{slug:"create-html-index-file-in-public-folder",depth:3,value:"Create html index file in public folder"},{slug:"create-indexhtml-in-public-and-populate-with",depth:5,value:"Create  index.html  in public and populate with:"},{slug:"add-entries-to-config-file",depth:3,value:"Add entries to config file:"},{slug:"create-nav-menu-config-for-ordering-correctly",depth:3,value:"Create nav menu config for ordering correctly"},{slug:"modify-doczrcjs-add-entry",depth:3,value:"Modify  doczrc.js  add entry"},{slug:"modify-srcpagesindexmdx",depth:3,value:"Modify  src/pages/index.mdx"},{slug:"create-pages-page1mdx-and-page2mdx",depth:3,value:"Create pages  page1.mdx  and  page2.mdx"},{slug:"add-content-page1mdx",depth:3,value:"Add Content  page1.mdx"},{slug:"add-content-page2mdx",depth:3,value:"Add Content  page2.mdx"}]}},{key:"src/pages/setup-live-server/setup-live-server.mdx",value:{name:"Setup Live-server",route:"/setup-live-server",parent:"Pages",id:"d1f976cac4d20c8037b7b34734b383ad",filepath:"src/pages/setup-live-server/setup-live-server.mdx",link:"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/setup-live-server/setup-live-server.mdx",slug:"src-pages-setup-live-server-setup-live-server",menu:"",headings:[{slug:"setup-live-server",depth:1,value:"Setup Live-server"},{slug:"install",depth:2,value:"Install"},{slug:"install-as-service",depth:2,value:"install as service"},{slug:"the-configuration-file-applicationproperties-should-be-here",depth:1,value:"The configuration file application.properties should be here:"},{slug:"logging",depth:2,value:"logging"}]}},{key:"src/pages/stup-nextjs/setup-nextjs.mdx",value:{name:"Setting up Next.js",route:"/setup-next",parent:"Pages",id:"626d86f9a943e49a4aac653c24527759",filepath:"src/pages/stup-nextjs/setup-nextjs.mdx",link:"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/stup-nextjs/setup-nextjs.mdx",slug:"src-pages-stup-nextjs-setup-nextjs",menu:"",headings:[{slug:"setting-up-a-nextjs-project-to-deploy-to-zeit",depth:1,value:"Setting up a Next.js project to deploy to Zeit"}]}},{key:"src/pages/ubuntu-swap-mem/ubuntu-swap-mem.mdx",value:{name:"Setting up swapemory - Ubuntu",route:"/swap-mem",parent:"Pages",id:"8eeb0a9ead054ce6ebbf241e21f1a640",filepath:"src/pages/ubuntu-swap-mem/ubuntu-swap-mem.mdx",link:"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/ubuntu-swap-mem/ubuntu-swap-mem.mdx",slug:"src-pages-ubuntu-swap-mem-ubuntu-swap-mem",menu:"",headings:[{slug:"swap-mem",depth:1,value:"Swap mem"}]}},{key:"src/pages/vscode-dev-extensions/vscode-dev-extensions.mdx",value:{name:"VS Code Dev extensions",route:"/vscode-dev-extensions",parent:"Pages",id:"e4be3c1a6758c0bebb355f922769b1fd",filepath:"src/pages/vscode-dev-extensions/vscode-dev-extensions.mdx",link:"https://github.com/CliffCrerar/dev-docz/edit/master/src/pages/vscode-dev-extensions/vscode-dev-extensions.mdx",slug:"src-pages-vscode-dev-extensions-vscode-dev-extensions",menu:"",headings:[{slug:"dev-extensions",depth:1,value:"Dev extensions"},{slug:"operationally-dependant",depth:2,value:"Operationally dependant"},{slug:"strongly-recommended",depth:2,value:"Strongly recommended:"},{slug:"quality-of-coding-life",depth:2,value:"Quality of coding life"},{slug:"using-vscode-extension",depth:2,value:"Using Vscode extension:"},{slug:"1-installation-is-straight-forward----",depth:4,value:"1. Installation is straight forward . . . ."},{slug:"2-where-are-the-extensions-installed----cusersyour-windows-usernamevscode",depth:4,value:"2. Where are the extensions installed. --\x3e  C:\\Users\\<your windows username>\\.vscode"},{slug:"3-to-see-your-installed-installations-in-vscode-in-the-search-ext-marketplace-type",depth:4,value:"3. To see your installed installations in vscode in the  search ext marketplace  type:"}]}}],props:[]}},"./.docz/app/index.jsx":function(e,n,t){"use strict";t.r(n);var s=t("./node_modules/react/index.js"),r=t.n(s),o=t("./node_modules/react-dom/index.js"),a=t.n(o),d=t("./node_modules/docz/dist/index.esm.js"),i=t("./node_modules/docz-theme-default/dist/index.esm.js"),u={"src/pages/_landing/index.mdx":function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,"./src/pages/_landing/index.mdx"))},"src/pages/about-docz/about-docz.mdx":function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"./src/pages/about-docz/about-docz.mdx"))},"src/pages/circle-back/circle-back.mdx":function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,"./src/pages/circle-back/circle-back.mdx"))},"src/pages/gcloud-vm-snapshot/gloud-vm-snapshot.mdx":function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,"./src/pages/gcloud-vm-snapshot/gloud-vm-snapshot.mdx"))},"src/pages/mongo-ubuntu/mongodb-ubuntu.mdx":function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,"./src/pages/mongo-ubuntu/mongodb-ubuntu.mdx"))},"src/pages/ms-sql-server-docker/ms-sql-server-docker.mdx":function(){return Promise.all([t.e(0),t.e(7)]).then(t.bind(null,"./src/pages/ms-sql-server-docker/ms-sql-server-docker.mdx"))},"src/pages/ms-sql-server-ubuntu/ms-sql-server-ubuntu.mdx":function(){return Promise.all([t.e(0),t.e(8)]).then(t.bind(null,"./src/pages/ms-sql-server-ubuntu/ms-sql-server-ubuntu.mdx"))},"src/pages/publidh-npm/publish-npm.mdx":function(){return Promise.all([t.e(0),t.e(9)]).then(t.bind(null,"./src/pages/publidh-npm/publish-npm.mdx"))},"src/pages/scaffolding-docz-app/scaffolding-docz-app.mdx":function(){return Promise.all([t.e(0),t.e(10)]).then(t.bind(null,"./src/pages/scaffolding-docz-app/scaffolding-docz-app.mdx"))},"src/pages/setup-live-server/setup-live-server.mdx":function(){return Promise.all([t.e(0),t.e(11)]).then(t.bind(null,"./src/pages/setup-live-server/setup-live-server.mdx"))},"src/pages/stup-nextjs/setup-nextjs.mdx":function(){return Promise.all([t.e(0),t.e(12)]).then(t.bind(null,"./src/pages/stup-nextjs/setup-nextjs.mdx"))},"src/pages/ubuntu-swap-mem/ubuntu-swap-mem.mdx":function(){return Promise.all([t.e(0),t.e(13)]).then(t.bind(null,"./src/pages/ubuntu-swap-mem/ubuntu-swap-mem.mdx"))},"src/pages/vscode-dev-extensions/vscode-dev-extensions.mdx":function(){return Promise.all([t.e(0),t.e(14)]).then(t.bind(null,"./src/pages/vscode-dev-extensions/vscode-dev-extensions.mdx"))}},c=t("./.docz/app/db.json"),l=function(){return r.a.createElement(i.a,{linkComponent:d.b,db:c},r.a.createElement(d.c,{imports:u}))},p=[],g=[],f=function(){return g.forEach(function(e){return e&&e()})},m=document.querySelector("#root");!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;p.forEach(function(e){return e&&e()}),a.a.render(r.a.createElement(e,null),m,f)}(l)},0:function(e,n,t){e.exports=t("./.docz/app/index.jsx")}});
//# sourceMappingURL=app.b68715e5f28cd8fdf97a.js.map