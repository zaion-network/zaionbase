import { describe, it, expect, spyOn } from "bun:test";
import { TryCatch } from "./Statements";

describe(`${TryCatch.name}`, () => {
  it("controlla membri", () => {
    expect(TryCatch).toBeTruthy();
  });
  it("test", () => {
    const functionthatmayreturnError = (error: boolean) => {
      if (error) throw new Error("mannaggia");
      else return "o mamma mia";
    };

    const trycatch1 = new TryCatch({
      positiveCb: () => {
        const res = functionthatmayreturnError(false);
        expect(res).toEqual("o mamma mia");
        return true;
      },
    });

    const cb = {
      log: (res: any) => {
        console.log("----", res);
      },
    };
    const spy = spyOn(cb, "log");
    const trycatch2 = new TryCatch({
      positiveCb: () => {
        const res = functionthatmayreturnError(true);
        cb.log(res);
        return true;
      },
    });
    expect(spy).toHaveBeenCalledTimes(0);
    const res2 = trycatch1.run();
    expect(res2).toBeTrue();
    trycatch2.run();
  });
});
