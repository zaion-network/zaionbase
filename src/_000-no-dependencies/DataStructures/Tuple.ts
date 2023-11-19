export class Tuple<V, T extends any[] = [V]> {
  arr: T;
  constructor(value: V) {
    this.arr = [value] as T;
  }
  push<A>(this: Tuple<any, T> | Tuple<any, Tuple.AddToTuple<T, A>>, value: A) {
    this.arr = Tuple.foo((this as Tuple<any, T>).arr, value);
    return this as Tuple<any, Tuple.AddToTuple<T, A>>;
  }
  tupleReduce = <C, R>(
    callback: (
      accumulator: C,
      current: T[number],
      index: number,
      tuple?: T
    ) => R,
    initialValue: C
  ): R => Tuple.tupleReduce<T, C, R>(this.arr, callback, initialValue);
}

export namespace Tuple {
  export type AddToTuple<T extends any[], U> = [...T, U];
  type Tuple<T extends unknown[]> = [...T];

  type TupleRedux = <T extends any[], C, R>(
    tuple: T,
    callback: (
      accumulator: C,
      current: T[number],
      index: number,
      tuple: T | undefined
    ) => R,
    initialValue: C
  ) => R;

  export const tupleReduce: TupleRedux = <T extends any[], C, R>(
    tuple: T,
    callback: (
      accumulator: C,
      current: T[number],
      index: number,
      tuple?: T
    ) => R,
    initialValue: C
  ): R => {
    const reduceHelper = (index: number, accumulator: R | C): R => {
      if (index >= tuple.length) {
        return accumulator as R;
      }
      const current = tuple[index];
      const updatedAccumulator = callback(accumulator as C, current, index);
      return reduceHelper(index + 1, updatedAccumulator);
    };

    return reduceHelper(0, initialValue);
  };

  export type foo = <T extends any[], U>(arr: T, value: U) => AddToTuple<T, U>;
  export const foo: foo = (arr, value) => [...arr, value];
}
