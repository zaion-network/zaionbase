import { describe, it, expect } from "bun:test";
import { Context } from "./Context";

describe("Context", () => {
  it("controlla i membri", () => {
    expect(Context).toBeTruthy();
    expect(Context.Result).toBeTruthy();
    expect(Context.WithChangeState).toBeTruthy();
    expect(Context).toBeTruthy();
  });
});
