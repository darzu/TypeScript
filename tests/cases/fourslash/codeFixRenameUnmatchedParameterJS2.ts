/// <reference path='fourslash.ts' />

// @allowJs: true
// @checkJs: true
// @filename: /a.js
/////**
//// * @param {number} d
//// * @param {number} a
//// * @param {number} b
//// */
////function foo(a, b, c) {
////    a;
////    b;
////    c;
////}

verify.codeFixAvailable([
    { description: "Delete unused '@param' tag 'd'" },
    { description: "Rename '@param' tag name 'd' to 'c'" },
    { description: "Disable checking for this file" },
    { description: "Infer parameter types from usage" },
]);

verify.codeFix({
    description: [ts.Diagnostics.Rename_param_tag_name_0_to_1.message, "d", "c"],
    index: 1,
    newFileContent:
`/**
 * @param {number} c
 * @param {number} a
 * @param {number} b
 */
function foo(a, b, c) {
    a;
    b;
    c;
}`
});
