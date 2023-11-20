import { describe, it, expect } from "bun:test";
import type { Map as M, Array as A, Object } from "./Mixer.type";
// TUPLE => OBJ

describe(`Mixer types`, () => {
  // ____________________________ OBJ => MAP
  it("crea una classe MyMap che estende a partire da un oggetto", () => {
    type keyValueTupleArr = [["A", string], ["B", number]];
    // pre costruire un oggetto è meglio partire da una tupla
    // il comportamento di js non è prevedibile, creando una
    // array di `keyValueTuple` di mitiga il comportamento aleatorio
    interface Obj extends A.toObj<keyValueTupleArr> {}

    const MyMap: Object.Ctors.TypedMapCtor = class MyMap<T>
      extends Map
      implements Object.toMap2<T>
    {
      set<K extends keyof T>(key: K, value: T[K]): this {
        super.set(key, value);
        return this;
      }
      get<K extends keyof T>(key: K): T[K] {
        return super.get(key);
      }
    };
    const map3 = new MyMap<Obj>();
    map3.set("A", "mamma");
    map3.set("B", 10);
    const B = map3.get("B");
  });
  it("crea una classe non dinamica", () => {
    type keyValueTupleArr = [["A", string], ["B", number]];
    interface Obj extends A.toObj<keyValueTupleArr> {}
    const MyMap: Object.Ctors.TypedMapCtor = class MyMap<T>
      extends Map
      implements Object.toMap2<T>
    {
      set<K extends keyof T>(key: K, value: T[K]): this {
        super.set(key, value);
        return this;
      }
      get<K extends keyof T>(key: K): T[K] {
        return super.get(key);
      }
    };
    const MyMap2: Object.Ctors.FromObjToMapCtor<Obj> = MyMap;
    const map = new MyMap2();
    map.set("A", "stringa");
  });
  it("crea un map partendo da un oggetto", () => {
    type keyValueTupleArr = [["A", string], ["B", number]];
    interface Obj extends A.toObj<keyValueTupleArr> {}
    const map3: Object.toMap<Obj> = new Map();
    map3.set("A", "mamma");
    map3.set("B", 10);
    function typeerror() {
      // @ts-expect-error
      map3.set("B", "10");
    }
    const B = map3.get("B");
    expect(B).toEqual(10);
  });
  // ____________________________ OBJ => TUPLEARR
  it("crea un tupleArray a partire da un oggetto", () => {
    type keyValueTupleArr = [["A", string], ["B", number]];
    interface Obj extends A.toObj<keyValueTupleArr> {}
    type test = Object.toArr<Obj>;
    const arr: test = [
      ["A", "asd"],
      ["B", 10],
    ];
  });
  // ____________________________ TUPLEARR => MAP
  it("creare un map partendo da un type keyValueTupleMap", () => {
    type keyValueTupleArr = [["B", boolean], ["D", number]];
    const map4: A.toMap<keyValueTupleArr> = new Map();
    map4.set("B", true);
    map4.set("D", 100);
    const got4 = map4.get("D");
  });
  // ____________________________ TUPLEARR => OBJ
  it("crea un oggetto a partire da un keyValueTupleMap", () => {
    type keyValueTupleArr = [["B", boolean], ["D", number]];
    type obj = A.toObj<keyValueTupleArr>;
    const obj: obj = {
      B: true,
      D: 199,
    };
  });
  it("crea una classe a partire da unta tupleArr", () => {
    type keyValueTupleArr = [["B", boolean], ["D", number]];
    interface Obj extends A.toObj<keyValueTupleArr> {}
    class Obj {}
    const ob = new Obj();
    ob.D;
    ob.B;
  });
  // ____________________________ MAP => OBJ
  it("crea un oggetto a partire da un map", () => {
    type keyValueTupleArr = [["B", boolean], ["D", number]];
    // anche per creare dei map bisogna partire da una tuplearr
    type map = A.toMap<keyValueTupleArr>;
    type obj = M.toObj<map>;
    const obj: obj = {
      B: true,
      D: 22,
    };
  });
  // ____________________________ MAP => TUPLEARR
  it("crea un keyValueTupleArr a partire da un map", () => {
    type keyValueTupleArr = [["B", boolean], ["D", number]];
    type map = A.toMap<keyValueTupleArr>;
    type tuple = M.toArr<map>;
    const tuple: tuple = [
      ["B", true],
      ["D", 1000],
    ];
  });
});
