import { Pair } from "./Tuple.type";

export namespace Array {
  export type arrayToUnion<A extends any[]> = A[number];

  export type extractor<
    T extends Array.KeyValueArr,
    K extends PropertyKey
  > = Extract<keyValueArrayToUnion<T>, Pair.ReadOnlyKeyValue<K>>[1];

  export type KeyValueArr = readonly Pair.KeyValue[];

  export type keyValueArrayToUnion<T extends KeyValueArr> = T[number];

  export type keysInKeyValueArr<T extends Array.KeyValueArr> = T[number][0];

  /**
   * Ritorna un type
   * ```ts
   * type arr = [
   *  [10, mapArr],
   *  [20, string],
   *  [30, string],
   *  [40, string],
   *  [50, string]
   * ]
   * // extected response
   * [
   *   ["0", [10, A.toMap<keyValuePairArr>]],
   *   ["1", [20, string]],
   *   ["2", [30, string]],
   *   ["3", [40, string]],
   *   ["4", [50, string]]
   * ]
   * ```
   */
  export type indexArray<T extends any[]> = {
    [K in keyof T]: [K, T[K]];
  } extends infer U
    ? U
    : never;

  /**
   * Estrae gli elementi che sono assegnabili a U
   */
  export type extractFromArray<T, U> = T extends Array<any>
    ? Extract<T[number], U>
    : never;

  /**
   * Sostituisce un valore nell'array passato
   */
  export type subElement<A extends any[], I extends number | string, V> = {
    [K in keyof A]: K extends `${I}` ? V : A[K];
  };
}
