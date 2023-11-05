// import { Utilities } from "./using DeeperUtilities/using DeepUtilites/using LowUtilities/Utilities";
import { DataStructures } from "./DataStructures";
import { tester } from "./utils/tester";

const Tuple = DataStructures.Tuple;
const WrongTuple = DataStructures.WrongTuple;

const test1 = () => {
  const aaaa = new WrongTuple([0]).add("sic").add(() => {});
  // const aaaa = { arr: [[0], "sic", () => {}] } as const;
  let o1 = aaaa.arr[0];
  let o2 = aaaa.arr[1];
  let o3 = aaaa.arr[2];
  console.log(aaaa);
  type oo<T extends any[], U> = DataStructures.WrongTuple.AddToTuple<T, U>;
};

tester(() => {
  const test2 = () => {
    const aaaa = new Tuple([0]).push("sic").push(() => {
      console.log("ci sono");
    });
    // const aaaa = { arr: [[0], "sic", () => {}] } as const;
    let o1 = aaaa.arr[0];
    let o2 = aaaa.arr[1];
    let o3 = aaaa.arr[2];
    console.log(o1);
    o3();
  };
  test2();
})(true);

tester(() => {
  const tuple = new Tuple((n: number) => n.toString()).push((a: string) => [a]);
  const doo = <T extends (typeof tuple)["arr"]>(t: T) => {
    let accumulator: any = 2;
    for (let i = 0; i < t.length; i++) {
      if (i === 0) {
        accumulator = t[i](accumulator);
      }
      if (i === 1) {
        accumulator = t[i](accumulator);
      }
    }
    return accumulator;
  };
  console.log(doo(tuple.arr));
})(false);

// example 1 for ProcessingNoiz_v1
tester(() => {
  //
  // @ts-expect-error
  const stringProc: processor<string> = mutator => b => mutator + b;

  // @ts-expect-error
  let string = new ProcessingNoiz(stringProc);

  // @ts-expect-error
  let vulc: plugin<string>, girl: plugin<string>, bride: plugin<string>;

  vulc = string.makePlugin("🌋");
  girl = string.makePlugin("🧑");
  bride = string.makePlugin("🧖");

  const res2 = string.use(vulc).use(girl).use(bride).process("🎅");
  console.log(res2);
})(false);

// example 2 for ProcessingNoiz_v1
tester(() => {
  //
  type aType = { name: string };
  // @ts-expect-error
  const blobProc: processor<aType> = mutator => a => {
    a.name = a.name + mutator.name;
    return a;
  };

  // @ts-expect-error
  let blob = new ProcessingNoiz(blobProc);

  // @ts-expect-error
  let avulc: plugin<aType>, agirl: plugin<aType>, scratched: plugin<aType>;

  // @ts-expect-error
  const simpleProcessor: functionality<aType> = (a: aType) => {
    return { name: a.name + "auch" };
  };

  avulc = blob.makePlugin({ name: "🌋" });
  agirl = blob.makePlugin({ name: "🧑" });
  scratched = blob.makePlugin(simpleProcessor);

  const res3 = blob
    .use(avulc)
    .use(agirl)
    .use(scratched)
    .process({ name: "santa-" });
  console.log(res3);
})(false);
