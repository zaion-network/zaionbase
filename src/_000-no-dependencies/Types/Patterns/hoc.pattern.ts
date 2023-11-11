/// HOC

function foo(amount: number) {
  return function (value: number) {
    return value * amount;
  };
}
const perFive = foo(5);
console.log(perFive(10));
console.log(perFive(13));
console.log(perFive(4));

/// CLASS

class Config<T> {
  static #instance: Config<any>;
  #amount: T;
  get amount() {
    return this.#amount;
  }
  constructor(amount: T) {
    this.#amount = amount;
    if (!Config.#instance) Config.#instance = this;
    return Config.#instance;
  }
  getInstance(init: T) {
    if (!Config.#instance) Config.#instance = new Config(init);
    return Config.#instance;
  }
}

class Foo {
  constructor(public config: Config<number>) {}
  multiply = (value: number) => {
    return value * this.config.amount;
  };
}

const config = new Config(5);
const config2 = new Config(10);

const perFiveBis = new Foo(config).multiply;

console.log(perFiveBis(10));
console.log(perFiveBis(13));
console.log(perFiveBis(4));
