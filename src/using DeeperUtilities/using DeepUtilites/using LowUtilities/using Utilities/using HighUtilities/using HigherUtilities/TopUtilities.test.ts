import { describe, it, expect } from "bun:test";
import { TopUtilities } from "./TopUtilities";
describe(`${TopUtilities.name}`, () => {
  it("controlla presenza elementi", () => {
    expect(TopUtilities).toBeTruthy();
  });
});
