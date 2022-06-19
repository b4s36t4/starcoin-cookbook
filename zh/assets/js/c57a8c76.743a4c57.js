"use strict";(self.webpackChunkstarcoin_cookbook=self.webpackChunkstarcoin_cookbook||[]).push([[6358],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return h}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(t),h=o,d=m["".concat(i,".").concat(h)]||m[h]||l[h]||a;return t?n.createElement(d,c(c({ref:r},u),{},{components:t})):n.createElement(d,c({ref:r},u))}));function h(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=m;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var p=2;p<a;p++)c[p]=t[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5613:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return l}});var n=t(7462),o=t(3366),a=(t(7294),t(3905)),c=["components"],s={},i="Starcoin Json RPC",p={unversionedId:"web3/starcoin-json-rpc",id:"web3/starcoin-json-rpc",title:"Starcoin Json RPC",description:"account. \u548c node_manager. \u5728 \u4e3b\u7f51\u548c Barnard/Proxima/Halley \u7b49\u6d4b\u8bd5\u7f51\u4e0a\u4e0d\u53ef\u8bbf\u95ee\u3002 \u53ea\u6709\u4f60\u81ea\u5df1\u642d\u5efa\u7684\u8282\u70b9\u542f\u52a8\u65f6\u8bbe\u7f6e\u4e86 public \u624d\u80fd\u8bbf\u95ee\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/04-web3/02-starcoin-json-rpc.md",sourceDirName:"04-web3",slug:"/web3/starcoin-json-rpc",permalink:"/starcoin-cookbook/zh/docs/web3/starcoin-json-rpc",editUrl:"https://github.com/starcoinorg/starcoin-cookbook/edit/main/docs/04-web3/02-starcoin-json-rpc.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"RPC API",permalink:"/starcoin-cookbook/zh/docs/web3/starmask/rpc-api"},next:{title:"Starcoin sdk",permalink:"/starcoin-cookbook/zh/docs/web3/starcoin-sdks"}},u={},l=[{value:"account",id:"account",level:2},{value:"chain",id:"chain",level:2},{value:"contract_api",id:"contract_api",level:2},{value:"debug",id:"debug",level:2},{value:"miner",id:"miner",level:2},{value:"network_manager",id:"network_manager",level:2},{value:"node",id:"node",level:2},{value:"node_manager",id:"node_manager",level:2},{value:"state",id:"state",level:2},{value:"sync_manager",id:"sync_manager",level:2},{value:"txpool",id:"txpool",level:2}],m={toc:l};function h(e){var r=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"starcoin-json-rpc"},"Starcoin Json RPC"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"account.*")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"node_manager.*")," \u5728 \u4e3b\u7f51\u548c Barnard/Proxima/Halley \u7b49\u6d4b\u8bd5\u7f51\u4e0a\u4e0d\u53ef\u8bbf\u95ee\u3002 \u53ea\u6709\u4f60\u81ea\u5df1\u642d\u5efa\u7684\u8282\u70b9\u542f\u52a8\u65f6\u8bbe\u7f6e\u4e86 public \u624d\u80fd\u8bbf\u95ee\u3002")),(0,a.kt)("h2",{id:"account"},(0,a.kt)("a",{parentName:"h2",href:"https://playground.open-rpc.org/?schemaUrl=https://raw.githubusercontent.com/starcoinorg/starcoin/master/rpc/generated_rpc_schema/account.json"},"account")),(0,a.kt)("h2",{id:"chain"},(0,a.kt)("a",{parentName:"h2",href:"https://playground.open-rpc.org/?schemaUrl=https://raw.githubusercontent.com/starcoinorg/starcoin/master/rpc/generated_rpc_schema/chain.json"},"chain")),(0,a.kt)("h2",{id:"contract_api"},(0,a.kt)("a",{parentName:"h2",href:"https://playground.open-rpc.org/?schemaUrl=https://raw.githubusercontent.com/starcoinorg/starcoin/master/rpc/generated_rpc_schema/contract_api.json"},"contract_api")),(0,a.kt)("h2",{id:"debug"},(0,a.kt)("a",{parentName:"h2",href:"https://playground.open-rpc.org/?schemaUrl=https://raw.githubusercontent.com/starcoinorg/starcoin/master/rpc/generated_rpc_schema/debug.json"},"debug")),(0,a.kt)("h2",{id:"miner"},(0,a.kt)("a",{parentName:"h2",href:"https://playground.open-rpc.org/?schemaUrl=https://raw.githubusercontent.com/starcoinorg/starcoin/master/rpc/generated_rpc_schema/miner.json"},"miner")),(0,a.kt)("h2",{id:"network_manager"},(0,a.kt)("a",{parentName:"h2",href:"https://playground.open-rpc.org/?schemaUrl=https://raw.githubusercontent.com/starcoinorg/starcoin/master/rpc/generated_rpc_schema/network_manager.json"},"network_manager")),(0,a.kt)("h2",{id:"node"},(0,a.kt)("a",{parentName:"h2",href:"https://playground.open-rpc.org/?schemaUrl=https://raw.githubusercontent.com/starcoinorg/starcoin/master/rpc/generated_rpc_schema/node.json"},"node")),(0,a.kt)("h2",{id:"node_manager"},(0,a.kt)("a",{parentName:"h2",href:"https://playground.open-rpc.org/?schemaUrl=https://raw.githubusercontent.com/starcoinorg/starcoin/master/rpc/generated_rpc_schema/node_manager.json"},"node_manager")),(0,a.kt)("h2",{id:"state"},(0,a.kt)("a",{parentName:"h2",href:"https://playground.open-rpc.org/?schemaUrl=https://raw.githubusercontent.com/starcoinorg/starcoin/master/rpc/generated_rpc_schema/state.json"},"state")),(0,a.kt)("h2",{id:"sync_manager"},(0,a.kt)("a",{parentName:"h2",href:"https://playground.open-rpc.org/?schemaUrl=https://raw.githubusercontent.com/starcoinorg/starcoin/master/rpc/generated_rpc_schema/sync_manager.json"},"sync_manager")),(0,a.kt)("h2",{id:"txpool"},(0,a.kt)("a",{parentName:"h2",href:"https://playground.open-rpc.org/?schemaUrl=https://raw.githubusercontent.com/starcoinorg/starcoin/master/rpc/generated_rpc_schema/txpool.json"},"txpool")))}h.isMDXComponent=!0}}]);