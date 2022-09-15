"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[569],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,k=m["".concat(u,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},389:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={id:"contributions",title:"Making Contributions",sidebar_label:"How to Contribute"},l=void 0,o={unversionedId:"contributions",id:"contributions",title:"Making Contributions",description:"Clone the Repository Locally",source:"@site/docs/(2)makingContributions.md",sourceDirName:".",slug:"/contributions",permalink:"/docs/contributions",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/(2)makingContributions.md",tags:[],version:"current",frontMatter:{id:"contributions",title:"Making Contributions",sidebar_label:"How to Contribute"},sidebar:"tutorialSidebar",previous:{title:"Access",permalink:"/docs/access"},next:{title:"Setup Development Environment",permalink:"/docs/development"}},u={},s=[{value:"Clone the Repository Locally",id:"clone-the-repository-locally",level:2},{value:"Pull the Latest Code",id:"pull-the-latest-code",level:2},{value:"Create Local Workspace",id:"create-local-workspace",level:2},{value:"Start Development",id:"start-development",level:2},{value:"Pull Requests / Merge",id:"pull-requests--merge",level:2}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"clone-the-repository-locally"},"Clone the Repository Locally"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"git clone repository_url"))),(0,a.kt)("h2",{id:"pull-the-latest-code"},"Pull the Latest Code"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"git pull --all"))),(0,a.kt)("h2",{id:"create-local-workspace"},"Create Local Workspace"),(0,a.kt)("p",null,"In the root directory, run the commands:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Create a new feature branch from ",(0,a.kt)("inlineCode",{parentName:"p"},"main")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"git checkout main")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"git checkout -b newBranch oldBranch"))),(0,a.kt)("p",{parentName:"li"},"We try to stick with the naming sceme (initials)-(featureName)-(versionNumber)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Update the remote repository with the new branch"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"git push --set-upstream origin branchName")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Checkout the new branch"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"git checkout branchName")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"git branch -all")," command to view all available branches. Make sure to ",(0,a.kt)("inlineCode",{parentName:"p"},"git pull")," when grabbing new features pushed by other people."))),(0,a.kt)("h2",{id:"start-development"},"Start Development"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Ensure that you are following best practices and giving descriptive commits."))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Commit often."))),(0,a.kt)("h2",{id:"pull-requests--merge"},"Pull Requests / Merge"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Pull Requests can be used to submit contributions to the ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," branch. When features are finished and tested they can submit pull requests.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Go to the GitHub repository where your branch is located, click on "Pull Requests", select the button ',(0,a.kt)("inlineCode",{parentName:"p"},"New pull request"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Remember this is a team project, so whether pull requests are used or not, it is important to remember that all members should ensure each feature is well tested and agree upon merging it into the ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," branch.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If you want to merge feature branches into main, you have to be careful. Many issues can and will arise so take extra time to ensure everything is merged properly. To find the commands and instructions on merging refer to this source ",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging"},"Basic Branching and Merging"),"."))))}c.isMDXComponent=!0}}]);