import { describe, it, expect } from "bun:test";
import { NewContext } from "./Context";
// import { DeepUtilities } from "../../DeepUtilities";

describe("Context", () => {
  it("controlla esistenza membri", () => {
    expect(NewContext).toBeTruthy();
    expect(NewContext.State).toBeTruthy();
  });
  it.todo("test 1", () => {
    interface Dathing {
      name: string;
      loaded: boolean;
    }

    class DathingState extends NewContext.State<Dathing> {}
  });
  it.todo("test usando anche mixins", () => {
    // @ts-expect-error
    type ChangeableValue<V> = DeepUtilities.Mixins.Mixin.Mixin<
      new () => NewContext.State<V>,
      new () => {
        changeValue(state: NewContext.State<V>): void;
      }
    >;
    // @ts-expect-error
    const ChangeableValue: ChangeableValue<Dathing> = ctor => {
      return class Extended extends ctor {
        // @ts-expect-error
        changeValue(state: NewContext.State<Dathing>) {
          this.value = state.value;
          const ctx = new Extended();
          ctx.value = state.value;
          return ctx;
        }
      };
    };
    // @ts-expect-error
    type ChangeableState<V> = DeepUtilities.Mixins.Mixin.Mixin<
      new () => { state: { value: V }; value: V },
      new () => {
        changeState(state: { value: V }): void;
      }
    >;
    // @ts-expect-error
    const ChangeableState: ChangeableState<Dathing> = ctor => {
      return class Extended extends ctor {
        // @ts-expect-error
        changeState(state: { value: Dathing }) {
          this.state = state;
          this.value = state.value;
        }
      };
    };
    // @ts-expect-error
    class NewClass extends new DeepUtilities.Mixins.MixEvo(DathingState).with(
      ChangeableValue,
      ChangeableState
    ) {}
    // @ts-expect-error
    const newclass = new NewClass({ name: "my name", loaded: false });
    console.log(newclass);
    // @ts-expect-error
    newclass.changeValue({ value: { name: "ola", loaded: true } });
    console.log(newclass);
    // @ts-expect-error
    newclass.changeState({ value: { name: "minchia", loaded: false } });
    console.log(newclass);
  });
});
