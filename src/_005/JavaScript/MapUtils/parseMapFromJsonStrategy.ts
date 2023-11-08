import { MapFromJson as Mfj } from "./MapFromJson";

declare module "./parseMapFromJsonStrategy" {
  namespace parseMapFromJsonStrategy {}
}

export namespace parseMapFromJsonStrategy {
  export const parseMapFromJson = Mfj.parseMapFromJson;
}
