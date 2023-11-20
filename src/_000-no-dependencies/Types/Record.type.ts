declare module "./Record.type" {
  namespace Record {
    /**
     */
    /**
     * Represents a generic record type with keys of type `K` and values of type `V`.
     *
     * @template V - The value type of the record.
     * @template K - The key type of the record. Defaults to `string`.
     * @returns An object type with keys of type `K` and values of type `V`.
     *
     * ```
     * // this generates a strict requirement
     * type MyRecord = GenericRecord<{ name: number },"value">;
     * // this generates a losey requirement
     * type MyRecord2 = GenericRecord<{ name: number }>;
     * type ou = { value: { name: number } };
     * type oo = { value: { name: number }; s: number };
     * type oi = { value: { namd: number }; valu: { name: number } };
     * type test1 = ou extends MyRecord ? true : false;      // true
     * type test1a = ou extends MyRecord2 ? true : false;    // true
     * type test2 = oo extends MyRecord ? true : false;      // true
     * type test2a = oo extends MyRecord2 ? true : false;    // false
     * type test3 = oi extends MyRecord ? true : false;      // false
     * type test3a = oi extends MyRecord2 ? true : false;    // false
     * ```
     */
    type GenericRecord<V, K extends string = string> = { [k in K]: V };

    /**
     * Combines two types `T` and `U` to create a type that only includes properties present in `T`
     * and does not allow additional properties from `U`.
     *
     * @template T - The base type.
     * @template U - The type to compare against.
     * @returns A type that is an exact match of `T`.
     *
     * @example
     * // Defining a base type
     * type Person = {
     *   name: string;
     *   age: number;
     * };
     *
     * // Defining a detailed type with an additional property
     * type DetailedPerson = {
     *   name: string;
     *   age: number;
     *   address: string;
     * };
     *
     * // Creating an exact type based on `Person`
     * type ExactPerson = Exact<Person, DetailedPerson>;
     *
     * // Valid assignment
     * const person: ExactPerson = {
     *   name: "John",
     *   age: 30,
     * };
     *
     * // Error: Additional property 'address' is not allowed
     * const invalidPerson: ExactPerson = {
     *   name: "Jane",
     *   age: 25,
     *   address: "123 Elm St",
     * };
     */
    type Exact<T, U> = T & Record<Exclude<keyof U, keyof T>, never>;

    /**
     * Recursively removes optionality from all properties of a type `T`.
     * If `T` is not an object type, it returns `T` as is.
     *
     * @template T - The type to make strict.
     * @returns A type with all properties of `T` made non-optional.
     *
     * @example
     * // Defining a type with optional properties
     * type Person = {
     *   name?: string;
     *   age?: number;
     *   address?: string;
     * };
     *
     * // Creating a strict type based on `Person`
     * type StrictPerson = Strict<Person>;
     *
     * // Valid assignment with all properties required
     * const person: StrictPerson = {
     *   name: "John",
     *   age: 30,
     *   address: "123 Main St",
     * };
     *
     * // Error: Missing required property 'address'
     * const invalidPerson: StrictPerson = {
     *   name: "Jane",
     *   age: 25,
     * };
     */
    type Strict<T> = T extends object ? { [K in keyof T]-?: Strict<T[K]> } : T;
  }
}
