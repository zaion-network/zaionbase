import { Object as O } from "../../../_000-no-dependencies/Types/DataStructures/Object.type";
import { fromObjToMap } from "../../../_000-no-dependencies/utils/fromObjToMap";
import { ExtendedMap } from "../MapUtils/ExtendedMap";
import { ExtendedArray } from "../ArrayUtils/ExtendedArray";
import { fromObjToArray } from "../../../_000-no-dependencies/utils/fromObjToArray";

export interface ExtendedObjectMethods {
  // per far si che venagno omessi i metodi della classe va aggiunto qui
  toMap(): ExtendedObject.toMap<Omit<this, "toMap" | "toArr">>;
  toArr(): ExtendedObject.toArr<Omit<this, "toMap" | "toArr">>;
}
class Ctor<V extends ExtendedArray.toObj<any> & ExtendedObjectMethods> {
  constructor(value: V) {
    return Object.assign(this, value) as Ctor<V>;
  }
  toMap() {
    const map = fromObjToMap(this as unknown as V);
    return new ExtendedMap(
      Array.from(map as ExtendedMap<typeof map>)
    ) as unknown as ExtendedObject.toMap<V>;
  }
  toArr() {
    type pairObj = Ctor<V> extends O.KeyValueObj ? this : never;
    const arr = fromObjToArray(this as pairObj);
    return new ExtendedArray(...arr);
  }
}

interface ExtendedObject {
  new <V extends ExtendedArray.toObj<any>>(value: V): V & ExtendedObjectMethods;
}

export const ExtendedObject: ExtendedObject = Ctor as ExtendedObject;
export namespace ExtendedObject {
  // KeyValue
  export type KeyValueObj = O.KeyValueObj;
  // transformers
  export type toMap<V> = O.toMap<V>;
  export type toMap2<V> = O.toMap2<V>;
  export type toArr<V> = O.toArr<V>;
  // OTHER
  export type toObj<V extends ExtendedArray.KeyValueArr> =
    ExtendedArray.toObj<V>;
}
