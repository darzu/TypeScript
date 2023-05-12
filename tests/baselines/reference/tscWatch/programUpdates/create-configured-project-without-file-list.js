currentDirectory:: / useCaseSensitiveFileNames: false
Input::
//// [/a/b/tsconfig.json]

                {
                    "compilerOptions": {},
                    "exclude": [
                        "e"
                    ]
                }

//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }

//// [/a/b/c/f1.ts]
let x = 1

//// [/a/b/d/f2.ts]
let y = 1

//// [/a/b/e/f3.ts]
let z = 1


/a/lib/tsc.js -w -p /a/b/tsconfig.json
Output::
>> Screen clear
[[90m12:00:25 AM[0m] Starting compilation in watch mode...

[[90m12:00:30 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/a/b/c/f1.ts","/a/b/d/f2.ts"]
Program options: {"watch":true,"project":"/a/b/tsconfig.json","configFilePath":"/a/b/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/a/b/c/f1.ts
/a/b/d/f2.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/a/b/c/f1.ts
/a/b/d/f2.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/a/b/c/f1.ts (used version)
/a/b/d/f2.ts (used version)

FsWatches::
/a/b/tsconfig.json: *new*
  {}
/a/b/c/f1.ts: *new*
  {}
/a/b/d/f2.ts: *new*
  {}
/a/lib/lib.d.ts: *new*
  {}

FsWatchesRecursive::
/a/b: *new*
  {}

exitCode:: ExitStatus.undefined

//// [/a/b/c/f1.js]
var x = 1;


//// [/a/b/d/f2.js]
var y = 1;


