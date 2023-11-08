import type { MapFromJson } from "../MapFromJson";

export const reduce: MapFromJson.parseMapFromJson = json => {
  let parsed = JSON.parse(json) as [unknown, unknown][];
  return new Map(
    parsed.reduce((acc, [key, value]) => {
      acc.set(key, value);
      return acc;
    }, new Map<unknown, unknown>())
  );
};
export namespace reduce {}
