import { KeyValueArr as KVA, KeyValueObj as KVO } from "../KeyValue";

export type keysInKeyValueArr<T extends KVA> = T[number][0];
export namespace keysInKeyValueArr {
  export import KeyValueArr = KVA;
  export import KeyValueObj = KVO;
  export import Pair = KVO.Pair;
  export import primitive = KVO.primitive;
}
