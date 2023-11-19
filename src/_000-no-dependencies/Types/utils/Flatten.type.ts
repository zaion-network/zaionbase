/**
 * util type which lets flatten types which are incapsulated
 * inside other types.
 */
export type Flatten<T> = T extends any[] ? T[number] : T;

/**
 * util type which flattens arrays
 */
export type Flatten2<Type> = Type extends Array<infer Item> ? Item : Type;

/**
 * util type which flattens arrays
 */
export type flatten<T> = T extends infer X ? { [k in keyof X]: X[k] } : never;
