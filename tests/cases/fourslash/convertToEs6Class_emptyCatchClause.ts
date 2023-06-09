/// <reference path='fourslash.ts' />

// @allowNonTsExtensions: true
// @Filename: /a.js
////function /**/MyClass() {}
////MyClass.prototype.foo = function() {
////    try {} catch() {}
////}

verify.codeFix({
    description: "Convert function to an ES2015 class",
    index: 0,
    newFileContent:
`class MyClass {
    constructor() { }
    foo() {
        try { } catch () { }
    }
}
`,
});
