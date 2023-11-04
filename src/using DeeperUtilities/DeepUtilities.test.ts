import { describe, it, expect } from "bun:test";
import { DeepUtilities } from "./DeepUtilities";

describe("DeepUtilities", () => {
  it("controlla membri", () => {
    expect(DeepUtilities).toBeTruthy();
    expect(DeepUtilities.Conditioner).toBeTruthy();
  });
});
