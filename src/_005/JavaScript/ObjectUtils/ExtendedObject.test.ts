import { describe, it, expect } from "bun:test";
import { ExtendedObject } from "./ExtendedObject";

describe(`${ExtendedObject.name}`, () => {
  it("dovrebbe creare un oggetto", () => {
    const extendedObject = new ExtendedObject<{
      name: string;
      surname: string;
    }>({
      name: "giacomo",
      surname: "gagliano",
    });
    console.log(extendedObject);
  });
});
