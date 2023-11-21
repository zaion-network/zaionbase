export type primitives = string | number | boolean | undefined | null;
export type isPrimitive<T> = T extends primitives ? true : false;
