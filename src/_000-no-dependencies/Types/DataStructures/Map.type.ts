import { Array as A, Map as M } from "./Mixer.type";
import { Array as Ar } from "./Array.type";
import { Pair } from "./Tuple.type";

export namespace Map {
  export type KeyValueMap<T extends Pair.KeyValue> = A.toMap<T>;

  export type indexedArryFromMap<T> = T extends A.toMap<any>
    ? Ar.indexArray<M.toArr<T>>
    : never;
}
