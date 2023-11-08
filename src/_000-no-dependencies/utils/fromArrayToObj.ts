export function fromArrayToMap<A extends any[]>(array: A) {
  if (!Array.isArray(array)) throw new Error("devi passare un array");
  const res = {};
  array.forEach(([k, v]) => {
    if (Array.isArray(v)) {
      const oggettoAnnidato = fromArrayToMap([v]);
      res[k] = oggettoAnnidato;
    } else {
      res[k] = v;
    }
  });
  return res;
}
