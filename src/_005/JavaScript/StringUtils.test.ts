import { describe, it, expect } from "bun:test";
import {
  IsplitAt_v1,
  IupperCaseFirst_v1,
  PathBuilder,
  StringUtils,
  String_utils,
  ZionBase,
  customTag,
  customTagMaker,
  generateFilename,
  generateFilenameCb,
  splitAtChar,
} from "./StringUtils";

describe(`${PathBuilder}`, () => {
  it("controlla i membri", () => {
    expect(PathBuilder).toBeTruthy();
    expect(StringUtils).toBeTruthy();
    expect(ZionBase).toBeTruthy();
    expect(customTag).toBeTruthy();
    expect(generateFilename).toBeTruthy();
    expect(splitAtChar).toBeTruthy();
  });
});
