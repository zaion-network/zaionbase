// import { HyperNode,Base,HyperNodeCtor } from "./HyperNode";
import { Mix } from "../../_000-no-dependencies/Mixins/Mix";
import { HyperNode } from "./HyperNode";
import { Idable } from "./HyperNode/Idable";
import { Relationable } from "./HyperNode/Relationable";

// class Mixed extends new Mix(Base).with(Idable) {}

const arr: [Idable.Type, Relationable.Type] = [Idable, Relationable];

class Abbb extends new Mix(HyperNode<string>).with(arr) {
  constructor(ciao: string) {
    super("am type", ciao);
  }
}

const abv = new Abbb("alll");
abv.relations.set("chebella", "relazione");
console.log(abv.value);
console.log(abv.id);
console.log(abv.relations);
