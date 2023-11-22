import {
  Map as M,
  Array as A,
  Object as O,
} from "../Types/DataStructures/Mixer.type";
import { Array as Ar } from "../Types/DataStructures/Array.type";
import { Pair } from "../Types/DataStructures/Tuple.type";

export function fromMapToArray<M extends A.toMap<any>>(
  map: M
): M extends A.toMap<infer T> ? M.toArr<A.toMap<T>> : never;
export function fromMapToArray<M extends Map<string, any>>(map: M): any {
  if (!(map instanceof Map)) throw new Error("you must pass a map!");
  const res: Pair.KeyValue[] = [];
  map.forEach((v, k) => {
    if (!(v instanceof Map)) {
      res.push([k, v]);
    } else {
      const arrayAnnidato = fromMapToArray(v);
      res.push([k, arrayAnnidato]);
    }
  });
  return res;
}
export namespace fromMapToArray {
  export type MapFromArray<T extends Ar.KeyValueArr> = A.toMap<T>;
  export type MapFromObj<T> = O.toMap2<T>;
  export type KeyValueArr = Ar.KeyValueArr;
}
