/**
 * Usage
 * ```
 * const arr2 = [{ a: 0 }, { b: true }, { c: { d: 0 } }]
 *
 * type InterOfArr = IntersctionOfObjectInArray<typeof arr2>
 * ```
 * expexcted output:
 * ```
 * type InterOfArr = {
 *     a?: number | undefined;
 *     b?: boolean | undefined;
 *     c?: {
 *         d: number;
 *     } | undefined;
 * }
 * ```
 */
export type IntersectionOfObjectInArray<T> = T extends Array<any>
  ? T extends Object
    ? { [Prop in keyof T[number]]: T[number][Prop] }
    : never
  : never;
