import { action, condition } from "../Conditioner.type";
import { makeValidation } from "./makeValidation";
import { defaultFalse } from "./defaultFalse";

export const makeValidations: makeValidations.makeValidations = (
  ifTrue,
  ifFalse = [defaultFalse, []]
) => {
  const trueval = makeValidation(true, ifTrue[0], ifTrue[1]);
  const falsval = makeValidation(false, ifFalse[0], ifFalse[1]);
  return [trueval, falsval];
};

export namespace makeValidations {
  export interface makeValidations {
    <T extends [action, any[]], F extends [action, any[]]>(
      ifTrue: T,
      ifFalse?: F | [action, any[]]
    ): [condition<true, T[0]>, condition<false, F[0]>];
  }
}
