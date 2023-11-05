import { FunctionTypes } from "./FunctionTypes";
import { Types } from "./Types/Types";
// import {} from "os";

declare module "./Mixins" {
  type GConstructor<T> = FunctionTypes.Ctors.GConstructor<T>;

  type reduce = <
    T extends [new (...args: any) => any, ...Mixins.mixin<any, any, any>[]]
  >(
    arr: T
  ) => Mixins.inferTuple<T>;

  namespace Mixins {
    type GConstructor<T> = FunctionTypes.Ctors.GConstructor<T>;
    type Ctor<C extends readonly any[], T> = FunctionTypes.Ctors.Ctor<C, T>;

    /**
     * @param {unknown} I é l'interfaccia del mixin
     * @param {unknown} Base é l'interfaccia dell'istanza del costruttore
     * @param {unknown} Ctor é l'interfaccia del costruttore
     */
    interface mixin<
      I extends unknown,
      Base,
      Ctor extends new (...args: any[]) => Base
    > {
      (ctor: Ctor): new (...args: ConstructorParameters<Ctor>) => I & Base;
    }

    type inferMixing<T> = T extends Mixins.mixin<infer A, infer B, infer C>
      ? [Types.flatten<A>, Types.flatten<B>, FunctionTypes.Ctors.flattenCtor<C>]
      : false;

    type flattenMixing<C, T> = C extends Ctor<infer G, infer H>
      ? T extends Mixins.mixin<infer A, infer B, infer C>
        ? C extends Ctor<infer X, infer Y>
          ? new (...args: X) => Types.flatten<H & A>
          : false
        : false
      : "mamm";

    /**
     * Infers the combined constructor from a
     * constructor/mixin tuple ```[ctor,mixin]```
     *
     * @template T a tuple `[ctor,mixin]`
     */
    type inferTuple<T> = T extends [
      Ctor<infer A, infer B>,
      Mixins.mixin<infer C, infer D, infer E>,
      ...infer Rest
    ]
      ? Rest extends never[]
        ? FunctionTypes.Ctors.Ctor<A, B> extends E
          ? flattenMixing<Ctor<A, B>, Mixins.mixin<C, D, E>>
          : "Base constructor doesn't meet requirements"
        : inferTuple<
            [flattenMixing<Ctor<A, B>, Mixins.mixin<C, D, E>>, ...Rest]
          >
      : never;

    export namespace Mixin {}
    export namespace Mix {}
    export namespace MixCb {}
  }
}

export namespace Mixins {
  export const reduce: reduce = <T extends any[]>(
    arr: T
  ): Mixins.inferTuple<T> => {
    const ctor = arr.shift();
    return arr.reduce((p: any, c: any) => c(p), ctor);
  };

  export class Mix<C extends Ctor<any, any>> {
    constructor(public ctor: C) {}
    with<
      M extends [
        mixin<any, any, any>,
        mixin<any, any, any>,
        ...mixin<any, any, any>[]
      ]
    >(
      ...args: M
    ): C extends Ctor<any, any>
      ? M extends [mixin<any, any, any>, ...mixin<any, any, any>[]]
        ? inferTuple<[C, ...M]>
        : never
      : never;
    with<
      M extends [
        mixin<any, any, any>,
        mixin<any, any, any>,
        ...mixin<any, any, any>[]
      ]
    >(
      args: M
    ): C extends Ctor<any, any>
      ? M extends [mixin<any, any, any>, ...mixin<any, any, any>[]]
        ? inferTuple<[C, ...M]>
        : never
      : never;
    with<M extends mixin<any, any, any>>(
      args: M
    ): C extends Ctor<any, any>
      ? M extends mixin<any, any, any>
        ? flattenMixing<C, M>
        : never
      : never;
    with<
      M extends [
        mixin<any, any, any>,
        mixin<any, any, any>,
        ...mixin<any, any, any>[]
      ],
      Sm extends mixin<any, any, any>
    >(
      args: M | Sm,
      ...rest: M
    ): C extends Ctor<any, any>
      ? M extends [mixin<any, any, any>, ...mixin<any, any, any>[]]
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

  export namespace Mixin {}
  export namespace Mix {}
  export namespace MixCb {}
}
