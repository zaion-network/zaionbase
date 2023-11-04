import { describe, it, expect } from "bun:test";
import { existsSync, writeFileSync } from "fs";
import { FileSystem } from "./FileSystem";
import path from "path";
import exp from "constants";

describe(`${FileSystem.name}`, () => {
  it.todo("controlla membri", () => {
    expect(FileSystem).toBeTruthy();
    // expect(FileSystem.HasUpdated).toBeTruthy();
    expect(FileSystem.ReaddirSync).toBeTruthy();
    expect(FileSystem.StatsSync).toBeTruthy();
  });
  it.todo("check file existence", async () => {
    const checkFileExists = FileSystem.checkFileExists;
    const thisfile = path.join(__filename);
    const res = await checkFileExists(thisfile);
    console.log(res);
  });
  it.todo("check and remove", () => {
    const filename = "test.txt";
    const filepath = path.join(__dirname, filename);
    const createfile = false;
    if (createfile) writeFileSync(filepath, "testit");
    const checkAndRemove = FileSystem.checkAndRemove;
    const res = checkAndRemove(filepath);
    console.log(res);
    // const checkAndRemove = () => {
    // };
    // checkAndRemove();
  });
});
