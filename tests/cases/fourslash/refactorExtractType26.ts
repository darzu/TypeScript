/// <reference path='fourslash.ts' />

//// type A<T, U> = () => /*a*/<T>(v: T) => (v: T) => <T>(v: T) => U/*b*/;

goTo.select("a", "b");
edit.applyRefactor({
    refactorName: "Extract type",
    actionName: "Extract to type alias",
    actionDescription: "Extract to type alias",
    newContent: `type /*RENAME*/NewType<U> = <T>(v: T) => (v: T) => <T>(v: T) => U;

type A<T, U> = () => NewType<U>;`,
});
