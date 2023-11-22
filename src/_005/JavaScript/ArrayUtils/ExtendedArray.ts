import { Array as A } from "../../../_000-no-dependencies/Types/DataStructures/Array.type";
import { fromArrayToMap } from "../../../_000-no-dependencies/utils/fromArrayToMap";
import { fromArrayToObj } from "../../../_000-no-dependencies/utils/fromArrayToObj";
import { ExtendedMap } from "../MapUtils/ExtendedMap";
import { ExtendedObject } from "../ObjectUtils/ExtendedObject";

export interface ExtendedArrayMethods<T extends A.KeyValueArr> {
  toMap(): A.toMap<T>;
  toObj(): A.toObj<T>;
}

export class Ctor<T extends ExtendedArray.KeyValueArr | [number]>
  extends Array
  implements ExtendedArrayMethods<T extends A.KeyValueArr ? T : never>
{
  constructor(...args: T) {
    super(...(args as any[] | [number]));
    return this as Ctor<T>;
  }
  toObj() {
    const obj = new ExtendedObject(fromArrayToObj(this));
    return obj;
  }
  toMap() {
    type pairArr = T extends A.KeyValueArr
      ? T extends Iterable<readonly [any, any]>
        ? T
        : never
      : never;
    const map = new ExtendedMap<pairArr>(
      fromArrayToMap(this) as unknown as pairArr
    );
    return map as unknown as A.toMap<pairArr>;
  }
}
export interface ExtendedArray {
  new <T extends ExtendedArray.KeyValueArr | [number]>(
    ...args: T
  ): T extends ExtendedArray.KeyValueArr ? T & ExtendedArrayMethods<T> : any[];
}

export const ExtendedArray: ExtendedArray = Ctor as ExtendedArray;

export namespace ExtendedArray {
  // KeyValue
  export type KeyValueArr = A.KeyValueArr;
  // transformers
  export type toObj<T extends KeyValueArr> = A.toObj<T>;
  export type toMap<T extends KeyValueArr> = A.toMap<T>;
  // OTHER
  export type ArrayFromObj<T> = ExtendedObject.toArr<T>;
  export type ArrayFromMap<T> = ExtendedMap.toArr<T>;
  export type inferArrayFromObj<T> =
    ExtendedArray.ArrayFromObj<T> extends ExtendedArray.KeyValueArr
      ? ExtendedArray.ArrayFromObj<T>
      : never;
}
