/// <reference path='fourslash.ts' />

// @noUnusedLocals: true
// @noUnusedParameters:true
//// [| namespace Validation {
////    class c1 {
////
////    }
////
////    export class c2 {
////
////    }
////
////    class c3 {
////        public x: c1;
////    }
////} |]

verify.rangeAfterCodeFix(`namespace Validation {
    class c1 {

    }

    export class c2 {

    }
}`);
