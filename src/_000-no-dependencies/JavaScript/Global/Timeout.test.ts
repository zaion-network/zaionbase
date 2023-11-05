import { describe, it, expect } from "bun:test";
import { Timeout } from "./Timeout";

describe(`${Timeout.name}`, () => {
  it.todo("test1", () => {
    const timeout = new Timeout(() => console.log("ciao"), 1000);

    new Timeout(() => {
      timeout.refresh();
    }, 100);

    new Timeout(() => {
      timeout.close();
    }, 1200);
  });
});
