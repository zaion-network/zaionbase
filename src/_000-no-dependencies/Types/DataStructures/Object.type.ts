import { Object as O, Mixer } from "./Mixer.type";

export namespace Object {
  // KeyValue
  export type KeyValueObj = Mixer.extractor.keysInKeyValueArr.KeyValueObj;

  // other
  export type toArr<T> = O.toArr<T>;
  export type toMap<T> = O.toMap<T>;
  export type toMap2<T> = O.toMap2<T>;
}
