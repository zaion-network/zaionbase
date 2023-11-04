import { describe, it, expect } from "bun:test";
import { Types } from "./Types";

describe(`${Types}`, () => {
  //
  it.todo("boh, siccome è un file ti types", () => {
    interface Person {
      firstName: string;
      lastName: string;
      dob: Date;
      hasCats: false;
    }

    type keys = Types.TupleUnion<keyof Person>;

    interface IcalculateBitsForNumber {
      (x: number): number;
    }

    const calculateBitsForNumber: IcalculateBitsForNumber = function (
      x: number
    ): number {
      return Math.ceil(Math.log2(x + 1));
    };

    abstract class CalculationStrategy extends Types.Class.Strategy {
      abstract method(x: unknown): number;
      abstract name: string;
    }

    class NumberCalculationStrategy implements CalculationStrategy {
      method = calculateBitsForNumber;
      name = "number-calculation-strategy";
    }

    interface IcalculateBitsForString {
      (x: string): number;
    }
    const calculateBitsForString: IcalculateBitsForString = function (
      x: string
    ): number {
      return x.length * 8;
    };

    class StringCalculationStrategy implements CalculationStrategy {
      method = calculateBitsForString;
      name = "string-calculation-strategy";
    }

    abstract class BitsCalculator {
      static NumberCalculationStrategy = NumberCalculationStrategy;
      static StringCalculationStrategy = StringCalculationStrategy;
      private strategy: CalculationStrategy;
      constructor(strategy?: CalculationStrategy) {
        if (!strategy)
          this.strategy = new BitsCalculator.NumberCalculationStrategy();
        else this.strategy = strategy;
      }
      calculateBits(x: any): number {
        return this.strategy.method(x);
      }
    }
  });
});
