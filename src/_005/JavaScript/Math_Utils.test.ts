import { describe, it, expect } from "bun:test";
import { Math_Utils } from "./Math_Utils";

describe(`${Math_Utils}`, () => {
  it("test1", () => {
    expect(Math_Utils).toBeTruthy();
    expect(Math_Utils.convertDecimalToFractionString).toBeTruthy();
    expect(Math_Utils.modulo).toBeTruthy();
    expect(Math_Utils.quantiDecimaliDopoLaVirgola).toBeTruthy();
  });
});
