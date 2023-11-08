import { describe, it, expect } from "bun:test";
import { fromObjToArray } from "./fromObjToArray";

describe(`${fromObjToArray.name}`, () => {
  it(`test 1`, () => {
    const testobj = { name: "israel", type: "terrorist" };
    const result = fromObjToArray(testobj);
    const expectedValue = [
      ["name", "israel"],
      ["type", "terrorist"],
    ];
    expect(result).toEqual(expectedValue);
  });
  it("dovrebbe lanciare un errore perchè non accetta i map", () => {
    const map = new Map();
    // @ts-expect-error
    expect(() => fromObjToArray(map)).toThrow();
  });
  it("dovrebbe creare gli array annidati", () => {
    const testobj = { sono: "un", oggetto: { con: "annidamento" } };
    const result = fromObjToArray(testobj);
    const expectedValue = [
      ["sono", "un"],
      ["oggetto", ["con", "annidamento"]],
    ];
    expect(result).toEqual(expectedValue);
  });
});
