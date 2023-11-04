import { describe, it, expect } from "bun:test";
import { ExecSync } from "./ExecSync";

describe(`${ExecSync.name}`, () => {
  it("test1", () => {
    const exe = new ExecSync("ls", { maxBuffer: 1024 });
    exe.run().format().split(ExecSync.splitters.newline);

    console.log(exe.digest());
  });
});
