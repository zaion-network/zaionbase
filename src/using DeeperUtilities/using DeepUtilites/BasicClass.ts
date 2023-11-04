import { Conditioner as C } from "../Conditioner";

export class BasicClass {
  conditioner = new C();
}
export namespace BasicClass {
  export type action = C.action;
  export type actionAndArgs = C.actionAndArgs;
  export type GenericFunction<A extends any[], R> = C.GenericFunction<A, R>;
  export const Conditioner = C;

  // export const makeValidations = C.makeValidations;
  // export const makeActionAndArgs = DeepUtilities.Conditioner.makeActionAndArgs;
}
