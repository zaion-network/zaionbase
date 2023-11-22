export type fromObjetToTupleUnion<O> = { [K in keyof O]: [K, O[K]] }[keyof O];
export namespace fromObjetToTupleUnion {}
