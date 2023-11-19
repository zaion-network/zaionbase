import { UnionStuff } from "../UnionStuff.type";
import { Array as A } from "./Array.type";
import { Object as O } from "./Object.type";
import { Pair } from "./Tuple.type";

// // -------------------------------------- Object
// export type KeyValueObj = { [k: PropertyKey]: any };

export namespace Object {
  // OBJ => MAP
  export type toMap<T> = {
    set<K extends keyof T>(key: K, value: T[K]): void;
    get<K extends keyof T>(key: K): T[K];
  };

  // OBJ => TUPLEARR
  export type toArr<O> = UnionStuff.unionToTuple<O.fromObjetToTupleUnion<O>>;

  export namespace Ctors {
    export type TypedMapCtor = new <T>(
      ...parms: ConstructorParameters<typeof Map>
    ) => Object.toMap<T>;

    // Creazione di una mappa tipizzata
    export type FromObjToMapCtor<O> = new (
      ...parms: ConstructorParameters<typeof Map>
    ) => Object.toMap<O>;
  }
}

// -------------------------------------- Array
export namespace Array {
  // TUPLEARR => OBJ
  export type toObj<T extends A.KeyValueArr> = {
    [K in A.keysInKeyValueArr<T>]: A.extractor<T, K>;
  };

  // TUPLEARR => MAP
  export type toMap<T extends A.KeyValueArr> = Object.toMap<toObj<T>>;
}

// -------------------------------------- Map

export namespace Map {
  // MAP => OBJ
  export type toObj<M> = M extends Array.toMap<infer T>
    ? Array.toObj<T>
    : never;

  // MAP => TUPLEARR
  export type toArr<M> = M extends Array.toMap<infer T> ? T : never;
}
