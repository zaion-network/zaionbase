import { describe, it, expect } from "bun:test";
import { Https, httpRequest } from "./Https";

describe(`${Https.httpRequest.name}`, () => {
  it("controlla membri", () => {
    expect(Https.httpRequest).toBeTruthy();
    expect(httpRequest).toBeTruthy();
  });
  it.todo("testare", () => {});
});
