import { describe, it, expect } from "bun:test";
import { fromObjToMap } from "./fromObjToMap";

describe(`testing ${fromObjToMap.name}`, () => {
  it(`test 1`, () => {
    type nestedPairArr = [["that", "and this"]];
    type nestedPairMap = fromObjToMap.fromArrayToMap<nestedPairArr>;
    type basePairArr = [["obj", "to"], ["test", nestedPairArr]];
    type basePairMap = fromObjToMap.fromArrayToMap<basePairArr>;
    const nestedMap: nestedPairMap = new Map();
    nestedMap.set("that", "and this");
    const expectedMap: basePairMap = new Map();
    expectedMap.set("obj", "to");
    expectedMap.set("test", nestedMap);
    const objvalueTest = expectedMap.get("obj");
    const testvalue = expectedMap.get("test").get("that");

    type pairArr = [["obj", "to"], ["test", nestedPairArr]];
    type pairObj = fromObjToMap.fromArrayToObj<pairArr>;
    const obj: pairObj = { obj: "to", test: { that: "and this" } };

    const map = fromObjToMap(obj);
    const objvalue = map.get("obj");
    const thatValue = map.get("test").get("that");
    console.log(thatValue);

    expect(map).toEqual(expectedMap);
    expect(objvalue).toEqual(objvalueTest);
    expect(testvalue).toEqual(thatValue);
  });
});
