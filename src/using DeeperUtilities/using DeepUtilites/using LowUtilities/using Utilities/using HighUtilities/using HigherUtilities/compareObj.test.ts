import { describe, it, expect } from "bun:test";
import { compareObj as c } from "./compareObj";

describe("compareObj", () => {
  it("", () => {
    const obj1 = { name: "ciao" };
    const obj2 = { name: "ciao" };
    const obj3 = { name: "ciaoss" };

    const res1 = c(obj1, obj2);
    const res2 = c(obj1, obj3);
    expect(res1).toBeTrue();
    expect(res2).toBeFalse();
  });
});
