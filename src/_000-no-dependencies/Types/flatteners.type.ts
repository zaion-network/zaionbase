import { Class } from "./Class.type";

declare module "./flatteners.type" {
  namespace flatteners {
    /**
     * Example
     * ```
     * interface IdLabel {
     *   id: number ;
     *   bloo: boolean;
     * }
     *
     * type IdLabelType = FlattenInterface<IdLabel>;
     * ```
     * expected output:
     * ```
     * type IdLabelType = {
     *     id: number;
     *     bloo: boolean;
     * }
     * ```
     */

    type FlattenInterface<Type> = {
      [Property in keyof Type]: Type[Property];
    };

    type InterfaceOfClass<T> = FlattenInterface<
      InstanceType<T extends Class.Constructor ? T : never>
    >;

    // this types were using a deprecated version of mixin

    // export type InterfaceOfMixin<T> = FlattenInterface<
    //   InstanceType<ReturnType<T extends Mixin ? T : never>>
    // >;

    // export type InterfaceOfBoth<MixinType, Superclass> = InterfaceOfMixin<
    //   MixinType extends Mixin ? MixinType : never
    // > &
    //   InterfaceOfClass<
    //     Superclass extends ZionTypes.Class.Constructor ? Superclass : never
    //   >;

    // export type ConstrOfInterfaceOfBoth<MixinType, Superclass> =
    //   ZionTypes.Class.GCtor<
    //     InterfaceOfBoth<
    //       MixinType extends Mixin ? MixinType : never,
    //       Superclass extends ZionTypes.Class.Constructor ? Superclass : never
    //     >
    //   >;
  }
}
