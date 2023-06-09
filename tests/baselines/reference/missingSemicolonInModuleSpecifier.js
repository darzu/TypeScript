//// [tests/cases/compiler/missingSemicolonInModuleSpecifier.ts] ////

//// [a.ts]
export const x = 1;

//// [b.ts]
import {x} from "./a"
(function() { return 1; }())

//// [a.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 1;
//// [b.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(function () { return 1; }());
