import { describe, it, expect } from "bun:test";
import { StatsSync } from "./StatsSync";

describe(`${StatsSync.name}`, () => {
  it("controlla membri", () => {
    expect(StatsSync).toBeTruthy();
    expect(StatsSync.getLastModifiedTimeOfFile).toBeTruthy();
    expect(StatsSync.statSync).toBeTruthy();
    expect(StatsSync.getModifTime).toBeTruthy();
  });
  it.todo("test 1", () => {
    //
  });
});
