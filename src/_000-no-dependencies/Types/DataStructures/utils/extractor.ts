import { keyValueArrayToUnion as kvtta } from "./keyValueArrToUnion";
import { keysInKeyValueArr as kikva } from "./keysInKeyValueArr";
import { fromObjetToTupleUnion as fottu } from "./fromObjectToTupleUnion";
// import { primitives as p } from "../../Primitive.type";

export type extractor<
  T extends kvtta.KeyValueArr,
  K extends PropertyKey
> = Extract<kvtta<T>, kvtta.KeyValueArr.Pair.ReadOnlyKeyValue<K>>[1];
export namespace extractor {
  export import keyValueArrayToUnion = kvtta;
  export import keysInKeyValueArr = kikva;
  export import fromObjetToTupleUnion = fottu;
  export import primitive = kikva.primitive;
  export import Pair = kikva.Pair;
  export import KeyValueArr = kikva.KeyValueArr;
  export import KeyValueObj = kikva.KeyValueObj;
}
