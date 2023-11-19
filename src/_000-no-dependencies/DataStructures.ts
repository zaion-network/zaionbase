// import type {
//   addNodeType,
//   findAdjacentNodesType,
//   isConnectedType,
// } from "./Types/DataStructures/Graph/IMatrixGraph";
// import { INode } from "./Types/DataStructures/Graph/INode";
import { Tuple as T } from "./DataStructures/Tuple";
import { Graph as G } from "./DataStructures/Graph";
import { WrongTuple as WT } from "./DataStructures/WrongTuple";
import { MyArray as MA } from "./DataStructures/MyArray";
declare module "./DataStructures" {
  export namespace DataStructures {
    export import Tuple = T;
    export import Graph = G;
    export import WrongTuple = WT;
    export import MyArray = MA;
  }
}

export class DataStructures {}
export namespace DataStructures {}
DataStructures.Tuple = T;
DataStructures.Graph = G;
DataStructures.WrongTuple = WT;
DataStructures.MyArray = MA;
