import { describe, it, expect } from "bun:test";
import { ReaddirSync } from "./ReaddirSync";

describe(`${ReaddirSync.name}`, () => {
  it.todo("test1", () => {
    const files: string[] = [];
    const readdir = new ReaddirSync(".", files, { withLastModifTime: true });
    console.log(readdir.run().recurse().digest());
  });
});
