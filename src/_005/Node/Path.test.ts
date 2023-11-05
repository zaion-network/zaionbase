import { describe, it, expect } from "bun:test";
import {
  Path,
  IbuildPathTuple_v1,
  IbuildPaths_v1,
  IjoinPaths_v1,
  buildPathTuple,
  buildPaths,
  ifUndefined,
  ifUndefinedGeneric,
  joinPaths,
} from "./Path";

describe(`Path`, () => {
  it("controlla membri", () => {
    expect(Path).toBeTruthy();
    expect(buildPathTuple).toBeTruthy();
    expect(buildPaths).toBeTruthy();
    expect(ifUndefined).toBeTruthy();
    expect(ifUndefinedGeneric).toBeTruthy();
    expect(joinPaths).toBeTruthy();
  });
  it.todo("testare", () => {});
});
