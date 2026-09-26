"use strict";var f=function(u,r){return function(){try{return r||u((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var p=f(function(x,n){
var h=require('@stdlib/array-base-resolve-getter/dist'),c=require('@stdlib/array-base-copy/dist');function l(u){var r,t,a,s,i,o,v,e;if(i=u.length,i<1)return[];if(t=c(u),o=t[0].length,o<1)return[];for(r=[],e=0;e<i;e++)r.push(h(t[e]));for(a=[],v=0;v<o;v++){for(s=[],e=0;e<i;e++)s.push(r[e](t[e],v));a.push(s)}return a}n.exports=l
});var g=p();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
