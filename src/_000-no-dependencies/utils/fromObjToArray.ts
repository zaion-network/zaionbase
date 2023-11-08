export function fromObjToArray<
  T extends { [k: string]: string | { [k: string]: any } },
  K extends keyof T,
  V extends T[K] | [K, T[K]]
>(obj: T): [K, V][] {
  if (obj instanceof Array || obj instanceof Map) throw new Error("");
  const keys: K[] = Object.keys(obj) as K[];
  const array: [K, V][] = [];
  keys.forEach(k => {
    if (typeof obj[k] === "object" && Object.keys(obj[k]).length > 0) {
      const nestedArray = fromObjToArray(obj[k] as { [k: string]: any });
      nestedArray.forEach(([nestedK, nestedV]) => {
        array.push([k, [nestedK, nestedV] as V]);
      });
    } else {
      array.push([k, obj[k] as V]);
    }
  });
  return array;
}
