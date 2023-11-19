import { FunctionTypes } from "../FunctionTypes";
import { flatten } from "./utils/Flatten.type";

/**
 * Infers the combined constructor from a
 * constructor/mixin tuple ```[ctor,mixin]```
 *
 * @template T a tuple `[ctor,mixin]`
 */
export type inferTuple<T> = T extends [
  FunctionTypes.Ctors.Ctor<infer A, infer B>,
  mixin<infer C, infer D, infer E>,
  ...infer Rest
]
  ? Rest extends never[]
    ? FunctionTypes.Ctors.Ctor<A, B> extends E
      ? flattenMixing<FunctionTypes.Ctors.Ctor<A, B>, mixin<C, D, E>>
      : "Base constructor doesn't meet requirements"
    : inferTuple<
        [flattenMixing<FunctionTypes.Ctors.Ctor<A, B>, mixin<C, D, E>>, ...Rest]
      >
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

export type anyMixins = [
  mixin<any, any, any>,
  mixin<any, any, any>,
  ...mixin<any, any, any>[]
];

export type mixinsTuple = [mixin<any, any, any>, ...mixin<any, any, any>[]];
