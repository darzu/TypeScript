/// <reference path="fourslash.ts" />

//// import d from "other-ambient-module";
//// import * as ns from "yet-another-ambient-module";
//// var x = v1/*0*/ + 5;

// @Filename: ambientModule.ts
//// declare module "ambient-module" {
////    export function f1();
////    export var v1;
//// }

// @Filename: otherAmbientModule.ts
//// declare module "other-ambient-module" {
////    export default function f2();
//// }

// @Filename: yetAnotherAmbientModule.ts
//// declare module "yet-another-ambient-module" {
////    export function f3();
////    export var v3;
//// }

verify.importFixAtPosition([
`import { v1 } from "ambient-module";
import d from "other-ambient-module";
import * as ns from "yet-another-ambient-module";
var x = v1 + 5;`
]);
