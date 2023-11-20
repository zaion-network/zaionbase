/**
 * flattens arrays
 */
export type flatarr<T> = T extends Array<infer X>
  ? T[0] extends infer Y
    ? Y
    : false
  : false;
