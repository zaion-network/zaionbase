import { Map as M, Array as A } from "../Types/DataStructures/Mixer.type";
import { Pair } from "../Types/DataStructures/Tuple.type";
import { Map as Mt } from "../Types/DataStructures/Map.type";

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
