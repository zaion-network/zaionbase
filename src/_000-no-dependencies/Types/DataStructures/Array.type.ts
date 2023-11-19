import { Pair } from "./Tuple.type";

export namespace Array {
  export type arrayToUnion<A extends any[]> = A[number];
  export type extractor<
    T extends Array.KeyValueArr,
    K extends PropertyKey
  > = Extract<keyValueArrayToUnion<T>, Pair.ReadOnlyKeyValue<K>>[1];
  export type KeyValueArr = readonly Pair.KeyValue[];
  export type keyValueArrayToUnion<T extends KeyValueArr> = T[number];
  export type keysInKeyValueArr<T extends Array.KeyValueArr> = T[number][0];
}
