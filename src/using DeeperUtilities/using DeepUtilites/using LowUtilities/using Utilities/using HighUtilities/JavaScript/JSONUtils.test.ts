import { describe, it, expect } from "bun:test";
import { JSONUtils } from "./JSONUtils";

describe(`${JSONUtils.name}`, () => {
  it("test1", async () => {
    const res1 = await JSONUtils.validateJson("ciao mamma");
    const res2 = await JSONUtils.validateJson("{mamma:'ciao'}");
    const res3 = await JSONUtils.validateJson("{'mamma':'ciao'}");
    const res4 = await JSONUtils.validateJson('{"mamma":"ciao"}');
    expect(res1).toBeFalse();
    expect(res2).toBeFalse();
    expect(res3).toBeFalse();
    expect(res4).toEqual({ mamma: "ciao" });
  });
});
