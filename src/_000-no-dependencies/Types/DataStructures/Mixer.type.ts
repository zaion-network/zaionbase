import { UnionStuff } from "../UnionStuff.type";
import { extractor as e } from "./utils/extractor";

export namespace Object {
  type checkAndRecurse<
    T,
    K extends keyof T
  > = T[K] extends e.keyValueArrayToUnion.KeyValueArr.Pair.KeyValue
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
  export type toArr<O> = UnionStuff.unionToTuple<e.fromObjetToTupleUnion<O>>;

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
  type checkAndRecurse<T extends e.keyValueArrayToUnion.KeyValueArr> =
    T extends Array<any> ? toObj<T> : T extends toMap<infer X> ? toObj<X> : T;
  export type toObj<T extends e.keyValueArrayToUnion.KeyValueArr> = {
    [K in e.keysInKeyValueArr<T>]: checkAndRecurse<e<T, K>>;
  };

  // TUPLEARR => MAP
  type buildTuple<T extends e.keyValueArrayToUnion.KeyValueArr> = {
    [K in e.keysInKeyValueArr<T>]: e<T, K> extends e.primitive
      ? e<T, K>
      : toMap<e<T, K>>;
  };
  type toMapSub<T extends e.keyValueArrayToUnion.KeyValueArr> = buildTuple<T>;
  export type toMap<T extends e.keyValueArrayToUnion.KeyValueArr> =
    Object.toMap<toMapSub<T>>;
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

export namespace Mixer {
  export import extractor = e;
  export import KeyValueArr = e.KeyValueArr;
  export import KeyValueObj = e.KeyValueObj;
  export import Pair = e.Pair;
  export import fromObjetToTupleUnion = e.fromObjetToTupleUnion;
  export import keyValueArrayToUnion = e.keyValueArrayToUnion;
  export import keysInKeyValueArr = e.keysInKeyValueArr;
  export import primitive = e.primitive;
}
