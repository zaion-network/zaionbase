import { Mixins } from "../Mixins";
import { hashIt } from "../../_005/Node/Crypto/hashit";

export interface Merkable {
  id: string;
}

export type MerkableType<T extends new (...args: any[]) => any> = Mixins.mixin<
  Merkable,
  InstanceType<T>,
  T
>;

export const Merkable: <T extends new (...args: any[]) => any>(
  type: T
) => MerkableType<T> = () => ctor => {
  return class MerkleObject extends ctor implements Merkable {
    id: string;
    constructor(...args: any[]) {
      super(...args);
      this.id = hashIt(JSON.stringify(this));
    }
  };
};
