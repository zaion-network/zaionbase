import { describe, it, expect } from "bun:test";
import { ArrayUtils } from "./ArrayUtils";

describe(`${ArrayUtils.name}`, () => {
  it("test ensure array", () => {
    const EXPECTED = [""];
    const res = ArrayUtils.ensureArray(EXPECTED);
    expect(res).toEqual(EXPECTED);
  });
  it("test replace", () => {
    const EXPECTED = [
      "boomba-0",
      "boomba-1",
      "boomba-2",
      "boomba-3",
      "boomba-4",
      "boomba-5",
      "boomba-6",
      "boomba-7",
      "boomba-8",
      "boomba-9",
    ];
    const arr = Array(10)
      .fill("")
      .map((_, idx) => `boom-${idx}`);
    const replace = ArrayUtils.MapCallbacks.replacer;
    const res = arr.map(replace("boom", "boomba"));
    expect(res).toEqual(EXPECTED);
    EXPECTED.forEach((v, i) => expect(v).toEqual(res[i]));
  });
});
