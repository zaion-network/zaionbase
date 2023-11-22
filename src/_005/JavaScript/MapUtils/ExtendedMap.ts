import {
  Array as A,
  Object as O,
} from "../../../_000-no-dependencies/Types/DataStructures/Mixer.type";
import { fromMapToArray } from "../../../_000-no-dependencies/utils/fromMapToArray";
import { fromMapToObj } from "../../../_000-no-dependencies/utils/fromMapToObj";
import { ExtendedArray } from "../ArrayUtils/ExtendedArray";
import { ExtendedObject } from "../ObjectUtils/ExtendedObject";
import { stringifyMap } from "./stringifyMap";

export class ExtendedMap<T>
  extends Map
  implements fromMapToArray.MapFromObj<T>
{
  constructor(...args: ConstructorParameters<typeof Map<any, any>>) {
    // non so perché ma il map che viene esteso sembra non aspettarsi
    // argoment
    // @ts-expect-error
    super(...args);
  }
  stringify() {
    return stringifyMap(this, "object");
  }
  toObj() {
    type pairObj = this extends ExtendedMap<infer X>
      ? X extends ExtendedObject.toObj<any>
        ? X
        : never
      : never;
    return new ExtendedObject<pairObj>(fromMapToObj(this as Map<string, any>));
  }
  toArr() {
    type pairArr = ExtendedArray.inferArrayFromObj<T>;
    const newarray = new ExtendedArray(...(Array.from(this) as pairArr));
    return newarray;
  }
  set<K extends keyof T>(key: K, value: T[K]): this {
    super.set(key, value);
    return this;
  }
  get<K extends keyof T>(key: K): T[K] {
    return super.get(key);
  }
}
export namespace ExtendedMap {
  export type MapFromArray<T extends ExtendedArray.KeyValueArr> = A.toMap<T>;
  export type MapFromObject<T> = O.toMap<T>;
}
