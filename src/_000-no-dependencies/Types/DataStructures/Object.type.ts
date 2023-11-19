export namespace Object {
  export type KeyValueObj = { [k: PropertyKey]: any };
  export type fromObjetToTupleUnion<O> = { [K in keyof O]: [K, O[K]] }[keyof O];
}
