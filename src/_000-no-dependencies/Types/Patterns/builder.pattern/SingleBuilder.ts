export class SingleBuilder<A extends any | undefined = undefined> {
  constructor(public a: A = undefined as A) {}
  // the extends number condition permette a ts di dedurre il tipo `as const`
  setA<S extends number>(this: SingleBuilder<any>, a: S) {
    this.a = a;
    return this as SingleBuilder<S>;
  }
  doit(this: SingleBuilder<number>, cb: (a: number) => void) {
    if (typeof this.a !== "number") throw new Error("not a number");
    cb(this.a);
    return this;
  }
}
