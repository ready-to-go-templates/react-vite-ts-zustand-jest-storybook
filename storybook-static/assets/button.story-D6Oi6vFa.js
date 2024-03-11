import{r as y,R as m}from"./index-CSLRt44l.js";var _={exports:{}},a={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=y,R=Symbol.for("react.element"),v=Symbol.for("react.fragment"),h=Object.prototype.hasOwnProperty,k=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,B={key:!0,ref:!0,__self:!0,__source:!0};function f(t,r,n){var e,o={},c=null,p=null;n!==void 0&&(c=""+n),r.key!==void 0&&(c=""+r.key),r.ref!==void 0&&(p=r.ref);for(e in r)h.call(r,e)&&!B.hasOwnProperty(e)&&(o[e]=r[e]);if(t&&t.defaultProps)for(e in r=t.defaultProps,r)o[e]===void 0&&(o[e]=r[e]);return{$$typeof:R,type:t,key:c,ref:p,props:o,_owner:k.current}}a.Fragment=v;a.jsx=f;a.jsxs=f;_.exports=a;var E=_.exports;const i=m.forwardRef((t,r)=>{const{children:n,onClick:e,...o}=t;return E.jsx("button",{ref:r,onClick:e,...o,children:n})}),O=m.memo(i);try{i.displayName="Button",i.__docgenInfo={description:"",displayName:"Button",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const P={component:O,title:"Button"},s={args:{children:"Primary Button"}};var u,l,d;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: "Primary Button"
    // ...other args
  }
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};export{s as Primary,P as default};
