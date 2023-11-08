import { describe, it, expect } from "bun:test";
import { fromMapToArray } from "./fromMapToArray";

const map = new Map();
map.set("sono", "un");
map.set("map", "di test");

describe(`${fromMapToArray.name}`, () => {
  it("dovrebbe lanciare un errore perché l'argomento è un array", () => {
    // @ts-expect-error
    expect(() => fromMapToArray([])).toThrow();
  });
  it("dovrebbe lanciare un errore perché l'argomento è un object", () => {
    // @ts-expect-error
    expect(() => fromMapToArray({})).toThrow();
  });
  it("", () => {
    const res = fromMapToArray(map);
    const risultatoAtteso = [
      ["sono", "un"],
      ["map", "di test"],
    ];
    expect(res).toEqual(risultatoAtteso);
  });
  it("dovrebbe creare un array annidato", () => {
    const mapannidato = new Map();
    const risultatoAtteso = [
      ["sono", "un"],
      ["map", "di test"],
      ["con", [["un", "annidamento"]]],
    ];
    mapannidato.set("un", "annidamento");
    map.set("con", mapannidato);
    const res = fromMapToArray(map);
    expect(res).toEqual(risultatoAtteso);
  });
});
