import { describe, it, expect } from "bun:test";
import { Mixed, Mixed2 } from "./builderMixin.pattern";

describe(`${Mixed.name}`, () => {
  it("dovrebbe settare il valore di id", () => {
    const mixed = new Mixed();
    mixed.id;
    enum setup {
      ciao = "ciao",
    }
    const ciao = "ciao" as const;
    const setMixed = mixed.set(ciao);
    const id = setMixed.id;

    expect(mixed.id).toEqual("ciao");
  });
  it("dovrebbe aver creato una classe che estende due mixins", () => {
    const mixed = new Mixed2();
    mixed.id = { name: "ciao" };
    const setmixed = mixed.set(100);
    console.log(setmixed.id);
    setmixed.id = 10025;
    console.log(mixed.id);
  });
});
