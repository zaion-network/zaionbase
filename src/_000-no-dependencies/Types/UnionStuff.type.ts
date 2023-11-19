declare module "./UnionStuff.type" {
  namespace UnionStuff {
    type unionToIntersection<U> = (
      U extends any ? (k: U) => void : never
    ) extends (k: infer I) => void
      ? I
      : never;

    type unionToOvlds<U> = unionToIntersection<
      U extends any ? (f: U) => void : never
    >;

    type popUnion<U> = unionToOvlds<U> extends (a: infer A) => void ? A : never;

    type isUnion<T> = [T] extends [unionToIntersection<T>] ? false : true;

    type unionToTuple<T, A extends unknown[] = []> = isUnion<T> extends true
      ? unionToTuple<Exclude<T, popUnion<T>>, [popUnion<T>, ...A]>
      : [T, ...A];
  }
}
