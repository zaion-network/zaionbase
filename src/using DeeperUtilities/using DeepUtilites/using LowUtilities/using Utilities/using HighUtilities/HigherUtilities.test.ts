import { HigherUtilities } from "./HigherUtilities";
import { describe, it, expect } from "bun:test";

describe(`${HigherUtilities.name}`, () => {
  it("controlla presenza elementi", () => {
    expect(HigherUtilities).toBeTruthy();
    expect(HigherUtilities.Application).toBeTruthy();
    expect(HigherUtilities.Node).toBeTruthy();
    expect(HigherUtilities.JavaScript).toBeTruthy();
  });
});
