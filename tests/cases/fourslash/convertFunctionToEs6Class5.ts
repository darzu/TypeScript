/// <reference path='fourslash.ts' />

// @allowNonTsExtensions: true
// @Filename: foo.js
////function Foo() {
////    this.a = 0;
////}
////Foo.prototype["a b c"] = function () {
////}

verify.codeFix({
    description: "Convert function to an ES2015 class",
    newFileContent:
`class Foo {
    constructor() {
        this.a = 0;
    }
    "a b c"() {
    }
}
`
});
