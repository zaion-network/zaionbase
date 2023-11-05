import { describe, it, expect } from "bun:test";
import { MapFromJson } from "./MapFromJson";

describe(`${MapFromJson.name}`, () => {
  it("test 1", () => {
    let res = MapFromJson.parseMapFromJson('[["A","ciao"]]');
    expect(res.get("A")).toEqual("ciao");
  });
});
