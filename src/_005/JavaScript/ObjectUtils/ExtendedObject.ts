export class ExtendedObject<V extends { [k: string]: any }> {
  constructor(value: V) {
    Object.keys(value).forEach(k => {
      // non rompere i cogl....
      // @ts-expect-error
      this[k] = value[k];
    });
    return this as unknown as V;
  }
}
