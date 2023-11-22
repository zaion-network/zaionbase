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
