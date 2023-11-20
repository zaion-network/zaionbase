import { flatteners as f } from "./flatteners.type";
import { extenders as e } from "./extenders.type";
import { Class as C } from "./Class.type";
import { Record as R } from "./Record.type";
import { Middlewares as M } from "./Middlewares.type";
import { UnionStuff as US } from "./UnionStuff.type";
import { ZionTypes as ZT } from "./ZaionTypes.type";
import type { UnionToIntersection as U2I } from "./utils/UnionToIntersection.type";
import type { IntersectionOfObjectInArray as IOA } from "./utils/IntersectionOfObjectInArray.type";
import type { RequireOnlyOne as ROO } from "./utils/RequireOnlyOne.type";
import type { BooleanKeys as BK } from "./utils/BooleanKeys.type";
import type { flatarr as fa } from "./utils/flatarr.type";
import type {
  Flatten as F,
  flatten as f_,
  Flatten2 as F2,
} from "./utils/Flatten.type";

declare module "./Types" {
  type reverse = boolean;

  namespace Types {
    type flatarr<T> = fa<T>;

    type Flatten<T> = F<T>;

    type flatten<T> = f_<T>;

    /**
     * util type which flattens arrays
     */
    type Flatten2<Type> = F2<Type>;

    type UnionToIntersection<U> = U2I<U>;

    type BooleanKeys<
      Keys extends string,
      makeRequired extends boolean = false
    > = BK<Keys, makeRequired>;

    /**
     * Usage
     * ```
     * const arr2 = [{ a: 0 }, { b: true }, { c: { d: 0 } }]
     *
     * type InterOfArr = IntersctionOfObjectInArray<typeof arr2>
     * ```
     * expexcted output:
     * ```
     * type InterOfArr = {
     *     a?: number | undefined;
     *     b?: boolean | undefined;
     *     c?: {
     *         d: number;
     *     } | undefined;
     * }
     * ```
     */
    type IntersectionOfObjectInArray<T> = IOA<T>;

    /**
     * This utility type takes optional fields and makes at
     * least one of them required in the resulting type.
     *
     * Usage:
     * ```js
     * type test = RequireOnlyOne<
     *  { id?: string; name?: string },
     *  "id" | "name"
     * >;
     * const obj:test ={id:''} // ts complains until at least one of the field is used
     * ```
     */
    type RequireOnlyOne<T, Keys extends keyof T = keyof T> = ROO<T, Keys>;

    export import flatteners = f;

    export import extenders = e;

    export import Record = R;

    export import Class = C;

    export import Middlewares = M;

    export import UnionStuff = US;

    export import ZaionTypes = ZT;
  }
}

export class Types {}
