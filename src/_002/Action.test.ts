import { describe, it, expect } from "bun:test";
import { Action } from "./Action";

describe("Action", () => {
  it("controlla il funzionamento di una funzione sync", () => {
    const syncfoo = () => {
      const action = new Action("sync", (a: string) => ({ name: a }), ["ciao"]);
      let res = action.value(...action.args);
      expect(res.name).toEqual("ciao");
    };
    syncfoo();

    it("controlla il funzionamento di una funzione async", async () => {
      const action = new Action.AsyncAction(
        async (a: string) => ({ name: a }),
        ["bomba"]
      );
      const res = await action.value(...action.args);
      expect(res.name).toEqual("bomba");
    });
  });
});
