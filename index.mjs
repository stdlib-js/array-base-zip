// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-resolve-getter@v0.2.2-esm/index.mjs";function e(e){var t,s,n,f,o,u,h;if((f=e.length)<1)return[];if((o=e[0].length)<1)return[];for(t=[],h=0;h<f;h++)t.push(r(e[h]));for(s=[],u=0;u<o;u++){for(n=[],h=0;h<f;h++)n.push(t[h](e[h],u));s.push(n)}return s}export{e as default};
//# sourceMappingURL=index.mjs.map
