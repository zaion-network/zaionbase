import { KeyValueArr } from "../KeyValue";

export type keyValueArrayToUnion<T extends KeyValueArr> = T[number];
