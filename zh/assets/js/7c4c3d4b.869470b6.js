"use strict";(self.webpackChunkstarcoin_cookbook=self.webpackChunkstarcoin_cookbook||[]).push([[8591],{3905:function(e,n,a){a.d(n,{Zo:function(){return i},kt:function(){return b}});var t=a(7294);function c(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function d(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){c(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,c=function(e,n){if(null==e)return{};var a,t,c={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(c[a]=e[a]);return c}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var s=t.createContext({}),u=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):d(d({},n),e)),a},i=function(e){var n=u(e.components);return t.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var a=e.components,c=e.mdxType,r=e.originalType,s=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),f=u(a),b=c,p=f["".concat(s,".").concat(b)]||f[b]||l[b]||r;return a?t.createElement(p,d(d({ref:n},i),{},{components:a})):t.createElement(p,d({ref:n},i))}));function b(e,n){var a=arguments,c=n&&n.mdxType;if("string"==typeof e||c){var r=a.length,d=new Array(r);d[0]=f;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:c,d[1]=o;for(var u=2;u<r;u++)d[u]=a[u];return t.createElement.apply(null,d)}return t.createElement.apply(null,a)}f.displayName="MDXCreateElement"},1681:function(e,n,a){a.r(n),a.d(n,{assets:function(){return i},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return l}});var t=a(7462),c=a(3366),r=(a(7294),a(3905)),d=["components"],o={},s="\u91cd\u7f6e\u8d26\u53f7\u79c1\u94a5",u={unversionedId:"getting-started/accounts/rotate-authentication-key",id:"getting-started/accounts/rotate-authentication-key",title:"\u91cd\u7f6e\u8d26\u53f7\u79c1\u94a5",description:"\u8fd9\u7bc7\u6587\u7ae0\u6307\u5bfc\u4f60\u5982\u4f55\u5728 starcoin \u533a\u5757\u94fe\u4e0a\u5b8c\u6210\u5bf9\u8d26\u53f7\u7684\u79c1\u94a5\u91cd\u7f6e\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/02-getting-started/03-accounts/4.rotate-authentication-key.md",sourceDirName:"02-getting-started/03-accounts",slug:"/getting-started/accounts/rotate-authentication-key",permalink:"/starcoin-cookbook/zh/docs/getting-started/accounts/rotate-authentication-key",editUrl:"https://github.com/starcoinorg/starcoin-cookbook/edit/main/docs/02-getting-started/03-accounts/4.rotate-authentication-key.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u521b\u5efa\u5e76\u4f7f\u7528\u591a\u7b7e\u8d26\u53f7",permalink:"/starcoin-cookbook/zh/docs/getting-started/accounts/multisig-account"},next:{title:"Use StarMask or Other wallets",permalink:"/starcoin-cookbook/zh/docs/getting-started/accounts/use-starmask"}},i={},l=[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"\u64cd\u4f5c\u6b65\u9aa4",id:"\u64cd\u4f5c\u6b65\u9aa4",level:2},{value:"\u51c6\u5907\u65b0\u8d26\u53f7",id:"\u51c6\u5907\u65b0\u8d26\u53f7",level:3},{value:"\u6267\u884c auth key \u66ff\u6362\u5408\u7ea6",id:"\u6267\u884c-auth-key-\u66ff\u6362\u5408\u7ea6",level:3}],f={toc:l};function b(e){var n=e.components,a=(0,c.Z)(e,d);return(0,r.kt)("wrapper",(0,t.Z)({},f,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u91cd\u7f6e\u8d26\u53f7\u79c1\u94a5"},"\u91cd\u7f6e\u8d26\u53f7\u79c1\u94a5"),(0,r.kt)("p",null,"\u8fd9\u7bc7\u6587\u7ae0\u6307\u5bfc\u4f60\u5982\u4f55\u5728 starcoin \u533a\u5757\u94fe\u4e0a\u5b8c\u6210\u5bf9\u8d26\u53f7\u7684\u79c1\u94a5\u91cd\u7f6e\u3002"),(0,r.kt)("p",null,"\u53ef\u7528\u4e8e\u91cd\u7f6e\u8d26\u53f7\u79c1\u94a5\u5e76\u4fdd\u7559\u5730\u5740\u7684\u573a\u666f\u3002"),(0,r.kt)("h2",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u542f\u52a8\u4e00\u4e2a starcoin dev \u8282\u70b9\u5e76\u8fde\u63a5\u3002\u8be6\u7ec6\u6b65\u9aa4\u8bf7\u67e5\u9605",(0,r.kt)("a",{parentName:"li",href:"../setup/starcoin-usage"},"\u4f7f\u7528 starcoin \u63a7\u5236\u53f0"),"\u3002")),(0,r.kt)("h2",{id:"\u64cd\u4f5c\u6b65\u9aa4"},"\u64cd\u4f5c\u6b65\u9aa4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u51c6\u5907\u65b0\u8d26\u53f7 A"),(0,r.kt)("li",{parentName:"ul"},"\u6267\u884c auth key \u66ff\u6362\u5408\u7ea6\uff1a\u4f7f\u7528\u8d26\u53f7 A \u7684 auth key \u66ff\u6362 B \u7684 auth key"),(0,r.kt)("li",{parentName:"ul"},"\u5220\u9664\u8d26\u53f7 A \uff0cB"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 A \u7684\u79c1\u94a5\u4e0e B \u7684\u5730\u5740\u5012\u5165\u8d26\u53f7\uff0c\u5b8c\u6210 B \u7684\u79c1\u94a5\u66ff\u6362")),(0,r.kt)("h3",{id:"\u51c6\u5907\u65b0\u8d26\u53f7"},"\u51c6\u5907\u65b0\u8d26\u53f7"),(0,r.kt)("p",null,"\u521b\u5efa\u65b0\u8d26\u53f7 A\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'starcoin% account create -p my-pass\n{\n  "ok": {\n    "address": "0xc04c62b99fd053ac31d21d6e06619aed",\n    "is_default": false,\n    "is_readonly": false,\n    "public_key": "0x58ede5ef970b9995268409e289a40ab0dc9e51e5c06a9e4934b5ef74d48795fe",\n    "receipt_identifier": "stc1pcpxx9wvl6pf6cvwjr4hqvcv6a5fwhx2t"\n  }\n}\n')),(0,r.kt)("p",null,"\u83b7\u53d6\u8d26\u53f7 A \u7684 auth key\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'starcoin% account show 0xc04c62b99fd053ac31d21d6e06619aed\n{\n  "ok": {\n    "account": {\n      "address": "0xc04c62b99fd053ac31d21d6e06619aed",\n      "is_default": false,\n      "is_readonly": false,\n      "public_key": "0x58ede5ef970b9995268409e289a40ab0dc9e51e5c06a9e4934b5ef74d48795fe",\n      "receipt_identifier": "stc1pcpxx9wvl6pf6cvwjr4hqvcv6a5fwhx2t"\n    },\n    "auth_key": "0x39353fabc51eb1b472c2c5ef6e74c91bc04c62b99fd053ac31d21d6e06619aed",\n    "balances": {},\n    "sequence_number": null\n  }\n}\n')),(0,r.kt)("p",null,"\u83b7\u53d6\u8d26\u53f7 A \u7684 private key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'starcoin% account export 0xc04c62b99fd053ac31d21d6e06619aed -p my-pass\n{\n  "ok": {\n    "account": "0xc04c62b99fd053ac31d21d6e06619aed",\n    "private_key": "0x92e13795c658f40ead01db2b3a7ed351b07d85d92bb0f03a9b04364f6de487c9"\n  }\n}\n')),(0,r.kt)("h3",{id:"\u6267\u884c-auth-key-\u66ff\u6362\u5408\u7ea6"},"\u6267\u884c auth key \u66ff\u6362\u5408\u7ea6"),(0,r.kt)("p",null,"\u67e5\u770b\u8d26\u53f7 B \uff08\u5f85\u66ff\u6362\u8d26\u53f7\uff09\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'starcoin% account show 0xdaf8e186dc97ee9ba6971b08115d4dc2\n{\n  "ok": {\n    "account": {\n      "address": "0xdaf8e186dc97ee9ba6971b08115d4dc2",\n      "is_default": false,\n      "is_readonly": false,\n      "public_key": "0x2a20e0bd8a26e6ed50a4dbba839ed1dbd99806d38c9c606646c9db6836ea0040",\n      "receipt_identifier": "stc1pmtuwrpkujlhfhf5hrvypzh2dcgyadtcw"\n    },\n    "auth_key": "0x38992286a9a2256ae4a659d5c46bb877daf8e186dc97ee9ba6971b08115d4dc2",\n    "balances": {\n      "0x00000000000000000000000000000001::STC::STC": 101000000\n    },\n    "sequence_number": 0\n  }\n}\n')),(0,r.kt)("p",null,"\u6267\u884c rotate_authentication_key\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'starcoin% account execute-function -s 0xdaf8e186dc97ee9ba6971b08115d4dc2 --function 0x1::Account::rotate_authentication_key --arg x"39353fabc51eb1b472c2c5ef6e74c91bc04c62b99fd053ac31d21d6e06619aed" -b\n')),(0,r.kt)("p",null,"\u6267\u884c\u540e\u8d26\u53f7 B \u7684\u72b6\u6001\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'starcoin% account show 0xdaf8e186dc97ee9ba6971b08115d4dc2\n{\n  "ok": {\n    "account": {\n      "address": "0xdaf8e186dc97ee9ba6971b08115d4dc2",\n      "is_default": false,\n      "is_readonly": false,\n      "public_key": "0x2a20e0bd8a26e6ed50a4dbba839ed1dbd99806d38c9c606646c9db6836ea0040",\n      "receipt_identifier": "stc1pmtuwrpkujlhfhf5hrvypzh2dcgyadtcw"\n    },\n    "auth_key": "0x38992286a9a2256ae4a659d5c46bb877daf8e186dc97ee9ba6971b08115d4dc2",\n    "balances": {\n      "0x00000000000000000000000000000001::STC::STC": 100941419\n    },\n    "sequence_number": 1\n  }\n}\n')),(0,r.kt)("p",null,"\u79fb\u9664\u8d26\u53f7 A \u4e0e B\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'starcoin% account remove 0xc04c62b99fd053ac31d21d6e06619aed -p my-pass\n{\n  "ok": {\n    "address": "0xc04c62b99fd053ac31d21d6e06619aed",\n    "is_default": false,\n    "is_readonly": false,\n    "public_key": "0x58ede5ef970b9995268409e289a40ab0dc9e51e5c06a9e4934b5ef74d48795fe",\n    "receipt_identifier": "stc1pcpxx9wvl6pf6cvwjr4hqvcv6a5fwhx2t"\n  }\n}\nstarcoin% account remove 0xdaf8e186dc97ee9ba6971b08115d4dc2 -p my-pass\n{\n  "ok": {\n    "address": "0xdaf8e186dc97ee9ba6971b08115d4dc2",\n    "is_default": false,\n    "is_readonly": false,\n    "public_key": "0x2a20e0bd8a26e6ed50a4dbba839ed1dbd99806d38c9c606646c9db6836ea0040",\n    "receipt_identifier": "stc1pmtuwrpkujlhfhf5hrvypzh2dcgyadtcw"\n  }\n}\n')),(0,r.kt)("p",null,"\u6839\u636e A \u8d26\u53f7\u7684\u79c1\u94a5\uff0c B \u8d26\u53f7\u7684\u5730\u5740\uff08\u539f\u5730\u5740\uff09\u5bfc\u5165\u8d26\u53f7\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'starcoin% account import -i 0x92e13795c658f40ead01db2b3a7ed351b07d85d92bb0f03a9b04364f6de487c9 0xdaf8e186dc97ee9ba6971b08115d4dc2\n{\n  "ok": {\n    "address": "0xdaf8e186dc97ee9ba6971b08115d4dc2",\n    "is_default": false,\n    "is_readonly": false,\n    "public_key": "0x58ede5ef970b9995268409e289a40ab0dc9e51e5c06a9e4934b5ef74d48795fe",\n    "receipt_identifier": "stc1pmtuwrpkujlhfhf5hrvypzh2dcgyadtcw"\n  }\n}\n')),(0,r.kt)("p",null,"\u67e5\u770b B \u8d26\u53f7\u7684\u6700\u65b0\u72b6\u6001\uff0c\u6211\u4eec\u53ef\u4ee5\u53d1\u73b0 B \u8d26\u53f7\u5df2\u7ecf\u5b8c\u6210\u4e86 auth key \u7684\u66ff\u6362\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'starcoin% account show 0xdaf8e186dc97ee9ba6971b08115d4dc2\n{\n  "ok": {\n    "account": {\n      "address": "0xdaf8e186dc97ee9ba6971b08115d4dc2",\n      "is_default": false,\n      "is_readonly": false,\n      "public_key": "0x58ede5ef970b9995268409e289a40ab0dc9e51e5c06a9e4934b5ef74d48795fe",\n      "receipt_identifier": "stc1pmtuwrpkujlhfhf5hrvypzh2dcgyadtcw"\n    },\n    "auth_key": "0x39353fabc51eb1b472c2c5ef6e74c91bc04c62b99fd053ac31d21d6e06619aed",\n    "balances": {\n      "0x00000000000000000000000000000001::STC::STC": 100941419\n    },\n    "sequence_number": 1\n  }\n}\n')),(0,r.kt)("p",null,"\u4e3a\u4e86\u68c0\u9a8c\u8d26\u53f7\uff0c\u6211\u4eec\u4ece B \u8d26\u53f7\u53d1\u8d77\u4e00\u7b14\u8f6c\u8d26\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"starcoin% account transfer -s 0xdaf8e186dc97ee9ba6971b08115d4dc2 -r 0xacff0c9a785004cdadec02ab76d44f32 -v 10000 -b\n")),(0,r.kt)("p",null,"\u67e5\u770b\u4e24\u4e2a\u8d26\u53f7\u7684\u6700\u65b0\u60c5\u51b5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'starcoin% account show 0xdaf8e186dc97ee9ba6971b08115d4dc2\n{\n  "ok": {\n    "account": {\n      "address": "0xdaf8e186dc97ee9ba6971b08115d4dc2",\n      "is_default": false,\n      "is_readonly": false,\n      "public_key": "0x58ede5ef970b9995268409e289a40ab0dc9e51e5c06a9e4934b5ef74d48795fe",\n      "receipt_identifier": "stc1pmtuwrpkujlhfhf5hrvypzh2dcgyadtcw"\n    },\n    "auth_key": "0x39353fabc51eb1b472c2c5ef6e74c91bc04c62b99fd053ac31d21d6e06619aed",\n    "balances": {\n      "0x00000000000000000000000000000001::STC::STC": 100646888\n    },\n    "sequence_number": 2\n  }\n}\nstarcoin% account show 0xacff0c9a785004cdadec02ab76d44f32\n{\n  "ok": {\n    "account": {\n      "address": "0xacff0c9a785004cdadec02ab76d44f32",\n      "is_default": false,\n      "is_readonly": false,\n      "public_key": "0xfedc9c99956e25a66a5780922ada3fc8f70cff4f7f4ee87436fab64e727cd09b",\n      "receipt_identifier": "stc1p4nlsexnc2qzvmt0vq24hd4z0xg0dqv6e"\n    },\n    "auth_key": "0x6c871cf1618930b492fcd4fc56d9b5d7acff0c9a785004cdadec02ab76d44f32",\n    "balances": {\n      "0x00000000000000000000000000000001::STC::STC": 10000\n    },\n    "sequence_number": 0\n  }\n}\n')))}b.isMDXComponent=!0}}]);