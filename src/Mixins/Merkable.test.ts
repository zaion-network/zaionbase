import { Mixins } from "../Mixins";
import { Merkable, MerkableType } from "./Merkable";

class Test {
  constructor(public name: string, public surname: string) {}
}

class MerkledTest extends new Mixins.Mix(Test).with(Merkable(Test)) {}
const merkled = new MerkledTest("hugo", "boss");
const m2 = new MerkledTest("oliver", "twist");
console.log(merkled);
console.log(m2);

const map = new Map();
map.set("ciao", "mamma");
map.set("baby", "babbo");
map.set("foo", function (this: { ciao: string }) {
  console.log(this.ciao);
});
const obj = Object.fromEntries(map);
console.log(obj);
obj.foo();
