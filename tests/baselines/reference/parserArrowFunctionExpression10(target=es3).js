//// [tests/cases/conformance/parser/ecmascript5/ArrowFunctionExpressions/parserArrowFunctionExpression10.ts] ////

//// [fileJs.js]
a ? (b) : c => (d) : e => f // Not legal JS; "Unexpected token ':'" at last colon

//// [fileTs.ts]
a ? (b) : c => (d) : e => f


//// [fileJs.js]
a ? function (b) { return (d); } : function (e) { return f; }; // Not legal JS; "Unexpected token ':'" at last colon
//// [fileTs.js]
a ? function (b) { return (d); } : function (e) { return f; };
