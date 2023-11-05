// import https from "https";
import { httpRequest as h } from "./Https/httpRequest";

declare module "./Https" {
  namespace Https {
    export import httpRequest = h;
  }
}
export class Https {}
export namespace Https {}
Https.httpRequest = h;
