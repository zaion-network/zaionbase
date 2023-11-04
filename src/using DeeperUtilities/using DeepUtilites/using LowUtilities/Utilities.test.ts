import { Utilities } from "./Utilities";
import { describe, it, expect } from "bun:test";

describe(`${Utilities.name}`, () => {
  it("controlla presenza elementi", () => {
    expect(Utilities).toBeTruthy();
  });
});
