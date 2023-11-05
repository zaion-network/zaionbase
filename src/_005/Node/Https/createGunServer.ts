import { Socket } from "bun";
import {
  createServer as cs,
  RequestListener,
  IncomingMessage,
  ServerResponse,
} from "http";

export function createGunServer(
  createServer: typeof cs,
  GUN: any,
  PORT: number,
  conditionValues: [string, string],
  requestListener?:
    | RequestListener<typeof IncomingMessage, typeof ServerResponse>
    | undefined,
  onUpgrade?: (req: IncomingMessage, socket: Socket, head: Buffer) => void,
  onListen?: () => void
) {
  if (!conditionValues) conditionValues = ["x-my-proxy", "My Proxy"];
  if (!requestListener)
    requestListener = (req, res) => {
      console.log("got http request", req.url);
      console.log(req.headers[conditionValues[0]] === conditionValues[1]);
    };
  if (!onUpgrade)
    onUpgrade = function (req, socket, head) {
      console.log(req.url, "upgrading", req.headers.origin);
      const condition = req.headers[conditionValues[0]] === conditionValues[1];
      if (!condition) {
        socket.end();
        console.log("connection ended");
      }
    };
  if (!onListen)
    onListen = () => {
      console.log(`listening on port ${PORT}`);
    };

  const server = createServer(requestListener);
  server.on("upgrade", onUpgrade);
  GUN({ web: server });
  server.listen(PORT, onListen);
}
