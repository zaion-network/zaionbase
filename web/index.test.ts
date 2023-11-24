import { describe, it, expect } from "bun:test";
import { JavaScript } from "../src/_005/JavaScript";

describe(`${JavaScript.name}`, () => {
  it("dovrebbe trovare i membri", () => {
    expect(JavaScript.Promise_utils).toBeTruthy();
    expect(JavaScript.Promise_utils.wait).toBeTruthy();
  });
});
