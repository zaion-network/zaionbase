class Some<
  A extends number | number[] | undefined = undefined,
  B extends string | string[] | undefined = undefined,
  C extends string[] | undefined = undefined
> {
  constructor(
    public a: A = undefined as A,
    public b: B = undefined as B,
    public c: C = undefined as C
  ) {}
  setA<S extends number | number[]>(
    this: Some<undefined | number | number[], string | string[] | undefined>,
    a: S
  ) {
    this.a = a;
    return this as Some<S, this["b"]>;
  }
  setB<S extends string | string[]>(
    this: Some<undefined | number | number[], string | string[] | undefined>,
    b: S
  ) {
    this.b = b;
    return this as Some<this["a"], S>;
  }
  doit(this: Some<number, string>) {}
}

const some = new Some().setA(10).setB("mamma");

const a = some.a;
//   ^?
const b = some.b;
//   ^?
const ob = some.setA(1).a;
some.doit();
