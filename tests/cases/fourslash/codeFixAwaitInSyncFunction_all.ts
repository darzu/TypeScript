/// <reference path='fourslash.ts' />

////function f() {
////    await Promise.resolve();
////    await Promise.resolve();
////}
////
////const g = () => {
////    await f();
////    await f();
////}

verify.codeFixAll({
    fixId: "fixAwaitInSyncFunction",
    fixAllDescription: "Add all missing 'async' modifiers",
    newFileContent:
`async function f() {
    await Promise.resolve();
    await Promise.resolve();
}

const g = async () => {
    await f();
    await f();
}`,
});
