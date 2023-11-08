export function fromArrayToMap<T extends any[]>(array: T) {
  if (!Array.isArray(array)) throw new Error("devi passare un array");
  const res = new Map();
  array.forEach(([k, v]) => {
    if (Array.isArray(v)) {
      const mapannidato = fromArrayToMap([v]);
      res.set(k, mapannidato);
    } else {
      res.set(k, v);
    }
  });
  return res;
}
