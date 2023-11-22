import { primitives } from "../Primitive.type";
import { Object as O } from "./Mixer.type";
import { fromObjetToTupleUnion as fottu } from "./utils/fromObjectToTupleUnion";

export namespace Object {
  export type KeyValueObj = { [k: PropertyKey]: primitives | KeyValueObj };
  export type fromObjetToTupleUnion<O> = fottu<O>;
  export type toArr<T> = O.toArr<T>;
  export type toMap<T> = O.toMap<T>;
  export type toMap2<T> = O.toMap2<T>;
}
