import { Mix } from "../../Mixins/Mix";

type BaseCtor = new <T>() => Base<T>;
interface Base<T> {
  id: T;
}
class Base<T> {}

type BaseMixin<T, B extends new () => any> = Mix.mixin<T, InstanceType<B>, B>;

type This<S> = Set & Base<S>;

interface Set {
  set<S>(this: Set, value: S): This<S>;
}

type Settable = BaseMixin<Set, BaseCtor>;

const Settable: Settable = ctor => {
  return class<T extends string> extends ctor<T> {
    set<S>(this: This<S>, value: S) {
      this.id = value;
      return this as This<S>;
    }
  };
};
export class Mixed extends new Mix(Base).with(Settable) {}

interface Dumb {
  dumb: true;
}

type Dumbable = BaseMixin<Dumb, BaseCtor>;

const Dumbable: Dumbable = ctor => {
  return class<T extends string> extends ctor<T> {
    dumb: true = true;
  };
};

const arr: [Settable, Dumbable] = [Settable, Dumbable];

export class Mixed2 extends new Mix(Base<{ name: string }>).with(arr) {}
