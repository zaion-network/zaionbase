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
const message = { name: "ciao" };
beforeAll(async done => {
  console.log("setup");

  // @ts-expect-error
  httpServer = createHttpServer((req, res) => {
    res.write(JSON.stringify(message));
    res.end();
  });
  httpServer.on("listening", () => done());
  httpServer.listen(7999, () => console.log("listening on port 7999"));
});

describe(`${httpRequest.name}`, () => {
  it("controlla export", () => {
    expect(httpRequest).toBeTruthy();
  });
  it("test richieste", async () => {
    const options = {
      host: "localhost",
      port: 7999,
      method: "GET",
      path: "",
    };
    const res = await httpRequest<{ name: string }>(options)();
    expect(res).toEqual(message);
  });
  it("dovrebbe overridare la cb default", async done => {
    setTimeout(async () => {
      const options = {
        host: "localhost",
        port: 7999,
        method: "GET",
        path: "",
      };
      httpRequest<{ name: string }>(options, res => {
        res.on("data", chunk => {
          expect(chunk.toString()).toEqual('{"name":"ciao"}');
          done();
        });
      })();
      // console.log(res);
      // expect(res).toEqual(message);
    }, 10);
  });
});
