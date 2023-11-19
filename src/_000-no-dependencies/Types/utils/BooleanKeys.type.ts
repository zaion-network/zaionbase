export type BooleanKeys<
  Keys extends string,
  makeRequired extends boolean = false
> = makeRequired extends false
  ? {
      [key in Keys]?: boolean;
    }
  : {
      [key in Keys]: boolean;
    };
