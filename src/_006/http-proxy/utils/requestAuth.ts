export const requestAuth = (
  secretHeader: [string, string],
  LOCALSERVER: string,
  LOCALSERVERPORT: string,
  usersAuths: any,
  httpRequest: any
) => {
  return async function (token: any, user = "none", now: number) {
    // usersAuths.set(user, false);
    const headers = {
      [secretHeader[0]]: secretHeader[1],
      ["auth"]: token,
      ["user"]: user,
    };
    const options = {
      hostname: LOCALSERVER,
      port: LOCALSERVERPORT,
      path: "/auth",
      method: "GET",
      headers,
    };

    const handleFetch = (res: any) => {
      res.on("data", (d: any) => {
        // implementare AccessTokenManager
        const ricevuto = performance.now();
        if (d == "true") {
          console.log(ricevuto - now);
          usersAuths.set(user, true);
        } else {
          console.log(ricevuto - now);
          usersAuths.set(user, false);
        }
      });
    };
    return httpRequest(options, handleFetch)();
  };
};
