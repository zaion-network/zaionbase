import { KeyValueArr as KVA, KeyValueObj as KVO } from "../KeyValue";

export type keyValueArrayToUnion<T extends KVA> = T[number];
export namespace keyValueArrayToUnion {
  export import KeyValueArr = KVA;
  export import Pair = KVO.Pair;
  export import primitive = KVO.primitive;
}
