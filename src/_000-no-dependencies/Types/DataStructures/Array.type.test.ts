import { describe, it, expect } from "bun:test";
import { Array as A, Map as M } from "./Mixer.type";
import { Array as Ar } from "./Array.type";

describe(`Array.type`, () => {
  it("dovrebbe tornare l'elemento che corrisponde al type", () => {
    type keyValuePairArr2 = [["un", "annidamento"]];
    type mapArr2 = A.toMap<keyValuePairArr2>;
    type arr = [
      [10, mapArr2],
      [20, string],
      [30, string],
      [40, string],
      [50, "ciao"]
    ];
    type res1 = Ar.indexArray<arr>;
    type test1 = [string, [number, mapArr2]];
    type extractor1<T> = Ar.extractFromArray<T, test1>;
    type res3 = extractor1<res1>;
  });
  it("dovrebbe trovare e sostituire l'elemento", () => {
    type keyValuePairArr2 = [["un", "annidamento"]];
    type mapArr2 = A.toMap<keyValuePairArr2>;
    type keyValuePairArr = [
      ["sono", "un"],
      ["map", "di test"],
      ["con", mapArr2]
    ];
    type mapArr = A.toMap<keyValuePairArr>;

    ////
    type indexedArryFromMap<T> = T extends A.toMap<any>
      ? Ar.indexArray<M.toArr<T>>
      : never;
    type nestedTuple = [string, A.toMap<any>];
    type nestedTupleTest = [string, nestedTuple];
    type extractNestedMap<T> = T extends A.toMap<any>
      ? Ar.extractFromArray<indexedArryFromMap<T>, nestedTupleTest>
      : never;
    type res4 = extractNestedMap<mapArr>;
  });
  it("", () => {
    type subExtract<T> = Ar.extractFromArray<T, [string, A.toMap<any>]>;
    type keyValuePairArr2 = [["un", "annidamento"]];
    type mapArr2 = A.toMap<keyValuePairArr2>;
    type keyValuePairArr = [
      ["sono", "un"],
      ["map", "di test"],
      ["con", mapArr2]
    ];
    type mapArr = A.toMap<keyValuePairArr>;
    type extractNestedMap<T> = T extends A.toMap<infer T>
      ? subExtract<T>[1] extends never
        ? T
        : [subExtract<T>[0], M.toArr<subExtract<T>[1]>]
      : never;
    type resultMap = extractNestedMap<mapArr>;
  });
  it("dovrebbe sostituire l'element all'indice", () => {
    type array = [10, 20, 30, 40, 50];
    type test5 = Ar.subElement<array, "1", true>;
  });
});
