import { describe, it, expect, beforeAll, afterAll } from "bun:test";
import { httpRequest } from "./httpRequest";
import {
  IncomingMessage,
  Server,
  ServerResponse,
  createServer as createHttpServer,
  request,
} from "http";
import { createServer as createHttpsServer } from "https";
let httpServer: Server<typeof IncomingMessage, typeof ServerResponse>;
beforeAll(() => {
  console.log("setup");

  httpServer = createHttpServer((req, res) => {
    console.log(req.url);
    res.write(JSON.stringify({ name: "ciao" }));
    res.end();
  });
  httpServer.listen(7999, () => console.log("listening on port 7999"));
});
const cbs: ((event: any) => any)[] = [() => httpServer.close()];
const emit = (event?: string, args?: any) => {
  cbs.forEach(cb => {
    cb(args);
  });
};

describe(`${httpRequest.name}`, () => {
  it("controlla export", () => {
    expect(httpRequest).toBeTruthy();
  });
  it("test richiest", async () => {
    setTimeout(async () => {
      const options = {
        host: "localhost",
        port: 7999,
        method: "GET",
        path: "",
      };
      const res = await httpRequest<{ name: string }>(options)();
      console.log(res);
      httpServer.close();
    }, 1000);
  });
});
