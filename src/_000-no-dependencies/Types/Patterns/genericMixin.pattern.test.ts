import { describe, it, expect } from "bun:test";
import { Aextended, Bextended } from "./genericMixin.pattern";

describe(`${Aextended.name}`, () => {
  it("", () => {
    const ext = new Aextended();
    expect(ext).toBeTruthy();
    expect(ext.a).toBeTrue();
    expect(ext.name).toEqual("ciao");
  });
});

describe(`${Bextended.name}`, () => {
  it("dobrebbe creare un oggetto con attributo surname", () => {
    const test = new Bextended();
    expect(test).toBeTruthy();
    expect(test.surname).toEqual("ciao");
    expect(test.generic).toBeTrue();
  });
});
