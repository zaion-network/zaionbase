export type UnionToIntersection<U> = (
  U extends any
    ? // if extends any
      (k: U) => void
    : // if it doesnt extend any
      never
) extends (k: infer I) => void
  ? I
  : never;
