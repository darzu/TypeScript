/// <reference path='fourslash.ts'/>

////function blah(foo: string, bar: number) {
////}
////blah('hola/*1*/,/*2*/')

// making sure the comma in a string literal doesn't trigger param help on the second function param
verify.signatureHelp({ marker: test.markers(), parameterName: "foo" });
