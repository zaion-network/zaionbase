import { FunctionTypes } from "../../_000-no-dependencies/FunctionTypes";
import { action, condition } from "../Conditioner.type";

type mv = makeValidation.makeValidation;
type GenericFoo = makeValidation.GenericFunction<any, any>;
type inferGenericFoo<T> = makeValidation.inferGenericFunction<T>;

export const makeValidation: mv = <
  B extends true | false,
  A extends GenericFoo
>(
  bool: B,
  cb: A,
  args: any[]
): condition<B, inferGenericFoo<A>> => {
  const degeneric = <T extends GenericFoo>(cb: T): inferGenericFoo<T> =>
    cb as unknown as inferGenericFoo<T>;
  let ret = degeneric(cb);
  return [bool, ret, args];
};

export namespace makeValidation {
  export interface makeValidation {
    <B extends true | false, A extends action>(
      bool: B,
      cb: A,
      args: any[]
    ): condition<B, inferGenericFunction<A>>;
  }

  export type inferGenericFunction<F> = FunctionTypes.inferGenericFunction<F>;

  export type GenericFunction<
    A extends any[],
    R
  > = FunctionTypes.GenericFunction<A, R>;
}
