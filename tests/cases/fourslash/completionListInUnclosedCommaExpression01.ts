/// <reference path='fourslash.ts' />

////// should NOT see a and b
////foo((a, b) => a,/*1*/

verify.completions({ marker: "1", excludes: ["a", "b"], isNewIdentifierLocation: true });
