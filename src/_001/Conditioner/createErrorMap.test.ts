import { describe, it, expect } from "bun:test";
import { createErrorMap } from "./createErrorMap";

const messaggio = "è successo qualcosa";
const errorMap = createErrorMap(messaggio);
const ifTrue = errorMap.get(true);

describe(`${createErrorMap.name}`, () => {
  it("dovrebbe creare un errorMap, quando è true non da nulla, quando false lancia errore con messaggio", () => {
    const res = ifTrue!();
    expect(res).toBeUndefined();
  });
  it(`dovrebbe lanciare un errore con il messaggio`, () => {
    expect(() => errorMap.get(false)!()).toThrow(messaggio);
  });
});
