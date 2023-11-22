import { describe, it, expect } from "bun:test";
import { Conditioner } from "./Conditioner";
const conditioner = new Conditioner();

describe(`${Conditioner.name}`, () => {
  it(`${conditioner.boolean.name}`, () => {
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

    let res = conditioner.boolean(conditions);
    expect(res).toEqual(0);
  });
  it(`${conditioner.elseIf.name}`, () => {
    const condition1 = false;
    const condition2 = false;
    const condition3 = false;
    const arr: Conditioner.condition[] = [
      [condition1, () => console.log("condition1"), []],
      [condition2, (a: string) => console.log(a), ["condition2"]],
      [condition3, (a: string) => a, ["condition3"]],
    ];
    let res = conditioner.elseIf("", arr, [a => a, ["test"]]);
    expect(res).toEqual("test");
  });
  it(`${conditioner.booleanTrue}`, () => {
    const condition = true;
    const value = "test2";
    let res = conditioner.booleanTrue(condition, [a => a, [value]]);
    expect(res).toEqual(value);
  });
  it(`${conditioner.booleanFalse.name}`, () => {
    const condition = false;
    let res = conditioner.booleanFalse(condition, [a => a, ["testfalse"]]);
    expect(res).toEqual("testfalse");
  });
  it(`${conditioner.safeGuardError.name}`, () => {
    const condition = true;
    expect(() => conditioner.safeGuardError([condition, "error"])).toThrow(
      "error"
    );
  });
});
