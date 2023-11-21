import type { Mix } from "../../../_000-no-dependencies/Mixins/Mix";
import { HyperNodeCtor } from "../HyperNode";

export const Relationable: Relationable.Type = ctor => {
  return class Duck<T> extends ctor<T> implements Relationable.Relations {
    relations: Map<string, string> = new Map();
  };
};

export namespace Relationable {
  export interface Relations {
    relations: Map<string, string>;
  }

  export type Type = Mix.BaseMixin<Relations, HyperNodeCtor>;
}
