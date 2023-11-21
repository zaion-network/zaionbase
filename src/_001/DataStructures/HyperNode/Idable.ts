import type { Mix } from "../../../_000-no-dependencies/Mixins/Mix";
import { HyperNodeCtor } from "../HyperNode";

export const Idable: Idable.Type = ctor => {
  return class Graph<T> extends ctor<T> implements Idable.Id {
    constructor(type: string, value: T) {
      super(type, value);
      this.id = Math.round(Math.random() * 1_000_000).toString(32);
    }
    id?: string;
  };
};

export namespace Idable {
  export interface Id {
    id?: string;
  }

  export type Type = Mix.BaseMixin<Id, HyperNodeCtor>;
}
