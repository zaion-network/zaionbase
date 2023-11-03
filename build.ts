#!/usr/bin/env bun

const res = await Bun.build({
  entrypoints: ["./src/index.ts", "./array/index.ts"],
  outdir: "dist",
  target: "bun",
});
const cryptoNode = await Bun.build({
  entrypoints: ["./crypto/index.ts"],
  outdir: "dist/crypto",
  target: "node",
});
console.log(res);
console.log(cryptoNode);
