(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{77:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var a=t(3),r=t(7),i=(t(0),t(88)),o={id:"alternative-username",title:"Alternative Username",sidebar_label:"Alternative Username",slug:"/alternative-username"},s={unversionedId:"sign-in/alternative-username",id:"sign-in/alternative-username",isDocsHomePage:!1,title:"Alternative Username",description:"Problem",source:"@site/docs/sign-in/alternative-username.md",slug:"/alternative-username",permalink:"/docs/alternative-username",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/sign-in/alternative-username.md",version:"current",sidebar_label:"Alternative Username",sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"reCAPTCHA v2",permalink:"/docs/repcaptcha-v2"}},c=[{value:"Problem",id:"problem",children:[]},{value:"Solution",id:"solution",children:[{value:"Sign In Widget",id:"sign-in-widget",children:[]}]},{value:"Discussion",id:"discussion",children:[]}],u={toc:c};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"problem"},"Problem"),Object(i.b)("p",null,"In every authentication transaction, we submit a request to the ",Object(i.b)("a",{parentName:"p",href:"https://developer.okta.com/docs/reference/api/authn/"},Object(i.b)("inlineCode",{parentName:"a"},"/authn")," endpoint")," to start primary authentication. This step requires a username and password to evaluate against the Password Policy, MFA policy, and Sign-On Policy configured on your Okta tenant."),Object(i.b)("p",null,'But, what if you want to allow the user to login with an alternative id such as a "rewards number", "loyalty number", etc?'),Object(i.b)("h2",{id:"solution"},"Solution"),Object(i.b)("p",null,'This requires a "pre-step" before starting the authentication. In other words, a way to change the username with the correct username prior to validating against the ',Object(i.b)("inlineCode",{parentName:"p"},"authn")," endpoint."),Object(i.b)("h3",{id:"sign-in-widget"},"Sign In Widget"),Object(i.b)("p",null,"For the ",Object(i.b)("a",{parentName:"p",href:"https://developer.okta.com/code/javascript/okta_sign-in_widget/"},"Sign In Widget (SIW)"),", leverage the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/okta/okta-signin-widget#username-and-password"},Object(i.b)("inlineCode",{parentName:"a"},"transformUsername")," method")," to map the correct Okta username."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"transformUsername: async (username, operation) => {\n    // Perform only for Primary Auth\n    // Assuming that anything without the \"@\" is not an email\n    if (operation === 'PRIMARY_AUTH' && !username.includes(\"@\")) {\n        const searchparams = {\n            'login': username,\n            'email': username,\n            'memberNumber': username\n        };\n        const operator = 'or';\n        const data = {\n            'searchparams': searchparams,\n            'operator': operator\n        };\n\n        try {\n            // Request to a look up service\n            const response = await fetch('/finduserbysearch', {\n                method: 'POST',\n                credentials: 'same-origin',\n                headers: {\n                    'Content-Type': 'application/json'\n                },\n                body: JSON.stringify(data)\n            })\n            const matches = await response.json();\n            // Map username with correct profile\n            const username = matches[0].profile.login;\n            reeturn username;\n        } catch (err) {\n            // Do something, notify user\n            console.error(err);\n        }\n        return username;\n    }\n}\n")),Object(i.b)("h2",{id:"discussion"},"Discussion"),Object(i.b)("p",null,"Note that in the sign-in-widget example, we are using simple checks to illustrate (i.e., email format) the point."))}l.isMDXComponent=!0}}]);