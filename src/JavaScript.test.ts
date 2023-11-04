import { describe, it, expect } from "bun:test";
import {
  ArrayUtils,
  ClassUtils,
  Global_utils,
  JSON_utils,
  JavaScript,
  MapUtils,
  ObjectUtils,
  Promise_Utils,
  RegExp_utils,
  Statements,
  String_utils,
} from "./JavaScript";

describe("Javscript", () => {
  it("controlla i membri", () => {
    expect(ArrayUtils).toBeTruthy();
    expect(ClassUtils).toBeTruthy();
    expect(Global_utils).toBeTruthy();
    expect(JSON_utils).toBeTruthy();
    expect(JavaScript).toBeTruthy();
    expect(MapUtils).toBeTruthy();
    expect(ObjectUtils).toBeTruthy();
    expect(Promise_Utils).toBeTruthy();
    expect(RegExp_utils).toBeTruthy();
    expect(Statements).toBeTruthy();
    expect(String_utils).toBeTruthy();
  });
  it("controlla Array Utils", () => {
    const {
      ExtendedArray,
      TupleArray,
      changePosition_v1,
      checkArrayElementsConstructor_v1,
      checkArraysContent_v1,
      checkObjectConstructor_v1,
      deepEquals,
      difference,
      ensureArray,
      extractSameElementsFromArray_v1,
      filterArray,
      grabPartToEdit,
      hasArrayObjectElements,
      isArrayEmpty,
      popFirst,
      removeSpaceFromString,
      sliceArray,
      splicer,
      substituteEditedPart,
      subtractArrays_v1,
    } = ArrayUtils;
    expect(ExtendedArray).toBeTruthy();
    expect(TupleArray).toBeTruthy();
    expect(changePosition_v1).toBeTruthy();
    expect(checkArrayElementsConstructor_v1).toBeTruthy();
    expect(checkArraysContent_v1).toBeTruthy();
    expect(checkObjectConstructor_v1).toBeTruthy();
    expect(deepEquals).toBeTruthy();
    expect(difference).toBeTruthy();
    expect(ensureArray).toBeTruthy();
    expect(extractSameElementsFromArray_v1).toBeTruthy();
    expect(filterArray).toBeTruthy();
    expect(grabPartToEdit).toBeTruthy();
    expect(hasArrayObjectElements).toBeTruthy();
    expect(isArrayEmpty).toBeTruthy();
    expect(popFirst).toBeTruthy();
    expect(removeSpaceFromString).toBeTruthy();
    expect(sliceArray).toBeTruthy();
    expect(splicer).toBeTruthy();
    expect(substituteEditedPart).toBeTruthy();
    expect(subtractArrays_v1).toBeTruthy();
  });
});
