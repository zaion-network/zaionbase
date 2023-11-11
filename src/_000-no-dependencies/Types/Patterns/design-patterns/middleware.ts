type Middleware = (context: any, next: () => Promise<any>) => Promise<any>;

function normalMiddleware() {
  class MiddlewareManager {
    private middleware: Middleware[] = [];

    use(middleware: Middleware) {
      this.middleware.push(middleware);
    }

    async run(context: any) {
      let index = -1;
      const next = async () => {
        index++;
        if (index >= this.middleware.length) return;
        const middleware = this.middleware[index];
        await middleware(context, next);
      };
      await next();
    }
  }

  // Uso del MiddlewareManager
  const manager = new MiddlewareManager();

  manager.use(async (context, next) => {
    console.log("Middleware 1 Start");
    await next();
    console.log("Middleware 1 End");
  });

  manager.use(async (context, next) => {
    console.log("Middleware 2 Start");
    await next();
    console.log("Middleware 2 End");
  });

  manager.run({});
}

import * as http from "http";

function httpMiddleWare() {
  type Middleware = (
    req: http.IncomingMessage,
    res: http.ServerResponse,
    next: () => Promise<any>
  ) => Promise<any>;

  class MiddlewareManager {
    private middleware: Middleware[] = [];

    use(middleware: Middleware) {
      this.middleware.push(middleware);
    }

    async run(req: http.IncomingMessage, res: http.ServerResponse) {
      let index = -1;
      const next = async () => {
        index++;
        if (index >= this.middleware.length) return;
        const middleware = this.middleware[index];
        await middleware(req, res, next);
      };
      await next();
    }
  }

  // Uso del MiddlewareManager
  const manager = new MiddlewareManager();

  manager.use(async (req, res, next) => {
    console.log("Middleware 1 Start");
    await next();
    console.log("Middleware 1 End");
  });

  manager.use(async (req, res, next) => {
    console.log("Middleware 2 Start");
    await next();
    console.log("Middleware 2 End");
  });

  const server = http.createServer((req, res) => {
    manager.run(req as http.IncomingMessage, res as http.ServerResponse);
  });

  server.listen(3000, () => {
    console.log("Server listening on port 3000");
  });
}
import * as url from "url";

function httpMiddleWareWEndpoints() {
  type Middleware = (
    req: http.IncomingMessage,
    res: http.ServerResponse,
    next: () => Promise<any>
  ) => Promise<any>;

  class MiddlewareManager {
    private middleware: Record<string, Middleware[]> = {};

    use(endpoint: string, middleware: Middleware) {
      if (!this.middleware[endpoint]) {
        this.middleware[endpoint] = [];
      }
      this.middleware[endpoint].push(middleware);
    }

    async run(req: http.IncomingMessage, res: http.ServerResponse) {
      const endpoint = url.parse(req.url!).pathname!;
      const middlewareStack = this.middleware[endpoint] || [];
      let index = -1;
      const next = async () => {
        index++;
        if (index >= middlewareStack.length) return;
        const middleware = middlewareStack[index];
        await middleware(req, res, next);
      };
      await next();
    }
  }

  // Uso del MiddlewareManager
  const manager = new MiddlewareManager();

  manager.use("/endpoint1", async (req, res, next) => {
    console.log("Middleware 1 Start");
    await next();
    console.log("Middleware 1 End");
    res.end();
  });

  manager.use("/endpoint2", async (req, res, next) => {
    console.log("Middleware 2 Start");
    await next();
    console.log("Middleware 2 End");
  });

  const server = http.createServer((req, res) => {
    manager.run(req as http.IncomingMessage, res as http.ServerResponse);
  });

  server.listen(3000, () => {
    console.log("Server listening on port 3000");
  });
}
httpMiddleWareWEndpoints();
