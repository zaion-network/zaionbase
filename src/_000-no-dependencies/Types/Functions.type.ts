import { Ctors as C } from "./Ctors.type";
declare module "./Functions.type" {
  namespace Functions {
    type GenericFunction<A extends any[], R> = (...args: A) => R;
    type DymanicGenericFunction<
      A extends any[],
      T extends [[any, any], [any, any]]
    > = (
      ...args: A
    ) => A extends T[0][0] ? T[0][1] : A extends T[1][0] ? T[1][1] : never;
    type AnyFunction = GenericFunction<any, any>;
    type GenericVoidFunction<A> = GenericFunction<[A], void>;
    type AnyVoidFunction = GenericFunction<any, any>;
    type inferGenericFunction<F> = F extends GenericFunction<
      infer A extends any[],
      infer R
    >
      ? GenericFunction<A, R>
      : AnyVoidFunction;
    export import Ctors = C;
  }
}

export class Functions {}
export namespace Functions {}
