"use strict";(self.webpackChunkstarcoin_cookbook=self.webpackChunkstarcoin_cookbook||[]).push([[2849],{3905:function(n,e,t){t.d(e,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var c=r.createContext({}),u=function(n){var e=r.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},s=function(n){var e=u(n.components);return r.createElement(c.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,c=n.parentName,s=i(n,["components","mdxType","originalType","parentName"]),d=u(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(f,l(l({ref:e},s),{},{components:t})):r.createElement(f,l({ref:e},s))}));function m(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,l=new Array(a);l[0]=d;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=n,i.mdxType="string"==typeof n?n:o,l[1]=i;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6312:function(n,e,t){t.r(e),t.d(e,{assets:function(){return c},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return u}});var r=t(3117),o=(t(7294),t(3905));const a={},l="1. Move\u865a\u62df\u673a\u7b80\u8981\u4ecb\u7ecd",i={unversionedId:"move/move-vm/summary",id:"move/move-vm/summary",title:"1. Move\u865a\u62df\u673a\u7b80\u8981\u4ecb\u7ecd",description:"------",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/03-move/96-move-vm/01-summary.md",sourceDirName:"03-move/96-move-vm",slug:"/move/move-vm/summary",permalink:"/starcoin-cookbook/zh/docs/move/move-vm/summary",draft:!1,editUrl:"https://github.com/starcoinorg/starcoin-cookbook/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/03-move/96-move-vm/01-summary.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Move VM \u539f\u7406\u5206\u6790",permalink:"/starcoin-cookbook/zh/docs/move/move-vm/"},next:{title:"2. MoveVM\u8d44\u6e90\u4fee\u6539\u548c\u9500\u6bc1\u7684\u539f\u7406",permalink:"/starcoin-cookbook/zh/docs/move/move-vm/create-resource"}},c={},u=[{value:"0. \u524d\u8a00",id:"0-\u524d\u8a00",level:2},{value:"1. \u865a\u62df\u673a\u7ed3\u6784",id:"1-\u865a\u62df\u673a\u7ed3\u6784",level:2},{value:"2. \u5b57\u8282\u7801\u6307\u4ee4",id:"2-\u5b57\u8282\u7801\u6307\u4ee4",level:2}],s={toc:u};function p(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"1-move\u865a\u62df\u673a\u7b80\u8981\u4ecb\u7ecd"},"1. Move\u865a\u62df\u673a\u7b80\u8981\u4ecb\u7ecd"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"0-\u524d\u8a00"},"0. \u524d\u8a00"),(0,o.kt)("p",null,"\u4e0b\u9762\u7684\u5185\u5bb9\u5206\u4e3a\u4e24\u90e8\u5206\uff0c\u7b2c\u4e00\u90e8\u5206\u4ecb\u7ecd\u4e86 Move \u865a\u62df\u673a\u7684\u7ed3\u6784: \u4f5c\u4e3a\u4e00\u4e2a\u6808\u5f0f\u865a\u62df\u673a\uff0c\u5b83\u7684\u64cd\u4f5c\u6570\u6808\u3001\u8c03\u7528\u6808\u3002\u53e6\u5916\u8fd8\u4ecb\u7ecd\u4e86 Move \u865a\u62df\u673a\u4e2d\uff0c\u865a\u62df\u673a\u63d0\u4f9b\u4e86\u6570\u636e\u7ed3\u6784\u6765\u652f\u6301\u51fd\u6570\u8c03\u7528\u548c\u8fd4\u56de\u3002"),(0,o.kt)("p",null,"\u7b2c\u4e8c\u90e8\u5206\u4ecb\u7ecd\u4e86 Move \u865a\u62df\u673a\u4e2d\u6bd4\u8f83\u5173\u952e\u7684\u5b57\u8282\u7801\u6307\u4ee4\u7684\u4f5c\u7528\u3002"),(0,o.kt)("p",null,"\u8981\u5f7b\u5e95\u7406\u89e3 Move \u865a\u62df\u673a\u5b57\u8282\u7801\u7684\u6307\u4ee4\u5de5\u4f5c\u539f\u7406\uff0c\u8fd8\u9700\u8981\u7406\u89e3 Move \u8bed\u8a00\u7f16\u8bd1\u5668\u7684\u5173\u952e\u7f16\u8bd1\u8fc7\u7a0b\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\uff1a\u7f16\u8bd1\u5668\u4f55\u65f6\u751f\u6210 MoveLoc \u6307\u4ee4\uff0c\u4f55\u65f6\u751f\u6210 CopyLoc \u6307\u4ee4\uff0c\u89e3\u5f15\u7528\u662f\u7528\u54ea\u6761\u6307\u4ee4\u5b9e\u73b0\u7684\uff0c\u7ed9\u7ed3\u6784\u4f53\u7684\u5b57\u6bb5\u8d4b\u503c\u662f\u54ea\u6761\u6307\u4ee4\u5b9e\u73b0\u7684\uff0c\u501f\u7528\u68c0\u67e5\u53d1\u751f\u5728\u7f16\u8bd1\u7684\u54ea\u4e2a\u9636\u6bb5\uff0cmove_to \u548c move_from \u5982\u4f55\u5b9e\u73b0\uff0c\u4e3a\u4ec0\u4e48 Move \u6ca1\u6709\u5168\u5c40\u53d8\u91cf\u3002\u8fd9\u4e9b\u95ee\u9898\uff0c\u9700\u8981\u4ece\u7f16\u8bd1\u9636\u6bb5\u5165\u624b\uff0c\u4e86\u89e3\u7f16\u8bd1\u7684\u5927\u81f4\u8fc7\u7a0b\uff0c\u7ed3\u5408\u865a\u62df\u673a\u7684\u529f\u80fd\uff0c\u505a\u6574\u4f53\u5206\u6790\u3002"),(0,o.kt)("h2",{id:"1-\u865a\u62df\u673a\u7ed3\u6784"},"1. \u865a\u62df\u673a\u7ed3\u6784"),(0,o.kt)("p",null,"\u89e3\u91ca\u5668\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub(crate) struct Interpreter {\n         /// \u64cd\u4f5c\u6570\u6808\uff0cMove\u865a\u62df\u673a\u4e2d\u7684Value\u4fdd\u5b58\u5728\u8fd9\u91cc\u5e76\u7528\u4e8e\u5806\u6808\u64cd\u4f5c\n    operand_stack: Stack,\n      /// \u6d3b\u52a8\u51fd\u6570\u7684\u8c03\u7528\u6808\n    call_stack: CallStack,\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Interpreter")," \u7ed3\u6784\u4f53\u4e2d\uff0c\u6709\u4e00\u4e2a\u64cd\u4f5c\u6570\u6808\uff0c\u5b83\u7684\u4f5c\u7528\u662f\u6240\u6709\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"\u7b97\u672f\u3001\u5173\u7cfb\u3001\u6bd4\u8f83\u3001copy\u3001move\u3001pack\u3001unpack")," \u7b49\u7b49\u9664\u4e86\u8c03\u7528native\u51fd\u6570\u548c\u666e\u901a\u51fd\u6570\u4e4b\u5916\u7684\u6240\u6709\u64cd\u4f5c\u7b26\uff0c\u90fd\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"operand_stack")," \u4f5c\u4e3a\u64cd\u4f5c\u6570\u6808\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"call_stack")," \u4e13\u95e8\u7528\u4f5c\u8c03\u7528\u666e\u901a\u51fd\u6570\u6216native\u51fd\u6570\u7684\u8c03\u7528\u6808\u3002"),(0,o.kt)("p",null,"\u6240\u4ee5\u6211\u4eec\u77e5\u9053 Move \u7684\u865a\u62df\u673a\uff0c\u662f\u4e00\u4e2a\u6808\u5f0f\u7684\u865a\u62df\u673a\uff0c\u6709\u4e09\u70b9\u53ef\u4ee5\u8bc1\u660e\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5b83\u6ca1\u6709\u5185\u5b58\u76f8\u5173\u7684\u4f8b\u5982 ",(0,o.kt)("inlineCode",{parentName:"li"},"mem_set\u3001mem_get")," \u7c7b\u7684\u6307\u4ee4\uff0c\u8fd9\u7c7b\u6307\u4ee4\u90fd\u63a5\u53d7\u5185\u5b58\u5730\u5740\u4f5c\u4e3a\u64cd\u4f5c\u6570\uff0c\u81ea\u7136\u5b83\u4e5f\u6ca1\u6709\u5185\u5b58\u7684\u6982\u5ff5\uff08\u4f8b\u5982wasm\u865a\u62df\u673a\u5c31\u6709\u5185\u5b58\u7684\u6982\u5ff5\uff0c\u5b83\u7684\u5185\u5b58\u662f\u7528\u4e00\u4e2a\u8fde\u7eed\u7684\u5e73\u5766\u7684\u5b57\u8282\u6570\u7ec4\u6765\u6a21\u62df\uff09\uff1b"),(0,o.kt)("li",{parentName:"ul"},"\u5b83\u6709\u64cd\u4f5c\u6570\u6808\uff0c\u64cd\u4f5c\u7b26\u4f7f\u7528\u7684\u662f ",(0,o.kt)("inlineCode",{parentName:"li"},"operand_stack"),"\uff0c\u800c\u4e0d\u662f\u4f7f\u7528\u5bc4\u5b58\u5668\u6765\u505a\u8fd0\u7b97\uff1b"),(0,o.kt)("li",{parentName:"ul"},"\u5b83\u6709 ",(0,o.kt)("inlineCode",{parentName:"li"},"locals")," \u6570\u7ec4\uff0c\u7528\u6765\u4fdd\u5b58\u5c40\u90e8\u53d8\u91cf\uff0c\u800c\u4e0d\u50cf\u5bc4\u5b58\u5668\u7c7b\u673a\u5668\u4e00\u6837\uff0c\u628a\u5c40\u90e8\u53d8\u91cf\u4fdd\u5b58\u5728\u5185\u5b58\u4e2d\u6808\u7684\u533a\u57df\u3002")),(0,o.kt)("p",null,"\u4e0b\u9762\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Frame")," \u7ed3\u6784\u4f53\uff0c\u5c31\u4ee3\u8868\u4e86\u4e00\u4e2a\u51fd\u6570\u6267\u884c\u65f6\u7684\u6808\u6862\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pc")," \u662f\u5f53\u524d\u6267\u884c\u7684\u6307\u4ee4\u5e8f\u53f7"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"locals")," \u4fdd\u5b58\u51fd\u6570\u7684\u5c40\u90e8\u53d8\u91cf\u7684\u6570\u7ec4")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"struct Frame {\n    pc: u16,\n    locals: Locals,\n    function: Arc<Function>,\n    ty_args: Vec<Type>,\n}\n")),(0,o.kt)("p",null,"\u591a\u4e2a\u51fd\u6570\u4e4b\u95f4\u5d4c\u5957\u8c03\u7528\u65f6\uff0c\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Interpreter")," \u7ed3\u6784\u4f53\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"call_stack")," \u4e2d\uff0c\u4fdd\u5b58\u4e86\u591a\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"Frame")," \u7ed3\u6784\u4f53\uff0c\u53ef\u4ee5\u770b\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"CallStack")," \u7c7b\u578b\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"struct CallStack(Vec<Frame>);\n")),(0,o.kt)("p",null,"\u5e76\u4e14 ",(0,o.kt)("inlineCode",{parentName:"p"},"CallStack")," \u7c7b\u578b\u6709\u5982\u4e0b\u51fd\u6570\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"impl CallStack {\n    /// Create a new empty call stack.\n    fn new() -> Self {\n        CallStack(vec![])\n    }\n\n    /// Push a `Frame` on the call stack.\n    fn push(&mut self, frame: Frame) -> ::std::result::Result<(), Frame> {\n        if self.0.len() < CALL_STACK_SIZE_LIMIT {\n            self.0.push(frame);\n            Ok(())\n        } else {\n            Err(frame)\n        }\n    }\n\n    /// Pop a `Frame` off the call stack.\n    fn pop(&mut self) -> Option<Frame> {\n        self.0.pop()\n    }\n\n    fn current_location(&self) -> Location {\n        let location_opt = self.0.last().map(|frame| frame.location());\n        location_opt.unwrap_or(Location::Undefined)\n    }\n}\n")),(0,o.kt)("p",null,"\u4e0a\u9762\u7684\u51fd\u6570 ",(0,o.kt)("inlineCode",{parentName:"p"},"push\u3001pop")," \u662f\u7528\u6765\u5728\u51fd\u6570\u8c03\u7528\u8fdb\u5165\u548c\u9000\u51fa\u7684\u65f6\u5019\uff0c\u4fdd\u5b58\u548c\u53d6\u6d88\u51fd\u6570\u6808\u5e27 ",(0,o.kt)("inlineCode",{parentName:"p"},"Frame")," \u7684\u51fd\u6570\u3002"),(0,o.kt)("h2",{id:"2-\u5b57\u8282\u7801\u6307\u4ee4"},"2. \u5b57\u8282\u7801\u6307\u4ee4"),(0,o.kt)("p",null,"\u4e0b\u9762\u662f\u6240\u6709\u865a\u62df\u673a\u652f\u6301\u7684\u5b57\u8282\u7801\u7c7b\u578b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'    /// \u5f39\u51fa\u5e76\u4e22\u5f03\u5728\u6808\u9876\u7684\u503c\u3002\n    /// \u6808\u9876\u7684\u503c\u5fc5\u987b\u662f\u4e00\u4e2a\u53ef\u4ee5\u62f7\u8d1d\u7684\u7c7b\u578b\u3002\n    Pop,\n\n    /// \u4ece\u51fd\u6570\u8fd4\u56de\uff0c\u6839\u636e\u51fd\u6570\u7b7e\u540d\u4e2d\u7684\u8fd4\u56de\u7c7b\u578b\u53ef\u80fd\u5e26\u6709\u8fd4\u56de\u503c\u3002\n    /// \u8fd4\u56de\u503c\u88ab push \u5230\u6808\u4e0a\u3002\n    /// \u5df2\u6267\u884c\u7684\u51fd\u6570\u7684\u51fd\u6570\u7b7e\u540d\u5b9a\u4e49\u4e86 Ret \u64cd\u4f5c\u7801\u7684\u8bed\u4e49\u3002\n    Ret,\n\n    /// \u5982\u679c\u6808\u9876\u7684\u503c\u662f true\uff0c\u8df3\u8f6c\u5230 CodeOffset \u4f4d\u7f6e\u5904\u7684\u6307\u4ee4\u3002\n    /// Code offsets \u662f\u60f3\u5bf9\u4e8e\u6307\u4ee4\u6d41\u7684\u5f00\u59cb\u6765\u8bf4\u7684\u3002\n    BrTrue(CodeOffset),\n\n    /// \u5982\u679c\u6808\u9876\u7684\u503c\u662f false\uff0c\u8df3\u8f6c\u5230 CodeOffset \u4f4d\u7f6e\u5904\u7684\u6307\u4ee4\u3002\n    /// Code offsets \u662f\u60f3\u5bf9\u4e8e\u6307\u4ee4\u6d41\u7684\u5f00\u59cb\u6765\u8bf4\u7684\u3002\n    BrFalse(CodeOffset),\n\n    /// \u65e0\u6761\u4ef6\u8df3\u8f6c\u5230 CodeOffset \u5904\u7684\u6307\u4ee4\u3002\n    /// Code offsets \u662f\u60f3\u5bf9\u4e8e\u6307\u4ee4\u6d41\u7684\u5f00\u59cb\u6765\u8bf4\u7684\u3002\n    Branch(CodeOffset),\n\n    /// \u5c06\u4e00\u4e2a U8 \u7684\u5e38\u91cf push \u5230\u6808\u4e0a\u3002\n    LdU8(u8),\n\n    /// \u5c06\u4e00\u4e2a U64 \u7684\u5e38\u91cf push \u5230\u6808\u4e0a\u3002\n    LdU64(u64),\n\n    /// \u5c06\u4e00\u4e2a U128 \u7684\u5e38\u91cf push \u5230\u6808\u4e0a\u3002\n    LdU128(u128),\n\n    /// \u5c06\u6808\u9876\u7684\u503c\u8f6c\u6362\u4e3a U8\n    CastU8,\n\n    /// \u5c06\u6808\u9876\u7684\u503c\u8f6c\u6362\u4e3a U64\n    CastU64,\n\n    /// \u5c06\u6808\u9876\u7684\u503c\u8f6c\u6362\u4e3a U128\n    CastU128,\n\n    /// push\u4e00\u4e2a\u5e38\u91cf\u5230\u6808\u4e0a\u3002\n    /// \u8be5\u503c\u901a\u8fc7 "\u5e38\u91cf\u6c60\u7d22\u5f15" \u4ece "\u5e38\u91cf\u6c60" \u52a0\u8f7d\u548c\u53cd\u5e8f\u5217\u5316\uff08\u6839\u636e\u5176\u7c7b\u578b\uff09\n    LdConst(ConstantPoolIndex),\n\n    /// push "true" \u5230\u6808\u4e0a\n    LdTrue,\n\n    /// push "false" \u5230\u6808\u4e0a\n    LdFalse,\n\n    /// \u5c06 `LocalIndex` \u6807\u8bc6\u7684 \u5c40\u90e8\u53d8\u91cf \u63a8\u9001\u5230\u5806\u6808\u4e0a\u3002\n    /// \u503c\u4f1a\u88ab\u62f7\u8d1d\u5e76\u4e14 \u5c40\u90e8\u53d8\u91cf \u4f9d\u7136\u53ef\u4ee5\u5b89\u5168\u7684\u4f7f\u7528\u3002\n    CopyLoc(LocalIndex),\n\n    /// \u5c06 `LocalIndex` \u6807\u8bc6\u7684 \u5c40\u90e8\u53d8\u91cf \u63a8\u9001\u5230\u5806\u6808\u4e0a\u3002\n    /// \u5c40\u90e8\u53d8\u91cf \u88ab\u79fb\u52a8\u5e76\u4e14\u4ece\u90a3\u65f6\u8d77\u4f7f\u7528\u65e0\u6548\uff0c\u9664\u975e store \u64cd\u4f5c\u5728\u5bf9\u8be5 \u5c40\u90e8\u53d8\u91cf \u8fdb\u884c\u4efb\u4f55\u8bfb\u53d6\u4e4b\u524d\u5199\u5165\u5230\u53e6\u5916\u7684 \u5c40\u90e8\u53d8\u91cf\u3002\n    MoveLoc(LocalIndex),\n\n    /// \u4ece\u6808\u9876\u5f39\u51fa\u4e00\u4e2a\u503c\u5e76\u4e14\u5c06\u5b83\u5b58\u50a8\u5230\u7531 LocalIndex \u6307\u5b9a\u7684\u51fd\u6570 locals \u6570\u7ec4\u4e2d\u3002\n    StLoc(LocalIndex),\n\n    /// \u8c03\u7528\u4e00\u4e2a\u51fd\u6570\u3002\n    /// \u6808\u4e0a\u5df2\u7ecf\u5b58\u5728\u8c03\u7528\u53c2\u6570\uff0c\u53c2\u6570\u662f\u4ece\u7b2c\u4e00\u4e2a\u5230\u6700\u540e\u4e00\u4e2a push \u5230\u6808\u4e2d\u7684\u3002\n    /// \u63a5\u7740\u53c2\u6570\u4ece\u6808\u4e2d\u88ab\u6d88\u8017\uff0c\u5e76\u4e14push\u5230\u51fd\u6570\u7684 locals \u5373\u5c40\u90e8\u53d8\u91cf\u6570\u7ec4\u4e2d\u3002\n    /// \u51fd\u6570\u7684\u8fd4\u56de\u503c\u653e\u5728\u6808\u4e0a\uff0c\u5e76\u4e14\u5bf9\u8c03\u7528\u8005\u53ef\u7528\u3002\n    Call(FunctionHandleIndex),\n    CallGeneric(FunctionInstantiationIndex),\n\n    /// \u521b\u5efa\u4e00\u4e2a\u7531 `StructHandleIndex` \u6307\u5b9a\u7684\u7c7b\u578b\u7684\u5b9e\u4f8b\uff0c\u5e76\u4e14\u5c06\u8fd9\u4e2a\u5b9e\u4f8b push \u5230\u6808\u4e0a\u3002\n    /// \u7ed3\u6784\u4f53\u6240\u6709\u5b57\u6bb5\u7684\u503c\uff0c\u5fc5\u987b\u4ee5\u5b83\u4eec\u5728\u7ed3\u6784\u4f53\u4e2d\u51fa\u73b0\u7684\u987a\u5e8f\uff0c\u4f9d\u6b21\u7684 push \u6808\u4e0a\u3002\n    /// Pack \u6307\u4ee4\u5fc5\u987b\u5b8c\u6574\u7684\u521d\u59cb\u5316\u7ed3\u6784\u4f53\u7684\u5b9e\u4f8b\uff0c\u610f\u5473\u7740\u5982\u6709\u5b57\u6bb5\u662f\u7ed3\u6784\u4f53\uff0c\u5219\u5d4c\u5957\u521d\u59cb\u5316\u3002\n    /// \u7ed3\u6784\u4f53\u5b9e\u4f8b\uff0c\u5728\u6808\u4e0a\u7684\u7c7b\u578b\u662f Struct \u7c7b\u578b\uff0cStruct \u7c7b\u578b\u76f8\u5f53\u4e0e\u628a \u6808\u4e0a\u7684\u591a\u4e2a\u5143\u7d20\u6253\u5305\u4e86\u3002\n    Pack(StructDefinitionIndex),\n    PackGeneric(StructDefInstantiationIndex),\n\n    /// \u5c06\u6808\u4e0a\u6253\u5305\u7684 Struct \u7c7b\u578b\u4e2d\u7684 items \u5b57\u6bb5\uff0c\u89e3\u5305\u540e\u53d6\u51fa\u6240\u6709\u5b57\u6bb5\uff0c\u5e76\u653e\u5728\u6808\u4e0a\n    Unpack(StructDefinitionIndex),\n    UnpackGeneric(StructDefInstantiationIndex),\n\n    /// \u8bfb\u53d6\u4e00\u4e2a\u5f15\u7528\u3002\u5f15\u7528\u5728\u6808\u4e0a\uff0c\u5b83\u4f1a\u88ab\u6d88\u8017\u5e76\u4e14\u8bfb\u53d6\u540e\u7684\u503c\u4e5f\u4f1a\u653e\u5728\u6808\u4e0a\u3002\n    /// \u8bfb\u53d6\u4e00\u4e2a\u5f15\u7528\u4f1a\u8bfb\u53d6\u4e00\u4e2a\u88ab\u5f15\u7528\u5bf9\u8c61\u7684\u62f7\u8d1d\u3002\n    /// \u5982\u6b64\uff0cReadRef \u8981\u6c42\u88ab\u8bfb\u53d6\u7684\u503c\u6709 `Copy` \u7684\u7279\u6027\u3002\n    ReadRef,\n\n    /// \u5c06\u6808\u4e0a\u5df2\u7ecf\u5b58\u5728\u7684Value\u5199\u5165\u5230\u5f15\u7528\u7684Value\u4e2d\u3002\n    /// WriteRef \u8981\u6c42\u503c\u7684\u7c7b\u578b\u5177\u6709 `Drop` \u80fd\u529b\uff0c\u56e0\u4e3a\u4e4b\u524d\u7684\u503c\u4e22\u5931\u4e86\n    WriteRef,\n\n    /// \u5c06\u4e00\u4e2a\u53ef\u53d8\u7684\u7684\u5f15\u7528\u8f6c\u53d8\u4e3a\u4e00\u4e2a\u4e0d\u53ef\u53d8\u5f15\u7528\n    FreezeRef,\n\n    /// \u5c06\u4e00\u4e2a\u7531 LocalIndex \u6307\u5b9a\u7684\u5c40\u90e8\u53d8\u91cf\u7684\u53ef\u53d8\u5f15\u7528\u653e\u5728\u6808\u4e0a\n    /// \u5c40\u90e8\u53d8\u91cf\u4e0d\u80fd\u662f\u4e00\u4e2a\u5f15\u7528\n    MutBorrowLoc(LocalIndex),\n\n    /// \u5c06\u4e00\u4e2a\u7531 LocalIndex \u6307\u5b9a\u7684\u5c40\u90e8\u53d8\u91cf\u7684\u4e0d\u53ef\u53d8\u5f15\u7528\u653e\u5728\u6808\u4e0a\n    /// \u5c40\u90e8\u53d8\u91cf\u4e0d\u80fd\u662f\u4e00\u4e2a\u5f15\u7528\n    ImmBorrowLoc(LocalIndex),\n\n    /// \u5c06\u4e00\u4e2a\u7531 FieldHandleIndex \u6307\u5b9a\u7684\u5b57\u6bb5\u7684\u53ef\u53d8\u5f15\u7528\u653e\u5728\u6808\u4e0a\n    /// \u6808\u9876\u5fc5\u987b\u5df2\u7ecf\u5b58\u5728\u4e00\u4e2a\u5305\u542b\u4e86\u8be5\u5b57\u6bb5\u7684\u5bb9\u5668\u7c7b\u578b\u7684\u5f15\u7528\n    MutBorrowField(FieldHandleIndex),\n\n    /// \u5c06\u4e00\u4e2a\u7531 FieldInstantiationIndex \u6307\u5b9a\u7684\u5b57\u6bb5\u7684\u53ef\u53d8\u5f15\u7528\u653e\u5728\u6808\u4e0a\n    /// \u6808\u9876\u5fc5\u987b\u5df2\u7ecf\u5b58\u5728\u4e00\u4e2a\u5305\u542b\u4e86\u8be5\u5b57\u6bb5\u7684\u5bb9\u5668\u7c7b\u578b\u7684\u53ef\u53d8\u5f15\u7528\n    MutBorrowFieldGeneric(FieldInstantiationIndex),\n\n    /// \u5c06\u4e00\u4e2a\u7531 FieldHandleIndex \u6307\u5b9a\u7684\u5b57\u6bb5\u7684\u5f15\u7528\u653e\u5728\u6808\u4e0a\n    /// \u6808\u9876\u5fc5\u987b\u5df2\u7ecf\u5b58\u5728\u4e00\u4e2a\u5305\u542b\u4e86\u8be5\u5b57\u6bb5\u7684\u5bb9\u5668\u7c7b\u578b\u7684\u5f15\u7528\n    ImmBorrowField(FieldHandleIndex),\n\n    /// \u5c06\u4e00\u4e2a\u7531 FieldInstantiationIndex \u6307\u5b9a\u7684\u5b57\u6bb5\u7684\u53ef\u53d8\u5f15\u7528\u653e\u5728\u6808\u4e0a\n    /// \u6808\u9876\u5fc5\u987b\u5df2\u7ecf\u5b58\u5728\u4e00\u4e2a\u5305\u542b\u4e86\u8be5\u5b57\u6bb5\u7684\u5bb9\u5668\u7c7b\u578b\u7684\u53ef\u53d8\u5f15\u7528\n    ImmBorrowFieldGeneric(FieldInstantiationIndex),\n\n    /// \u8fd4\u56de\u5bf9\u5728\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u7684 \u5730\u5740 \u5904\u53d1\u5e03\u7684\u7c7b\u578b\u4e3a "StructDefinitionIndex" \u7684\u5b9e\u4f8b\u7684\u53ef\u53d8\u5f15\u7528\u3002\n    /// \u5982\u679c\u8fd9\u6837\u7684\u5bf9\u8c61\u4e0d\u5b58\u5728\u6216\u5f15\u7528\u5df2\u88ab\u5206\u53d1\uff0c\u5219\u4e2d\u6b62\u6267\u884c\u3002\n    /// address \u5730\u5740 Value \u5fc5\u987b\u5df2\u7ecf\u5728\u6808\u4e0a\u5b58\u5728\n    MutBorrowGlobal(StructDefinitionIndex),\n    MutBorrowGlobalGeneric(StructDefInstantiationIndex),\n\n    /// \u8fd4\u56de\u5bf9\u5728\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u7684 \u5730\u5740 \u5904\u53d1\u5e03\u7684\u7c7b\u578b\u4e3a "StructDefinitionIndex" \u7684\u5b9e\u4f8b\u7684\u4e0d\u53ef\u53d8\u5f15\u7528\u3002\n    /// \u5982\u679c\u8fd9\u6837\u7684\u5bf9\u8c61\u4e0d\u5b58\u5728\u6216\u5f15\u7528\u5df2\u88ab\u5206\u53d1\uff0c\u5219\u4e2d\u6b62\u6267\u884c\u3002\n    /// address \u5730\u5740 Value \u5fc5\u987b\u5df2\u7ecf\u5728\u6808\u4e0a\u5b58\u5728\n    ImmBorrowGlobal(StructDefinitionIndex),\n    ImmBorrowGlobalGeneric(StructDefInstantiationIndex),\n\n    Add,\n    Sub,\n    Mul,\n    Mod,\n    Div,\n    BitOr,\n    BitAnd,\n    Xor,\n    Or,\n    And,\n    Not,\n    Eq,\n    Neq,\n    Lt,\n    Gt,\n    Le,\n    Ge,\n    Abort,\n    Nop,\n\n    /// \u8fd4\u56de\u4e00\u4e2a\u5730\u5740\u662f\u5426\u5df2\u7ecf publish \u4e00\u4e2a StructDefinitionIndex \u7c7b\u578b\u7684\u5bf9\u8c61\n    Exists(StructDefinitionIndex),\n    ExistsGeneric(StructDefInstantiationIndex),\n\n    /// \u79fb\u52a8\u4e00\u4e2a\u7531\u3000\u6808\u5b9a\u7684\u5730\u5740\u6307\u5b9a\u7684 StructDefinitionIndex \u7c7b\u578b\u7684\u5b9e\u4f8b\n    /// \u5982\u679c\u90a3\u4e2a\u5bf9\u8c61\u4e0d\u5b58\u5728\u5c31\u7ec8\u6b62\u6267\u884c\n    MoveFrom(StructDefinitionIndex),\n    MoveFromGeneric(StructDefInstantiationIndex),\n\n    /// \u5c06\u6808\u9876\u7684 Value \u5b9e\u4f8b\u79fb\u52a8\u5230\u7d27\u6328\u7740\u6808\u9876\u5143\u7d20\u7684 `Signer` \u7684\u5730\u5740\u4e0a\n    /// \u5982\u679c StructDefinitionIndex \u7c7b\u578b\u7684\u5bf9\u8c61\uff0c\u5df2\u7ecf\u5728\u5730\u5740\u4e0a\u5b58\u5728\uff0c\u5c31\u505c\u6b62\u6267\u884c\n    MoveTo(StructDefinitionIndex),\n    MoveToGeneric(StructDefInstantiationIndex),\n\n    Shl,\n    Shr,\n\n    VecPack(SignatureIndex, u64),\n    VecLen(SignatureIndex),\n    VecImmBorrow(SignatureIndex),\n    VecMutBorrow(SignatureIndex),\n    VecPushBack(SignatureIndex),\n    VecPopBack(SignatureIndex),\n    VecUnpack(SignatureIndex, u64),\n    VecSwap(SignatureIndex),\n')))}p.isMDXComponent=!0}}]);