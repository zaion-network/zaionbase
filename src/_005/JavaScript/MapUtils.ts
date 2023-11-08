import { parseMapFromJsonStrategy as pmfjs } from "./MapUtils/parseMapFromJsonStrategy";
import { stringifyMap as sm } from "./MapUtils/stringifyMap";
import { ExtendedMap as Em } from "./MapUtils/ExtendedMap";
import { NonNullableMap as Nnm } from "./MapUtils/NonNullable";

declare module "./MapUtils" {
  namespace MapUtils {
    export import parseMapFromJsonStrategy = pmfjs;
    export import stringifyMap = sm;
    export import ExtendedMap = Em;
    // export import NonNullableMap = Nnm;
  }
}

export namespace MapUtils {
  export abstract class NonNullableMap<K, V> extends Map<K, V> {
    get(key: K): NonNullable<V> {
      const value = super.get(key);
      if (value === undefined) {
        throw new Error("");
      }
      return value as NonNullable<V>;
    }
  }
}
MapUtils.parseMapFromJsonStrategy = pmfjs;
MapUtils.stringifyMap = sm;
MapUtils.ExtendedMap = Em;
MapUtils.NonNullableMap = Nnm;
