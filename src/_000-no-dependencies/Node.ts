import {
  checkFileExists,
  checkAndRemove,
  ReaddirSync,
  StatsSync,
} from "../_005/Node/FileSystem";

import {} from "../_005/Node/ChildProcess";
import { ExecSync } from "../_005/Node/ChildProcess/ExecSync";

import { hmacIt, hashIt } from "../_005/Node/Crypto";
import {
  ifUndefinedGeneric,
  ifUndefined,
  buildPaths,
  buildPathTuple,
  joinPaths,
} from "../_005/Node/Path";
import {
  // httpRequest,
  Https as HTTPS,
} from "../_005/Node/Https";

declare module "./Node" {
  namespace Node {
    interface FileSystem {}
    namespace FileSystem {}

    interface ChildProcess {}
    namespace ChildProcess {}

    interface Crypto {}
    namespace Crypto {}

    interface Path {}
    namespace Path {}

    interface Https {}
    namespace Https {}
  }
}

export const FileSystem: Node.FileSystem = {
  checkFileExists,
  checkAndRemove,
  ReaddirSync,
  StatsSync,
};
export const ChildProcess: Node.ChildProcess = {
  ExecSync,
};
export const Crypto: Node.Crypto = { hmacIt, hashIt };
export const Path: Node.Path = {
  ifUndefinedGeneric,
  ifUndefined,
  buildPaths,
  buildPathTuple,
  joinPaths,
};
export const Https: Node.Https = HTTPS;
