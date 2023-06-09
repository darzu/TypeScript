﻿/// <reference path="fourslash.ts"/>

////var /*1*/[/*2*/a,/*3*/b/*4*/]/*5*/
 
function verifyIndentationAfterNewLine(marker: string, indentation: number): void {
    goTo.marker(marker);
    edit.insert("\n");
    verify.indentationIs(indentation);
}

verifyIndentationAfterNewLine("1", 4);
verifyIndentationAfterNewLine("2", 8);
verifyIndentationAfterNewLine("3", 8);
verifyIndentationAfterNewLine("4", 8);
verifyIndentationAfterNewLine("5", 0);