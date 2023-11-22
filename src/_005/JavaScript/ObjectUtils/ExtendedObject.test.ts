import { describe, it, expect } from "bun:test";
import { ExtendedObject } from "./ExtendedObject";
import { ExtendedArray } from "../ArrayUtils/ExtendedArray";

describe(`${ExtendedObject.name}`, () => {
  it("dovrebbe creare un oggetto", () => {
    type pairArr = [["name", string], ["surname", string]];
    type pairObj = ExtendedObject.toObj<pairArr>;
    const obj: pairObj = {
      name: "giacomo",
      surname: "gagliano",
    };
    const extendedObject = new ExtendedObject(obj);
    expect(extendedObject).toEqual(obj);
    expect(extendedObject.name).toEqual(obj.name);
  });
  it("dovrette trasformare l'oggetto in un map", () => {
    type pairArr = [["name", string], ["surname", string]];
    type pairObj = ExtendedObject.toObj<pairArr>;
    const obj: pairObj = {
      name: "giacomo",
      surname: "gagliano",
    };
    const extendedObject = new ExtendedObject(obj);
    const map = extendedObject.toMap();
    const name = map.get("name");
    expect(name).toEqual(obj.name);
    map.set("name", "ciao");
    const name2 = map.get("name");
    expect(name2).toEqual("ciao");
  });
  it("dovrebbe trasformare l'oggetto in un ExtendedArray", () => {
    type pairArr = [["name", string], ["surname", string]];
    type pairObj = ExtendedObject.toObj<pairArr>;
    const obj: pairObj = {
      name: "giacomo",
      surname: "gagliano",
    };
    const extendedObject = new ExtendedObject(obj);
    const arr = extendedObject.toArr();
    const pair1 = arr[0];
    expect(arr instanceof ExtendedArray).toBeTrue();
    expect(pair1).toEqual(["name", "giacomo"]);
  });
});
