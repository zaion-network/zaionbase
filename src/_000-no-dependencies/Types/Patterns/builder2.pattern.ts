type Atypes = number | number[] | undefined;
type Btypes = string | string[] | undefined;
type AnySome = Some<any, Atypes, Btypes, [...any]>;
type AddToSomeTuple<C extends any[], N> = Some<
  any,
  Atypes,
  Btypes,
  Some.AddToTuple<C, N>
>;

export class Some<
  V = unknown,
  A extends Atypes = undefined,
  B extends Btypes = undefined,
  C extends any[] = [V]
> {
  c: C;
  constructor(
    public value: V,
    public a: A = undefined as A,
    public b: B = undefined as B
  ) {
    this.c = [value] as C;
  }
  setA<S extends number | number[]>(this: AnySome, a: S) {
    this.a = a;
    return this as Some<any, S, this["b"], this["c"]>;
  }
  setB<S extends string | string[]>(this: AnySome, b: S) {
    this.b = b;
    return this as Some<any, this["a"], S, this["c"]>;
  }
  add<N, X extends [N]>(this: AnySome | AddToSomeTuple<C, N>, value: N) {
    this.c = Some.foo((this as Some<any, Atypes, Btypes, C>).c, value);
    return this as Some<any, this["a"], this["b"], Some.AddToTuple<C, N>>;
  }
  doit(this: Some<any, number, string, any>) {}
}
export namespace Some {
  export type AddToTuple<T extends any[], U> = [...T, U];
  export type foo = <T extends any[], U>(arr: T, value: U) => AddToTuple<T, U>;
  export const foo: foo = (arr, value) => [...arr, value];
}

const some = new Some("sono il primo" as const).add("ohi" as const);
const c0 = some.c[0];
//    ^?

const c1 = some.c[1];
//    ^?

const var1 = some.setA(100);
const a = var1.a;
//    ^?

const c2 = var1.add(1020 as const).c[2];
//    ^?

const var2 = var1.setB("10230");
const b = var2.b;
//    ^?
var2.doit();
