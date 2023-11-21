import { primitives } from "../Primitive.type";

export namespace Object {
  export type KeyValueObj = { [k: PropertyKey]: primitives | KeyValueObj };
  export type fromObjetToTupleUnion<O> = { [K in keyof O]: [K, O[K]] }[keyof O];
}
