import { FunctionTypes } from "../FunctionTypes";
import { flatten } from "./utils/Flatten.type";

export type anyCtor = FunctionTypes.Ctors.Ctor<any, any>;

export type inferMixin<M, C> = M extends anyMixin ? flattenMixing<C, M> : never;

export type inferMixinsTuple<M, C> = M extends mixinsTuple
  ? inferTuple<[C, ...M]>
  : never;

type flattenResult<
  T,
  E extends new <T extends any[]>(...args: T) => D,
  A extends readonly any[],
  B,
  C,
  D
> = T extends E
  ? flattenMixing<FunctionTypes.Ctors.Ctor<A, B>, mixin<C, D, E>>
  : T extends unknown
  ? flattenMixing<FunctionTypes.Ctors.Ctor<A, B>, mixin<C, D, E>>
  : "Base constructor doesn't meet requirements";

type checkRest<
  Rest extends any[],
  E extends new <T extends any[]>(...args: T) => D,
  A extends readonly any[],
  B,
  C,
  D
> = Rest extends never[]
  ? flattenResult<FunctionTypes.Ctors.Ctor<A, B>, E, A, B, C, D>
  : inferTuple<
      [flattenMixing<FunctionTypes.Ctors.Ctor<A, B>, mixin<C, D, E>>, ...Rest]
    >;

/**
 * Infers the combined constructor from a
 * constructor/mixin tuple ```[ctor,mixin]```
 *
 * @template T a tuple `[ctor,mixin]`
 */
export type inferTuple<T> = T extends [
  FunctionTypes.Ctors.Ctor<infer Cparams, infer CInstance>,
  mixin<infer Minterface, infer Cinterface, infer Ctor>,
  ...infer Rest
]
  ? checkRest<Rest, Ctor, Cparams, CInstance, Minterface, Cinterface>
  : never;

export type flattenMixing<C, T> = C extends FunctionTypes.Ctors.Ctor<
  infer G,
  infer H
>
  ? T extends mixin<infer A, infer B, infer C>
    ? C extends FunctionTypes.Ctors.Ctor<infer X, infer Y>
      ? new (...args: X) => flatten<H & A>
      : false
    : false
  : "mamm";

/**
 * @param {unknown} I é l'interfaccia del mixin
 * @param {unknown} Base é l'interfaccia dell'istanza del costruttore
 * @param {unknown} Ctor é l'interfaccia del costruttore
 */
export interface mixin<
  I extends unknown,
  Base,
  Ctor extends new (...args: any[]) => Base
> {
  (ctor: Ctor): new (...args: ConstructorParameters<Ctor>) => I & Base;
}

export type anyMixin = mixin<any, any, any>;

export type anyMixins = [anyMixin, anyMixin, ...anyMixin[]];

export type mixinsTuple = [anyMixin, ...anyMixin[]];
