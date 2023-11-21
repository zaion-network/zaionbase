import { fromMapToArray } from "../../../_000-no-dependencies/utils/fromMapToArray";
import { fromMapToObj } from "../../../_000-no-dependencies/utils/fromMapToObj";
import { ExtendedArray } from "../ArrayUtils/ExtendedArray";
import { ExtendedObject } from "../ObjectUtils/ExtendedObject";
import { stringifyMap } from "./stringifyMap";

// export interface ExtendedMap<T, K extends keyof T> extends Map<K, T[K]> {
//   stringify(): string;
// }

export class ExtendedMap<T>
  extends Map
  implements fromMapToArray.MapFromObj<T>
{
  stringify() {
    return stringifyMap(this, "object");
  }
  toObj() {
    return new ExtendedObject(fromMapToObj(this as Map<string, any>));
  }
  toArr() {
    const newarray = new ExtendedArray();
    fromMapToArray(this as fromMapToArray.MapFromArray).forEach(e =>
      newarray.push(e)
    );
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
export namespace ExtendedMap {}
