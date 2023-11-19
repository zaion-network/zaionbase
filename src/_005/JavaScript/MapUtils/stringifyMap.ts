export const stringifyMapArray: stringifyMap.stringifier = map =>
  JSON.stringify(Array.from(map));

export const stringifyMapObj: stringifyMap.stringifier = map =>
  JSON.stringify(Object.fromEntries(map));

export const stringifyMap: stringifyMap.stringifyMap = (
  map,
  type = "array"
) => {
  if (type === "array") return stringifyMapArray(map);
  else if (type === "object") return stringifyMapObj(map);
  else throw new Error();
};

export namespace stringifyMap {
  export interface stringifier {
    (map: Map<unknown, unknown>): string;
  }

  export interface stringifyMap {
    (map: Map<unknown, unknown>, type?: "object" | "array"): string;
  }
}
