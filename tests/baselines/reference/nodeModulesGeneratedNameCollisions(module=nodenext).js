//// [tests/cases/conformance/node/nodeModulesGeneratedNameCollisions.ts] ////

//// [index.ts]
// cjs format file
function require() {}
const exports = {};
class Object {}
export const __esModule = false;
export {require, exports, Object};
//// [index.ts]
// esm format file
function require() {}
const exports = {};
class Object {}
export const __esModule = false;
export {require, exports, Object};
//// [package.json]
{
    "name": "package",
    "private": true,
    "type": "module"
}
//// [package.json]
{
    "type": "commonjs"
}

//// [index.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Object = exports.exports = exports.require = exports.__esModule = void 0;
// cjs format file
function require() { }
exports.require = require;
var exports = {};
exports.exports = exports;
var Object = /** @class */ (function () {
    function Object() {
    }
    return Object;
}());
exports.Object = Object;
exports.__esModule = false;
//// [index.js]
// esm format file
function require() { }
var exports = {};
var Object = /** @class */ (function () {
    function Object() {
    }
    return Object;
}());
export var __esModule = false;
export { require, exports, Object };


//// [index.d.ts]
declare function require(): void;
declare const exports: {};
declare class Object {
}
export declare const __esModule = false;
export { require, exports, Object };
//// [index.d.ts]
declare function require(): void;
declare const exports: {};
declare class Object {
}
export declare const __esModule = false;
export { require, exports, Object };
