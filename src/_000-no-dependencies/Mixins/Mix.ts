import type { FunctionTypes } from "../FunctionTypes";
import type {
  anyMixins,
  flattenMixing,
  inferTuple,
  mixin as m,
  mixinsTuple,
} from "../Types/Mixins.type";
import { reduce as r } from "./utils/reduce";

type Ctor<C extends readonly any[], T> = FunctionTypes.Ctors.Ctor<C, T>;

export const reduce: r.reduce = r;

export class Mix<C extends Ctor<any, any>> {
  constructor(public ctor: C) {}
  with<M extends anyMixins>(
    ...args: M
  ): C extends Ctor<any, any>
    ? M extends mixinsTuple
      ? inferTuple<[C, ...M]>
      : never
    : never;
  with<M extends anyMixins>(
    args: M
  ): C extends Ctor<any, any>
    ? M extends mixinsTuple
      ? inferTuple<[C, ...M]>
      : never
    : never;
  with<M extends m<any, any, any>>(
    args: M
  ): C extends Ctor<any, any>
    ? M extends m<any, any, any>
      ? flattenMixing<C, M>
      : never
    : never;
  with<M extends anyMixins, Sm extends m<any, any, any>>(
    args: M | Sm,
    ...rest: M
  ): C extends Ctor<any, any>
    ? M extends mixinsTuple
      ? inferTuple<[C, ...M]>
      : never
    : never {
    if (Array.isArray(args)) {
      // this should be called when an array is passed
      const tuple: [C, ...M] = [this.ctor, ...args];
      return reduce(tuple);
    } else if (args.length === 1) {
      // this should be called when only one mixins is passed
      const tuple = [this.ctor, args];
      return reduce(tuple as [C, ...M]);
    } else {
      // this should be called when mulitple mixins are passed
      const tuple = [this.ctor, args, ...rest];
      return reduce(tuple as [C, ...M]);
    }
  }
}
export namespace Mix {
  export type mixin<
    I extends unknown,
    Base,
    Ctor extends new (...args: any[]) => Base
  > = m<I, Base, Ctor>;

  export type Ctor<C extends readonly any[], T> = FunctionTypes.Ctors.Ctor<
    C,
    T
  >;

  export type reduce = r.reduce;
  export const reduce = r;
}
