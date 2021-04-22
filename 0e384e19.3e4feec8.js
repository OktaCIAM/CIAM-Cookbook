(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{63:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var o=n(3),r=n(7),i=(n(0),n(86)),a={id:"intro",title:"Introduction",sidebar_label:"Introduction",slug:"/"},s={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Introduction",description:"This is an open-source collection of recipes ranging from simple snippets and examples around real-world CIAM use cases.",source:"@site/docs/intro.md",slug:"/",permalink:"/docs/",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/intro.md",version:"current",sidebar_label:"Introduction",sidebar:"docs",next:{title:"Alternative Username",permalink:"/docs/alternative-username"}},c=[{value:"Disclaimer",id:"disclaimer",children:[{value:"Who is this for?",id:"who-is-this-for",children:[]},{value:"Who is this not for?",id:"who-is-this-not-for",children:[]}]},{value:"Acknowledgements",id:"acknowledgements",children:[]},{value:"See an issue?",id:"see-an-issue",children:[]}],l={toc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This is an open-source collection of recipes ranging from simple snippets and examples around ",Object(i.b)("em",{parentName:"p"},"real-world")," CIAM use cases."),Object(i.b)("p",null,"However, due to the vast differences of environments, stacks, security and business requirements, etc, it's unrealistic to create a perfect plug-and-play sample."),Object(i.b)("h2",{id:"disclaimer"},"Disclaimer"),Object(i.b)("p",null,"This book is not intended to provide production grade code and/or is not officially supported by Okta. Instead, we encourage you to use these recipes as a guide to help connect the dots on where an implementation can start to unfold. The book is not an official Okta product and does not qualify for any Okta support. Okta makes no warranties regarding this project. Anyone who chooses to use this cookbook/recipes must ensure that their implementation meets any applicable legal obligations including any Okta terms and conditions."),Object(i.b)("p",null,"We hope you enjoy and find what you are looking for."),Object(i.b)("h3",{id:"who-is-this-for"},"Who is this for?"),Object(i.b)("p",null,"This book is created for Okta professionals and CIAM community members who are looking to find possible solutions or a starting point to a more complex use case. Throughout the samples, we assume a prior knowledge of software development and understanding of Okta."),Object(i.b)("h3",{id:"who-is-this-not-for"},"Who is this not for?"),Object(i.b)("p",null,"Anyone can refer to the book, but if you are just getting started with Okta, we encourage you to get started with our ",Object(i.b)("a",{parentName:"p",href:"https://developer.okta.com"},"developer page"),"."),Object(i.b)("h2",{id:"acknowledgements"},"Acknowledgements"),Object(i.b)("p",null,"This wouldn't be possible without the contributions of the CIAM specialists. The bulk of this content is derived from their dedication and hard work in the field."),Object(i.b)("h2",{id:"see-an-issue"},"See an issue?"),Object(i.b)("p",null,"This is an open-source project, feel free to view the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/OktaCIAM/cookbook"},"repo")," and suggest improvements, topics, and more."))}u.isMDXComponent=!0},86:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,b=p["".concat(a,".").concat(f)]||p[f]||d[f]||i;return n?r.a.createElement(b,s(s({ref:t},l),{},{components:n})):r.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);