/// <reference path='fourslash.ts' />

//// const foo = /*x*/f/*y*/unction() {
////    while (true) { }
//// };

goTo.select("x", "y");
edit.applyRefactor({
    refactorName: "Convert arrow function or function expression",
    actionName: "Convert to arrow function",
    actionDescription: "Convert to arrow function",
    newContent: `const foo = () => {
    while (true) { }
};`,
});
