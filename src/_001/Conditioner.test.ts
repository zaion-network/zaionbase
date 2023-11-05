import { describe, it, expect } from "bun:test";
import { Conditioner } from "./Conditioner";
const conditiner = new Conditioner();

describe("Conditioner", () => {
  it("boolean", () => {
    type booleanconditions = Conditioner.booleanCondition;
    const cond = true;
    const cbTrue = (mes: string) => {
      expect(mes).toEqual("ciao");
      return 0;
    };
    const cbFalse = () => console.log("false");
    const conditions: booleanconditions = [
      cond,
      [
        [true, cbTrue, ["ciao"]],
        [false, cbFalse, []],
      ],
    ];

    let res = conditiner.boolean(conditions);
    expect(res).toEqual(0);
  });
  it("multiple conditions", () => {
    const condition1 = false;
    const condition2 = false;
    const condition3 = false;
    const arr: Conditioner.condition[] = [
      [condition1, () => console.log("condition1"), []],
      [condition2, (a: string) => console.log(a), ["condition2"]],
      [condition3, (a: string) => a, ["condition3"]],
    ];
    let res = conditiner.elseIf("", arr, [a => a, ["test"]]);
    expect(res).toEqual("test");
  });
  it("boolean true", () => {
    const condition = true;
    const value = "test2";
    let res = conditiner.booleanTrue(condition, [a => a, [value]]);
    expect(res).toEqual(value);
  });
  it("boolean false", () => {
    const condition = false;
    let res = conditiner.booleanFalse(condition, [a => a, ["testfalse"]]);
    expect(res).toEqual("testfalse");
  });
  it("safe guard error", () => {
    const condition = true;
    expect(() => conditiner.safeGuardError([condition, "error"])).toThrow(
      "error"
    );
  });
});
