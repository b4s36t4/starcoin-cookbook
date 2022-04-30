"use strict";(self.webpackChunkstarcoin_cookbook=self.webpackChunkstarcoin_cookbook||[]).push([[3497],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(g,a(a({ref:t},u),{},{components:r})):n.createElement(g,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6417:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],c={},l="Install by docker",s={unversionedId:"getting-started/install/install-by-docker",id:"getting-started/install/install-by-docker",title:"Install by docker",description:"Starcoin supports running nodes through Docker, and provides starcoin application images, which can be directly pulled to run locally.",source:"@site/docs/02-getting-started/01-install/02-install-by-docker.md",sourceDirName:"02-getting-started/01-install",slug:"/getting-started/install/install-by-docker",permalink:"/starcoin-cookbook/docs/getting-started/install/install-by-docker",editUrl:"https://github.com/starcoinorg/starcoin-cookbook/edit/main/docs/02-getting-started/01-install/02-install-by-docker.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Building Starcoin from source",permalink:"/starcoin-cookbook/docs/getting-started/install/build"},next:{title:"Setting up a node and participating in a network",permalink:"/starcoin-cookbook/docs/getting-started/setup/"}},u={},p=[{value:"Pull the Docker image",id:"pull-the-docker-image",level:2},{value:"Image tag description",id:"image-tag-description",level:2},{value:"Run check",id:"run-check",level:2},{value:"Supported image repositories",id:"supported-image-repositories",level:2}],d={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"install-by-docker"},"Install by docker"),(0,i.kt)("p",null,"Starcoin supports running nodes through Docker, and provides ",(0,i.kt)("inlineCode",{parentName:"p"},"starcoin")," application images, which can be directly pulled to run locally."),(0,i.kt)("h2",{id:"pull-the-docker-image"},"Pull the Docker image"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"docker pull starcoin/starcoin:latest\n")),(0,i.kt)("p",null,"Starcoin binary at ",(0,i.kt)("inlineCode",{parentName:"p"},"/starcoin")," dir in the docker image."),(0,i.kt)("h2",{id:"image-tag-description"},"Image tag description"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"latest: indicates the latest release version, including pre-release versions."),(0,i.kt)("li",{parentName:"ul"},"v1.10.1: indicates the v1.10.1 version of Starcoin."),(0,i.kt)("li",{parentName:"ul"},"master: The image built from the master branch of the Starcoin repository."),(0,i.kt)("li",{parentName:"ul"},"sha-7ab632b: indicates the version built from the git commit ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/starcoinorg/starcoin/commit/7ab632b36a039439d424c83951ca8d2366d311c7"},"7ab632b"),". ",(0,i.kt)("inlineCode",{parentName:"li"},"7ab632b")," is the first 7 chars of the commit's hash.")),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"docker pull starcoin/starcoin:v1.10.1\ndocker pull starcoin/starcoin:master\ndocker pull starcoin/starcoin:sha-7ab632b\n")),(0,i.kt)("h2",{id:"run-check"},"Run check"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker container run -it starcoin/starcoin:latest bash\n\n# Note: When the prompt changes, it means that the interactive operation has been successfully entered\nroot@4d622b3fc3b4:/# ls\nbin  boot  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  starcoin  sys  tmp  usr  var\n\n# The version information is successfully output, indicating that the installation is successful\nroot@4d622b3fc3b4:/# ./starcoin/starcoin --version\nstarcoin 1.11.7-rc (build:1.11.7-rc)\n")),(0,i.kt)("h2",{id:"supported-image-repositories"},"Supported image repositories"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Docker hub: ",(0,i.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/starcoin/starcoin/"},"https://hub.docker.com/r/starcoin/starcoin/")),(0,i.kt)("li",{parentName:"ul"},"Github package: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/starcoinorg/starcoin/pkgs/container/starcoin"},"https://github.com/starcoinorg/starcoin/pkgs/container/starcoin"))))}m.isMDXComponent=!0}}]);