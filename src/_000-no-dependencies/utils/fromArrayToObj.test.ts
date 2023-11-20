import { describe, it, expect } from "bun:test";
import { fromArrayToObj } from "./fromArrayToObj";

const testArray: [["sono", "un"], ["array", "bello"]] = [
  ["sono", "un"],
  ["array", "bello"],
];

describe(`${fromArrayToObj.name}`, () => {
  it("dovrebbe lanciare un errore perchè gli è stato passato un oggetto", () => {
    // @ts-expect-error
    expect(() => fromArrayToObj({})).toThrow();
  });
  it("dovrebbe lanciare perché gli è stato passato un map", () => {
    // @ts-expect-error
    expect(() => fromArrayToObj(new Map()));
  });
  it("dovrebbe ritornare un oggetto", () => {
    const res = fromArrayToObj(testArray);
    const risulatatoAtteso = {
      sono: "un",
      array: "bello",
    };
    expect(res).toEqual(risulatatoAtteso);
  });
  it("dovrebbe creare un oggetto annidato", () => {
    const arrayAnnidato: ["con", ["un", "annidamento"]] = [
      "con",
      ["un", "annidamento"],
    ];
    const arr: [
      ["sono", "un"],
      ["array", "bello"],
      ["con", ["un", "annidamento"]]
    ] = [...testArray, arrayAnnidato];
    const risulatatoAtteso = {
      sono: "un",
      array: "bello",
      con: {
        un: "annidamento",
      },
    };

    const res = fromArrayToObj(arr);
    const res2 = res.array;
    console.log(res.con.un);

    expect(res).toEqual(risulatatoAtteso);
  });
});
