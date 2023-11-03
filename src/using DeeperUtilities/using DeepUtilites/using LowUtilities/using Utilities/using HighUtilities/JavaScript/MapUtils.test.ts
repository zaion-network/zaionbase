import { describe, it, expect } from "bun:test";
import { MapUtils, ExtendedMap } from "./MapUtils";

describe("stringifyMap default behave", () => {
  it("dovrebbe tornare il valore aspettato", () => {
    const map = new Map();
    map.set(1, "ciao");
    map.set(2, "miao");
    const string = MapUtils.stringifyMap(map);
    const EXPECTED = '[[1,"ciao"],[2,"miao"]]';
    expect(string).toEqual(EXPECTED);
  });
});

describe("stringifyMap object behave", () => {
  it("dovrebbe tornare il valore aspettato", () => {
    const map = new Map();
    map.set(1, "ciao");
    map.set(2, "miao");
    const string = MapUtils.stringifyMap(map, "object");
    const EXPECTED = `{"1":"ciao","2":"miao"}`;
    expect(string).toEqual(EXPECTED);
  });
});

