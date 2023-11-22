import { Array as Ar } from "../../../_000-no-dependencies/Types/DataStructures/Array.type";
import {
  Object as O,
  Map as M,
  Array as A,
} from "../../../_000-no-dependencies/Types/DataStructures/Mixer.type";
import { fromArrayToMap } from "../../../_000-no-dependencies/utils/fromArrayToMap";
import { fromArrayToObj } from "../../../_000-no-dependencies/utils/fromArrayToObj";
import { ExtendedMap } from "../MapUtils/ExtendedMap";
import { ExtendedObject } from "../ObjectUtils/ExtendedObject";

export interface ExtendedArrayMethods<T extends Ar.KeyValueArr> {
  toMap(): A.toMap<T>;
  toObj(): A.toObj<T>;
}

export class Ctor<T extends ExtendedArray.KeyValueArr | [number]>
  extends Array
  implements ExtendedArrayMethods<T extends Ar.KeyValueArr ? T : never>
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
    type pairArr = T extends Ar.KeyValueArr
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
  export type KeyValueArr = Ar.KeyValueArr;
  export type ArrayFromObj<T> = O.toArr<T>;
  export type ArrayFromMap<T> = M.toArr<T>;
  export type inferArrayFromObj<T> =
    ExtendedArray.ArrayFromObj<T> extends ExtendedArray.KeyValueArr
      ? ExtendedArray.ArrayFromObj<T>
      : never;
}
