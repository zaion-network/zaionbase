import { describe, it, expect } from "bun:test";
import { fromMapToObj } from "./fromMapToObj";

const map = new Map();
map.set("ero", "un");
map.set("map", "carino");
describe(`${fromMapToObj.name}`, () => {
  it("dovrebbe creare un oggetto dal map", () => {
    const expectedValue = {
      ero: "un",
      map: "carino",
    };
    const obj = fromMapToObj(map);
    expect(obj).toEqual(expectedValue);
  });
  it("dovrebbe creare un oggetto annidato", () => {
    const mapannidato = new Map();
    const expectedValue = {
      ero: "un",
      map: "carino",
      e: {
        anche: "annidato",
      },
    };
    mapannidato.set("anche", "annidato");
    map.set("e", mapannidato);
    const obj = fromMapToObj(map);
    expect(obj).toEqual(expectedValue);
  });
});
