import { primitives } from "../Primitive.type";
import { Object as O } from "./Mixer.type";

export namespace Object {
  export type KeyValueObj = { [k: PropertyKey]: primitives | KeyValueObj };
  export type fromObjetToTupleUnion<O> = { [K in keyof O]: [K, O[K]] }[keyof O];
  export type toArr<T> = O.toArr<T>;
  export type toMap<T> = O.toMap<T>;
  export type toMap2<T> = O.toMap2<T>;
}
