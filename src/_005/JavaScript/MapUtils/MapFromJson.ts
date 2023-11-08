import { MethodWithStrategies } from "../../../_003/MethodWithStrategy";
import { reduce as r } from "./MapFromJson/reduce";
import { parse as p } from "./MapFromJson/parse";

declare module "./MapFromJson" {
  interface MapFromJson
    extends MethodWithStrategies<
      typeof MapFromJson.parseMapFromJsonStrategies,
      MapFromJson.strategies
    > {}

  namespace MapFromJson {
    type strategiesKeys = keyof typeof MapFromJson.parseMapFromJsonStrategies;

    interface strategies {
      parse: parseMapFromJson;
      reduce: parseMapFromJson;
    }

    interface parseMapFromJson {
      (json: string): Map<unknown, unknown>;
    }
    export import reduce = r;
    export import parse = p;
  }
}

export class MapFromJson<
  S extends MapFromJson.strategiesKeys = MapFromJson.strategiesKeys
> extends MethodWithStrategies<
  typeof MapFromJson.parseMapFromJsonStrategies,
  MapFromJson.strategies
> {
  constructor(selectedStrategy: S) {
    super(
      MapFromJson.parseMapFromJsonStrategies,
      { parse: MapFromJson.parse, reduce: MapFromJson.reduce },
      selectedStrategy
    );
  }
}

export namespace MapFromJson {
  export enum parseMapFromJsonStrategies {
    reduce = "reduce",
    parse = "parse",
  }

  export const parseMapFromJson: parseMapFromJson = new MapFromJson("parse")
    .execute;
}
MapFromJson.reduce = r;
MapFromJson.parse = p;
