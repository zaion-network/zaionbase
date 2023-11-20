export class DoubleBuilder<
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
    this: DoubleBuilder<
      undefined | number | number[],
      string | string[] | undefined
    >,
    a: S
  ) {
    this.a = a;
    return this as DoubleBuilder<S, this["b"]>;
  }
  setB<S extends string | string[]>(
    this: DoubleBuilder<
      undefined | number | number[],
      string | string[] | undefined
    >,
    b: S
  ) {
    this.b = b;
    return this as DoubleBuilder<this["a"], S>;
  }
  doit(this: DoubleBuilder<number, string>) {}
}
