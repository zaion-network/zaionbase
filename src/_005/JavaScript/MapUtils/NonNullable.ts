export abstract class NonNullableMap<K, V> extends Map<K, V> {
  get(key: K): NonNullable<V> {
    const value = super.get(key);
    if (value === undefined) {
      throw new Error("");
    }
    return value as NonNullable<V>;
  }
}
export namespace NonNullableMap {}
