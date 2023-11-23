import { action, actionAndArgs, args } from "../Conditioner.type";

export const makeActionAndArgs: makeActionAndArgs.makeActionAndArgs = (
  action,
  args
) => {
  return [action, args];
};

export namespace makeActionAndArgs {
  export interface makeActionAndArgs {
    (action: action, args: args): actionAndArgs;
  }
}
