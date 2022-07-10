"use strict";(self.webpackChunkstarcoin_cookbook=self.webpackChunkstarcoin_cookbook||[]).push([[3181],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=l(n),m=r,u=h["".concat(c,".").concat(m)]||h[m]||p[m]||i;return n?a.createElement(u,o(o({ref:t},d),{},{components:n})):a.createElement(u,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3811:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={},c="Starcoin Provider API",l={unversionedId:"web3/starmask/starcoin-provider",id:"web3/starmask/starcoin-provider",title:"Starcoin Provider API",description:"We recommend that all Web3 site developers read the Basic Usage section.",source:"@site/docs/04-web3/01-starmask/02-starcoin-provider.md",sourceDirName:"04-web3/01-starmask",slug:"/web3/starmask/starcoin-provider",permalink:"/starcoin-cookbook/docs/web3/starmask/starcoin-provider",editUrl:"https://github.com/starcoinorg/starcoin-cookbook/edit/main/docs/04-web3/01-starmask/02-starcoin-provider.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Onboarding Library",permalink:"/starcoin-cookbook/docs/web3/starmask/onboarding-library"},next:{title:"RPC API",permalink:"/starcoin-cookbook/docs/web3/starmask/rpc-api"}},d={},p=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Chain IDs",id:"chain-ids",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>starcoin.isStarMask</code>",id:"starcoinisstarmask",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>starcoin.isConnected()</code>",id:"starcoinisconnected",level:3},{value:"<code>starcoin.request(args)</code>",id:"starcoinrequestargs",level:3},{value:"Example",id:"example",level:4},{value:"Events",id:"events",level:2},{value:"<code>connect</code>",id:"connect",level:3},{value:"<code>disconnect</code>",id:"disconnect",level:3},{value:"<code>accountsChanged</code>",id:"accountschanged",level:3},{value:"<code>chainChanged</code>",id:"chainchanged",level:3},{value:"Errors",id:"errors",level:2},{value:"Using the Provider",id:"using-the-provider",level:2}],h={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"starcoin-provider-api"},"Starcoin Provider API"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Recommended Reading")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We recommend that all Web3 site developers read the ",(0,i.kt)("a",{parentName:"p",href:"#basic-usage"},"Basic Usage")," section."))),(0,i.kt)("p",null,"StarMask injects a global API into websites visited by its users at ",(0,i.kt)("inlineCode",{parentName:"p"},"window.starcoin"),".\nThis API allows websites to request users' Starcoin accounts, read data from blockchains the user is connected to, and suggest that the user sign messages and transactions.\nThe presence of the provider object indicates an Starcoin user."),(0,i.kt)("p",null,"We recommend using ",(0,i.kt)("a",{parentName:"p",href:"https://npmjs.com/package/@starcoin/starmask-onboarding"},(0,i.kt)("inlineCode",{parentName:"a"},"@starcoin/starmask-onboarding"))," to detect our provider injected at ",(0,i.kt)("inlineCode",{parentName:"p"},"window.starcoin"),", on any platform or browser."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'// This function detects most providers injected at window.starcoin\nimport StarMaskOnboarding from "@starcoin/starmask-onboarding";\n\nconst { isStarMaskInstalled } = StarMaskOnboarding;\n\nif (!isStarMaskInstalled()) {\n  console.log("Please install StarMask!");\n}\n')),(0,i.kt)("p",null,"The Starcoin JavaScript provider API is specified by ",(0,i.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1193"},"EIP-1193"),"."),(0,i.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,i.kt)("p",null,"For any non-trivial Starcoin web application \u2014 a.k.a. DApp, Web3 site etc. \u2014 to work, you will have to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Detect the Starcoin provider (",(0,i.kt)("inlineCode",{parentName:"li"},"window.starcoin"),")"),(0,i.kt)("li",{parentName:"ul"},"Detect which Starcoin network the user is connected to"),(0,i.kt)("li",{parentName:"ul"},"Get the user's Starcoin account(s)")),(0,i.kt)("p",null,"The snippet at the top of this page is sufficient for detecting the provider.\nYou can learn how to accomplish the other two by reviewing the snippet in the ",(0,i.kt)("a",{parentName:"p",href:"#using-the-provider"},"Using the Provider")," section."),(0,i.kt)("p",null,"The provider API is all you need to create a full-featured Web3 application."),(0,i.kt)("h2",{id:"chain-ids"},"Chain IDs"),(0,i.kt)("p",null,"These are the IDs of the Starcoin chains that StarMask supports by default."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Hex"),(0,i.kt)("th",{parentName:"tr",align:null},"Decimal"),(0,i.kt)("th",{parentName:"tr",align:null},"Network"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0x1"),(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"Starcoin Main Network (Mainnet)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0xfb"),(0,i.kt)("td",{parentName:"tr",align:null},"251"),(0,i.kt)("td",{parentName:"tr",align:null},"Barnard Test Network")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0xfc"),(0,i.kt)("td",{parentName:"tr",align:null},"252"),(0,i.kt)("td",{parentName:"tr",align:null},"Proxima Test Network")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0xfd"),(0,i.kt)("td",{parentName:"tr",align:null},"253"),(0,i.kt)("td",{parentName:"tr",align:null},"Halley Test Network")))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"starcoinisstarmask"},(0,i.kt)("inlineCode",{parentName:"h3"},"starcoin.isStarMask")),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This property is non-standard. Non-StarMask providers may also set this property to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"true")," if the user has StarMask installed."),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"starcoinisconnected"},(0,i.kt)("inlineCode",{parentName:"h3"},"starcoin.isConnected()")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Note that this method has nothing to do with the user's accounts."),(0,i.kt)("p",{parentName:"div"},'You may often encounter the word "connected" in reference to whether a Web3 site can access the user\'s accounts.\nIn the provider interface, however, "connected" and "disconnected" refer to whether the provider can make RPC requests to the current chain.'))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"starcoin.isConnected(): boolean;\n")),(0,i.kt)("p",null,"Returns ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," if the provider is connected to the current chain, and ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,i.kt)("p",null,"If the provider is not connected, the page will have to be reloaded in order for connection to be re-established.\nPlease see the ",(0,i.kt)("a",{parentName:"p",href:"#connect"},(0,i.kt)("inlineCode",{parentName:"a"},"connect"))," and ",(0,i.kt)("a",{parentName:"p",href:"#disconnect"},(0,i.kt)("inlineCode",{parentName:"a"},"disconnect"))," events for more information."),(0,i.kt)("h3",{id:"starcoinrequestargs"},(0,i.kt)("inlineCode",{parentName:"h3"},"starcoin.request(args)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface RequestArguments {\n  method: string;\n  params?: unknown[] | object;\n}\n\nstarcoin.request(args: RequestArguments): Promise<unknown>;\n")),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"request")," to submit RPC requests to Starcoin via StarMask.\nIt returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise")," that resolves to the result of the RPC method call."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"params")," and return value will vary by RPC method.\nIn practice, if a method has any ",(0,i.kt)("inlineCode",{parentName:"p"},"params"),", they are almost always of type ",(0,i.kt)("inlineCode",{parentName:"p"},"Array<any>"),"."),(0,i.kt)("p",null,"If the request fails for any reason, the Promise will reject with an ",(0,i.kt)("a",{parentName:"p",href:"#errors"},"Starcoin RPC Error"),"."),(0,i.kt)("p",null,"StarMask supports most standardized Starcoin RPC methods, in addition to a number of methods that may not be supported by other wallets.\nSee the StarMask ",(0,i.kt)("a",{parentName:"p",href:"/starcoin-cookbook/docs/web3/starmask/rpc-api"},"RPC API documentation")," for details."),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'params: [\n  "0xeb9a0d1628fddba79b932ced2623b1a415000000000000000218351d311d32201149a4df2a9fc2db8a1043726f7373436861696e536372697074116c6f636b5f776974685f7374635f66656500062f2e307831383335316433313164333232303131343961346466326139666332646238613a3a584554483a3a584554480802000000000000001514208d1ae5bb7fd323ce6386c443473ed660825d4610c05e9de71a000000000000000000000010404b4c000000000000000000000000001001000000000000000000000000000000809698000000000001000000000000000d3078313a3a5354433a3a5354434eb90f6200000000fb0020a972a04aefbace3686e1889c47976ca664ad9f9384293c6b291811fc2870e2ba40b7d36db7f70149c7614cb9535a5d56ff052bcd74dfc3578f1b3586d80913fdc5ca4785a78b5d11c7bfecb86c0a0c56c3945d39b8c759115a2be61f5d82ba1e08",\n];\n\nstarcoin\n  .request({\n    method: "txpool.submit_hex_transaction",\n    params,\n  })\n  .then((result) => {\n    // The result varies by RPC method.\n    // For example, this method will return a transaction hash hexadecimal string on success.\n  })\n  .catch((error) => {\n    // If the request fails, the Promise will reject with an error.\n  });\n')),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("p",null,"The StarMask provider implements the ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/api/events.html"},"Node.js ",(0,i.kt)("inlineCode",{parentName:"a"},"EventEmitter"))," API.\nThis sections details the events emitted via that API.\nThere are innumerable ",(0,i.kt)("inlineCode",{parentName:"p"},"EventEmitter")," guides elsewhere, but you can listen for events like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'starcoin.on("accountsChanged", (accounts) => {\n  // Handle the new accounts, or lack thereof.\n  // "accounts" will always be an array, but it can be empty.\n});\n\nstarcoin.on("chainChanged", (chainId) => {\n  // Handle the new chain.\n  // Correctly handling chain changes can be complicated.\n  // We recommend reloading the page unless you have good reason not to.\n  window.location.reload();\n});\n')),(0,i.kt)("p",null,"Also, don't forget to remove listeners once you are done listening to them (for example on component unmount in React):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'function handleAccountsChanged(accounts) {\n  // ...\n}\n\nstarcoin.on("accountsChanged", handleAccountsChanged);\n\n// Later\n\nstarcoin.removeListener("accountsChanged", handleAccountsChanged);\n')),(0,i.kt)("p",null,"The first argument of the ",(0,i.kt)("inlineCode",{parentName:"p"},"starcoin.removeListener")," is the event name and the second argument is the reference to the same function which has passed to ",(0,i.kt)("inlineCode",{parentName:"p"},"starcoin.on")," for the event name mentioned in the first argument."),(0,i.kt)("h3",{id:"connect"},(0,i.kt)("inlineCode",{parentName:"h3"},"connect")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ConnectInfo {\n  chainId: string;\n}\n\nstarcoin.on('connect', handler: (connectInfo: ConnectInfo) => void);\n")),(0,i.kt)("p",null,"The StarMask provider emits this event when it first becomes able to submit RPC requests to a chain.\nWe recommend using a ",(0,i.kt)("inlineCode",{parentName:"p"},"connect")," event handler and the ",(0,i.kt)("a",{parentName:"p",href:"#starcoin-isconnected"},(0,i.kt)("inlineCode",{parentName:"a"},"starcoin.isConnected()")," method")," in order to determine when/if the provider is connected."),(0,i.kt)("h3",{id:"disconnect"},(0,i.kt)("inlineCode",{parentName:"h3"},"disconnect")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"starcoin.on('disconnect', handler: (error: ProviderRpcError) => void);\n")),(0,i.kt)("p",null,"The StarMask provider emits this event if it becomes unable to submit RPC requests to any chain.\nIn general, this will only happen due to network connectivity issues or some unforeseen error."),(0,i.kt)("p",null,"Once ",(0,i.kt)("inlineCode",{parentName:"p"},"disconnect")," has been emitted, the provider will not accept any new requests until the connection to the chain has been re-established, which requires reloading the page.\nYou can also use the ",(0,i.kt)("a",{parentName:"p",href:"#starcoin-isconnected"},(0,i.kt)("inlineCode",{parentName:"a"},"starcoin.isConnected()"))," method to determine if the provider is disconnected."),(0,i.kt)("h3",{id:"accountschanged"},(0,i.kt)("inlineCode",{parentName:"h3"},"accountsChanged")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"starcoin.on('accountsChanged', handler: (accounts: Array<string>) => void);\n")),(0,i.kt)("p",null,"The StarMask provider emits this event whenever the return value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"stc_accounts")," RPC method changes.\n",(0,i.kt)("inlineCode",{parentName:"p"},"stc_accounts")," returns an array that is either empty or contains a single account address.\nThe returned address, if any, is the address of the most recently used account that the caller is permitted to access.\nCallers are identified by their URL ",(0,i.kt)("em",{parentName:"p"},"origin"),", which means that all sites with the same origin share the same permissions."),(0,i.kt)("p",null,"This means that ",(0,i.kt)("inlineCode",{parentName:"p"},"accountsChanged")," will be emitted whenever the user's exposed account address changes."),(0,i.kt)("h3",{id:"chainchanged"},(0,i.kt)("inlineCode",{parentName:"h3"},"chainChanged")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"See the ",(0,i.kt)("a",{parentName:"p",href:"#chain-ids"},"Chain IDs section")," for StarMask's default chains and their chain IDs."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"starcoin.on('chainChanged', handler: (chainId: string) => void);\n")),(0,i.kt)("p",null,"The StarMask provider emits this event when the currently connected chain changes."),(0,i.kt)("p",null,"All RPC requests are submitted to the currently connected chain.\nTherefore, it's critical to keep track of the current chain ID by listening for this event."),(0,i.kt)("p",null,"We ",(0,i.kt)("em",{parentName:"p"},"strongly")," recommend reloading the page on chain changes, unless you have good reason not to."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'starcoin.on("chainChanged", (_chainId) => window.location.reload());\n')),(0,i.kt)("h2",{id:"errors"},"Errors"),(0,i.kt)("p",null,"All errors thrown or returned by the StarMask provider follow this interface:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ProviderRpcError extends Error {\n  message: string;\n  code: number;\n  data?: unknown;\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"#starcoin-request-args"},(0,i.kt)("inlineCode",{parentName:"a"},"starcoin.request(args)")," method")," throws errors eagerly.\nYou can often use the error ",(0,i.kt)("inlineCode",{parentName:"p"},"code")," property to determine why the request failed."),(0,i.kt)("h2",{id:"using-the-provider"},"Using the Provider"),(0,i.kt)("p",null,"This snippet explains how to accomplish the three most common requirements for Web3 sites:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Detect the Starcoin provider (",(0,i.kt)("inlineCode",{parentName:"li"},"window.starcoin"),")"),(0,i.kt)("li",{parentName:"ul"},"Detect which Starcoin network the user is connected to"),(0,i.kt)("li",{parentName:"ul"},"Get the user's Starcoin account(s)")))}m.isMDXComponent=!0}}]);