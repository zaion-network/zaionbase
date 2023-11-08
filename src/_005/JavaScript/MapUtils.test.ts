import { describe, it, expect } from "bun:test";
import { MapUtils } from "./MapUtils";

describe("controlla export", () => {
  it("dovrebbero esserci tutti!", () => {
    expect(MapUtils).toBeTruthy();
    expect(MapUtils.NonNullableMap).toBeTruthy();
    expect(MapUtils.parseMapFromJsonStrategy).toBeTruthy();
  });
});

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

describe("ExtendedMap", () => {
  it("dovrebe creare una classe che ha come mettodo stringify", () => {
    const map = new MapUtils.ExtendedMap();
    map.set("ciao", "mamma");
    map.set("bella", "ciao");
    const EXPECTED = `{"ciao":"mamma","bella":"ciao"}`;
    const result = map.stringify();
    expect(result).toEqual(EXPECTED);
  });
  it("", () => {
    const map = new MapUtils.ExtendedMap<"test" | "tap", string>([
      ["test", "tsdt"],
    ]);
    console.log(map.get("test"));
  });
});
