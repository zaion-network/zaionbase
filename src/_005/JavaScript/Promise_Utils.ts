import { wait as w } from "./Promise_Utils/utils/wait";
declare module "./Promise_Utils" {
  namespace wait {
    interface wait {
      (amount: number): Promise<unknown>;
    }
  }
}

export class Promise_utils {}
export namespace Promise_utils {
  export import wait = w;
}
