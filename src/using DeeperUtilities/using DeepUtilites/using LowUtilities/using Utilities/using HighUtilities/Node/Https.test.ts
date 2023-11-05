import { describe, it, expect } from "bun:test";
import { Https } from "./Https";

describe(`${Https.httpRequest.name}`, () => {
  it("controlla membri", () => {
    expect(Https.httpRequest).toBeTruthy();
    expect(Https.httpRequest.requestTypes).toBeTruthy();
    expect(typeof Https.httpRequest).toEqual("function");
    type gg = Https.httpRequest;
  });
  it.todo("testare", () => {});
});
