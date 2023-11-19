import { Array } from "./Mixer.type";
import { Pair } from "./Tuple.type";

export namespace Map {
  export type KeyValueMap<T extends Pair.KeyValue> = Array.toMap<T>;
}
