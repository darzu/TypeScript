/// <reference path='fourslash.ts' />

//// function f(templateStrings, x, y, z) { return 10; }
//// function g(templateStrings, x, y, z) { return ""; }
////
//// f `   ${/*1*/      /*2*/

verify.signatureHelp({
    marker: test.markers(),
    text: "f(templateStrings: any, x: any, y: any, z: any): number",
    argumentCount: 2,
    parameterCount: 4,
    parameterName: "x",
    parameterSpan: "x: any",
});
