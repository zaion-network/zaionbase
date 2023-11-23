import { errorCb } from "../../_000-no-dependencies/ErrorHandler";
import { FunctionTypes } from "../../_000-no-dependencies/FunctionTypes";

export const createErrorMap: createErrorMap.createErrorMap = message => {
  const map = new Map();
  map.set(false, errorCb(message));
  map.set(true, () => {});
  return map;
};

export namespace createErrorMap {
  export interface createErrorMap {
    (message: string): Map<boolean, FunctionTypes.GenericFunction<any, any>>;
  }
}
