import { describe, it, expect, spyOn } from "bun:test";
import { Application } from "./Application";

describe(`${Application.name}`, () => {
  it("controlla membri", () => {
    expect(Application).toBeTruthy();
  });
  it("test 1", () => {
    const App = Application;
    const Block = Application.Block;
    const Condition = Application.Condition.Boolean;

    const app = new App("new");
    const isConnectedCb = () => {
      console.log("eccomi");
      return false;
    };
    const showStuffCb = () => {
      console.log("showing stuff");
      return true;
    };
    const connectCb = () => {
      console.log("connect");
      return true;
    };
    const disconnectCb = () => {
      console.log("disconnect");
      return true;
    };
    const waitForConnectionCb = () => {
      console.log("wait for conn");
      return true;
    };
    const cbs = {
      isConnectedCb,
      showStuffCb,
      connectCb,
      disconnectCb,
      waitForConnectionCb,
    };
    const spy1 = spyOn(cbs, "isConnectedCb");
    const spy2 = spyOn(cbs, "showStuffCb");
    const spy3 = spyOn(cbs, "connectCb");
    const spy4 = spyOn(cbs, "disconnectCb");
    const spy5 = spyOn(cbs, "waitForConnectionCb");
    const isConnected = new Block(cbs.isConnectedCb, []);
    const showStuff = new Block(cbs.showStuffCb, []);
    const connect = new Block(cbs.connectCb, []);
    const disconnect = new Block(disconnectCb, []);
    const waitForConnection = new Block(cbs.waitForConnectionCb, []);

    const isConnectedTrue = new Condition(true, showStuff);
    const isConnectedFalse = new Condition(false, waitForConnection);
    const waitForConnectionTrue = new Condition(true, connect);
    const waitForConnectionFalse = new Condition(false, disconnect);

    app.start(
      isConnected
        .addCondition(isConnectedTrue)
        .addCondition(
          isConnectedFalse
            .addConditionToBlock(waitForConnectionTrue)
            .addConditionToBlock(waitForConnectionFalse)
        )
    );
    expect(spy1).toHaveBeenCalledTimes(0);
    expect(spy2).toHaveBeenCalledTimes(0);
    expect(spy3).toHaveBeenCalledTimes(0);
    expect(spy4).toHaveBeenCalledTimes(0);
    expect(spy5).toHaveBeenCalledTimes(0);
    if (app.nodes[0].isBlock()) {
      app.run();
      expect(spy1).toHaveBeenCalledTimes(1);
      expect(spy2).toHaveBeenCalledTimes(0);
      expect(spy3).toHaveBeenCalledTimes(1);
      expect(spy4).toHaveBeenCalledTimes(0);
      expect(spy5).toHaveBeenCalledTimes(1);
    }
  });
});
