import { describe, it, expect } from "bun:test";
import { Crypto } from "./Crypto";

describe(`${Crypto.name}`, () => {
  it("controlla membri", () => {
    expect(Crypto).toBeTruthy();
    expect(Crypto.hashIt).toBeTruthy();
    expect(Crypto.hmacIt).toBeTruthy();
  });
  it("test1", () => {
    const EXPECTED = `bad3071a18e0d79a990a2f5620d40e943e7e981bb8b07e206f5e963d0db5d6e8`;
    const res = Crypto.hashIt("boooombastik");
    expect(res).toEqual(EXPECTED);
  });
});
