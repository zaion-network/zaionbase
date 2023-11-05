import { describe, it, expect, spyOn } from "bun:test";
import { ClassUtils } from "./ClassUtils";
import { BasicClass } from "../../_002/BasicClass";

describe(`${BasicClass.name}`, () => {
  it("test1", () => {
    let spy1, spy2;
    class MyClass extends ClassUtils.BasicClass {
      constructor(value: boolean) {
        super();
        const iftruecb = () => {};
        const iffalsecb = () => {};
        const cbs = { iftruecb, iffalsecb };
        spy1 = spyOn(cbs, "iftruecb");
        spy2 = spyOn(cbs, "iffalsecb");
        const iftrue: BasicClass.actionAndArgs = [cbs.iftruecb, []];
        const iffalse: BasicClass.actionAndArgs = [cbs.iffalsecb, []];
        const validations = MyClass.Conditioner.makeValidations(
          iftrue,
          iffalse
        );
        this.conditioner.boolean([value, validations]);
      }
    }
    const run = () => {
      new MyClass(true);
      new MyClass(false);
    };
    run();
    expect(spy1).toHaveBeenCalledTimes(0);
    expect(spy2).toHaveBeenCalledTimes(1);
  });
});
