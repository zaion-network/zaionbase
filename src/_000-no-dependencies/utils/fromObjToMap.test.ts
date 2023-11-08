import { describe, it, expect } from "bun:test";
import { fromObjToMap } from "./fromObjToMap";

describe(`testing ${fromObjToMap.name}`, () => {
  it(`test 1`, () => {
    const obj = { obj: "to", test: { that: "and this" } };
    const map = fromObjToMap(obj);
    console.log(map);
  });
});
