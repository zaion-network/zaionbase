#!/usr/bin/env bun

const index = await Bun.build({
  entrypoints: ["./src/index.ts"],
  outdir: "dist",
  target: "bun",
  format: "esm",
});

const arrayMap = await Bun.build({
  entrypoints: [
    "./array/index.ts",
    "./map/index.ts",
    "./tuple/index.ts",
    "./mixins/index.ts",
  ],
  outdir: "dist",
  target: "bun",
  format: "esm",
});

const crypto = await Bun.build({
  entrypoints: ["./crypto/index.ts"],
  outdir: "dist/crypto",
  target: "node",
});

const server = await Bun.build({
  entrypoints: ["./server/node/index.ts"],
  outdir: "dist/server",
  target: "node",
});

const web = await Bun.build({
  entrypoints: ["./web/index.ts"],
  outdir: "dist/web",
  target: "browser",
});

console.log("res", index.success);
console.log("array/map/tuple/mixins", arrayMap.success);
console.log("crypto", crypto.success);
console.log("server", server.success);
console.log("web", web.success);
