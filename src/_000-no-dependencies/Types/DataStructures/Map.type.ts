import { Array as A, Map as M } from "./Mixer.type";
import { Pair } from "./Tuple.type";
import { indexArray } from "./utils/indexArray";

export namespace Map {
  // KeyValue
  export type KeyValueMap<T extends Pair.KeyValue> = A.toMap<T>;

  // other
  export type indexedArryFromMap<T> = T extends A.toMap<any>
    ? indexArray<M.toArr<T>>
    : never;

  export type toArr<T> = M.toArr<T>;
  export type toObj<T> = M.toObj<T>;

  export type KeyValue = Pair.KeyValue;
}
