import { describe, it, expect } from "bun:test";
import { RegExpUtils, ZionRegExp } from "./RegExpUtils";

describe(`${RegExpUtils}`, () => {
  it.todo("controlla membri", () => {
    expect(RegExpUtils).toBeTruthy();
    expect(RegExpUtils.ZionRegExp).toBeTruthy();
    expect(RegExpUtils.RegExpDescr).toBeFalsy();
    expect(ZionRegExp).toBeFalsy();
  });
});
