import { FunctionTypes } from "../_000-no-dependencies/FunctionTypes";

export type action = FunctionTypes.AnyFunction;

export type args = any[];

export type actionAndArgs = [action, args];

export type condition<B extends true | false = boolean, A = action> = [
  B,
  A,
  any[]
];
