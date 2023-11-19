export namespace Class {
  /**
   *
   * example
   * ```
   * interface Person {
   *   name: string;
   *   age: number;
   *   location: string;
   * } *
   * type LazyPerson = Getters<Person>;
   * ```
   * expected output:
   * ```
   * type LazyPerson = {
   *     getName: () => string;
   *     getAge: () => number;
   *     getLocation: () => string;
   * }
   * ```
   */
  export type Getters<Type> = {
    [Property in keyof Type as `get${Capitalize<
      string & Property
    >}`]: () => Type[Property];
  };

  export type Constructor1<T> = new () => T;
  /**
   * Basic constructor which instance is an empty object
   */
  export type Constructor = new (...args: any[]) => {};
  /**
   * Allows creation of classe which only work with costrained
   * classe.
   *
   * Usage
   * ```
   * type Positionable = GConstructor<{ setPos: (x: number, y: number) => void }>;
   * type Spritable = GConstructor<Sprite>;
   * type Loggable = GConstructor<{ print: () => void }>;
   * function Jumpable<TBase extends Positionable>(Base: TBase) {
   *   return class Jumpable extends Base {
   *     jump() {
   *       // This mixin will only work if it is passed a base
   *       // class which has setPos defined because of the
   *       // Positionable constraint.
   *       this.setPos(0, 20);
   *     }
   *   };
   * }
   * ```
   */
  export type GCtor<T> = new (...args: any[]) => T;
  export type GCtor2<T> = new (...args: any[]) => T extends Object ? T : never;
  export type GCtor3<A, O> = new (args: A) => O;

  /**
   * Questo type dovrebbe poter dare la possibilità di creare
   * una classe usando un Type generico e definendone i
   * dettagli al momento della dichiarazione
   * Usage:
   * ```ts
   * const Blooo: ClassType<{ a: string, b:string, c:number },string|number> = class NewClass {
   *  a: string = "";
   *  b: string = '';
   *  c: number = 0
   *  constructor(a: string,c:number) {
   *    this.a = a;
   *    this.c = c
   *  }
   * };
   * ```
   */
  export type GClassType<X, T = number> = new (
    ...args: (T extends ConstructorParameters<infer Params>
      ? Params extends string | number
        ? Params
        : never
      : T)[]
  ) => X extends infer Type ? Type : never;

  export abstract class Strategy {
    abstract name: string;
    abstract method(...args: unknown[]): unknown;
  }

  /**
   * Generic type constructor. It accepts only one type
   * parameters which describe the interface of the returned
   * instance.
   */
  export type GConstructor<T> = new (...arg: any[]) => T;

  /**
   * Generic type constructor. It accepts only one type
   * parameters which describe the interface of the returned
   * instance.
   */
  export type GAbstractConstructor<T> = abstract new (...arg: any[]) => T;

  /**
   * Type which can describe any class. It can be used as type
   * for inputs which expect a constructor.
   */
  export type AnyCtor_v1 = new (...args: any[]) => any;

  /**
   * Type which can describe any class. It can be used as type
   * for inputs which expect a constructor.
   */
  export type AnyAbstractCtor_v1 = abstract new (...args: any[]) => any;

  /**
   * Type which can take 2 arguments to describe a constructor
   * @param T Type of the arguments as array of union
   * @param R Type which defines the return of the class which
   * usually is represented by an interface.
   */
  export type NCtor<T, R> = new (...args: T[]) => R;

  /**
   * Utility type which retrieves the type of the instance of
   * a given class
   */
  export type InferInstance<t extends new (...args: any) => any> =
    InstanceType<t> extends {}
      ? {
          [k in keyof InstanceType<t>]: InstanceType<t>[k];
        }
      : never;

  /**
   * Utility type which retrieves the type of the instance of
   * a given abstract class
   */
  export type InferAbstractInstance<
    t extends abstract new (...args: any) => any
  > = InstanceType<t> extends {}
    ? {
        [k in keyof InstanceType<t>]: InstanceType<t>[k];
      }
    : never;
}
