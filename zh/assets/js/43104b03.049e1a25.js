"use strict";(self.webpackChunkstarcoin_cookbook=self.webpackChunkstarcoin_cookbook||[]).push([[3181],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=l(n),u=r,m=h["".concat(c,".").concat(u)]||h[u]||p[u]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3811:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={},c="Starcoin Provider API",l={unversionedId:"web3/starmask/starcoin-provider",id:"web3/starmask/starcoin-provider",title:"Starcoin Provider API",description:"We recommend that all web3 site developers read the Basic Usage section.",source:"@site/docs/04-web3/01-starmask/02-starcoin-provider.md",sourceDirName:"04-web3/01-starmask",slug:"/web3/starmask/starcoin-provider",permalink:"/starcoin-cookbook/zh/docs/web3/starmask/starcoin-provider",editUrl:"https://github.com/starcoinorg/starcoin-cookbook/edit/main/docs/04-web3/01-starmask/02-starcoin-provider.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Onboarding Library",permalink:"/starcoin-cookbook/zh/docs/web3/starmask/onboarding-library"},next:{title:"RPC API",permalink:"/starcoin-cookbook/zh/docs/web3/starmask/rpc-api"}},d={},p=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Chain IDs",id:"chain-ids",level:2},{value:"Properties",id:"properties",level:2},{value:"starcoin.isStarMask",id:"starcoinisstarmask",level:3},{value:"Methods",id:"methods",level:2},{value:"starcoin.isConnected()",id:"starcoinisconnected",level:3},{value:"starcoin.request(args)",id:"starcoinrequestargs",level:3},{value:"Example",id:"example",level:4},{value:"Events",id:"events",level:2},{value:"connect",id:"connect",level:3},{value:"disconnect",id:"disconnect",level:3},{value:"accountsChanged",id:"accountschanged",level:3},{value:"chainChanged",id:"chainchanged",level:3},{value:"Errors",id:"errors",level:2},{value:"Using the Provider",id:"using-the-provider",level:2}],h={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"starcoin-provider-api"},"Starcoin Provider API"),(0,o.kt)("p",null,"::: tip Recommended Reading\nWe recommend that all web3 site developers read the ",(0,o.kt)("a",{parentName:"p",href:"#basic-usage"},"Basic Usage")," section.\n:::"),(0,o.kt)("p",null,"StarMask injects a global API into websites visited by its users at ",(0,o.kt)("inlineCode",{parentName:"p"},"window.starcoin"),".\nThis API allows websites to request users' Starcoin accounts, read data from blockchains the user is connected to, and suggest that the user sign messages and transactions.\nThe presence of the provider object indicates an Starcoin user."),(0,o.kt)("p",null,"We recommend using ",(0,o.kt)("a",{parentName:"p",href:"https://npmjs.com/package/@starcoin/starmask-onboarding"},(0,o.kt)("inlineCode",{parentName:"a"},"@starcoin/starmask-onboarding"))," to detect our provider injected at",(0,o.kt)("inlineCode",{parentName:"p"},"window.starcoin"),", on any platform or browser."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// This function detects most providers injected at window.starcoin\nimport StarMaskOnboarding from "@starcoin/starmask-onboarding";\n\nconst { isStarMaskInstalled } = StarMaskOnboarding;\n\nif (!isStarMaskInstalled()) {\n  console.log("Please install StarMask!");\n}\n')),(0,o.kt)("p",null,"The Starcoin JavaScript provider API is specified by ",(0,o.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1193"},"EIP-1193"),"."),(0,o.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,o.kt)("p",null,"For any non-trivial Starcoin web application \u2014 a.k.a. dapp, web3 site etc. \u2014 to work, you will have to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Detect the Starcoin provider (",(0,o.kt)("inlineCode",{parentName:"li"},"window.starcoin"),")"),(0,o.kt)("li",{parentName:"ul"},"Detect which Starcoin network the user is connected to"),(0,o.kt)("li",{parentName:"ul"},"Get the user's Starcoin account(s)")),(0,o.kt)("p",null,"The snippet at the top of this page is sufficient for detecting the provider.\nYou can learn how to accomplish the other two by reviewing the snippet in the ",(0,o.kt)("a",{parentName:"p",href:"#using-the-provider"},"Using the Provider section"),"."),(0,o.kt)("p",null,"The provider API is all you need to create a full-featured web3 application."),(0,o.kt)("h2",{id:"chain-ids"},"Chain IDs"),(0,o.kt)("p",null,"These are the IDs of the Starcoin chains that StarMask supports by default."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Hex"),(0,o.kt)("th",{parentName:"tr",align:null},"Decimal"),(0,o.kt)("th",{parentName:"tr",align:null},"Network"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0x1"),(0,o.kt)("td",{parentName:"tr",align:null},"1"),(0,o.kt)("td",{parentName:"tr",align:null},"Starcoin Main Network (Mainnet)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0xfb"),(0,o.kt)("td",{parentName:"tr",align:null},"251"),(0,o.kt)("td",{parentName:"tr",align:null},"Barnard Test Network")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0xfc"),(0,o.kt)("td",{parentName:"tr",align:null},"252"),(0,o.kt)("td",{parentName:"tr",align:null},"Proxima Test Network")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0xfd"),(0,o.kt)("td",{parentName:"tr",align:null},"253"),(0,o.kt)("td",{parentName:"tr",align:null},"Halley Test Network")))),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"starcoinisstarmask"},"starcoin.isStarMask"),(0,o.kt)("p",null,"::: warning Note\nThis property is non-standard. Non-StarMask providers may also set this property to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),".\n:::"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"true")," if the user has StarMask installed."),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"starcoinisconnected"},"starcoin.isConnected()"),(0,o.kt)("p",null,"::: tip Tip\nNote that this method has nothing to do with the user's accounts."),(0,o.kt)("p",null,'You may often encounter the word "connected" in reference to whether a web3 site can access the user\'s accounts.\nIn the provider interface, however, "connected" and "disconnected" refer to whether the provider can make RPC requests to the current chain.\n:::'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"starcoin.isConnected(): boolean;\n")),(0,o.kt)("p",null,"Returns ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if the provider is connected to the current chain, and ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,o.kt)("p",null,"If the provider is not connected, the page will have to be reloaded in order for connection to be re-established.\nPlease see the ",(0,o.kt)("a",{parentName:"p",href:"#connect"},(0,o.kt)("inlineCode",{parentName:"a"},"connect"))," and ",(0,o.kt)("a",{parentName:"p",href:"#disconnect"},(0,o.kt)("inlineCode",{parentName:"a"},"disconnect"))," events for more information."),(0,o.kt)("h3",{id:"starcoinrequestargs"},"starcoin.request(args)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface RequestArguments {\n  method: string;\n  params?: unknown[] | object;\n}\n\nstarcoin.request(args: RequestArguments): Promise<unknown>;\n")),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"request")," to submit RPC requests to Starcoin via StarMask.\nIt returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise")," that resolves to the result of the RPC method call."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"params")," and return value will vary by RPC method.\nIn practice, if a method has any ",(0,o.kt)("inlineCode",{parentName:"p"},"params"),", they are almost always of type ",(0,o.kt)("inlineCode",{parentName:"p"},"Array<any>"),"."),(0,o.kt)("p",null,"If the request fails for any reason, the Promise will reject with an ",(0,o.kt)("a",{parentName:"p",href:"#errors"},"Starcoin RPC Error"),"."),(0,o.kt)("p",null,"StarMask supports most standardized Starcoin RPC methods, in addition to a number of methods that may not be supported by other wallets.\nSee the StarMask ",(0,o.kt)("a",{parentName:"p",href:"/starcoin-cookbook/zh/docs/web3/starmask/rpc-api"},"RPC API documentation")," for details."),(0,o.kt)("h4",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'params: [\n  "0xeb9a0d1628fddba79b932ced2623b1a415000000000000000218351d311d32201149a4df2a9fc2db8a1043726f7373436861696e536372697074116c6f636b5f776974685f7374635f66656500062f2e307831383335316433313164333232303131343961346466326139666332646238613a3a584554483a3a584554480802000000000000001514208d1ae5bb7fd323ce6386c443473ed660825d4610c05e9de71a000000000000000000000010404b4c000000000000000000000000001001000000000000000000000000000000809698000000000001000000000000000d3078313a3a5354433a3a5354434eb90f6200000000fb0020a972a04aefbace3686e1889c47976ca664ad9f9384293c6b291811fc2870e2ba40b7d36db7f70149c7614cb9535a5d56ff052bcd74dfc3578f1b3586d80913fdc5ca4785a78b5d11c7bfecb86c0a0c56c3945d39b8c759115a2be61f5d82ba1e08",\n];\n\nstarcoin\n  .request({\n    method: "txpool.submit_hex_transaction",\n    params,\n  })\n  .then((result) => {\n    // The result varies by RPC method.\n    // For example, this method will return a transaction hash hexadecimal string on success.\n  })\n  .catch((error) => {\n    // If the request fails, the Promise will reject with an error.\n  });\n')),(0,o.kt)("h2",{id:"events"},"Events"),(0,o.kt)("p",null,"The StarMask provider implements the ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/api/events.html"},"Node.js ",(0,o.kt)("inlineCode",{parentName:"a"},"EventEmitter"))," API.\nThis sections details the events emitted via that API.\nThere are innumerable ",(0,o.kt)("inlineCode",{parentName:"p"},"EventEmitter")," guides elsewhere, but you can listen for events like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'starcoin.on("accountsChanged", (accounts) => {\n  // Handle the new accounts, or lack thereof.\n  // "accounts" will always be an array, but it can be empty.\n});\n\nstarcoin.on("chainChanged", (chainId) => {\n  // Handle the new chain.\n  // Correctly handling chain changes can be complicated.\n  // We recommend reloading the page unless you have good reason not to.\n  window.location.reload();\n});\n')),(0,o.kt)("p",null,"Also, don't forget to remove listeners once you are done listening to them (for example on component unmount in React):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'function handleAccountsChanged(accounts) {\n  // ...\n}\n\nstarcoin.on("accountsChanged", handleAccountsChanged);\n\n// Later\n\nstarcoin.removeListener("accountsChanged", handleAccountsChanged);\n')),(0,o.kt)("p",null,"The first argument of the ",(0,o.kt)("inlineCode",{parentName:"p"},"starcoin.removeListener")," is the event name and the second argument is the reference to the same function which has passed to ",(0,o.kt)("inlineCode",{parentName:"p"},"starcoin.on")," for the event name mentioned in the first argument."),(0,o.kt)("h3",{id:"connect"},"connect"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ConnectInfo {\n  chainId: string;\n}\n\nstarcoin.on('connect', handler: (connectInfo: ConnectInfo) => void);\n")),(0,o.kt)("p",null,"The StarMask provider emits this event when it first becomes able to submit RPC requests to a chain.\nWe recommend using a ",(0,o.kt)("inlineCode",{parentName:"p"},"connect")," event handler and the ",(0,o.kt)("a",{parentName:"p",href:"#starcoin-isconnected"},(0,o.kt)("inlineCode",{parentName:"a"},"starcoin.isConnected()")," method")," in order to determine when/if the provider is connected."),(0,o.kt)("h3",{id:"disconnect"},"disconnect"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"starcoin.on('disconnect', handler: (error: ProviderRpcError) => void);\n")),(0,o.kt)("p",null,"The StarMask provider emits this event if it becomes unable to submit RPC requests to any chain.\nIn general, this will only happen due to network connectivity issues or some unforeseen error."),(0,o.kt)("p",null,"Once ",(0,o.kt)("inlineCode",{parentName:"p"},"disconnect")," has been emitted, the provider will not accept any new requests until the connection to the chain has been re-restablished, which requires reloading the page.\nYou can also use the ",(0,o.kt)("a",{parentName:"p",href:"#starcoin-isconnected"},(0,o.kt)("inlineCode",{parentName:"a"},"starcoin.isConnected()")," method")," to determine if the provider is disconnected."),(0,o.kt)("h3",{id:"accountschanged"},"accountsChanged"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"starcoin.on('accountsChanged', handler: (accounts: Array<string>) => void);\n")),(0,o.kt)("p",null,"The StarMask provider emits this event whenever the return value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"stc_accounts")," RPC method changes.\n",(0,o.kt)("inlineCode",{parentName:"p"},"stc_accounts")," returns an array that is either empty or contains a single account address.\nThe returned address, if any, is the address of the most recently used account that the caller is permitted to access.\nCallers are identified by their URL ",(0,o.kt)("em",{parentName:"p"},"origin"),", which means that all sites with the same origin share the same permissions."),(0,o.kt)("p",null,"This means that ",(0,o.kt)("inlineCode",{parentName:"p"},"accountsChanged")," will be emitted whenever the user's exposed account address changes."),(0,o.kt)("h3",{id:"chainchanged"},"chainChanged"),(0,o.kt)("p",null,"::: tip Tip\nSee the ",(0,o.kt)("a",{parentName:"p",href:"#chain-ids"},"Chain IDs section")," for StarMask's default chains and their chain IDs.\n:::"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"starcoin.on('chainChanged', handler: (chainId: string) => void);\n")),(0,o.kt)("p",null,"The StarMask provider emits this event when the currently connected chain changes."),(0,o.kt)("p",null,"All RPC requests are submitted to the currently connected chain.\nTherefore, it's critical to keep track of the current chain ID by listening for this event."),(0,o.kt)("p",null,"We ",(0,o.kt)("em",{parentName:"p"},"strongly")," recommend reloading the page on chain changes, unless you have good reason not to."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'starcoin.on("chainChanged", (_chainId) => window.location.reload());\n')),(0,o.kt)("h2",{id:"errors"},"Errors"),(0,o.kt)("p",null,"All errors thrown or returned by the StarMask provider follow this interface:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ProviderRpcError extends Error {\n  message: string;\n  code: number;\n  data?: unknown;\n}\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"#starcoin-request-args"},(0,o.kt)("inlineCode",{parentName:"a"},"starcoin.request(args)")," method")," throws errors eagerly.\nYou can often use the error ",(0,o.kt)("inlineCode",{parentName:"p"},"code")," property to determine why the request failed."),(0,o.kt)("h2",{id:"using-the-provider"},"Using the Provider"),(0,o.kt)("p",null,"This snippet explains how to accomplish the three most common requirements for web3 sites:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Detect the Starcoin provider (",(0,o.kt)("inlineCode",{parentName:"li"},"window.starcoin"),")"),(0,o.kt)("li",{parentName:"ul"},"Detect which Starcoin network the user is connected to"),(0,o.kt)("li",{parentName:"ul"},"Get the user's Starcoin account(s)")),(0,o.kt)("p",null,"<<< @/docs/snippets/handleProvider.js"))}u.isMDXComponent=!0}}]);