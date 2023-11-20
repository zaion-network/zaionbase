import { UnionStuff } from "../UnionStuff.type";
import { Array as A } from "./Array.type";
import { Object as O } from "./Object.type";
import { Map as M } from "./Map.type";
import { Pair } from "./Tuple.type";
import { primitives } from "../Primitive.type";
// import { Pair } from "./Tuple.type";

// // -------------------------------------- Object
// export type KeyValueObj = { [k: PropertyKey]: any };

export namespace Object {
  type checkAndRecurse<T, K extends keyof T> = T[K] extends Pair.KeyValue
    ? toMap<Array.toObj<[T[K]]>>
    : T[K] extends Array.toMap<infer X>
    ? Array.toMap<X>
    : toMap<T[K]>;
  // OBJ => MAP
  export type toMap<T> = {
    set<K extends keyof T>(key: K, value: T[K]): void;
    get<K extends keyof T>(key: K): checkAndRecurse<T, K>;
  };
  export type toMap2<T> = {
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
  type checkAndRecurse<T extends A.KeyValueArr> = T extends Array<any>
    ? toObj<T>
    : T extends toMap<infer X>
    ? toObj<X>
    : T;
  export type toObj<T extends A.KeyValueArr> = {
    [K in A.keysInKeyValueArr<T>]: checkAndRecurse<A.extractor<T, K>>;
  };

  // TUPLEARR => MAP
  type buildTuple<T extends A.KeyValueArr> = {
    [K in A.keysInKeyValueArr<T>]: A.extractor<T, K> extends primitives
      ? A.extractor<T, K>
      : toMap<A.extractor<T, K>>;
  };
  type toMapSub<T extends A.KeyValueArr> = buildTuple<T>;
  export type toMap<T extends A.KeyValueArr> = Object.toMap<toMapSub<T>>;
}

// -------------------------------------- Map

export namespace Map {
  // MAP => OBJ
  export type toObj<M> = M extends Array.toMap<infer T>
    ? Array.toObj<T>
    : never;

  // MAP => TUPLEARR
  type replaceNestedArray<A extends readonly any[]> = {
    [K in keyof A]: A[K] extends [infer T, Array.toMap<infer V>]
      ? [T, V]
      : A[K];
  };
  type inferArrayPair<M> = M extends Array.toMap<infer T>
    ? replaceNestedArray<T>
    : never;
  export type toArr<M> = inferArrayPair<M>;
}
