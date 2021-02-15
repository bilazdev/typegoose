(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{133:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return O}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=b(r),u=n,O=l["".concat(p,".").concat(u)]||l[u]||d[u]||a;return r?o.a.createElement(O,i(i({ref:t},s),{},{components:r})):o.a.createElement(O,i({ref:t},s))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,p=new Array(a);p[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var s=2;s<a;s++)p[s]=r[s];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},84:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return b}));var n=r(3),o=r(7),a=(r(0),r(133)),p={id:"array-prop",title:"Array Prop"},i={unversionedId:"api/decorators/array-prop",id:"api/decorators/array-prop",isDocsHomePage:!1,title:"Array Prop",description:"@arrayProp(options: object) is almost the same as @prop, here are just the differences listed.",source:"@site/../docs/api/decorators/arrayProp.md",slug:"/api/decorators/array-prop",permalink:"/typegoose/docs/api/decorators/array-prop",editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/api/decorators/arrayProp.md",version:"current",sidebar:"docs",previous:{title:"Map Prop",permalink:"/typegoose/docs/api/decorators/map-prop"},next:{title:"Model Options",permalink:"/typegoose/docs/api/decorators/model-options"}},c=[{value:"Options",id:"options",children:[{value:"items",id:"items",children:[]},{value:"innerOptions",id:"inneroptions",children:[]},{value:"outerOptions",id:"outeroptions",children:[]},{value:"dim",id:"dim",children:[]}]}],s={toc:c};function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"@arrayProp(options: object)")," is almost the same as ",Object(a.b)("inlineCode",{parentName:"p"},"@prop"),", here are just the differences listed."),Object(a.b)("p",null,"Please note that Mongoose initializes arrayProp arrays with ",Object(a.b)("inlineCode",{parentName:"p"},"[]")," instead of ",Object(a.b)("inlineCode",{parentName:"p"},"null")," / ",Object(a.b)("inlineCode",{parentName:"p"},"undefined"),"."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note"),": Deprecated since 7.1.1, replaced with ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/typegoose/docs/api/decorators/prop"}),Object(a.b)("inlineCode",{parentName:"a"},"@prop")),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("strong",{parentName:"p"},"Note"),": This decorator will get removed in 8.0"),Object(a.b)("h2",{id:"options"},"Options"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"All options from ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"/typegoose/docs/api/decorators/prop#options"}),Object(a.b)("inlineCode",{parentName:"a"},"@prop"))," are valid.")),Object(a.b)("h3",{id:"items"},"items"),Object(a.b)("p",null,"Accepts Type: ",Object(a.b)("inlineCode",{parentName:"p"},"any"),Object(a.b)("br",{parentName:"p"}),"\n","(alias for ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/typegoose/docs/api/decorators/prop#type"}),Object(a.b)("inlineCode",{parentName:"a"},"type"))," from ",Object(a.b)("inlineCode",{parentName:"p"},"@prop"),")"),Object(a.b)("p",null,"Deprecated since ",Object(a.b)("inlineCode",{parentName:"p"},"7.2.0"),", use ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/typegoose/docs/api/decorators/prop#type"}),Object(a.b)("inlineCode",{parentName:"a"},"@prop"),"'s ",Object(a.b)("inlineCode",{parentName:"a"},"type"))),Object(a.b)("p",null,"(see ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/typegoose/docs/api/decorators/prop#type"}),Object(a.b)("inlineCode",{parentName:"a"},"type"))," for Examples)"),Object(a.b)("h3",{id:"inneroptions"},"innerOptions"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"innerOptions"),' is used to overwrite options to be at the "Type" level',Object(a.b)("br",{parentName:"p"}),"\n","-> Use this only when absolutely necessary and please open a new\nissue about it"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/typegoose/docs/api/decorators/prop#innerOptions"}),"see ",Object(a.b)("inlineCode",{parentName:"a"},"innerOptions")," in prop")),Object(a.b)("h3",{id:"outeroptions"},"outerOptions"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"outerOptions"),' is used to overwrite options to be at the "Array" level',Object(a.b)("br",{parentName:"p"}),"\n","-> Use this only when absolutely necessary and please open a new\nissue about it"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/typegoose/docs/api/decorators/prop#outerOptions"}),"see ",Object(a.b)("inlineCode",{parentName:"a"},"outerOptions")," in prop")),Object(a.b)("h3",{id:"dim"},"dim"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"dim")," is used to set the Dimensions this array should have (for something like an matrix)",Object(a.b)("br",{parentName:"p"}),"\n","-> needs to be higher than 0"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/typegoose/docs/api/decorators/prop#dim"}),"see ",Object(a.b)("inlineCode",{parentName:"a"},"dim")," in prop")))}b.isMDXComponent=!0}}]);