"use strict";(self.webpackChunkstarcoin_cookbook=self.webpackChunkstarcoin_cookbook||[]).push([[1930],{3905:function(e,a,t){t.d(a,{Zo:function(){return i},kt:function(){return f}});var n=t(7294);function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){c(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function b(e,a){if(null==e)return{};var t,n,c=function(e,a){if(null==e)return{};var t,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(c[t]=e[t]);return c}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var d=n.createContext({}),o=function(e){var a=n.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},i=function(e){var a=o(e.components);return n.createElement(d.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,c=e.mdxType,r=e.originalType,d=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),u=o(t),f=c,s=u["".concat(d,".").concat(f)]||u[f]||p[f]||r;return t?n.createElement(s,l(l({ref:a},i),{},{components:t})):n.createElement(s,l({ref:a},i))}));function f(e,a){var t=arguments,c=a&&a.mdxType;if("string"==typeof e||c){var r=t.length,l=new Array(r);l[0]=u;var b={};for(var d in a)hasOwnProperty.call(a,d)&&(b[d]=a[d]);b.originalType=e,b.mdxType="string"==typeof e?e:c,l[1]=b;for(var o=2;o<r;o++)l[o]=t[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5020:function(e,a,t){t.r(a),t.d(a,{assets:function(){return d},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return r},metadata:function(){return b},toc:function(){return o}});var n=t(3117),c=(t(7294),t(3905));const r={},l="\u591a\u7b7e\u8d26\u6237\u548c\u591a\u7b7e\u4ea4\u6613",b={unversionedId:"getting-started/accounts/multisig-account",id:"getting-started/accounts/multisig-account",title:"\u591a\u7b7e\u8d26\u6237\u548c\u591a\u7b7e\u4ea4\u6613",description:"\u672c\u8282\u4ecb\u7ecd\u591a\u7b7e\u8d26\u6237\u7684\u4f7f\u7528\uff0c\u5305\u62ec\u5982\u4f55\u901a\u8fc7 CLI \u5728\u94fe\u4e0a\u521b\u5efa\u591a\u7b7e\u8d26\u6237\uff0c\u4ee5\u53ca\u5982\u4f55\u53d1\u8d77\u591a\u7b7e\u4ea4\u6613\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/02-getting-started/03-accounts/3.multisig-account.md",sourceDirName:"02-getting-started/03-accounts",slug:"/getting-started/accounts/multisig-account",permalink:"/starcoin-cookbook/zh/docs/getting-started/accounts/multisig-account",draft:!1,editUrl:"https://github.com/starcoinorg/starcoin-cookbook/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/02-getting-started/03-accounts/3.multisig-account.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7b2c\u4e00\u7b14\u94fe\u4e0a\u4ea4\u6613",permalink:"/starcoin-cookbook/zh/docs/getting-started/accounts/first-transaction"},next:{title:"\u91cd\u7f6e\u8d26\u6237\u79c1\u94a5",permalink:"/starcoin-cookbook/zh/docs/getting-started/accounts/rotate-authentication-key"}},d={},o=[{value:"\u524d\u7f6e\u51c6\u5907",id:"\u524d\u7f6e\u51c6\u5907",level:2},{value:"\u751f\u6210\u591a\u7b7e\u8d26\u6237",id:"\u751f\u6210\u591a\u7b7e\u8d26\u6237",level:2},{value:"\u7ed9\u591a\u7b7e\u8d26\u6237\u8f6c\u8d26",id:"\u7ed9\u591a\u7b7e\u8d26\u6237\u8f6c\u8d26",level:2},{value:"\u53d1\u8d77\u591a\u7b7e\u4ea4\u6613",id:"\u53d1\u8d77\u591a\u7b7e\u4ea4\u6613",level:2},{value:"\u5176\u4ed6\u53c2\u4e0e\u8005\u7b7e\u540d",id:"\u5176\u4ed6\u53c2\u4e0e\u8005\u7b7e\u540d",level:2},{value:"\u63d0\u4ea4\u591a\u7b7e\u4ea4\u6613",id:"\u63d0\u4ea4\u591a\u7b7e\u4ea4\u6613",level:2},{value:"\u5176\u4ed6\u7684\u591a\u7b7e\u7ba1\u7406\u529e\u6cd5",id:"\u5176\u4ed6\u7684\u591a\u7b7e\u7ba1\u7406\u529e\u6cd5",level:2}],i={toc:o};function p(e){let{components:a,...t}=e;return(0,c.kt)("wrapper",(0,n.Z)({},i,t,{components:a,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"\u591a\u7b7e\u8d26\u6237\u548c\u591a\u7b7e\u4ea4\u6613"},"\u591a\u7b7e\u8d26\u6237\u548c\u591a\u7b7e\u4ea4\u6613"),(0,c.kt)("p",null,"\u672c\u8282\u4ecb\u7ecd\u591a\u7b7e\u8d26\u6237\u7684\u4f7f\u7528\uff0c\u5305\u62ec\u5982\u4f55\u901a\u8fc7 CLI \u5728\u94fe\u4e0a\u521b\u5efa\u591a\u7b7e\u8d26\u6237\uff0c\u4ee5\u53ca\u5982\u4f55\u53d1\u8d77\u591a\u7b7e\u4ea4\u6613\u3002\n\u5173\u4e8e\u591a\u7b7e\u8d26\u6237\u7684\u539f\u7406\u548c\u5b9e\u73b0\u8bf7\u53c2\u770b",(0,c.kt)("a",{parentName:"p",href:"../../concepts/account"},"\u8d26\u6237"),"\u6982\u5ff5\u7684\u591a\u7b7e\u8d26\u6237\u90e8\u5206\u3002"),(0,c.kt)("h2",{id:"\u524d\u7f6e\u51c6\u5907"},"\u524d\u7f6e\u51c6\u5907"),(0,c.kt)("p",null,"\u591a\u7b7e\u4ea4\u6613\u6d89\u53ca\u5230\u591a\u4e2a\u53c2\u4e0e\u8005\u3002\u8fd9\u91cc\u6211\u4eec\u7528 alice\uff0cbob \u548c tom \u4e09\u4e2a\u53c2\u4e0e\u8005\u6765\u8bf4\u660e\u591a\u7b7e\u4ea4\u6613\u7684\u6d41\u7a0b\u3002"),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},"\u9996\u5148\u4f60\u9700\u8981\u5728\u672c\u5730\u542f\u52a8\u4e09\u4e2a Starcoin \u7684 ",(0,c.kt)("inlineCode",{parentName:"li"},"dev")," \u8282\u70b9\uff0c\u5206\u522b\u5bf9\u5e94\u5230 alice, bob \u548c tom\uff0c\u540c\u65f6\u8fde\u63a5\u5230\u63a7\u5236\u53f0\u4e2d\u3002\n",(0,c.kt)("inlineCode",{parentName:"li"},"--discover-local")," \u9009\u9879\u53ef\u4ee5\u8ba9\u8282\u70b9\u53d1\u73b0\u672c\u5730\u5c40\u57df\u7f51\u5185\u7684\u5176\u4ed6\u8282\u70b9\uff0c\u7136\u540e\u8fde\u63a5\u6210\u4e00\u4e2a\u7f51\u7edc\u3002")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"% starcoin -n dev -d alice --discover-local true console\n% starcoin -n dev -d bob --discover-local true console\n% starcoin -n dev -d tom --discover-local true console\n")),(0,c.kt)("p",null,"\u6211\u4eec\u5c06\u4e09\u4e2a\u8282\u70b9\u63d0\u4f9b\u7684\u9ed8\u8ba4\u8d26\u6237\u5206\u522b\u4f5c\u4e3a alice\uff0cbob \u548c tom \u7684\u4e2a\u4eba\u8d26\u6237\u3002"),(0,c.kt)("p",null,"alice\uff0cbob \u548c tom \u4e09\u4e2a\u4eba\u7684\u4e2a\u4eba\u8d26\u6237\u5730\u5740\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-text"},"alice: 0x31515d36fa0b9e01bbdb1638d7c79e51\nbob: 0x991c2f856a1e32985d9793b449c0f9d3\ntom: 0x17183867a6142e821ee8a2dc6bb4d69d\n")),(0,c.kt)("ol",{start:2},(0,c.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5404\u81ea\u751f\u6210\u4e00\u4e2a\u65b0\u7684\u516c\u79c1\u94a5\u5bf9\uff1a")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'starcoin% account generate-keypair\n\n# \u5982\u4e0b\uff1a\n{\n  "ok": [\n    {\n      "address": "0xb6b67729f9ed83f3cf542952fbded752",\n      "auth_key": "0x459381118ed14d42097b977aae5fe1d4b6b67729f9ed83f3cf542952fbded752",\n      "private_key": "0xa530797cfb5fad79fe5ebf6add24dafbc141021a7d9c164840db0e29d944593d",\n      "public_key": "0xf423c3d02ac400037a40e8dbbf8b3c3e4545548ff71332737bbfe1abbef97cb5",\n      "receipt_identifier": "stc1pk6m8w20eakpl8n6599f0hhkh2gg3czy9"\n    }\n  ]\n}\n')),(0,c.kt)("p",null,"\u751f\u6210\u7684\u5bc6\u94a5\u5bf9\u67095\u4e2a\u5b57\u6bb5\u4fe1\u606f\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-text"},"address -> \u751f\u6210\u5730\u5740\uff08\u8fd9\u4e2a\u6f14\u793a\u4e2d\uff0c\u6ca1\u6709\u7528\u5904\uff09\nauth_key -> \u8ba4\u8bc1\u5bc6\u94a5\nprivate_key -> \u79c1\u94a5\npublic_key -> \u516c\u94a5\nreceipt_identifier -> \u6536\u6b3e\u8bc6\u522b\u7801\n")),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a"),"\u4e0d\u8981\u628a",(0,c.kt)("inlineCode",{parentName:"p"},"\u4e2a\u4eba\u8d26\u6237\u5730\u5740"),"\u548c ",(0,c.kt)("inlineCode",{parentName:"p"},"generate-keypair \u751f\u6210\u7684\u5730\u5740"),"\u6df7\u6dc6\uff01"),(0,c.kt)("p",null,"\u8fd9\u91cc\u5047\u8bbe\u4ed6\u4eec\u4e09\u8005\u751f\u6210\u5bf9\u5bc6\u94a5\u4fe1\u606f\uff08\u53ea\u7528\u4e8e\u4e3e\u4f8b\uff0c\u8bf7\u52ff\u4f7f\u7528\u5728\u6b63\u5f0f\u7f51\u7edc\u4e2d\uff09\u5206\u522b\u662f\uff1a"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},"alice:"),(0,c.kt)("ul",{parentName:"li"},(0,c.kt)("li",{parentName:"ul"},"pubkey: 0xf423c3d02ac400037a40e8dbbf8b3c3e4545548ff71332737bbfe1abbef97cb5"),(0,c.kt)("li",{parentName:"ul"},"prikey: 0xa530797cfb5fad79fe5ebf6add24dafbc141021a7d9c164840db0e29d944593d"))),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},"bob:"),(0,c.kt)("ul",{parentName:"li"},(0,c.kt)("li",{parentName:"ul"},"pubkey: 0x3639b4d6bc2d6588a6517f82ae1ff7fa1e64eb994a4d8ee6d6f948e1997b97d0"),(0,c.kt)("li",{parentName:"ul"},"prikey: 0x163e272560e53b75c087bc424fc7ff8cdbc0608ce4695f9bf69c8bd430a2bfeb"))),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},"tom:"),(0,c.kt)("ul",{parentName:"li"},(0,c.kt)("li",{parentName:"ul"},"pubkey: 0x7315e22ea8bd4aaa8bdfe65b4a3c9334d726e12c21881cbbe9a79f57538c6301"),(0,c.kt)("li",{parentName:"ul"},"prikey: 0xe38bfd1510a24c54d966dcbe13a4d06a798606f4b557823845156857b4dfb0b1")))),(0,c.kt)("ol",{start:3},(0,c.kt)("li",{parentName:"ol"},"\u6bcf\u4e2a\u63a7\u5236\u53f0\u90fd\u901a\u8fc7 ",(0,c.kt)("inlineCode",{parentName:"li"},"dev get-coin -v 10000STC")," \u547d\u4ee4\uff0c\u7ed9\u9ed8\u8ba4\u8d26\u6237\u83b7\u53d6 10000 \u4e2a STC\u3002")),(0,c.kt)("p",null,"\u505a\u5b8c\u4e0a\u8ff0\u51c6\u5907\u540e\uff0c\u4e0b\u9762\u5f00\u59cb\u6211\u4eec\u7684\u591a\u7b7e\u4ea4\u6613\u6d41\u7a0b\u3002\u4e3b\u8981\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},"\u9996\u5148\u6211\u4eec\u5728\u672c\u5730\u521b\u5efa\u4e00\u4e2a\u591a\u7b7e\u8d26\u6237\u3002"),(0,c.kt)("li",{parentName:"ol"},"\u7136\u540e\u8ba9 alice \u5411\u8fd9\u4e2a\u591a\u7b7e\u8d26\u6237\u8f6c\u4e00\u7b14 STC\u3002"),(0,c.kt)("li",{parentName:"ol"},"\u6700\u540e\u4ee5\u8fd9\u4e2a\u591a\u7b7e\u8d26\u6237\u7684\u540d\u4e49\u53d1\u8d77\u4e00\u7b14\u591a\u7b7e\u4ea4\u6613\uff1a\u4ece\u591a\u7b7e\u8d26\u6237\u7ed9 bob \u8f6c\u8d26\u3002")),(0,c.kt)("h2",{id:"\u751f\u6210\u591a\u7b7e\u8d26\u6237"},"\u751f\u6210\u591a\u7b7e\u8d26\u6237"),(0,c.kt)("p",null,"\u8fd9\u91cc\u5047\u8bbe\u8bfb\u8005\u4e86\u89e3\u591a\u7b7e\u8d26\u6237\u7684\u57fa\u672c\u6982\u5ff5\u3002"),(0,c.kt)("p",null,"\u8fd9\u4e00\u5c0f\u8282\u91cc\uff0c\u6211\u4eec\u4f1a\u521b\u5efa\u7531\u4e00\u4e2a\u7531",(0,c.kt)("strong",{parentName:"p"},"\u4e09\u4e2a"),"\u53c2\u4e0e\u8005\u5171\u540c\u7ef4\u62a4\u7684\u591a\u7b7e\u8d26\u6237\uff0c\u4ea4\u6613\u53ea\u9700\u8981\u5176\u4e2d",(0,c.kt)("strong",{parentName:"p"},"\u4e24\u4e2a"),"\u53c2\u4e0e\u8005\u7684\u7b7e\u540d\u5373\u53ef\uff08",(0,c.kt)("inlineCode",{parentName:"p"},"threshold=2"),"\uff09\u3002\n\u6211\u4eec\u4f7f\u7528\u4e0a\u9762\u751f\u6210\u7684\u516c\u79c1\u5bc6\u94a5\u5bf9\u548c ",(0,c.kt)("inlineCode",{parentName:"p"},"threshold=2")," \u6765\u751f\u6210\u591a\u7b7e\u8d26\u6237\u3002"),(0,c.kt)("p",null,"\u9996\u5148\u5206\u522b\u5728 alice\uff0cbob\uff0ctom \u7684\u8282\u70b9\u4e2d\u751f\u6210\u4e09\u4eba\u5171\u540c\u7ef4\u62a4\u7684\u591a\u7b7e\u8d26\u6237\u3002"),(0,c.kt)("p",null,"\u5728 alice \u7684\u63a7\u5236\u53f0\u4e2d\u6267\u884c\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"# --pubkey \u6307\u5b9a bob \u548c tom \u7684\u751f\u6210\u516c\u94a5\uff0c--prikey \u6307\u5b9a alice \u7684\u751f\u6210\u79c1\u94a5\nstarcoin% account import-multisig --pubkey 0x3639b4d6bc2d6588a6517f82ae1ff7fa1e64eb994a4d8ee6d6f948e1997b97d0 --pubkey 0x7315e22ea8bd4aaa8bdfe65b4a3c9334d726e12c21881cbbe9a79f57538c6301 --prikey 0xa530797cfb5fad79fe5ebf6add24dafbc141021a7d9c164840db0e29d944593d -t 2\n")),(0,c.kt)("p",null,"\u5728 bob \u7684\u63a7\u5236\u53f0\u4e2d\u6267\u884c\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"# --pubkey \u6307\u5b9a alice \u548c tom \u7684\u751f\u6210\u516c\u94a5\uff0c--prikey \u6307\u5b9a bob \u7684\u751f\u6210\u79c1\u94a5\nstarcoin% account import-multisig --pubkey 0xf423c3d02ac400037a40e8dbbf8b3c3e4545548ff71332737bbfe1abbef97cb5 --pubkey 0x7315e22ea8bd4aaa8bdfe65b4a3c9334d726e12c21881cbbe9a79f57538c6301 --prikey 0x163e272560e53b75c087bc424fc7ff8cdbc0608ce4695f9bf69c8bd430a2bfeb -t 2\n")),(0,c.kt)("p",null,"\u5728 tom \u7684 console \u4e2d\u6267\u884c\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"# --pubkey \u6307\u5b9a alice \u548c bob \u7684\u751f\u6210\u516c\u94a5\uff0c--prikey \u6307\u5b9a tom \u7684\u751f\u6210\u79c1\u94a5\nstarcoin% account import-multisig --pubkey 0xf423c3d02ac400037a40e8dbbf8b3c3e4545548ff71332737bbfe1abbef97cb5 --pubkey 0x3639b4d6bc2d6588a6517f82ae1ff7fa1e64eb994a4d8ee6d6f948e1997b97d0 --prikey 0xe38bfd1510a24c54d966dcbe13a4d06a798606f4b557823845156857b4dfb0b1 -t 2\n")),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"--pubkey")," \u9009\u9879\u6307\u5b9a ",(0,c.kt)("inlineCode",{parentName:"p"},"generate-keypair")," \u751f\u6210\u516c\u94a5\u800c\u4e0d\u662f\u4e2a\u4eba\u8d26\u6237\u7684\u516c\u94a5\uff0c",(0,c.kt)("inlineCode",{parentName:"p"},"--prikey")," \u9009\u9879\u6307\u5b9a ",(0,c.kt)("inlineCode",{parentName:"p"},"generate-keypair")," \u751f\u6210\u7684\u79c1\u94a5\u800c\u4e0d\u662f\u4e2a\u4eba\u8d26\u6237\u7684\u79c1\u94a5\uff0c",(0,c.kt)("inlineCode",{parentName:"p"},"-t")," \u9009\u9879\u6307\u5b9a\u6240\u9700\u7684\u7b7e\u540d\u6570\uff0c\u5373 ",(0,c.kt)("inlineCode",{parentName:"p"},"threshold"),"\u3002"),(0,c.kt)("p",null,"\u5206\u522b\u5728\u4e09\u4e2a\u63a7\u5236\u53f0\u6267\u884c\u5b8c\u4e0a\u8ff0\u547d\u4ee4\u540e\uff0c\u4f60\u4f1a\u53d1\u73b0\uff0c\u4e09\u4e2a\u547d\u4ee4\u90fd\u751f\u6210\u4e86\u76f8\u540c\u7684",(0,c.kt)("strong",{parentName:"p"},"\u591a\u7b7e\u8d26\u6237"),"\u4fe1\u606f\uff08\u6ce8\u610f\uff1a\u79c1\u94a5\u4e0d\u540c\uff0c\u89c1\u4e0b\u6587\u8bf4\u660e\uff09\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "ok": {\n    "address": "0x8afd731146fbc206d56265adedb4b50a",\n    "is_default": false,\n    "is_readonly": false,\n    "public_key": "0x3639b4d6bc2d6588a6517f82ae1ff7fa1e64eb994a4d8ee6d6f948e1997b97d07315e22ea8bd4aaa8bdfe65b4a3c9334d726e12c21881cbbe9a79f57538c6301f423c3d02ac400037a40e8dbbf8b3c3e4545548ff71332737bbfe1abbef97cb502",\n    "receipt_identifier": "stc1p3t7hxy2xl0pqd4tzvkk7md94pgvvpcut"\n  }\n}\n')),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"\u7406\u89e3\u591a\u7b7e\u8d26\u6237\u7684\u516c\u94a5\u548c\u79c1\u94a5\uff1a")),(0,c.kt)("p",null,"\u516c\u94a5\uff1a\u53ef\u4ee5\u770b\u5230\u8fd9\u4e2a\u591a\u7b7e\u8d26\u6237\u7684\u516c\u94a5\u975e\u5e38\u957f\uff0c\u662f\u7531\u591a\u4e2a\u5355\u7b7e\u79c1\u94a5\u751f\u6210\u7684\u516c\u94a5\u62fc\u63a5\u800c\u6210\u3002\u591a\u7b7e\u516c\u94a5\u662f\u516c\u5f00\u7684\uff0c\u6bcf\u4e2a\u4eba\u90fd\u6301\u6709\u76f8\u540c\u7684\u591a\u7b7e\u516c\u94a5\u3002"),(0,c.kt)("p",null,"\u79c1\u94a5\uff1a\u591a\u7b7e\u8d26\u6237\u7684\u79c1\u94a5\u662f\u7531\u591a\u4e2a\u5355\u7b7e\u79c1\u94a5\u62fc\u63a5\u800c\u6210\uff0c\u6bcf\u4e2a\u4eba\u638c\u63e1 ",(0,c.kt)("inlineCode",{parentName:"p"},"1/n"),"\u3002\u53ef\u4ee5\u5206\u522b\u5728\u4e09\u4e2aconsole\u4e2d\u6267\u884c ",(0,c.kt)("inlineCode",{parentName:"p"},"account export 0x8afd731146fbc206d56265adedb4b50a")," \u67e5\u770b\u6bcf\u4e2a\u4eba\u638c\u63e1\u7684\u79c1\u94a5\u5e76\u8fdb\u884c\u5bf9\u6bd4\u3002"),(0,c.kt)("p",null,"\u67e5\u770b\u591a\u7b7e\u8d26\u6237\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'starcoin% account show 0x8afd731146fbc206d56265adedb4b50a\n{\n  "ok": {\n    "account": {\n      "address": "0x8afd731146fbc206d56265adedb4b50a",\n      "is_default": false,\n      "is_readonly": false,\n      "public_key": "0x3639b4d6bc2d6588a6517f82ae1ff7fa1e64eb994a4d8ee6d6f948e1997b97d07315e22ea8bd4aaa8bdfe65b4a3c9334d726e12c21881cbbe9a79f57538c6301f423c3d02ac400037a40e8dbbf8b3c3e4545548ff71332737bbfe1abbef97cb502",\n      "receipt_identifier": "stc1p3t7hxy2xl0pqd4tzvkk7md94pgvvpcut"\n    },\n    "auth_key": "0xf112c676ef1a7bfbd29699f14a6260c88afd731146fbc206d56265adedb4b50a",\n    "balances": {},\n    "sequence_number": null\n  }\n}\n')),(0,c.kt)("h2",{id:"\u7ed9\u591a\u7b7e\u8d26\u6237\u8f6c\u8d26"},"\u7ed9\u591a\u7b7e\u8d26\u6237\u8f6c\u8d26"),(0,c.kt)("p",null,"\u5728\u8fd9\u4e00\u5c0f\u8282\uff0c\u6211\u4eec\u4ece tom \u8d26\u6237\u7ed9\u8fd9\u4e2a\u591a\u7b7e\u8d26\u6237\u8f6c 1000 \u4e2a STC\u3002"),(0,c.kt)("p",null,"\u5728 tom \u7684 Starcoin \u63a7\u5236\u53f0\u4e2d\u6267\u884c\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"starcoin% account transfer -r 0x8afd731146fbc206d56265adedb4b50a -v 1000000000000 -b\n")),(0,c.kt)("p",null,"\u518d\u67e5\u770b\u591a\u7b7e\u8d26\u6237\u7684\u4fe1\u606f\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'starcoin% account show 0x8afd731146fbc206d56265adedb4b50a\n{\n  "ok": {\n    "account": {\n      "address": "0x8afd731146fbc206d56265adedb4b50a",\n      "is_default": false,\n      "is_readonly": false,\n      "public_key": "0x3639b4d6bc2d6588a6517f82ae1ff7fa1e64eb994a4d8ee6d6f948e1997b97d07315e22ea8bd4aaa8bdfe65b4a3c9334d726e12c21881cbbe9a79f57538c6301f423c3d02ac400037a40e8dbbf8b3c3e4545548ff71332737bbfe1abbef97cb502",\n      "receipt_identifier": "stc1p3t7hxy2xl0pqd4tzvkk7md94pgvvpcut"\n    },\n    "auth_key": "0xf112c676ef1a7bfbd29699f14a6260c88afd731146fbc206d56265adedb4b50a",\n    "balances": {\n      "0x00000000000000000000000000000001::STC::STC": 1000000000000\n    },\n    "sequence_number": 0\n  }\n}\n')),(0,c.kt)("p",null,"\u6ce8\u610f ",(0,c.kt)("inlineCode",{parentName:"p"},"balances")," \u5b57\u6bb5\uff1a\u6b64\u65f6\u591a\u7b7e\u8d26\u6237\u5df2\u7ecf\u62e5\u6709\u4e86 1000 STC\u3002"),(0,c.kt)("h2",{id:"\u53d1\u8d77\u591a\u7b7e\u4ea4\u6613"},"\u53d1\u8d77\u591a\u7b7e\u4ea4\u6613"),(0,c.kt)("p",null,"\u73b0\u5728\u591a\u7b7e\u8d26\u6237\u6709\u4e86 1000 STC\u3002"),(0,c.kt)("p",null,"\u6211\u4eec\u6765\u53d1\u8d77\u4e00\u4e2a\u591a\u7b7e\u4ea4\u6613\uff1a\u4ece\u591a\u7b7e\u8d26\u6237\u7ed9 bob \u8f6c\u8d26 1 \u4e2a STC\u3002"),(0,c.kt)("p",null,"\u5728 tom \u7684 Starcoin \u63a7\u5236\u53f0\u4e2d\u6267\u884c\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"starcoin% account sign-multisig-txn -s 0x8afd731146fbc206d56265adedb4b50a --function 0x1::TransferScripts::peer_to_peer_v2 -t 0x1::STC::STC --arg 0x991c2f856a1e32985d9793b449c0f9d3 --arg 1000000000u128\n")),(0,c.kt)("p",null,"\u5176\u4e2d ",(0,c.kt)("inlineCode",{parentName:"p"},"peer_to_peer_v2")," \u811a\u672c\u53c2\u6570\uff1a"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"0x991c2f856a1e32985d9793b449c0f9d3")," \u662f bob \u4e2a\u4eba\u8d26\u6237\u5730\u5740\u3002"),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"1000000000u128")," \u662f\u8981\u53d1\u9001\u7684 token \u6570\u91cf\u3002")),(0,c.kt)("p",null,"\u7b49\u5f85\u4e00\u4f1a\u513f\uff0c\u4f1a\u770b\u5230\u6700\u540e\u51e0\u884c\u7684\u8f93\u51fa\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'mutlisig txn(address: 0x8afd731146fbc206d56265adedb4b50a, threshold: 2): 1 signatures collected\nstill require 1 signatures\n{\n  "ok": "/94713c208ff452d4d02c5446eb18f5ab538b72976e08a84cada4b08be68583ab.multisig-txn"\n}\n')),(0,c.kt)("p",null,"\u8be5\u547d\u4ee4\u4f1a\u751f\u6210\u539f\u59cb\u4ea4\u6613\uff0c\u5e76\u7528 tom \u7684",(0,c.kt)("strong",{parentName:"p"},"\u591a\u7b7e\u8d26\u6237\u79c1\u94a5"),"\u7b7e\u540d\uff0c\u751f\u6210\u7684\u4ea4\u6613\u4f1a\u4ee5\u6587\u4ef6\u5f62\u5f0f\u4fdd\u5b58\u5728\u5f53\u524d\u76ee\u5f55\u4e0b\uff0c\u6587\u4ef6\u540d\u662f\u4ea4\u6613\u7684\u54c8\u5e0c\u3002"),(0,c.kt)("p",null,"\u6ce8\u610f\uff1a\u6587\u4ef6\u8def\u5f84\u6839\u636e\u4e0d\u540c\u7684\u64cd\u4f5c\u7cfb\u7edf\u4ee5\u53ca\u4f7f\u7528\u65b9\u5f0f\u4f1a\u7565\u6709\u5dee\u5f02\u3002"),(0,c.kt)("p",null,"\u547d\u4ee4\u884c\u63d0\u793a\uff1a\u8be5\u591a\u7b7e\u4ea4\u6613\u5df2\u7ecf\u6536\u96c6\u4e86\u4e00\u4e2a\u7b7e\u540d\uff0c\u8fd8\u9700\u8981\u53e6\u4e00\u4e2a\u7b7e\u540d\u3002\n\u6b64\u65f6\u9700\u8981\u5c06\u751f\u6210\u7684\u4ea4\u6613\u6587\u4ef6\u5206\u53d1\u7ed9\u8be5\u591a\u7b7e\u8d26\u6237\u7684\u5176\u4ed6\u53c2\u4e0e\u8005\u53bb\u7b7e\u540d\u3002"),(0,c.kt)("h2",{id:"\u5176\u4ed6\u53c2\u4e0e\u8005\u7b7e\u540d"},"\u5176\u4ed6\u53c2\u4e0e\u8005\u7b7e\u540d"),(0,c.kt)("p",null,"alice \u62ff\u5230\u4e0a\u8ff0\u7684\u4ea4\u6613\u6587\u4ef6\u540e\uff0c\u5728\u81ea\u5df1\u7684 Starcoin \u63a7\u5236\u53f0\u4e2d\u7b7e\u540d\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"starcoin% account sign-multisig-txn /94713c208ff452d4d02c5446eb18f5ab538b72976e08a84cada4b08be68583ab.multisig-txn\n")),(0,c.kt)("p",null,"\u7b49\u5f85\u4e00\u4f1a\u513f\uff0c\u4f1a\u770b\u5230\u6700\u540e\u51e0\u884c\u7684\u8f93\u51fa\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'mutlisig txn(address: 0x8afd731146fbc206d56265adedb4b50a, threshold: 2): 2 signatures collected\nenough signatures collected for the multisig txn, txn can be submitted now\n{\n  "ok": "/root/f93382dc60d1f518e313202cc6f0b86116ba81e25b554b174537bfae18987837.multisig-txn"\n}\n')),(0,c.kt)("p",null,"\u8be5\u547d\u4ee4\u4f1a\u751f\u6210\u53e6\u4e00\u4e2a\u591a\u7b7e\u4ea4\u6613\u7b7e\u540d\u6587\u4ef6\uff0c\u5305\u542b\u6709 ",(0,c.kt)("strong",{parentName:"p"},"tom \u7684\u591a\u7b7e\u79c1\u94a5"),"\u548c ",(0,c.kt)("strong",{parentName:"p"},"alice \u7684\u591a\u7b7e\u79c1\u94a5"),"\u7684\u7b7e\u540d\u3002\n\u8fd4\u56de\u4fe1\u606f\u63d0\u793a\u7528\u6237\uff0c\u8be5\u591a\u7b7e\u4ea4\u6613\u5df2\u7ecf\u6536\u96c6\u5230\u8db3\u591f\u591a\u7684\u7b7e\u540d\uff0c\u53ef\u4ee5\u63d0\u4ea4\u5230\u94fe\u4e0a\u6267\u884c\u4e86\u3002"),(0,c.kt)("h2",{id:"\u63d0\u4ea4\u591a\u7b7e\u4ea4\u6613"},"\u63d0\u4ea4\u591a\u7b7e\u4ea4\u6613"),(0,c.kt)("p",null,"\u591a\u7b7e\u4ea4\u6613\u5b8c\u6574\u751f\u6210\u540e\uff0c",(0,c.kt)("strong",{parentName:"p"},"\u4efb\u4f55\u4eba"),"\u90fd\u53ef\u4ee5\u5c06\u5176\u63d0\u4ea4\u5230\u94fe\u4e0a\u3002\n\u8fd9\u91cc\u6211\u4eec\u4ece bob \u7684 Starcoin \u63a7\u5236\u53f0\u4e2d\u63d0\u4ea4\u8be5\u591a\u7b7e\u4ea4\u6613\u3002"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"starcoin% account submit-multisig-txn f93382dc60d1f518e313202cc6f0b86116ba81e25b554b174537bfae18987837.multisig-txn\n")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'txn 0xf93382dc60d1f518e313202cc6f0b86116ba81e25b554b174537bfae18987837 submitted.\n{\n  "ok": {\n    "events": null,\n    "txn_hash": "0xf93382dc60d1f518e313202cc6f0b86116ba81e25b554b174537bfae18987837",\n    "txn_info": null\n  }\n}\n')),(0,c.kt)("p",null,"\u7b49\u5f85\u6267\u884c\u7ed3\u675f\u540e\uff0c\u518d\u67e5\u770b\u591a\u7b7e\u8d26\u6237\u7684\u4fe1\u606f\uff0c\u4f1a\u53d1\u73b0\u591a\u7b7e\u8d26\u6237\u7684\u4f59\u989d\u5df2\u7ecf\u51cf\u5c11\u4e86\uff08gas \u8d39\u7528\u548c\u8f6c\u51fa\u53bb\u7684 1 STC\uff09\uff0c\u8d26\u53f7\u7684 ",(0,c.kt)("inlineCode",{parentName:"p"},"sequence_number")," \u4e5f\u53d8\u6210\u4e86 1\uff0c\u8bf4\u660e\u4ea4\u6613\u5df2\u7ecf\u6267\u884c\u6210\u529f\u4e86\u3002"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'starcoin% account show 0x8afd731146fbc206d56265adedb4b50a\n{\n  "ok": {\n    "account": {\n      "address": "0x8afd731146fbc206d56265adedb4b50a",\n      "is_default": false,\n      "is_readonly": false,\n      "public_key": "0x3639b4d6bc2d6588a6517f82ae1ff7fa1e64eb994a4d8ee6d6f948e1997b97d07315e22ea8bd4aaa8bdfe65b4a3c9334d726e12c21881cbbe9a79f57538c6301f423c3d02ac400037a40e8dbbf8b3c3e4545548ff71332737bbfe1abbef97cb502",\n      "receipt_identifier": "stc1p3t7hxy2xl0pqd4tzvkk7md94pgvvpcut"\n    },\n    "auth_key": "0xf112c676ef1a7bfbd29699f14a6260c88afd731146fbc206d56265adedb4b50a",\n    "balances": {\n      "0x00000000000000000000000000000001::STC::STC": 998999894453\n    },\n    "sequence_number": 1\n  }\n}\n')),(0,c.kt)("p",null,"\u81f3\u6b64\uff0c\u4f60\u5df2\u7ecf\u5b8c\u6210\u4e86\u4e00\u4e2a\u591a\u7b7e\u8d26\u6237\u7684\u521b\u5efa\u4ee5\u53ca\u591a\u7b7e\u4ea4\u6613\u7684\u751f\u6210\u548c\u94fe\u4e0a\u6267\u884c\u3002"),(0,c.kt)("h2",{id:"\u5176\u4ed6\u7684\u591a\u7b7e\u7ba1\u7406\u529e\u6cd5"},"\u5176\u4ed6\u7684\u591a\u7b7e\u7ba1\u7406\u529e\u6cd5"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=a9nwRZunwwg"},"\u901a\u8fc7 StarMask \u7ba1\u7406\u591a\u7b7e\uff08Youtube\uff09")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://github.com/wenwenprotocol/wen-multi-sign"},"WenWen \u63d0\u4f9b\u7684\u57fa\u4e8e NodeJs \u7684\u4e00\u4e2a\u591a\u7b7e\u7ba1\u7406\u5de5\u5177"))))}p.isMDXComponent=!0}}]);