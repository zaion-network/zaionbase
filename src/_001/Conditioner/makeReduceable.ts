import {
  action,
  actionAndArgs,
  reduceableCondition,
} from "../Conditioner.type";

export const makeReduceable: makeReduceable.makeReduceable = arg => {
  return [arg[0], [arg[1], arg[2]], undefined];
};

export namespace makeReduceable {
  export interface makeReduceable {
    (arg: condition): reduceableCondition;
  }

  export type condition<B extends true | false = boolean, A = action> = [
    B,
    A,
    any[]
  ];

  // export type reduceableCondition = [
  //   boolean,
  //   actionAndArgs,
  //   Map<any, any> | undefined
  // ];
}
