import { describe, it, expect } from "bun:test";
import { ExtendedMap } from "./ExtendedMap";

describe(`${ExtendedMap.name}`, () => {
  it("dovrebbe creare un map taippato", () => {
    const map = new ExtendedMap<{ ciao: string }>();
    map.set("ciao", "mamma");
    expect(map).toBeTruthy();
    const ciao = map.get("ciao");
    expect(ciao).toEqual("mamma");
  });
});
