///<reference path="fourslash.ts" />

// @allowNonTsExtensions: true
// @Filename: Foo.js
/////** @type {number} */
////var v;
////v./**/

verify.completions({ marker: "", includes: { name: "toExponential", kind: "method", kindModifiers: "declare" } });
