import { fromMapToArray } from "../../../_000-no-dependencies/utils/fromMapToArray";
import { fromMapToObj } from "../../../_000-no-dependencies/utils/fromMapToObj";
import { ExtendedArray } from "../ArrayUtils/ExtendedArray";
import { ExtendedObject } from "../ObjectUtils/ExtendedObject";
import { stringifyMap } from "./stringifyMap";

declare module "./ExtendedMap" {
  interface ExtendedMap<K, V> extends Map<K, V> {
    stringify(): string;
  }
}

export class ExtendedMap<K, V> extends Map<K, V> implements ExtendedMap<K, V> {
  constructor(iterable?: Iterable<readonly [K, V]>) {
    super(iterable);
  }
  stringify() {
    return stringifyMap(this, "object");
  }
  toObj() {
    return new ExtendedObject(fromMapToObj(this as Map<string, any>));
  }
  toArr() {
    return new ExtendedArray(...fromMapToArray(this as Map<string, any>));
  }
}
export namespace ExtendedMap {}
