import { describe, it, expect } from "bun:test";
import { errorCb } from "./ErrorHandler";

describe("errorCb", () => {
  it("dovrebbe esistere", () => {
    expect(errorCb).toBeTruthy();
  });
  it("dovrebbe lanciare un errore", () => {
    const cb = errorCb("boom");
    expect(cb).toThrow("boom");
  });
});
