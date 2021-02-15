(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{123:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),a=(n(0),n(133)),i={id:"return-model-type",title:"Return Model Type"},p={unversionedId:"api/types/return-model-type",id:"api/types/return-model-type",isDocsHomePage:!1,title:"Return Model Type",description:"The Type ReturnModelType is the type used to have type information for a class converted to a Mongoose Model.",source:"@site/../docs/api/types/returnModelType.md",slug:"/api/types/return-model-type",permalink:"/typegoose/docs/api/types/return-model-type",editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/api/types/returnModelType.md",version:"current",sidebar:"docs",previous:{title:"Document Type",permalink:"/typegoose/docs/api/types/document-type"},next:{title:"Ref",permalink:"/typegoose/docs/api/types/ref-type"}},l=[{value:"Example",id:"example",children:[]},{value:"Difference to ModelType",id:"difference-to-modeltype",children:[]}],c={toc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The Type ",Object(a.b)("inlineCode",{parentName:"p"},"ReturnModelType<T, QueryHelpers>")," is the type used to have type information for a class converted to a Mongoose Model."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"T")," is the logical ",Object(a.b)("inlineCode",{parentName:"li"},"AND")," of ",Object(a.b)("inlineCode",{parentName:"li"},"mongoose.Model<DocumentType<T>>")," and ",Object(a.b)("inlineCode",{parentName:"li"},"T")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"QueryHelpers")," is for a Query-Helpers interface, ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/typegoose/docs/api/decorators/query-method"}),"more here"))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Notes"),":"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"It has to be always with ",Object(a.b)("inlineCode",{parentName:"li"},"typeof Class"),", otherwise it will not work"),Object(a.b)("li",{parentName:"ul"},"This type should always be used over (the now internal) ",Object(a.b)("inlineCode",{parentName:"li"},"ModelType"))),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'class Kitten {\n  @prop()\n  public name?: string;\n\n  // this is an Model Method\n  public static findByName(this: ReturnModelType<typeof Kitten>, name: string) {\n    return this.find({ name }).exec(); // thanks to "ReturnModelType" "this" has type information\n  }\n}\n')),Object(a.b)("h2",{id:"difference-to-modeltype"},"Difference to ModelType"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"ModelType")," is the logical ",Object(a.b)("inlineCode",{parentName:"p"},"AND")," of ",Object(a.b)("inlineCode",{parentName:"p"},"mongoose.Model<DocumentType<T>>")," and ",Object(a.b)("inlineCode",{parentName:"p"},"T")," whereas ",Object(a.b)("inlineCode",{parentName:"p"},"ReturnModelType")," is an extension to ",Object(a.b)("inlineCode",{parentName:"p"},"ModelType"),":\n",Object(a.b)("inlineCode",{parentName:"p"},"ModelType<InstanceType<U>> & U")))}s.isMDXComponent=!0},133:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return y}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),s=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),b=r,y=u["".concat(i,".").concat(b)]||u[b]||d[b]||a;return n?o.a.createElement(y,p(p({ref:t},c),{},{components:n})):o.a.createElement(y,p({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);