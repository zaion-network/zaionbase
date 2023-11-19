import { SingleBuilder } from "./SingleBuilder";

const some = new SingleBuilder();
const setSome = some.setA(10).doit(a => {
  console.log(a);
});
const a = setSome.a;

// Typescript da errore ma js funziona
try {
  // @ts-expect-error
  some.setA("funziona").doit(a => {
    console.log(a);
  });
} catch (error: unknown) {
  if (error instanceof Error) console.log(error.message);
}
