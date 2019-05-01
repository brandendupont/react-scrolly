!function(e){function n(n){for(var r,o,c=n[0],i=n[1],s=n[2],a=n[3]||[],l=0,d=[];l<c.length;l++)o=c[l],D[o]&&d.push(D[o][0]),D[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(R&&R(n),a.forEach(function(e){if(void 0===D[e]){D[e]=null;var n=document.createElement("link");n.crossOrigin="anonymous",H.nc&&n.setAttribute("nonce",H.nc),n.rel="prefetch",n.as="script",n.href=A(e),document.head.appendChild(n)}});d.length;)d.shift()();return T.push.apply(T,s||[]),t()}function t(){for(var e,n=0;n<T.length;n++){for(var t=T[n],r=!0,o=1;o<t.length;o++){var c=t[o];0!==D[c]&&(r=!1)}r&&(T.splice(n--,1),e=H(H.s=t[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,n){if(!S[e]||!x[e])return;for(var t in x[e]=!1,n)Object.prototype.hasOwnProperty.call(n,t)&&(m[t]=n[t]);0===--y&&0===b&&O()}(e,n),r&&r(e,n)};var o,c=!0,i="06e1f1d1538aef15a9ff",s=1e4,a={},l=[],d=[];function u(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"===typeof e)n._selfAccepted=e;else if("object"===typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"===typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},check:P,apply:E,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var n=p.indexOf(e);n>=0&&p.splice(n,1)},data:a[e]};return o=void 0,n}var p=[],f="idle";function g(e){f=e;for(var n=0;n<p.length;n++)p[n].call(null,e)}var h,m,v,y=0,b=0,k={},x={},S={};function w(e){return+e+""===e?+e:e}function P(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return c=e,g("check"),(n=s,n=n||1e4,new Promise(function(e,t){if("undefined"===typeof XMLHttpRequest)return t(new Error("No browser support"));try{var r=new XMLHttpRequest,o=H.p+""+i+".hot-update.json";r.open("GET",o,!0),r.timeout=n,r.send(null)}catch(c){return t(c)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)t(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)t(new Error("Manifest request to "+o+" failed."));else{try{var n=JSON.parse(r.responseText)}catch(c){return void t(c)}e(n)}}})).then(function(e){if(!e)return g("idle"),null;x={},k={},S=e.c,v=e.h,g("prepare");var n=new Promise(function(e,n){h={resolve:e,reject:n}});for(var t in m={},D)_(t);return"prepare"===f&&0===b&&0===y&&O(),n});var n}function _(e){S[e]?(x[e]=!0,y++,function(e){var n=document.createElement("script");n.charset="utf-8",n.src=H.p+""+e+"."+i+".hot-update.js",n.crossOrigin="anonymous",document.head.appendChild(n)}(e)):k[e]=!0}function O(){g("ready");var e=h;if(h=null,e)if(c)Promise.resolve().then(function(){return E(c)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var t in m)Object.prototype.hasOwnProperty.call(m,t)&&n.push(w(t));e.resolve(n)}}function E(n){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var t,r,o,c,s;function d(e){for(var n=[e],t={},r=n.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,s=o.chain;if((c=j[i])&&!c.hot._selfAccepted){if(c.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:i};if(c.hot._main)return{type:"unaccepted",chain:s,moduleId:i};for(var a=0;a<c.parents.length;a++){var l=c.parents[a],d=j[l];if(d){if(d.hot._declinedDependencies[i])return{type:"declined",chain:s.concat([l]),moduleId:i,parentId:l};-1===n.indexOf(l)&&(d.hot._acceptedDependencies[i]?(t[l]||(t[l]=[]),u(t[l],[i])):(delete t[l],n.push(l),r.push({chain:s.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function u(e,n){for(var t=0;t<n.length;t++){var r=n[t];-1===e.indexOf(r)&&e.push(r)}}n=n||{};var p={},h=[],y={},b=function(){console.warn("[HMR] unexpected require("+x.moduleId+") to disposed module")};for(var k in m)if(Object.prototype.hasOwnProperty.call(m,k)){var x;s=w(k);var P=!1,_=!1,O=!1,E="";switch((x=m[k]?d(s):{type:"disposed",moduleId:k}).chain&&(E="\nUpdate propagation: "+x.chain.join(" -> ")),x.type){case"self-declined":n.onDeclined&&n.onDeclined(x),n.ignoreDeclined||(P=new Error("Aborted because of self decline: "+x.moduleId+E));break;case"declined":n.onDeclined&&n.onDeclined(x),n.ignoreDeclined||(P=new Error("Aborted because of declined dependency: "+x.moduleId+" in "+x.parentId+E));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(x),n.ignoreUnaccepted||(P=new Error("Aborted because "+s+" is not accepted"+E));break;case"accepted":n.onAccepted&&n.onAccepted(x),_=!0;break;case"disposed":n.onDisposed&&n.onDisposed(x),O=!0;break;default:throw new Error("Unexception type "+x.type)}if(P)return g("abort"),Promise.reject(P);if(_)for(s in y[s]=m[s],u(h,x.outdatedModules),x.outdatedDependencies)Object.prototype.hasOwnProperty.call(x.outdatedDependencies,s)&&(p[s]||(p[s]=[]),u(p[s],x.outdatedDependencies[s]));O&&(u(h,[x.moduleId]),y[s]=b)}var T,A=[];for(r=0;r<h.length;r++)s=h[r],j[s]&&j[s].hot._selfAccepted&&A.push({module:s,errorHandler:j[s].hot._selfAccepted});g("dispose"),Object.keys(S).forEach(function(e){!1===S[e]&&function(e){delete D[e]}(e)});for(var I,M,U=h.slice();U.length>0;)if(s=U.pop(),c=j[s]){var R={},C=c.hot._disposeHandlers;for(o=0;o<C.length;o++)(t=C[o])(R);for(a[s]=R,c.hot.active=!1,delete j[s],delete p[s],o=0;o<c.children.length;o++){var q=j[c.children[o]];q&&((T=q.parents.indexOf(s))>=0&&q.parents.splice(T,1))}}for(s in p)if(Object.prototype.hasOwnProperty.call(p,s)&&(c=j[s]))for(M=p[s],o=0;o<M.length;o++)I=M[o],(T=c.children.indexOf(I))>=0&&c.children.splice(T,1);for(s in g("apply"),i=v,y)Object.prototype.hasOwnProperty.call(y,s)&&(e[s]=y[s]);var z=null;for(s in p)if(Object.prototype.hasOwnProperty.call(p,s)&&(c=j[s])){M=p[s];var B=[];for(r=0;r<M.length;r++)if(I=M[r],t=c.hot._acceptedDependencies[I]){if(-1!==B.indexOf(t))continue;B.push(t)}for(r=0;r<B.length;r++){t=B[r];try{t(M)}catch(L){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:s,dependencyId:M[r],error:L}),n.ignoreErrored||z||(z=L)}}}for(r=0;r<A.length;r++){var J=A[r];s=J.module,l=[s];try{H(s)}catch(L){if("function"===typeof J.errorHandler)try{J.errorHandler(L)}catch(N){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:N,originalError:L}),n.ignoreErrored||z||(z=N),z||(z=L)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:s,error:L}),n.ignoreErrored||z||(z=L)}}return z?(g("fail"),Promise.reject(z)):(g("idle"),new Promise(function(e){e(h)}))}var j={},D={2:0},T=[];function A(e){return H.p+"static/js/"+({1:"docs-src-pinning-sections-sticky-plot~docs-src-pinning-sections-sticky-scene~docs-src-revealing-anim~a7ac5c86",3:"docs-src-index",4:"docs-src-pinning-sections-sticky-plot",5:"docs-src-pinning-sections-sticky-scene",6:"docs-src-revealing-animations-trigger",7:"docs-src-scroll-tracking-plot",8:"docs-src-scroll-tracking-section"}[e]||e)+"."+{1:"9d5f2650",3:"c2a83899",4:"5a63405b",5:"3e71c65c",6:"f034023b",7:"518cde0c",8:"f952d136"}[e]+".js"}function H(n){if(j[n])return j[n].exports;var t=j[n]={i:n,l:!1,exports:{},hot:u(n),parents:(d=l,l=[],d),children:[]};return e[n].call(t.exports,t,t.exports,function(e){var n=j[e];if(!n)return H;var t=function(t){return n.hot.active?(j[t]?-1===j[t].parents.indexOf(e)&&j[t].parents.push(e):(l=[e],o=t),-1===n.children.indexOf(t)&&n.children.push(t)):(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),l=[]),H(t)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return H[e]},set:function(n){H[e]=n}}};for(var c in H)Object.prototype.hasOwnProperty.call(H,c)&&"e"!==c&&"t"!==c&&Object.defineProperty(t,c,r(c));return t.e=function(e){return"ready"===f&&g("prepare"),b++,H.e(e).then(n,function(e){throw n(),e});function n(){b--,"prepare"===f&&(k[e]||_(e),0===b&&0===y&&O())}},t.t=function(e,n){return 1&n&&(e=t(e)),H.t(e,-2&n)},t}(n)),t.l=!0,t.exports}H.e=function(e){var n=[],t=D[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise(function(n,r){t=D[e]=[n,r]});n.push(t[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,H.nc&&c.setAttribute("nonce",H.nc),c.src=A(e),0!==c.src.indexOf(window.location.origin+"/")&&(c.crossOrigin="anonymous"),o=function(n){c.onerror=c.onload=null,clearTimeout(i);var t=D[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src,s=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");s.type=r,s.request=o,t[1](s)}D[e]=void 0}};var i=setTimeout(function(){o({type:"timeout",target:c})},12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(n)},H.m=e,H.c=j,H.d=function(e,n,t){H.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},H.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},H.t=function(e,n){if(1&n&&(e=H(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(H.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)H.d(t,r,function(n){return e[n]}.bind(null,r));return t},H.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return H.d(n,"a",n),n},H.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},H.p="/react-scrolly/",H.oe=function(e){throw console.error(e),e},H.h=function(){return i};var I=window.webpackJsonp=window.webpackJsonp||[],M=I.push.bind(I);I.push=n,I=I.slice();for(var U=0;U<I.length;U++)n(I[U]);var R=M;n([[],{},0,[0,1,4,5,6,7,8,3]]),T.push([0,0]),t()}({"./.docz/app/db.json":function(e){e.exports={config:{title:"React-Scrolly",description:"My awesome app using docz",menu:["Introduction","Scroll Tracking","Pinning Sections","Revealing Animations"],version:"0.0.1-beta.1",repository:"https://github.com/garfieldduck/react-scrolly",native:!1,codeSandbox:!0,themeConfig:{mode:"light",codemirrorTheme:"material",showPlaygroundEditor:!0,colors:{primary:"#ef3e36",background:"#f3f3f3",text:"#282c34",blue:"#1b76f1",sidebarBg:"#f3f3f3",sidebarBorder:"#a3a4a5",border:"#a3a4a5",codeBg:"#ffffff",codeColor:"#ef3e36",theadColor:"#79878e"},logo:{src:"https://user-images.githubusercontent.com/1139698/57021934-37c79e00-6c60-11e9-8451-2b0cf4016492.png",width:200},styles:{body:["\n        font-family: 'Source Sans Pro',helvetica,'PingFang TC','Noto Sans TC','Microsoft JhengHei',sans-serif;\n        line-height: 1.6;\n        img {\n          max-width: 100%;\n        }\n      "],playground:["\n        background: #ffffff;\n      "]}},separator:"-",typescript:!0,public:"docs/public",hashRouter:!0,htmlContext:{favicon:"https://user-images.githubusercontent.com/1139698/57021930-34341700-6c60-11e9-876f-62d613f02178.png"}},entries:[{key:"docs/src/index.mdx",value:{name:"Get Started",route:"/react-scrolly/",menu:"Introduction",id:"52b2f895150a9f6ae98abe385152a5b5",filepath:"docs/src/index.mdx",link:"",slug:"docs-src-index",headings:[{slug:"introduction",depth:1,value:"Introduction"},{slug:"scrolly-telling-made-easy",depth:2,value:"Scrolly-telling made easy"},{slug:"definition-of-the-scrolled-ratio",depth:3,value:"Definition of the scrolled ratio"},{slug:"why-is-it-performant",depth:2,value:"Why is it performant?"},{slug:"how-to-design-scrolly-telling",depth:2,value:"How to design scrolly-telling"}]}},{key:"docs/src/PinningSections/StickyPlot.mdx",value:{name:"2. StickyPlot",route:"/react-scrolly/pinning_sections/sticky_plot",menu:"Pinning Sections",id:"5dd36fe929fc77df59780fdb3e3736cc",filepath:"docs/src/PinningSections/StickyPlot.mdx",link:"",slug:"docs-src-pinning-sections-sticky-plot",headings:[{slug:"stickyplot",depth:1,value:"StickyPlot"},{slug:"example",depth:2,value:"Example"},{slug:"usage",depth:2,value:"Usage"}]}},{key:"docs/src/PinningSections/StickyScene.mdx",value:{name:"1. StickyScene",route:"/react-scrolly/pinning_sections/sticky_scene",menu:"Pinning Sections",id:"2128ebb21438d212e8db37abdbd72c53",filepath:"docs/src/PinningSections/StickyScene.mdx",link:"",slug:"docs-src-pinning-sections-sticky-scene",headings:[{slug:"stickyscene",depth:1,value:"StickyScene"},{slug:"example",depth:2,value:"Example"},{slug:"usage",depth:2,value:"Usage"}]}},{key:"docs/src/RevealingAnimations/Trigger.mdx",value:{name:"Trigger",route:"/react-scrolly/revealing_animations/use_intersecting_trigger",menu:"Revealing Animations",id:"fbd666833458a8e0f98d2d4c93ad7e81",filepath:"docs/src/RevealingAnimations/Trigger.mdx",link:"",slug:"docs-src-revealing-animations-trigger",headings:[{slug:"trigger",depth:1,value:"Trigger"},{slug:"example",depth:2,value:"Example"},{slug:"usage",depth:2,value:"Usage"},{slug:"advanced-usage",depth:2,value:"Advanced Usage"},{slug:"example-of-trackonce",depth:3,value:"Example of trackOnce"}]}},{key:"docs/src/ScrollTracking/Plot.mdx",value:{name:"2. Plot",route:"/react-scrolly/scroll_tracking/plot",menu:"Scroll Tracking",id:"5dced2982fb305a362935bb00b51f816",filepath:"docs/src/ScrollTracking/Plot.mdx",link:"",slug:"docs-src-scroll-tracking-plot",headings:[{slug:"plot",depth:1,value:"Plot"},{slug:"track-scroll-progress-of-the-section-closest-to-the-bottom-of-the-viewport",depth:2,value:"Track scroll progress of the section closest to the bottom of the viewport"},{slug:"example",depth:2,value:"Example"},{slug:"usage",depth:2,value:"Usage"},{slug:"stickyplot",depth:3,value:"<StickyPlot>"},{slug:"properties",depth:2,value:"Properties"},{slug:"advanced-usages",depth:2,value:"Advanced usages"},{slug:"useactivesectioninfo-hook",depth:3,value:"useActiveSectionInfo  hook"}]}},{key:"docs/src/ScrollTracking/Section.mdx",value:{name:"1. Section",route:"/react-scrolly/scroll_tracking/section",menu:"Scroll Tracking",id:"d217f6d6cff2cd7189af62d4f4d09241",filepath:"docs/src/ScrollTracking/Section.mdx",link:"",slug:"docs-src-scroll-tracking-section",headings:[{slug:"section",depth:1,value:"Section"},{slug:"basic-scroll-tracking-of-a-component",depth:2,value:"Basic scroll tracking of a component"},{slug:"example",depth:2,value:"Example"},{slug:"usage",depth:2,value:"Usage"},{slug:"make-sure-to-wrap-pagecontext-at-the-page-level",depth:3,value:"Make sure to wrap  <PageContext>  at the page level"},{slug:"use-section-to-get-sectioninfo",depth:3,value:"Use  <Section>  to get  sectionInfo"},{slug:"properties",depth:2,value:"Properties"},{slug:"advanced-usages",depth:2,value:"Advanced usages"},{slug:"usesectionratio-hook",depth:3,value:"useSectionRatio  hook"},{slug:"adding-trackingid-to-sections-you-want-to-track-in-plot",depth:3,value:"Adding  trackingId  to sections you want to track in  <Plot>"},{slug:"complete-example",depth:2,value:"Complete Example"}]}}],props:null}},"./.docz/app/index.jsx":function(e,n,t){"use strict";t.r(n);var r=t("./node_modules/react/index.js"),o=t.n(r),c=t("./node_modules/react-dom/index.js"),i=t.n(c),s=t("./node_modules/docz/dist/index.esm.js"),a=t("./node_modules/docz-theme-default/dist/index.esm.js"),l={"docs/src/index.mdx":function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,"./docs/src/index.mdx"))},"docs/src/PinningSections/StickyPlot.mdx":function(){return Promise.all([t.e(0),t.e(1),t.e(4)]).then(t.bind(null,"./docs/src/PinningSections/StickyPlot.mdx"))},"docs/src/PinningSections/StickyScene.mdx":function(){return Promise.all([t.e(0),t.e(1),t.e(5)]).then(t.bind(null,"./docs/src/PinningSections/StickyScene.mdx"))},"docs/src/RevealingAnimations/Trigger.mdx":function(){return Promise.all([t.e(0),t.e(1),t.e(6)]).then(t.bind(null,"./docs/src/RevealingAnimations/Trigger.mdx"))},"docs/src/ScrollTracking/Plot.mdx":function(){return Promise.all([t.e(0),t.e(1),t.e(7)]).then(t.bind(null,"./docs/src/ScrollTracking/Plot.mdx"))},"docs/src/ScrollTracking/Section.mdx":function(){return Promise.all([t.e(0),t.e(1),t.e(8)]).then(t.bind(null,"./docs/src/ScrollTracking/Section.mdx"))}},d=t("./.docz/app/db.json"),u=function(){return o.a.createElement(a.a,{linkComponent:s.b,db:d},o.a.createElement(s.e,{imports:l}))},p=[],f=[],g=function(){return f.forEach(function(e){return e&&e()})},h=document.querySelector("#root");!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u;p.forEach(function(e){return e&&e()}),i.a.render(o.a.createElement(e,null),h,g)}(u)},0:function(e,n,t){e.exports=t("./.docz/app/index.jsx")}});
//# sourceMappingURL=app.06e1f1d1538aef15a9ff.js.map