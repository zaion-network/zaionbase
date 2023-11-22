import { Array as A, Mixer } from "./Mixer.type";
import { extractFromArray as efa } from "./utils/extractFromArray";
import { extractor as e } from "./utils/extractor";
import { indexArray as ia } from "./utils/indexArray";

export namespace Array {
  // KeyValue
  export type KeyValueArr = Mixer.extractor.keysInKeyValueArr.KeyValueArr;

  // other
  export type arrayToUnion<A extends any[]> = A[number];

  export type extractor<T extends Array.KeyValueArr, K extends PropertyKey> = e<
    T,
    K
  >;

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
  export type indexArray<T extends any[]> = ia<T>;

  /**
   * Estrae gli elementi che sono assegnabili a U
   */
  export type extractFromArray<T, U> = efa<T, U>;

  /**
   * Sostituisce un valore nell'array passato
   */
  export type subElement<A, I, V> = A extends any[]
    ? I extends number | string
      ? {
          [K in keyof A]: K extends `${I}` ? V : A[K];
        }
      : never
    : never;

  export type toMap<T extends KeyValueArr> = A.toMap<T>;
  export type toObj<T extends KeyValueArr> = A.toObj<T>;
}
