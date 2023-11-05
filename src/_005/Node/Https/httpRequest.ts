import https from "https";
import http from "http";

class ResponseValue {
  response = "";
  addResponse(chunk: any) {
    this.response += chunk;
    return this;
  }
  getResponse() {
    return this.response;
  }
}
export interface onErrorConfig {
  (reject: (reason?: any) => void): (err: Error) => void;
}
export interface onDataConfig {
  (response?: ResponseValue): (chunk: any) => void;
}
export interface onEndConfig {
  <T>(
    response: ResponseValue,
    resolve: (value: T | PromiseLike<T>) => void
  ): () => void;
}

export interface httpRequest {
  <T>(options: string | https.RequestOptions | URL): (
    payload?: string
  ) => Promise<T>;
}
export interface RequestCallback {
  (res: https.IncomingMessage): void;
}
export function httpRequest<T>(
  options: string | https.RequestOptions | URL,
  cbs?: {
    error: (reject: (reason?: any) => void) => (err: Error) => void;
    defaultRequestCb: typeof httpRequest.defaultRequestCb;
  }
): (payload?: string) => Promise<T> {
  if (!cbs) {
    cbs = {
      error: httpRequest.defaultOnErrorConfig,
      defaultRequestCb: httpRequest.defaultRequestCb,
    };
  }
  return function (payload?: string) {
    return new Promise((resolve, reject) => {
      const cb = cbs!.defaultRequestCb(resolve);
      const req = http.request(options, cb);
      req.on("error", cbs!.error(reject));
      if (payload) req.write(payload);
      req.end();
    });
  };
}
export namespace httpRequest {
  export enum requestTypes {
    get = "GET",
    post = "POST",
    delete = "DELETE",
  }
  export function defaultRequestCb<T>(
    resolve: (value: T | PromiseLike<T>) => void,
    onDataConfig?: (response?: ResponseValue) => (chunk: any) => void,
    onEndConfig?: <T>(
      response: ResponseValue,
      resolve: (value: T | PromiseLike<T>) => void
    ) => () => void,
    response?: ResponseValue
  ) {
    return function (res: https.IncomingMessage) {
      if (!response) response = new ResponseValue();
      if (!onDataConfig) onDataConfig = defaultOnDataConfig;
      if (!onEndConfig) onEndConfig = defaultOnEndConfig;

      res.on("data", onDataConfig(response));
      res.on("end", onEndConfig(response, resolve));
    };
  }
  export const defaultOnErrorConfig: onErrorConfig = reject => error => {
    reject(error);
  };
  export const defaultOnDataConfig: onDataConfig = response => chunk => {
    response!.addResponse(chunk);
  };
  export const defaultOnEndConfig: onEndConfig = (response, resolve) => () => {
    try {
      const object = JSON.parse(response.getResponse());
      resolve(object);
    } catch (error) {
      // @ts-expect-error
      resolve(response!.getResponse());
    }
  };
}
