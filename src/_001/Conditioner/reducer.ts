import { reduceableCondition } from "../Conditioner.type";
import { createTrueFalseMap } from "./createTrueFalseMap";
import { undefinedField } from "./undefinedField";

interface reducer {
  (p: reduceableCondition, c: reduceableCondition): reduceableCondition;
}
export const reducer: (
  p: reduceableCondition,
  c: reduceableCondition
) => reduceableCondition = (p, c) => [
  c[0],
  c[1],
  createTrueFalseMap(c[1], undefinedField(...p)),
];
