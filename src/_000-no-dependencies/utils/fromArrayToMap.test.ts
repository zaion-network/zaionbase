import { describe, it, expect } from "bun:test";
import { fromArrayToMap } from "./fromArrayToMap";

const testArray = [
  ["sono", "un"],
  ["array", "bello"],
];

describe(`${fromArrayToMap.name}`, () => {
  it("dovrebbe lanciare perché argomento è oggetto", () => {
    expect(() => fromArrayToMap({})).toThrow();
  });
  it("dovrebbe lanciare perché argomento è map", () => {
    expect(() => fromArrayToMap(new Map())).toThrow();
  });
  it("dovrebbe ritornare un map", () => {
    const res = fromArrayToMap(testArray);
    expect(res.get(testArray[0][0])).toEqual(testArray[0][1]);
    expect(res.get(testArray[1][0])).toEqual(testArray[1][1]);
  });
  it("dovrebbe ritornare un map annidato", () => {
    const arrayAnnidato = ["con", ["un", "annidamento"]];
    testArray.push(arrayAnnidato);
    const res = fromArrayToMap(testArray);
    expect(res.get(arrayAnnidato[0]).get(arrayAnnidato[1][0])).toEqual(
      arrayAnnidato[1][1]
    );
  });
});
