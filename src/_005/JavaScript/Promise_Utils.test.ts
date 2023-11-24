import { describe, it, expect } from "bun:test";
import { Promise_utils } from "./Promise_Utils";

describe(`${Promise_utils.name}`, () => {
  it("controlla i membri", () => {
    expect(Promise_utils).toBeTruthy();
    expect(Promise_utils.wait).toBeTruthy();
    // expect(()=>wait).toBeFalsy();
  });
});
describe(`${Promise_utils.wait.name}`, () => {
  it("dovrebbe creare un attesa di 200ms", async () => {
    const DELAY = 200;
    const now = performance.now();
    await Promise_utils.wait(DELAY);
    const after = performance.now();
    expect(after - now > 200).toBeTrue();
  });
});
