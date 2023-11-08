import type { MapFromJson } from "../MapFromJson";

export const parse: MapFromJson.parseMapFromJson = json => {
  return new Map(JSON.parse(json));
};

export namespace parse {}
