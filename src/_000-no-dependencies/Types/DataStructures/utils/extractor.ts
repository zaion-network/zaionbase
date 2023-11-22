import { KeyValueArr } from "../KeyValue";
import { keyValueArrayToUnion } from "./keyValueArrToUnion";
import { Pair } from "../Tuple.type";

export type extractor<T extends KeyValueArr, K extends PropertyKey> = Extract<
  keyValueArrayToUnion<T>,
  Pair.ReadOnlyKeyValue<K>
>[1];
