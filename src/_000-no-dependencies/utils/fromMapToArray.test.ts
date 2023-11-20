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
    type arr = M.toArr<mapArr>;

    map.set("sono", "un");
    map.set("map", "di test");
    const res = fromMapToArray(map);
    const risultatoAtteso = [
      ["sono", "un"],
      ["map", "di test"],
    ];
    const res1 = res[0];
    const res2 = res[1];
    expect(res).toEqual(risultatoAtteso);
  });
  it("dovrebbe creare un array annidato", () => {
    const risultatoAtteso = [
      ["sono", "un"],
      ["map", "di test"],
      ["con", [["un", "annidamento"]]],
    ];
    // const map = new Map();
    type keyValuePairArr2 = [["un", "annidamento"]];
    type mapArr2 = A.toMap<keyValuePairArr2>;
    const mapannidato: mapArr2 = new Map();
    mapannidato.set("un", "annidamento");
    type keyValuePairArr = [
      ["sono", "un"],
      ["map", "di test"],
      ["con", mapArr2]
    ];
    type mapArr = A.toMap<keyValuePairArr>;
    const map: mapArr = new Map();
    map.set("sono", "un");
    map.set("map", "di test");
    map.set("con", mapannidato);
    const res = fromMapToArray(map);
    const res1 = res[0];
    const res3 = res[2];
    console.log(res3);

    type arr = [
      [10, mapArr],
      [20, string],
      [30, string],
      [40, string],
      [50, string]
    ];
    type res1 = Ar.indexArray<arr>;
    type res = Extract<res1[number], [string, [number, mapArr]]>;

    type subExtract<T> = T extends Array<any>
      ? Extract<T[number], [string, A.toMap<any>]>
      : never;

    type extractNestedMap<T> = T extends A.toMap<infer T>
      ? subExtract<T>[1] extends never
        ? T
        : [subExtract<T>[0], M.toArr<subExtract<T>[1]>]
      : never;
    type resultMap = extractNestedMap<mapArr>;

    expect(res).toEqual(risultatoAtteso);
  });
});
