(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{133:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,m=d["".concat(o,".").concat(u)]||d[u]||b[u]||i;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),i=(n(0),n(133)),o={id:"change-id-type",title:"Change _id Type"},c={unversionedId:"guides/advanced/change-id-type",id:"guides/advanced/change-id-type",isDocsHomePage:!1,title:"Change _id Type",description:"You can easily change the type of the _id field:",source:"@site/../docs/guides/advanced/changeIDType.md",slug:"/guides/advanced/change-id-type",permalink:"/typegoose/docs/guides/advanced/change-id-type",editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/guides/advanced/changeIDType.md",version:"current",sidebar:"guides",previous:{title:"Common Plugins",permalink:"/typegoose/docs/guides/advanced/common-plugins"},next:{title:"Using ObjectId Type",permalink:"/typegoose/docs/guides/advanced/using-objectid-type"}},p=[{value:"With the Base Class",id:"with-the-base-class",children:[]}],s={toc:p};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"You can easily change the type of the ",Object(i.b)("inlineCode",{parentName:"p"},"_id")," field:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"class SomeChangedID {\n  @prop()\n  public _id: string; // change the type of _id to string\n}\n")),Object(i.b)("p",null,"Note: when the type is not ",Object(i.b)("inlineCode",{parentName:"p"},"ObjectID"),", you need to explicitly set the ",Object(i.b)("inlineCode",{parentName:"p"},"_id")," before saving."),Object(i.b)("p",null,"To disable the ",Object(i.b)("inlineCode",{parentName:"p"},"_id")," field altogether (useful in arrays of subdocuments), add ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/typegoose/docs/api/decorators/prop#_id"}),Object(i.b)("inlineCode",{parentName:"a"},"@prop({ _id: false })"))," or ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://mongoosejs.com/docs/guide.html#_id"}),Object(i.b)("inlineCode",{parentName:"a"},"@modelOptions({ schemaOptions: { _id: false } })")),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"class WithNoId {\n  @prop()\n  public someValue: string;\n}\n\nclass SomeChangedID {\n  @prop({ type: WithNoId, _id: false })\n  public someField: WithNoId[];\n}\n")),Object(i.b)("h2",{id:"with-the-base-class"},"With the Base Class"),Object(i.b)("p",null,"With the ",Object(i.b)("inlineCode",{parentName:"p"},"Base")," class's special ",Object(i.b)("inlineCode",{parentName:"p"},"_id")," treatment (types), it can be used as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"class SomeChangedIDBase extends Base<string> {\n  @prop()\n  public _id: string;\n}\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Notes"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"it needs to be duplicated, because the ",Object(i.b)("inlineCode",{parentName:"li"},"Base")," class only provides ",Object(i.b)("em",{parentName:"li"},"types")," and doesn't actually change anything at runtime."),Object(i.b)("li",{parentName:"ul"},"to have ",Object(i.b)("inlineCode",{parentName:"li"},"_id")," not be ",Object(i.b)("inlineCode",{parentName:"li"},"any"),", the project needs to have either ",Object(i.b)("inlineCode",{parentName:"li"},"noImplicitAny")," or ",Object(i.b)("inlineCode",{parentName:"li"},"strict")," active in the ",Object(i.b)("inlineCode",{parentName:"li"},"tsconfig"),".")),Object(i.b)("p",null,"Restriction: this method (extending Base) can only be used with types that are in ",Object(i.b)("inlineCode",{parentName:"p"},"RefType")," (all of ",Object(i.b)("inlineCode",{parentName:"p"},"mongoose.Schema.Types")," should work except ",Object(i.b)("inlineCode",{parentName:"p"},"Array"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Mixed"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Boolean"),")."))}l.isMDXComponent=!0}}]);