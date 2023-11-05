import { describe, it, expect, spyOn } from "bun:test";
import { benchmark } from "./benchmark";

describe(`${benchmark.name}`, () => {
  it("test1", () => {
    const functionToTest = async (a: number) => a;
    const obj = { functionToTest };
    const spy = spyOn(obj, "functionToTest");
    expect(spy).toHaveBeenCalledTimes(0);
    benchmark(obj.functionToTest, [10]);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
