/**
 * Estrae gli elementi che sono assegnabili a U
 */
export type extractFromArray<T, U> = T extends Array<any>
  ? Extract<T[number], U>
  : never;
