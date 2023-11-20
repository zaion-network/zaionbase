import { describe, it, expect } from "bun:test";
import { fromMapToObj } from "./fromMapToObj";
import { Array as A } from "../Types/DataStructures/Mixer.type";

type keyValuePairArr = [["ero", "un"], ["map", "carino"]];
type pairsMap2 = A.toMap<keyValuePairArr>;
const map: pairsMap2 = new Map();
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
    type keyValuePairArr2 = [["anche", "annidato"]];
    type pairsMap2 = A.toMap<keyValuePairArr2>;
    type keyValuePairArr = [["ero", "un"], ["map", "carino"], ["e", pairsMap2]];
    type pairsMap1 = A.toMap<keyValuePairArr>;
    const map: pairsMap1 = new Map();
    map.set("ero", "un");
    map.set("map", "carino");
    const mapannidato: pairsMap2 = new Map();
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
    expect(obj.e.anche).toEqual(mapannidato.get("anche"));

    expect(obj).toEqual(expectedValue);
  });
});
