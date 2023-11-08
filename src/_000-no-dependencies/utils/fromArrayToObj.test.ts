import { describe, it, expect } from "bun:test";
import { fromArrayToMap } from "./fromArrayToObj";

const testArray = [
  ["sono", "un"],
  ["array", "bello"],
];

describe(`${fromArrayToMap.name}`, () => {
  it("dovrebbe lanciare un errore perchè gli è stato passato un oggetto", () => {
    expect(() => fromArrayToMap({})).toThrow();
  });
  it("dovrebbe lanciare perché gli è stato passato un map", () => {
    expect(() => fromArrayToMap(new Map()));
  });
  it("dovrebbe ritornare un oggetto", () => {
    const res = fromArrayToMap(testArray);
    const risulatatoAtteso = {
      sono: "un",
      array: "bello",
    };
    expect(res).toEqual(risulatatoAtteso);
  });
  it("dovrebbe creare un oggetto annidato", () => {
    const arrayAnnidato = ["con", ["un", "annidamento"]];
    const risulatatoAtteso = {
      sono: "un",
      array: "bello",
      con: {
        un: "annidamento",
      },
    };
    testArray.push(arrayAnnidato);
    const res = fromArrayToMap(testArray);
    expect(res).toEqual(risulatatoAtteso);
  });
});
