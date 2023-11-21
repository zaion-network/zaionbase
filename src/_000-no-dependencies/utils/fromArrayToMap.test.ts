import { describe, it, expect } from "bun:test";
import { fromArrayToMap } from "./fromArrayToMap";
import { Coppia, Pair as P } from "../Types/DataStructures/Tuple.type";

type Pair = [string, string | Pair];
const testPairArr: [
  ["chiave1", "value1"],
  ["chiave2", "value2"],
  ["chiave3", ["subchiave1", "subvalue1"]]
] = [
  ["chiave1", "value1"],
  ["chiave2", "value2"],
  ["chiave3", ["subchiave1", "subvalue1"]],
];

const testArray: (string | string[])[][] = [
  ["sono", "un"],
  ["array", "bello"],
];
type e = P.isPair<typeof testPairArr>;

describe(`${fromArrayToMap.name}`, () => {
  it("dovrebbe lanciare perché argomento è oggetto", () => {
    // @ts-expect-error
    expect(() => fromArrayToMap({})).toThrow();
  });
  it("dovrebbe lanciare perché argomento è map", () => {
    // @ts-expect-error
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
    console.log(res);

    expect(res.get(arrayAnnidato[0]).get(arrayAnnidato[1][0])).toEqual(
      arrayAnnidato[1][1]
    );
  });
  it("dovrebbe creare il map annidato", () => {
    let res = fromArrayToMap(testPairArr);
    let res1 = res.get("chiave1");
    let res3 = res.get("chiave3");
    res3.get("subchiave1");
    console.log(res3);
  });
});
