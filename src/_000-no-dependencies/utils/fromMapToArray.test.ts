import { describe, it, expect } from "bun:test";
import { fromMapToArray } from "./fromMapToArray";
import { Array as A, Map as M } from "../Types/DataStructures/Mixer.type";
import { Array as Ar } from "../Types/DataStructures/Array.type";

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
    type keyValuePairArr = [["sono", "un"], ["map", "di test"]];
    type mapArr = A.toMap<keyValuePairArr>;
    const map: mapArr = new Map();

    map.set("sono", "un");
    map.set("map", "di test");
    const res = fromMapToArray(map);
    const risultatoAtteso = [
      ["sono", "un"],
      ["map", "di test"],
    ];
    const res1 = res[0];
    expect(res[0]).toEqual(risultatoAtteso[0]);
    expect(res1).toEqual(["sono", "un"]);
  });
  it("dovrebbe creare un array annidato", () => {
    type keyValuePairArr2 = [["un", "annidamento"]];
    type keyValuePairArr3 = [["una", "coda"], ["e_pure", "unaltra"]];
    type pairsMap2 = A.toMap<keyValuePairArr2>;
    type pairsMap3 = A.toMap<keyValuePairArr3>;
    type keyValuePairArr = [
      ["sono", "un"],
      ["map", "di test"],
      ["con", pairsMap2],
      ["and", pairsMap3]
    ];
    const risultatoAtteso = [
      ["sono", "un"],
      ["map", "di test"],
      ["con", [["un", "annidamento"]]],
      [
        "and",
        [
          ["una", "coda"],
          ["e_pure", "unaltra"],
        ],
      ],
    ];
    // const map = new Map();
    const mapannidato1: pairsMap2 = new Map();
    mapannidato1.set("un", "annidamento");
    const mapannidato2: pairsMap3 = new Map();
    mapannidato2.set("una", "coda");
    mapannidato2.set("e_pure", "unaltra");
    type mapArr = A.toMap<keyValuePairArr>;
    const map: mapArr = new Map();
    map.set("sono", "un");
    map.set("map", "di test");
    map.set("con", mapannidato1);
    map.set("and", mapannidato2);
    const res = fromMapToArray(map);
    const res1 = res[0];
    const res2 = res[2];
    const res3 = res[2][1][0];
    const res4 = res[3][1][1];
    console.log(res1);
    expect(res).toEqual(risultatoAtteso);
    expect(res1).toEqual(["sono", "un"]);
    expect(res2).toEqual(["con", [["un", "annidamento"]]]);
    expect(res3).toEqual(["un", "annidamento"]);
    expect(res4).toEqual(["e_pure", "unaltra"]);
    expect(res).toEqual(risultatoAtteso);
  });
});
