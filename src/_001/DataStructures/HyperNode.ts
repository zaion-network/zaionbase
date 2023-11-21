import { Mixins } from "../../_000-no-dependencies/Mixins";
import { Mix } from "../../_000-no-dependencies/Mixins/Mix";

export interface HyperNode<T> {
  type: string;
}

export type HyperNodeCtor = new <T>(type: string, value: T) => HyperNode<T>;

export class HyperNode<T> {
  constructor(public type: string, public value: T) {}
}

type foo<A extends any[]> = (...args: A) => any;
type inferParams<T> = T extends foo<infer A> ? A : never;
type fooed = <T>(a: string, b: T) => "string";
type res = inferParams<fooed>[1];
