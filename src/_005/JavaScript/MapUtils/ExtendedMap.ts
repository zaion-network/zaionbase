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
}
export namespace ExtendedMap {}
