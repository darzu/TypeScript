//// [tests/cases/compiler/pathMappingBasedModuleResolution_rootImport_aliasWithRoot.ts] ////

//// [foo.ts]
export function foo() {}

//// [bar.js]
export function bar() {}

//// [a.ts]
import { foo } from "/foo";
import { bar } from "/bar";


//// [foo.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.foo = void 0;
function foo() { }
exports.foo = foo;
//// [bar.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bar = void 0;
function bar() { }
exports.bar = bar;
//// [a.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
