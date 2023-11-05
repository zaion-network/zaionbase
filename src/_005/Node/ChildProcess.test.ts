import { describe, it, expect } from "bun:test";
import { ChildProcess } from "./ChildProcess";

describe(`${ChildProcess.name}`, () => {
  it("test 1", () => {
    expect(ChildProcess).toBeTruthy();
  });
});
