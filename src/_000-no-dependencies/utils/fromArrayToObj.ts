import { Array as A } from "../Types/DataStructures/Mixer.type";
import { Object } from "../Types/DataStructures/Object.type";

export function fromArrayToObj<A extends any[]>(array: A): A.toObj<A>;
export function fromArrayToObj<A extends any[]>(array: A) {
  if (!Array.isArray(array)) throw new Error("devi passare un array");
  const res: Object.KeyValueObj = {};
  array.forEach(([k, v]) => {
    if (Array.isArray(v)) {
      const oggettoAnnidato = fromArrayToObj([v]);
      res[k] = oggettoAnnidato;
    } else {
      res[k] = v;
    }
  });
  return res;
}
