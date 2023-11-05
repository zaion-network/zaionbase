export function onProxyReqHandler() {
  return function onProxyReqHandler(
    proxyReq: any,
    req: any,
    res: any,
    options: any
  ) {
    console.log("Ricevuta una richiesta http a:", req.url);
  };
}
