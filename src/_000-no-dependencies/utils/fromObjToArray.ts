import { Array as A } from "../Types/DataStructures/Mixer.type";
import { Object as O } from "../Types/DataStructures/Object.type";
import { Map as M } from "../Types/DataStructures/Map.type";

export function fromObjToArray<
  T extends O.KeyValueObj,
  K extends keyof T,
  V extends T[K] | [K, T[K]]
>(obj: T): T extends A.toObj<infer A> ? A : [K, V][];
export function fromObjToArray<
  T extends O.KeyValueObj,
  K extends keyof T,
  V extends T[K] | [K, T[K]]
>(obj: T): [K, V][] {
  if (obj instanceof Array || obj instanceof Map) throw new Error("");
  const keys: K[] = Object.keys(obj) as K[];
  const array: [K, V][] = [];
  keys.forEach(k => {
    if (typeof obj[k] === "object" && Object.keys(obj[k]!).length > 0) {
      const nestedArray = fromObjToArray(obj[k] as { [k: string]: any });
      nestedArray.forEach(([nestedK, nestedV]) => {
        array.push([k, [nestedK, nestedV] as V]);
      });
    } else {
      array.push([k, obj[k] as V]);
    }
  });
  return array;
}
export namespace fromObjToArray {
  // definition
  export type fromObjToArray<T> = M.toArr<T>;
  // other
}
