import { Class } from "./Class.type";
import { Record } from "./Record.type";
import { flatten } from "./utils/Flatten.type";

declare module "./Ctors.type" {
  namespace Ctors {
    /**
     * Generic type constructor. It accepts only one type
     * parameters which describe the interface of the
     * returned instance.
     */
    type GConstructor<T> = Class.GConstructor<T>;
    type AnyCtor = Class.AnyCtor_v1;
    type Ctor<C extends readonly any[], T> = new (...args: C) => T;

    /**
     * Represents a typing for a class constructor that returns a generic interface.
     *
     * @template C - The tuple of constructor arguments.
     * @template V - The value type of the generic interface.
     * @returns A constructor type that creates instances of `Types.Record.GenericRecord<V>`.
     */
    type GRecordCtor<C extends any[], V> = new (
      ...args: C
    ) => Record.GenericRecord<V>;

    type InferInstance<t extends new (...args: any) => any> =
      Class.InferInstance<t>;
    type flattenCtor<C> = C extends Ctor<infer A, infer V>
      ? [A, flatten<V>]
      : never;
  }
}
