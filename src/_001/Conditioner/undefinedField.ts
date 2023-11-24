import { FunctionTypes } from "../../_000-no-dependencies/FunctionTypes";
import { undefinedFalseMap } from "./undefinedFalseMap";

export const undefinedField: undefinedField.undefinedField = (
  bool,
  actionAndArgs,
  mapped
) => {
  const map = undefinedFalseMap();
  const map2 = new Map();
  map2.set(undefined, () => mapped!.get(bool));
  map2.set(false, () => [actionAndArgs[0], actionAndArgs[1]]);
  return map2.get(map.get(mapped))();
};
export namespace undefinedField {
  export type action = FunctionTypes.AnyFunction;

  export interface undefinedField {
    (
      bool: boolean,
      actionAndArgs: [action, any[]],
      mapped: Map<any, any> | undefined
    ): any;
  }
}
