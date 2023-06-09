/// <reference path='fourslash.ts' />

// @noImplicitThis: true
//// function returnThisMember([| |]) {
////     return this.member;
//// }
////
//// const container: any = {
////     member: "sample",
////     returnThisMember: returnThisMember,
//// };
////
//// container.returnThisMember();

verify.codeFix({
    description: "Infer 'this' type of 'returnThisMember' from usage",
    index: 0,
    newRangeContent: "this: any ",
});
