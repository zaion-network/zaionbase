export type Singola<X> = [X];

export type Coppia<K, V> = [K, V];

export type Tripla<X, Y, Z> = [X, Y, Z];

export type Quadrupla<N, S, W, O> = [N, S, W, O];

export type Quintupla<A, C, D, E, G> = [A, C, D, E, G];

export type Sestupla<A, C, D, blues, E, G> = [A, C, D, blues, E, G];

export type Settupla<A, B, C, D, E, F, G> = [A, B, C, D, E, F, G];

export namespace Pair {
  export type KeyValue = readonly [PropertyKey, any];
  export type ReadOnlyKeyValue<K extends PropertyKey> = readonly [K, any];
  export type isPair<P> = P extends Coppia<any, any>[] ? true : false;
}
