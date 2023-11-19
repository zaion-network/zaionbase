import { Mix as M } from "./Mixins/Mix";

declare module "./Mixins" {
  namespace Mixins {
    type Ctor<C extends readonly any[], T> = M.Ctor<C, T>;
    /**
     * @param {unknown} I é l'interfaccia del mixin
     * @param {unknown} Base é l'interfaccia dell'istanza del costruttore
     * @param {unknown} Ctor é l'interfaccia del costruttore
     */
    type mixin<
      I extends unknown,
      Base,
      Ctor extends new (...args: any[]) => Base
    > = M.mixin<I, Base, Ctor>;
  }
}

export namespace Mixins {
  export const reduce: M.reduce = M.reduce;
  export class Mix<C extends Ctor<any, any>> extends M<C> {}
}
