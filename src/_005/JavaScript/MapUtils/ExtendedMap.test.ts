import { describe, it, expect } from "bun:test";
import { ExtendedMap } from "./ExtendedMap";
import { ExtendedArray } from "../ArrayUtils/ExtendedArray";

describe(`${ExtendedMap.name}`, () => {
  it("dovrebbe creare un map taippato", () => {
    const map = new ExtendedMap<{ ciao: string }>();
    map.set("ciao", "mamma");
    expect(map).toBeTruthy();
    const ciao = map.get("ciao");
    expect(ciao).toEqual("mamma");
  });
  it("dovrebbe trasformare il map in un oggetto", () => {
    const map = new ExtendedMap<{ ciao: string }>();
    map.set("ciao", "mamma");
    const obj = map.toObj();
    expect(obj.ciao).toEqual("mamma");
    expect(obj.toMap).toBeTruthy();
  });
  it("dovrebbe trasformare il map in un ExtendedArray", () => {
    const map = new ExtendedMap<{ ciao: string }>();
    map.set("ciao", "mamma");
    const arr = map.toArr();
    const test = arr instanceof ExtendedArray;
    const pair1 = arr[0];
    expect(test).toBeTrue();
    expect(pair1).toEqual(["ciao", "mamma"]);
  });
});
