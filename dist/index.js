"use strict";var p=function(t,e){return function(){return e||t((e={exports:{}}).exports,e),e.exports}};var f=p(function(l,s){
var a=require('@stdlib/array-base-resolve-getter/dist');function h(t){var e,v,n,u,o,i,r;if(u=t.length,u<1)return[];if(o=t[0].length,o<1)return[];for(e=[],r=0;r<u;r++)e.push(a(t[r]));for(v=[],i=0;i<o;i++){for(n=[],r=0;r<u;r++)n.push(e[r](t[r],i));v.push(n)}return v}s.exports=h
});var c=f();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
