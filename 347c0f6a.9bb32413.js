(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var o=n(3),r=n(7),i=(n(0),n(89)),a={id:"auto-send-sms",title:"Auto Send SMS Code Workaround",sidebar_label:"Auto Send SMS Code",slug:"/auto-send-sms-code",description:"Configure the Okta Signin Widget to auto send SMS code upon MFA verification",keywords:["Okta CIAM","MFA SMS Factor","Auto Send SMS Code","Okta Signin Widget"]},s={unversionedId:"sign-in/auto-send-sms",id:"sign-in/auto-send-sms",isDocsHomePage:!1,title:"Auto Send SMS Code Workaround",description:"Configure the Okta Signin Widget to auto send SMS code upon MFA verification",source:"@site/docs/sign-in/auto-send-sms.md",slug:"/auto-send-sms-code",permalink:"/docs/auto-send-sms-code",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/sign-in/auto-send-sms.md",version:"current",sidebar_label:"Auto Send SMS Code",sidebar:"docs",previous:{title:"Alternative Username",permalink:"/docs/alternative-username"},next:{title:"Initialize IdP Discovery",permalink:"/docs/initialize-idp-discovery"}},c=[{value:"Problem",id:"problem",children:[]},{value:"Solution",id:"solution",children:[]},{value:"Discussion",id:"discussion",children:[]}],u={toc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"problem"},"Problem"),Object(i.b)("p",null,"While the Sign In Widget gives you tremendous speed in enabling login to your applications, it's user-experience is constrained what's provided. For example, SMS factor requires a consent from the user to send the code to their device. This may not be intuitive to the user and result in a disrupted user flow, we can code a simple workaround to alleviate this issue."),Object(i.b)("h2",{id:"solution"},"Solution"),Object(i.b)("p",null,'Leverage the "afterRender" event to that occurs when the widget is transitioning to different pages, and include a simple query DOM check to determine if the "send code" button is available.'),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"oktaSignIn.on('afterRender', function (context) {\n    if (context.controller === 'mfa-verify') {\n        // Alternative you can use document.getElementsByClassName \n        const requestCodeButton = document.querySelector('a.sms-request-button');\n        if (requestCodeButton) {\n            requestCodeButton.click();\n        }\n    }\n});\n")),Object(i.b)("h2",{id:"discussion"},"Discussion"),Object(i.b)("p",null,"With all workarounds, we encourage you to remain diligent on your coding practices. Thus, if you cannot compromise from the provided UX of the widget, we encourage you to explore developing a custom experience with ",Object(i.b)("a",{parentName:"p",href:"https://github.com/okta/okta-auth-js"},"Auth.js")," to accommodate for additional changes your business requires."))}d.isMDXComponent=!0},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),d=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=d(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=d(n),m=o,f=l["".concat(a,".").concat(m)]||l[m]||p[m]||i;return n?r.a.createElement(f,s(s({ref:t},u),{},{components:n})):r.a.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);