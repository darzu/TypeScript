//// [es5ExportEquals.ts]
export function f() { }

export = f;


//// [es5ExportEquals.js]
"use strict";
exports.f = void 0;
function f() { }
module.exports = f;


//// [es5ExportEquals.d.ts]
export declare function f(): void;
export = f;
