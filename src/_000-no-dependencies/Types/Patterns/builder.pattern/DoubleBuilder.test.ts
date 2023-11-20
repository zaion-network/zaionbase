import { DoubleBuilder } from "./DoubleBuilder";

const some = new DoubleBuilder().setA(10).setB("mamma");

const a = some.a;
//   ^?
const b = some.b;
//   ^?
const ob = some.setA(1).a;
some.doit();
