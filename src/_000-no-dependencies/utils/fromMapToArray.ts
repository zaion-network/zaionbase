export function fromMapToArray<M extends Map<string, any>>(map: M) {
  if (!(map instanceof Map)) throw new Error("you must pass a map!");
  const res = [];
  map.forEach((v, k) => {
    if (!(v instanceof Map)) {
      res.push([k, v]);
    } else {
      const arrayAnnidato = fromMapToArray(v);
      res.push([k, arrayAnnidato]);
    }
  });
  return res;
}
