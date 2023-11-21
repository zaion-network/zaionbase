import { Mix } from "../../Mixins/Mix";

/**
 * Con questo pattern si possono creare dei mixin che possano andare
 * su qualsiasi costruttore
 */

type BaseCtor = new (...args: any[]) => any;
class Base1 {
  name: string = "ciao";
}
class Base2 {
  surname: string = "ciao";
}
interface Generic {
  generic: true;
}
type Genericable = Mix.BaseMixin<Generic>;
const Genericable: Genericable = ctor => {
  return class extends ctor {
    generic: true = true;
  };
};

interface A {
  a: true;
}
type Aable = Mix.BaseMixin<A>;
const Aable: Aable = ctor => {
  return class extends ctor implements A {
    a: true = true;
  };
};

interface B {
  b: true;
}
type Bable = Mix.BaseMixin<B>;
const Bable: Bable = ctor =>
  class extends ctor implements B {
    b: true = true;
  };

const arr: [Genericable, Aable, Bable] = [Genericable, Aable, Bable];
export class Aextended extends new Mix(Base1).with(arr) {}
export class Bextended extends new Mix(Base2).with(Genericable) {}
