import { describe, it, expect } from "bun:test";
import { ExtendedArray } from "./ExtendedArray";
import { ExtendedObject } from "../ObjectUtils/ExtendedObject";
import { ExtendedMap } from "../MapUtils/ExtendedMap";

describe(`${ExtendedArray.name}`, () => {
  it("dovrebbe creare un Extended array", () => {
    const arr = new ExtendedArray<[["prova", "un"], ["oggetto", "bello"]]>(
      ["prova", "un"],
      ["oggetto", "bello"]
    );
    expect(arr instanceof ExtendedArray).toBeTrue();
    const extpectedResult = [
      ["prova", "un"],
      ["oggetto", "bello"],
    ];
    const pair1 = arr[0];
    const pair2 = arr[1];
    expect(arr).toEqual(extpectedResult);
    expect(pair1).toEqual(extpectedResult[0]);
    expect(pair2).toEqual(extpectedResult[1]);
  });
  it("dovrebbe creare un array lungo 3", () => {
    const tripla = new ExtendedArray(3);
    expect(tripla.length).toEqual(3);
    expect(tripla[0]).toBeUndefined();
  });
  it("dovrebbe trasformare l'array in un ExtendedObject", () => {
    const arr = new ExtendedArray<[["prova", "un"], ["oggetto", "bello"]]>(
      ["prova", "un"],
      ["oggetto", "bello"]
    );
    expect(arr.toObj).toBeTruthy();
    const obj = arr.toObj();
    expect(obj instanceof ExtendedObject).toBeTrue();
    expect(obj.oggetto).toEqual("bello");
  });
  it("dovrebbe trasformare l'array in un ExtendedMap", () => {
    const arr = new ExtendedArray<[["prova", "un"], ["oggetto", "bello"]]>(
      ["prova", "un"],
      ["oggetto", "bello"]
    );
    expect(arr.toMap).toBeTruthy();
    const map = arr.toMap();
    expect(map instanceof ExtendedMap).toBeTrue();
    const oggetto = map.get("oggetto");
    expect(oggetto).toEqual("bello");
  });
});
