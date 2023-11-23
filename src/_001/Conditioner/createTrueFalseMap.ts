import { FunctionTypes } from "../../_000-no-dependencies/FunctionTypes";

export const createTrueFalseMap: createTrueFalseMap.createTrueFalseMap = (
  iftrue,
  iffalse
) => {
  const map = new Map();
  map.set(true, iftrue);
  map.set(false, iffalse);
  return map;
};

export namespace createTrueFalseMap {
  export type action = FunctionTypes.AnyFunction;
  export type args = any[];
  export type actionAndArgs = [action, args];
  export interface createTrueFalseMap {
    (iftrue: actionAndArgs, iffalse: actionAndArgs): Map<any, any>;
  }
}
