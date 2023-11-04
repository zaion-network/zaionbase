import { describe, it, expect } from "bun:test";
import { Promise_utils, wait } from "./Promise_Utils";

describe(`${Promise_utils.name}`, () => {
  it.todo("controlla i membri", () => {
    expect(Promise_utils).toBeTruthy();
    expect(Promise_utils.wait).toBeTruthy();
    expect(wait).toBeFalsy();
  });
});
