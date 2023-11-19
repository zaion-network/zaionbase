import { inferTuple, mixin } from "../../Types/Mixins.type";

declare module "./reduce" {
  namespace reduce {
    type reduce = <
      T extends [new (...args: any) => any, ...mixin<any, any, any>[]]
    >(
      arr: T
    ) => inferTuple<T>;
  }
}

export const reduce: reduce.reduce = <T extends any[]>(
  arr: T
): inferTuple<T> => {
  const ctor = arr.shift();
  return arr.reduce((p: any, c: any) => c(p), ctor);
};
