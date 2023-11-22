import { KeyValueArr } from "../KeyValue";

export type keysInKeyValueArr<T extends KeyValueArr> = T[number][0];
