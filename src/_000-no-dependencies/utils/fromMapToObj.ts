import { Object as O } from "../Types/DataStructures/Object.type";
import { Map as M } from "../Types/DataStructures/Map.type";
import { Array as A } from "../Types/DataStructures/Array.type";

export function fromMapToObj<M extends A.toMap<any>>(
  map: M
): M extends A.toMap<infer T> ? M.toObj<A.toMap<T>> : never;
export function fromMapToObj<M extends Map<string, any>>(map: M) {
  if (!(map instanceof Map))
    throw new Error("not the right type, try passing a map!");

  const obj: O.KeyValueObj = {};
  map.forEach((v, k) => {
    const key = k;
    const value = v;
    if (!(value instanceof Map)) {
      obj[key] = value;
    } else {
      obj[key] = fromMapToObj(value);
    }
  });
  return obj;
}
export namespace fromMapToObj {
  // definition
  export type fromMapToObj<T> = M.toObj<T>;
  // other
}
