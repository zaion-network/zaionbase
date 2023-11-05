import { describe, it, expect, spyOn } from "bun:test";
import { BasicClass } from "./BasicClass";

describe("BasicClasse", () => {
  it("", () => {
    const BASICCLASSEXAMPLE = 1;
    const basicClassExample = () => {
      let spy1;
      let spy2;
      class MyClass extends BasicClass {
        constructor(value: boolean) {
          super();
          const truecb = () => console.log(true);
          const iffalse = () => console.log(false);
          const obj = { truecb, iffalse };
          spy1 = spyOn(obj, "truecb");
          spy2 = spyOn(obj, "iffalse");
          const iftrue: BasicClass.actionAndArgs = [obj.truecb, []];
          const validations = MyClass.Conditioner.makeValidations(iftrue, [
            obj.iffalse,
            [],
          ]);
          this.conditioner.boolean([value, validations]);
        }
      }

      const run = () => {
        new MyClass(true);
      };
      const run2 = () => {
        new MyClass(false);
      };
      run();
      expect(spy1).toHaveBeenCalledTimes(1);
      expect(spy2).toHaveBeenCalledTimes(0);
      run2();
      expect(spy1).toHaveBeenCalledTimes(0);
      expect(spy2).toHaveBeenCalledTimes(1);
    };
    if (BASICCLASSEXAMPLE) basicClassExample();
  });
});
