/// <reference path='fourslash.ts' />

// @lib: es2017

////interface I<Species> {
////    [Symbol.hasInstance](o: any): boolean;
////    [Symbol.isConcatSpreadable]: boolean;
////    [Symbol.iterator](): any;
////    [Symbol.match]: boolean;
////    [Symbol.replace](...args);
////    [Symbol.search](str: string): number;
////    [Symbol.species](): Species;
////    [Symbol.split](str: string, limit?: number): string[];
////    [Symbol.toPrimitive](hint: "number"): number;
////    [Symbol.toPrimitive](hint: "default"): number;
////    [Symbol.toPrimitive](hint: "string"): string;
////    [Symbol.toStringTag]: string;
////    [Symbol.unscopables]: any;
////}
////class C implements I<number> {}

verify.codeFix({
    index: 0,
    description: "Implement interface 'I<number>'",
    newFileContent:
`interface I<Species> {
    [Symbol.hasInstance](o: any): boolean;
    [Symbol.isConcatSpreadable]: boolean;
    [Symbol.iterator](): any;
    [Symbol.match]: boolean;
    [Symbol.replace](...args);
    [Symbol.search](str: string): number;
    [Symbol.species](): Species;
    [Symbol.split](str: string, limit?: number): string[];
    [Symbol.toPrimitive](hint: "number"): number;
    [Symbol.toPrimitive](hint: "default"): number;
    [Symbol.toPrimitive](hint: "string"): string;
    [Symbol.toStringTag]: string;
    [Symbol.unscopables]: any;
}
class C implements I<number> {
    [Symbol.hasInstance](o: any): boolean {
        throw new Error("Method not implemented.");
    }
    [Symbol.isConcatSpreadable]: boolean;
    [Symbol.iterator]() {
        throw new Error("Method not implemented.");
    }
    [Symbol.match]: boolean;
    [Symbol.replace](...args: any[]) {
        throw new Error("Method not implemented.");
    }
    [Symbol.search](str: string): number {
        throw new Error("Method not implemented.");
    }
    [Symbol.species](): number {
        throw new Error("Method not implemented.");
    }
    [Symbol.split](str: string, limit?: number): string[] {
        throw new Error("Method not implemented.");
    }
    [Symbol.toPrimitive](hint: "number"): number;
    [Symbol.toPrimitive](hint: "default"): number;
    [Symbol.toPrimitive](hint: "string"): string;
    [Symbol.toPrimitive](hint: unknown): string | number {
        throw new Error("Method not implemented.");
    }
    [Symbol.toStringTag]: string;
    [Symbol.unscopables]: any;
}`,
});
