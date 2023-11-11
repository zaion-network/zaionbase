import { Mixins } from "../../Mixins";

type value = string | { [k: string]: string | number };
type relationType = string;
type nodeId = string;
type uniqueId = string;
type cardinality =
  | "one-to-one"
  | "one-to-many"
  | "many-to-one"
  | "many-to-many";

interface Node<V extends value> {
  type: string;
  id: string;
  value: V;
}
class Node<V extends value> {}

interface Relation {
  from: nodeId;
  to?: nodeId;
  weight?: number;
  directed?: boolean;
  cyclic?: boolean;
  cardinality?: cardinality;
}

type MapRelation = Map<nodeId, nodeId>;
type ArrayRelation = Array<[nodeId, nodeId]>;
type ObjectRelation = { [k: uniqueId]: nodeId };

interface AggregatedRelations<R> {
  relations: R;
}

interface AggregatedMapRelationNode
  extends AggregatedRelations<Map<relationType, MapRelation>> {}

interface AggregatedArrayRelationNode {
  relations: Array<[relationType, ArrayRelation]>;
}

interface AggregatedObjectRelationNode {
  relations: { [k: relationType]: ObjectRelation };
}

interface MultipleMapsRelationsNode {
  relationA: MapRelation;
  relationB: MapRelation;
}

interface MultipleArraysRelationsNode {
  relationA: ArrayRelation[];
  relationB: ArrayRelation[];
}

interface MultipleObjectsRelationsNode {
  relationA: ObjectRelation;
  relationB: ObjectRelation;
}
