/// <reference path='fourslash.ts' />

// Repro for https://github.com/microsoft/TypeScript/issues/49557

////enum NamesWithSpaces {
////  "NoSpace",
////  "One Space",
////  "Has Two Spaces",
////  "This Has Three Spaces",
////  "And This Has Four Spaces",
////
////  "Block One",
////  "Block  Two",
////  "Block   Three",
////
////  "This Has Three Spaces_________________________________________________________",
////  "And This Has Four Spaces_________________________________________________________",
////}
////
//// NamesWithSpaces.[|ThisHasThreeSpaces|];

verify.codeFixAvailable([
    { description: "Change spelling to 'This Has Three Spaces'" },
    { description: "Add missing enum member 'ThisHasThreeSpaces'" },
]);