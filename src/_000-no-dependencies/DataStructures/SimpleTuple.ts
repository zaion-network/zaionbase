export class SimpleTuple<V, T extends any[] = [V]> {
  arr: T;
  constructor(value: V) {
    this.arr = [value] as T;
  }
  push<A>(
    this: SimpleTuple<any, T> | SimpleTuple<any, SimpleTuple.AddToTuple<T, A>>,
    value: A
  ) {
    this.arr = SimpleTuple.foo((this as SimpleTuple<any, T>).arr, value);
    return this as SimpleTuple<any, SimpleTuple.AddToTuple<T, A>>;
  }
}
export namespace SimpleTuple {
  export type AddToTuple<T extends any[], U> = [...T, U];
  export type foo = <T extends any[], U>(arr: T, value: U) => AddToTuple<T, U>;
  export const foo: foo = (arr, value) => [...arr, value];
}
