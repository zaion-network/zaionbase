export function fromMapToObj<M extends Map<string, any>>(map: M) {
  if (!(map instanceof Map))
    throw new Error("not the right type, try passing a map!");

  const obj = {};
  map.forEach((v, k) => {
    const key = k;
    const value = v;
    if (!(value instanceof Map)) {
      obj[key] = value;
    } else {
      obj[key] = fromMapToObj(value);
    }
  });
  return obj;
}
