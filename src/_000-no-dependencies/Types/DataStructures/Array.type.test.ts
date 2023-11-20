import { describe, it, expect } from "bun:test";
import { Array as A, Map as M } from "./Mixer.type";
import { Array as Ar } from "./Array.type";
import { Map as Mp } from "./Map.type";
import { UnionStuff } from "../UnionStuff.type";

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
      ["con", mapArr2],
      ["again", mapArr2]
    ];
    type mapArr = A.toMap<keyValuePairArr>;

    type nestedTuple = [string, A.toMap<any>];
    type nestedTupleTest = [string, nestedTuple];
    type extractNestedMap<T> = T extends A.toMap<any>
      ? Ar.extractFromArray<Mp.indexedArryFromMap<T>, nestedTupleTest>
      : never;
    type res4 = extractNestedMap<mapArr>;
  });
  it("", () => {
    type nestedTuple = [string, A.toMap<any>];
    type nestedTupleTest = [string, nestedTuple];
    type subExtract<T> = Ar.extractFromArray<T, nestedTupleTest>;
    type keyValuePairArr2 = [["un", "annidamento"]];
    type mapArr2 = A.toMap<keyValuePairArr2>;
    type keyValuePairArr = [
      ["sono", "un"],
      ["map", "di test"],
      ["con", mapArr2],
      ["and", mapArr2]
    ];

    type pairsMap = A.toMap<keyValuePairArr>;

    type makeNestedMapPair<A> = A extends any[]
      ? [
          subExtract<Ar.indexArray<A>>[1][0],
          M.toArr<subExtract<Ar.indexArray<A>>[1][1]>
        ]
      : never;

    type makeIndexedPair<A> = A extends any[]
      ? [subExtract<Ar.indexArray<A>>[0], makeNestedMapPair<A>]
      : never;

    type getKeyOrValueToSubstitute<
      A,
      I extends 0 | 1
    > = A[makeIndexedPair<A>[0]] extends any[]
      ? A[makeIndexedPair<A>[0]][I]
      : never;

    type getKeyToSubstitute<A> = getKeyOrValueToSubstitute<A, 0>;

    type getValueToSubstitute<A> = getKeyOrValueToSubstitute<A, 1>;

    type subtractAndReplace<A> = makeIndexedPair<A>[0] extends string | number
      ? Ar.subElement<A, makeIndexedPair<A>[0], makeIndexedPair<A>[1]>
      : never;

    type buildArrayFromNestedMap<A extends any[]> = subExtract<
      Ar.indexArray<A>
    >[1] extends never
      ? never
      : subtractAndReplace<A>;

    type checkNestedAndBuild<A> = A extends Array<any>
      ? buildArrayFromNestedMap<A>
      : never;

    type extractNestedMap2<M> = M extends A.toMap<infer A>
      ? checkNestedAndBuild<A>
      : never;

    type resultMap = extractNestedMap2<pairsMap>;
    type rk = makeIndexedPair<M.toArr<pairsMap>>;
    type rv = getValueToSubstitute<M.toArr<pairsMap>>;
  });
  it("", () => {
    // type nestedTuple = [string, A.toMap<any>];
    // type nestedTupleTest = [string, nestedTuple];
    // type subExtract<T> = Ar.extractFromArray<T, nestedTupleTest>;
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

    type pairsMap = A.toMap<keyValuePairArr>;
    type arr = M.toArr<pairsMap>;
    type el4 = arr[3][1][1][1];
  });
  it("dovrebbe sostituire l'element all'indice", () => {
    type array = [10, 20, 30, 40, 50];
    type test5 = Ar.subElement<array, "1", true>;
  });
  it("dovrebbe sostituire solo il true in false", () => {
    type array = [[10, true], [20, true], [30, [50, false]], [40, true]];

    type replaceNestedArray<A extends any[]> = {
      [K in keyof A]: A[K] extends [infer T, [infer U, infer V]]
        ? [T, V]
        : A[K];
    };
    type res = replaceNestedArray<array>;
  });
});
