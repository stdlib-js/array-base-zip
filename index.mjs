// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-resolve-getter@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-copy@v0.2.2-esm/index.mjs";function t(t){var s,n,i,o,a,d,f,h;if((a=t.length)<1)return[];if((d=(n=e(t))[0].length)<1)return[];for(s=[],h=0;h<a;h++)s.push(r(n[h]));for(i=[],f=0;f<d;f++){for(o=[],h=0;h<a;h++)o.push(s[h](n[h],f));i.push(o)}return i}export{t as default};
//# sourceMappingURL=index.mjs.map
