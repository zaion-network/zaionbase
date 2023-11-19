export namespace MyArray {
  export interface IArray_v1 {
    name: string;
  }

  export interface Array_v1 {
    name: string;
  }

  export class Array_v1 implements IArray_v1 {
    constructor(name: string) {
      this.name = name;
    }
  }

  export type Array_v1Ctor = {
    new (name: string): Array_v1;
  };

  export namespace lib {
    export namespace find {
      export interface find1<T, L extends object, K> {
        key: string;
        constructor: T;
        parameter: string;
        parsed: L;
        instance: K;
        callback: string;
      }

      export function find_v1<T, N, L, K>(
        key: string,
        constructor: T,
        parameter: string,
        parsed: L,
        instance: K,
        callback: string
      ): void;
      export function find_v1<T, N, L, K>(
        key: string,
        constructor: T,
        parameter: string,
        parsed: L,
        instance: K,
        callback: string,
        paramToParse: string
      ): void;
      export function find_v1<T, N, L, K>(
        key: string,
        constructor: T,
        parameter: string,
        parsed: L,
        instance: K,
        callback: string,
        paramToParse?: string
      ): void {
        // @ts-expect-error
        if (parsed[parameter])
          // @ts-expect-error
          parsed[parameter].map(parsedParam => {
            // @ts-expect-error
            let res: N | undefined = constructor[parameter].find(
              // @ts-expect-error
              item => item[key] === parsedParam
            );
            // @ts-expect-error
            if (res) instance[callback](res);
          });
        if (paramToParse !== undefined) {
          // @ts-expect-error
          let res: N | undefined = constructor[parameter].find(
            // @ts-expect-error
            item => item[key] === parsed[paramToParse]
          );
          // @ts-expect-error
          if (res) instance[callback](res);
        }
      }
    }
    export namespace add {
      export function add_v1Path(
        this: string[],
        fileInFolder: { name: string; path: string }
      ) {
        this.push(fileInFolder.path);
      }

      export type Parameter = string;
      export type Key = string;

      export function add_v1<T>(
        obj1: unknown,
        key: string,
        obj: unknown,
        parameter: string
      ): T;
      export function add_v1<T>(
        obj1: T,
        key: string,
        obj: unknown,
        parameter: string,
        map: boolean
      ): T;
      export function add_v1<T>(
        obj1: T,
        key: string,
        obj: unknown,
        parameter: string,
        map: boolean,
        path: string[]
      ): T;
      export function add_v1<T>(
        obj1: T,
        key: string,
        obj: unknown,
        parameter: string,
        map?: boolean,
        path?: string[]
      ): T {
        if (!map && !path) {
          // TODO solito errore ts index
          //@ts-expect-error
          obj1[key] = obj[parameter];
        } else if (!map) {
          // TODO solito errore ts index
          //@ts-expect-error
          if (obj[parameter]) obj1[key] = obj[path[0]][path[1]];
        }
        return obj1;
      }
    }
  }
}
