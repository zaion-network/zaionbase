type reverse = boolean;

declare module "./extenders.type" {
  namespace extenders {
    /**
     * Checks if a value is a function.
     *
     * @template T - The value to check.
     * @returns `true` if `T` is a function, otherwise `false`.
     *
     * @example
     * const func = () => {
     *   console.log("Hello!");
     * };
     *
     * const isFunc = isFunction<typeof func>; // true
     *
     * const obj = { name: "John" };
     *
     * const isObjFunc = isFunction<typeof obj>; // false
     */
    type isFunction<T> = T extends object
      ? T extends Function
        ? true
        : false
      : false;

    /**
     * Checks if a class extends a specific constructor type.
     *
     * @template C - The constructor type to check against.
     * @template T - The class to check.
     * @returns `true` if `T` extends `C`, otherwise `false`.
     *
     * @example
     * type MyConstructor = new () => { name: string };
     *
     * class MyClass {
     *   name: string;
     *   constructor() {
     *     this.name = "John";
     *   }
     * }
     *
     * class SomeOtherClass {
     *   age: number;
     *   constructor() {
     *     this.age = 30;
     *   }
     * }
     *
     * const isDerived = isAeqB<MyConstructor, typeof MyClass>; // true
     * const isNotDerived = isAeqB<MyConstructor, typeof SomeOtherClass>; // false
     */
    type isAeqB<A, B, R extends reverse = false> = R extends false
      ? A extends B
        ? true
        : false
      : B extends A
      ? true
      : false;
  }
}
