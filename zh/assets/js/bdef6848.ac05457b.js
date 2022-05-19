"use strict";(self.webpackChunkstarcoin_cookbook=self.webpackChunkstarcoin_cookbook||[]).push([[5817],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return k}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=r.createContext({}),c=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,l=t.originalType,u=t.parentName,p=a(t,["components","mdxType","originalType","parentName"]),m=c(n),k=o,f=m["".concat(u,".").concat(k)]||m[k]||s[k]||l;return n?r.createElement(f,i(i({ref:e},p),{},{components:n})):r.createElement(f,i({ref:e},p))}));function k(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var l=n.length,i=new Array(l);i[0]=m;var a={};for(var u in e)hasOwnProperty.call(e,u)&&(a[u]=e[u]);a.originalType=t,a.mdxType="string"==typeof t?t:o,i[1]=a;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9293:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s}});var r=n(7462),o=n(3366),l=(n(7294),n(3905)),i=["components"],a={},u="\u591a\u91cd\u7b7e\u540d",c={unversionedId:"concepts/multisig",id:"concepts/multisig",title:"\u591a\u91cd\u7b7e\u540d",description:"\u591a\u91cd\u7b7e\u540d\uff08multisignature\uff09\uff0c\u7b80\u79f0\u591a\u7b7e\uff0c\u4e5f\u5e38\u5199\u4e3a multisig \u6216 multi-signature\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/99-concepts/08-multisig.md",sourceDirName:"99-concepts",slug:"/concepts/multisig",permalink:"/starcoin-cookbook/zh/docs/concepts/multisig",editUrl:"https://github.com/starcoinorg/starcoin-cookbook/edit/main/docs/99-concepts/08-multisig.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Proof",permalink:"/starcoin-cookbook/zh/docs/concepts/proof"},next:{title:"\u8d21\u732e\u6307\u5357",permalink:"/starcoin-cookbook/zh/docs/miscellaneous/contributing"}},p={},s=[{value:"\u4e3e\u4f8b",id:"\u4e3e\u4f8b",level:2},{value:"\u591a\u7b7e\u4ea4\u6613",id:"\u591a\u7b7e\u4ea4\u6613",level:2},{value:"\u591a\u91cd\u7b7e\u540d\u5730\u5740",id:"\u591a\u91cd\u7b7e\u540d\u5730\u5740",level:2},{value:"\u4e3a\u4ec0\u4e48\u9700\u8981\u591a\u7b7e",id:"\u4e3a\u4ec0\u4e48\u9700\u8981\u591a\u7b7e",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],m={toc:s};function k(t){var e=t.components,n=(0,o.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u591a\u91cd\u7b7e\u540d"},"\u591a\u91cd\u7b7e\u540d"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u591a\u91cd\u7b7e\u540d"),"\uff08multisignature\uff09\uff0c\u7b80\u79f0",(0,l.kt)("strong",{parentName:"p"},"\u591a\u7b7e"),"\uff0c\u4e5f\u5e38\u5199\u4e3a multisig \u6216 multi-signature\u3002\n\u5982\u679c\u4e00\u4e2a\u4ea4\u6613\u9700\u8981\u4e24\u4e2a\u6216\u8005\u66f4\u591a\u7b7e\u540d\u624d\u80fd\u751f\u6548\uff0c\u90a3\u4e48\u8fd9\u79cd\u60c5\u51b5\u5c31\u53eb\u591a\u91cd\u7b7e\u540d\u3002"),(0,l.kt)("h2",{id:"\u4e3e\u4f8b"},"\u4e3e\u4f8b"),(0,l.kt)("p",null,"\u5047\u8bbe\u516c\u53f8\u6709\u4e2a\u94f6\u884c\u8d26\u6237\uff0c\u5bc6\u7801\u7684\u524d\u4e09\u4f4d\u7531 A \u8d1f\u8d23\u4fdd\u7ba1\uff0c\u5bc6\u7801\u7684\u540e\u4e09\u4f4d\u7531 B \u8d1f\u8d23\u4fdd\u7ba1\uff0c\u8f6c\u8d26\u65f6\u5fc5\u987b A \u548c B \u540c\u65f6\u8f93\u5165\u5bc6\u7801\u624d\u53ef\u4ee5\u8f6c\u8d26\u6210\u529f\uff0c\u8fd9\u4fbf\u662f\u4e00\u4e2a\u5178\u578b\u7684\u591a\u7b7e\u6848\u4f8b\u3002"),(0,l.kt)("p",null,"\u591a\u7b7e\u5168\u79f0\u591a\u91cd\u7b7e\u540d\u6280\u672f\uff0c2012\u5e74\u7b2c\u4e00\u6b21\u88ab\u7528\u4e8e\u6bd4\u7279\u5e01\u5730\u5740\uff0c\u4e4b\u540e\u5219\u50ac\u751f\u4e86\u591a\u91cd\u7b7e\u540d\u94b1\u5305\u3002"),(0,l.kt)("h2",{id:"\u591a\u7b7e\u4ea4\u6613"},"\u591a\u7b7e\u4ea4\u6613"),(0,l.kt)("p",null,"\u4e00\u822c\u8f6c\u8d26\u4ec5\u9700\u8981\u5355\u7b7e\u5373\u53ef\u5b8c\u6210\uff0c\u4e5f\u5c31\u662f\u8bf4\u4e00\u4e2a\u79c1\u94a5\u5373\u53ef\u7b7e\u7f72\u4ea4\u6613\uff0c\u5b8c\u6210\u8f6c\u8d26\u3002\n\u4f46\u662f\uff0c\u591a\u7b7e\u4ea4\u6613\u9700\u8981\u591a\u4e2a\u5bc6\u94a5\u6301\u6709\u8005\u7684\u6388\u6743\u624d\u80fd\u8f6c\u79fb\u6570\u5b57\u8d27\u5e01\uff0c\u8fd9\u6837\u94b1\u5305\u4e2d\u7684\u8d44\u4ea7\u66f4\u52a0\u5b89\u5168\uff0c\u540c\u65f6\u53ef\u4ee5\u9632\u6b62\u51fa\u73b0\u5185\u90e8\u5077\u76d7\u7684\u60c5\u51b5\u3002"),(0,l.kt)("p",null,"\u591a\u91cd\u7b7e\u540d\u4ea4\u6613\u6709\u65f6\u5019\u4e5f\u88ab\u79f0\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"M-of-N \u4ea4\u6613"),"\u3002\n",(0,l.kt)("strong",{parentName:"p"},"M")," \u6307\u7684\u662f\u4ea4\u6613\u751f\u6548\u6240\u9700\u8981\u7684\u7b7e\u540d\u6570\u91cf\uff0c",(0,l.kt)("strong",{parentName:"p"},"N")," \u6307\u7684\u662f\u548c\u672c\u6b21\u4ea4\u6613\u76f8\u5173\u7684\u5404\u65b9\u7684\u603b\u6570\u91cf\u3002"),(0,l.kt)("p",null,"\u5177\u4f53\u6765\u8bf4\uff0c\u5c31\u662f\u5047\u8bbe N \u4e2a\u4eba\u5206\u522b\u6301\u6709 N \u4e2a\u79c1\u94a5\uff0c\u53ea\u8981\u5176\u4e2d M \u4e2a\u4eba\u540c\u610f\u7b7e\u540d\u5c31\u53ef\u4ee5\u52a8\u7528\u67d0\u4e2a",(0,l.kt)("strong",{parentName:"p"},"\u591a\u7b7e\u8d26\u6237"),"\u7684\u8d44\u91d1\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"1-2\uff1a\u4e24\u4eba\u53ea\u8981\u6709\u4e00\u4eba\u540c\u610f\u5373\u53ef\u4f7f\u7528\u8d44\u91d1\u3002"),(0,l.kt)("li",{parentName:"ul"},"2-2\uff1a\u4e24\u4eba\u5fc5\u987b\u90fd\u540c\u610f\u624d\u53ef\u4f7f\u7528\u8d44\u91d1\u3002"),(0,l.kt)("li",{parentName:"ul"},"2-3\uff1a3\u4e2a\u4eba\u4e2d\u5fc5\u987b\u8981\u4e24\u4e2a\u4eba\u540c\u610f\u624d\u53ef\u4f7f\u7528\u8d44\u91d1\u3002"),(0,l.kt)("li",{parentName:"ul"},"4-7\uff1a7\u4e2a\u4eba\u4e2d\u5fc5\u987b\u89814\u4e2a\u4eba\u540c\u610f\u624d\u53ef\u4f7f\u7528\u8d44\u91d1\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u2026\u2026")),(0,l.kt)("p",null,"N \u7684\u53d6\u503c\u4e0d\u5c40\u9650\u4e8e\u4ee5\u4e0a\u6848\u4f8b\uff0cM \u7684\u503c\u53ea\u8981\u5c0f\u4e8e\u7b49\u4e8e N \u7684\u6b63\u6574\u6570\u5373\u53ef\uff0c\u4e0d\u540c\u7684 M \u548c N \u53d6\u503c\u53ef\u4ee5\u9002\u5408\u4e0d\u540c\u7684\u5e94\u7528\u573a\u666f\u3002"),(0,l.kt)("h2",{id:"\u591a\u91cd\u7b7e\u540d\u5730\u5740"},"\u591a\u91cd\u7b7e\u540d\u5730\u5740"),(0,l.kt)("p",null,"\u591a\u91cd\u7b7e\u540d\u5730\u5740\u662f\u4e00\u79cd\u7279\u6b8a\u7684\u94b1\u5305\u5730\u5740\uff0c\u60f3\u8981\u8f6c\u51fa\u5730\u5740\u4e2d\u7684\u94b1\u5c31\u9700\u8981\u6267\u884c\u591a\u91cd\u7b7e\u540d\u4ea4\u6613\u3002\n\u5229\u7528\u591a\u91cd\u7b7e\u540d\uff0c\u53ef\u4ee5\u4f7f\u5f97\u79c1\u94a5\u4e22\u5931\u7684\u98ce\u9669\u88ab\u5206\u6563\u5230 N \u4e2a\u4eba\u624b\u4e2d\uff0c\u5e76\u4e14\u907f\u514d\u4e86\u5c11\u6570\u4eba\u7a83\u53d6\u8d44\u91d1\u7684\u95ee\u9898\u3002"),(0,l.kt)("p",null,"\u7b80\u5355\u6765\u8bb2\uff0c\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"M-of-N")," \u7684\u5730\u5740\u9700\u8981\u6536\u96c6 N \u65b9\u7684\u5730\u5740\u4fe1\u606f\u6765\u751f\u6210\u3002\n\u4ee3\u5e01\u4e00\u65e6\u8f6c\u5165\u8fd9\u4e2a\u5730\u5740\u5c31\u9700\u8981 M \u65b9\u5171\u540c\u7b7e\u540d\u4ea4\u6613\uff0c\u624d\u80fd\u628a\u5e01\u8f6c\u51fa\u3002"),(0,l.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u9700\u8981\u591a\u7b7e"},"\u4e3a\u4ec0\u4e48\u9700\u8981\u591a\u7b7e"),(0,l.kt)("p",null,"\u7531\u4e0a\u9762\u7684\u5206\u6790\u53ef\u77e5\uff0c\u4f7f\u7528\u591a\u7b7e\u6bd4\u5355\u7b7e\u66f4\u4e3a\u5b89\u5168\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u9632\u6b62\u79c1\u94a5\u4e22\u5931\u3002")),(0,l.kt)("p",null,"\u901a\u5e38\u5355\u7b7e\u8d26\u6237\u4e00\u65e6\u4e22\u5931\u4e86\u79c1\u94a5\uff0c\u6ca1\u6709\u4efb\u4f55\u529e\u6cd5\u53d6\u51fa\u5bf9\u5e94\u5730\u5740\u7684\u8d44\u91d1\u3002\u8fd9\u6837\u5c31\u4f7f\u5f97\u56e0\u4e3a\u4e22\u5931\u79c1\u94a5\u800c\u5bfc\u81f4\u8d44\u91d1\u4e22\u5931\u7684\u98ce\u9669\u589e\u52a0\u3002\n\u591a\u91cd\u7b7e\u540d\u673a\u5236\u53ef\u4ee5\u5206\u6563\u79c1\u94a5\u4e22\u5931\u7684\u98ce\u9669\uff0c\u4fdd\u8bc1\u8d44\u91d1\u5b89\u5168\u3002"),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u9632\u6b62\u9ed1\u5ba2\u653b\u51fb\u3002")),(0,l.kt)("p",null,"\u5bf9\u4e8e\u591a\u7b7e\u8d26\u6237\u6765\u8bf4\uff0c\u9ed1\u5ba2\u60f3\u8981\u7a83\u53d6\u8d44\u91d1\uff0c\u901a\u5e38\u9700\u8981\u83b7\u53d6\u591a\u4e2a\u591a\u7b7e\u79c1\u94a5\uff0c\u76f8\u6bd4\u4e8e\u83b7\u53d6\u5355\u7b7e\u8d26\u6237\u7684\u79c1\u94a5\u96be\u5ea6\u66f4\u5927\u3002"),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u9632\u6b62\u5185\u90e8\u5077\u76d7\u3002")),(0,l.kt)("p",null,"\u79c1\u94a5\u638c\u63e1\u5728\u4e2a\u522b\u4eba\u624b\u4e2d\u53ef\u80fd\u4f1a\u51fa\u73b0\u5185\u90e8\u5077\u76d7\u7684\u60c5\u51b5\uff0c\u5982\u679c\u638c\u63e1\u5728\u591a\u4e2a\u4eba\u624b\u4e2d\uff0c\u53ef\u4ee5\u6709\u6548\u964d\u4f4e\u8fd9\u79cd\u60c5\u51b5\u7684\u53d1\u751f\u3002"),(0,l.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,l.kt)("p",null,"\u591a\u7b7e\u6280\u672f\u53ef\u4ee5\u8ba9\u8d44\u91d1\u7684\u7ba1\u7406\u548c\u4ea4\u6613\u53d8\u5f97\u66f4\u5b89\u5168\uff0c\u56e0\u6b64\u5927\u578b\u4ea4\u6613\u6240\u7684\u94b1\u5305\u4e00\u822c\u5747\u91c7\u7528\u591a\u7b7e\u8d26\u6237\u3002"))}k.isMDXComponent=!0}}]);