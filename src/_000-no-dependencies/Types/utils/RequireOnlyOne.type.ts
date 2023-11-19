/**
 * This utility type takes optional fields and makes at
 * least one of them required in the resulting type.
 *
 * Usage:
 * ```js
 * type test = RequireOnlyOne<
 *  { id?: string; name?: string },
 *  "id" | "name"
 * >;
 * const obj:test ={id:''} // ts complains until at least one of the field is used
 * ```
 */
export type RequireOnlyOne<T, Keys extends keyof T = keyof T> = Pick<
  T,
  Exclude<keyof T, Keys>
> &
  {
    [K in Keys]-?: Required<Pick<T, K>> &
      Partial<Record<Exclude<Keys, K>, undefined>>;
  }[Keys];
