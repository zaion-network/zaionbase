import { actionAndArgs, condition } from "../Conditioner.type";
import { makeReduceable } from "./makeReduceable";
import { reducer } from "./reducer";

export const reduceConditions: reduceConditions.reduceConditions = (
  arr,
  defaultAction
) => {
  let reduced = arr
    .map(makeReduceable)
    .reverse()
    .reduce(reducer, [true, defaultAction, undefined]);
  let map = reduced[2];
  let cb = map?.get(arr[0]![0]);
  return cb[0](...cb[1]);
};

export namespace reduceConditions {
  export interface reduceConditions {
    (arr: condition[], defaultAction: actionAndArgs): any;
  }
}
