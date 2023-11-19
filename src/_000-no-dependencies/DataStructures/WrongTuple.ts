export class WrongTuple<T extends any[], V extends [...T] = [...T]>
  implements WrongTuple<T>
{
  value: V;
  constructor(public arr: T) {
    this.value = [...arr] as V;
  }

  add<U>(e: U): WrongTuple<WrongTuple.AddToTuple<T, U>> {
    return new WrongTuple<WrongTuple.AddToTuple<T, U>>([
      ...this.arr,
      e,
    ]) as WrongTuple<WrongTuple.AddToTuple<T, U>>;
  }

  tupleReduce = <C, R>(
    callback: (
      accumulator: C,
      current: T[number],
      index: number,
      tuple?: T
    ) => R,
    initialValue: C
  ): R => WrongTuple.tupleReduce<T, C, R>(this.arr, callback, initialValue);
}

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

export namespace WrongTuple {
  export type AddToTuple<T extends any[], U> = [...T, U];
  type Tuple<T extends unknown[]> = [...T];
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
}
