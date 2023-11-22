import { Pair } from "../Types/DataStructures/Tuple.type";
import { Array as A } from "../Types/DataStructures/Array.type";

export function fromArrayToMap<T extends any[]>(
  array: T
): Pair.isPair<T> extends true ? A.toMap<T> : Map<any, any>;
export function fromArrayToMap<T extends any[]>(array: T) {
  if (!Array.isArray(array)) throw new Error("devi passare un array");
  const res = new Map();
  array.forEach(([k, v]) => {
    if (Array.isArray(v)) {
      const mapannidato = fromArrayToMap([v]);
      res.set(k, mapannidato);
    } else {
      res.set(k, v);
    }
  });
  return res;
}
export namespace fromArrayToMap {
  // definition
  // other
  export type fromArrayToMap<T extends A.KeyValueArr> = A.toMap<T>;
}
