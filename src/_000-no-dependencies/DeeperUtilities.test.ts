import { describe, it, expect } from "bun:test";
import { DeeperUtilities } from "./DeeperUtilities";

describe("DeeperUtilities", () => {
  it("test1", () => {
    expect(DeeperUtilities).toBeTruthy();
    expect(DeeperUtilities.Mixins).toBeTruthy();
  });
});
