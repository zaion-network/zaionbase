import { HighUtilities } from "./HighUtilities";
import { describe, it, expect } from "bun:test";

describe(`${HighUtilities.name}`, () => {
  it("controlla presenza elementi", () => {
    expect(HighUtilities).toBeTruthy();
    expect(HighUtilities.MapFromJson).toBeTruthy();
    expect(HighUtilities.benchmark).toBeTruthy();
    expect(HighUtilities.Action).toBeTruthy();
  });
});
