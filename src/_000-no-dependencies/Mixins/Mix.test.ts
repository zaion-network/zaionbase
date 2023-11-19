import { describe, it, expect } from "bun:test";
// import { Mix.mixin } from "../Types/Mixins.type";
import { Mix } from "./Mix";

describe(`${Mix.name}`, () => {
  it("test mixin", () => {
    type Base = new () => { gnamgnam: boolean };
    const Base: Base = class {
      gnamgnam = true;
      static cli = "cli";
    };

    type BaseMixin<T> = Mix.mixin<T, InstanceType<Base>, Base>;

    interface Blast {
      blast: boolean;
    }
    type Oblastable = BaseMixin<Blast>;
    const Oblastable: BaseMixin<Blast> = ctor => {
      return class extends ctor {
        #blast: boolean = true;
        set blast(blast: boolean) {
          this.#blast = blast;
        }
        get blast() {
          return this.#blast;
        }
      };
    };

    class Mixed extends new Mix(Base).with(Oblastable) {
      ciao = 0;
      constructor() {
        super();
      }
      static member = "ciao";
    }
    const mixed = new Mixed();
    mixed.blast = false;

    // let obo = new MixEvo(Base).ctor;
    expect(mixed instanceof Mixed).toBeTrue();
    // console.log(mixed);
    expect(mixed.blast).toBeFalse();
    expect(mixed.ciao).toEqual(0);
    expect(Mixed.member).toEqual("ciao");
    // @ts-expect-error cosi non funziona
    expect(Mixed.cli).toEqual("cli");
  });
});
