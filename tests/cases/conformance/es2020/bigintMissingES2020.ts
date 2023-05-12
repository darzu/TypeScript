// @target: es2020
// @lib: dom,es2017
declare function test<A, B extends A>(): void;

test<{t?: string}, object>();
test<{t?: string}, bigint>();

// no error when bigint is used even when ES2020 lib is not present
