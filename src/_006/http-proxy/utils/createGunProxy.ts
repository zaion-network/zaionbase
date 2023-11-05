import ht from "http-proxy";

export function createGunProxy(
  httpProxy: typeof ht,
  TARGETURL: string,
  onProxyReqHandler: any,
  ra: any,
  secretHeader: any,
  LOCALSERVER: string,
  LOCALSERVERPORT: string,
  httpRequest: any,
  onProxyReqWs: any,
  parse: any,
  format: any,
  PROXY: number
) {
  var proxy = httpProxy.createProxyServer({
    target: `${TARGETURL}`,
    ws: true,
  });

  let now;

  const usersAuths = new Map();

  proxy.on("proxyReq", onProxyReqHandler());

  function verifyToken() {
    console.log("I will verify the token");
  }

  const reqAuth = ra(
    secretHeader,
    LOCALSERVER,
    LOCALSERVERPORT,
    usersAuths,
    httpRequest
  );

  proxy.on(
    "proxyReqWs",
    onProxyReqWs(
      parse,
      now,
      verifyToken,
      reqAuth,
      usersAuths,
      secretHeader,
      format
    )
  );

  proxy.on("upgrade", function () {
    console.log("upgrading");
  });

  proxy.on("close", function (proxyRes, req, res) {
    console.log("---------------------called close");
  });

  // @ts-expect-error
  proxy.listen(PROXY, () => {
    console.log(`listening on port ${PROXY}`);
  });
  return { proxy };
}
