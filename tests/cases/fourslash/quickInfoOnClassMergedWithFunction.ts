/// <reference path="fourslash.ts" />

////module Test {
////    class Mocked {
////        myProp: string;
////    }
////    class Tester {
////        willThrowError() {
////            Mocked = Mocked || function () { // => Error: Invalid left-hand side of assignment expression.
////                return { /**/myProp: "test" };
////            };
////        }
////    }
////}

verify.quickInfoAt("", "(property) myProp: string");
