/// <reference path='fourslash.ts' />

////var x = a/*var1*/

////var x = (b/*var2*/

////var x = (c, d/*var3*/

//// var y : any = "", x = a/*var4*/

//// var y : any = "", x = (a/*var5*/

////class C{}
////var y = new C(/*var6*/

//// class C{}
//// var y = new C(0, /*var7*/

////var y = [/*var8*/

////var y = [0, /*var9*/

////var y = `${/*var10*/

////var y = `${10} dd ${ /*var11*/

////var y = 10; y=/*var12*/

// first declaration
verify.completions({
    marker: ["var1"],
    exact: completion.globalsPlus(["C", "y"]),
    isNewIdentifierLocation: true
});

verify.completions({
    marker: ["var2", "var3", "var4", "var5", "var6", "var7", "var8", "var9", "var10", "var11", "var12"],
    exact: completion.globalsPlus(["C", "x", "y"]),
    isNewIdentifierLocation: true
});
