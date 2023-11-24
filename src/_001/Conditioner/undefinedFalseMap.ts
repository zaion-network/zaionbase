export const undefinedFalseMap: undefinedFalseMap.undefinedFalseMap = () => {
  return new Map().set(undefined, false);
};
export namespace undefinedFalseMap {
  export interface undefinedFalseMap {
    (): Map<any, any>;
  }
}
