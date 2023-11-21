import { describe, it, expect } from "bun:test";
import { fromObjToArray } from "./fromObjToArray";
import { Array as A } from "../Types/DataStructures/Mixer.type";

describe(`${fromObjToArray.name}`, () => {
  it(`test 1`, () => {
    type pairArr = [["name", "israel"], ["type", "terrorist"]];
    type pairObj = A.toObj<pairArr>;
    const testobj: pairObj = { name: "israel", type: "terrorist" };
    const result = fromObjToArray(testobj);
    const expectedValue = [
      ["name", "israel"],
      ["type", "terrorist"],
    ];
    const el1 = result[0];
    const el2 = result[1];
    expect(result).toEqual(expectedValue);
    expect(el1).toEqual(expectedValue[0]);
    expect(el2).toEqual(expectedValue[1]);
  });
  it("dovrebbe lanciare un errore perchè non accetta i map", () => {
    const map = new Map();
    type type1 = { [k: string]: string | { [k: string]: any } };
    type oo = typeof map extends type1 ? true : false;
    // @ts-expect-error
    expect(() => fromObjToArray(map)).toThrow();
  });
  it("dovrebbe creare gli array annidati", () => {
    type pairArr = [["sono", "un"], ["oggetto", [["con", "annidamento"]]]];
    type pairObj = A.toObj<pairArr>;
    const testobj: pairObj = { sono: "un", oggetto: { con: "annidamento" } };
    const result = fromObjToArray(testobj);
    const expectedValue = [
      ["sono", "un"],
      ["oggetto", ["con", "annidamento"]],
    ];
    const el1 = result[0];
    const el2 = result[1];
    const el2_key = result[1][0];
    const el2_value = result[1][1];
    const el2_value1_key = result[1][1][0][0];
    const el2_value1_value = result[1][1][0][1];
    expect(result).toEqual(expectedValue);
    expect(el1).toEqual(expectedValue[0]);
    expect(el2).toEqual(expectedValue[1]);
    expect(el2_key).toEqual(expectedValue[1][0]);
    expect(el2_value).toEqual(expectedValue[1][1]);
    expect(el2_value1_key).toEqual(expectedValue[1][1][0][0]);
    expect(el2_value1_value).toEqual(expectedValue[1][1][0][1]);
  });
});
