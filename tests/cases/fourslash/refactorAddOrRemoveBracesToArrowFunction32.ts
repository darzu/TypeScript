/// <reference path='fourslash.ts' />

////const a = /*a*/()/*b*/ => {
////    return (
////        /*
////        multi-line comment
////        */
////        1
////    );
////};

goTo.select("a", "b");
edit.applyRefactor({
    refactorName: "Add or remove braces in an arrow function",
    actionName: "Remove braces from arrow function",
    actionDescription: "Remove braces from arrow function",
    newContent: `const a = () => (
    /*
    multi-line comment
    */
    1
);`,
});
