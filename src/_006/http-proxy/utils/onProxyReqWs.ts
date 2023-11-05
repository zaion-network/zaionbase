export function onProxyReqWs(
  parse: any,
  now: number,
  verifyToken: any,
  reqAuth: any,
  usersAuths: any,
  secretHeader: any,
  format: any
) {
  return async function onProxyReqWs(
    proxyReq: any,
    req: any,
    socket: any,
    head: any
  ) {
    console.log("Richiesta ws ricevuta: ", req.headers.origin);
    let cond = true;
    if (cond) {
    } else {
      console.log("no auth");
      socket.destroy(401);
    }
    const parsedUrl = parse(req.url, true);
    now = performance.now();
    verifyToken(parsedUrl.query.token);
    reqAuth(parsedUrl.query.token, parsedUrl.query.user, now);
    const isUserAuthorized = usersAuths.get(parsedUrl.query.user);
    if (isUserAuthorized) {
      console.log(`user ${parsedUrl.query.user} authorized`);
      proxyReq.setHeader(...secretHeader);
      // Rimuovi il token dall'URL
      delete parsedUrl.query.token;
      delete parsedUrl.query.user;
      // Ricrea l'URL senza il token
      req.url = format({ ...parsedUrl, search: null });
    } else {
      console.log("no auth");
      socket.end();
      proxyReq.abort();
    }
  };
}
