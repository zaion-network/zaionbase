import { Object as O, Array as A } from "../Types/DataStructures/Mixer.type";
import { Array as Ar } from "../Types/DataStructures/Array.type";

export function fromObjToMap<
  T extends { [k: string]: string | { [k: string]: any } },
  K extends keyof T,
  V extends T[K]
>(obj: T): O.toMap<T>;
export function fromObjToMap<
  T extends { [k: string]: string | { [k: string]: any } },
  K extends keyof T,
  V extends T[K]
>(obj: T): Map<K, V> {
  if (obj instanceof Array || obj instanceof Map) throw new Error("");
  const keys: K[] = Object.keys(obj) as K[];
  const map = new Map();
  keys.forEach(k => {
    if (typeof obj[k] === "object" && Object.keys(obj[k]).length > 0) {
      map.set(k, fromObjToMap(obj[k] as { [k: string]: any }));
    } else {
      map.set(k, obj[k]);
    }
  });
  return map;
}
export namespace fromObjToMap {
  export type fromObjToMap<T> = O.toMap2<T>;
  export type fromArrayToObj<T extends Ar.KeyValueArr> = A.toObj<T>;
  export type fromArrayToMap<T extends Ar.KeyValueArr> = A.toMap<T>;
}
