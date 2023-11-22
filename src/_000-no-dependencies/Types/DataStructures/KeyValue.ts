import { primitives as p } from "../Primitive.type";
import { Pair as P } from "./Tuple.type";

export type KeyValueArr = readonly P.KeyValue[];
export namespace KeyValueArr {
  export import Pair = P;
  export import primitive = p;
}

export type KeyValueObj = { [k: PropertyKey]: p | KeyValueObj };
export namespace KeyValueObj {
  export import Pair = P;
  export import primitive = p;
}
