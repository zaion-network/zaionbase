import { SimpleTuple } from "./SimpleTuple";
let tuple = new SimpleTuple("ciao")
  .push("ciao")
  .push((res: string) => console.log("ola"));
// tuple.push(10);
// tuple.push(() => console.log("ola"));
console.log(tuple);

const foo = tuple.arr[2];
foo("sfruttamento");

let tuple2 = new SimpleTuple("bibi").push("accendino");
const res = tuple2.arr[1];
