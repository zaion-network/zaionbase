import { describe, it, expect } from "bun:test";
import { HasUpdated } from "./HasUpdated";

describe(`${HasUpdated.name}`, () => {
  it("controlla i membri", () => {
    expect(HasUpdated).toBeTruthy();
  });
  it.todo("testare");
});
