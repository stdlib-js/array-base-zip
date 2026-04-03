"use strict";var f=function(t,e){return function(){return e||t((e={exports:{}}).exports,e),e.exports}};var p=f(function(x,n){
var h=require('@stdlib/array-base-resolve-getter/dist'),c=require('@stdlib/array-base-copy/dist');function l(t){var e,u,a,s,i,o,v,r;if(i=t.length,i<1)return[];if(u=c(t),o=u[0].length,o<1)return[];for(e=[],r=0;r<i;r++)e.push(h(u[r]));for(a=[],v=0;v<o;v++){for(s=[],r=0;r<i;r++)s.push(e[r](u[r],v));a.push(s)}return a}n.exports=l
});var g=p();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
