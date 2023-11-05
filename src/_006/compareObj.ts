import { hashIt } from "../_005/Node/Crypto/hashit";

export const compareObj: compareObj = (obj1, obj2) =>
  hashIt(JSON.stringify(obj1)) === hashIt(JSON.stringify(obj2));

export interface compareObj {
  (obj1: object, obj2: object): boolean;
}
