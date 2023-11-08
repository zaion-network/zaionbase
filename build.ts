#!/usr/bin/env bun

const res = await Bun.build({
  entrypoints: ["./src/index.ts"],
  outdir: "dist",
  target: "bun",
  format: "esm",
});
const arrayMap = await Bun.build({
  entrypoints: ["./array/index.ts", "./map/index.ts"],
  outdir: "dist",
  target: "bun",
  format: "esm",
});
const cryptoNode = await Bun.build({
  entrypoints: ["./crypto/index.ts"],
  outdir: "dist/crypto",
  target: "node",
});
const serverNode = await Bun.build({
  entrypoints: ["./server/node/index.ts"],
  outdir: "dist/server",
  target: "node",
});
const web = await Bun.build({
  entrypoints: ["./web/index.ts"],
  outdir: "dist/web",
  target: "browser",
});
console.log(res.success);
console.log(arrayMap.success);
console.log(cryptoNode.success);
console.log(serverNode.success);
console.log(web.success);
