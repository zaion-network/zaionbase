import { setTimeout_utils, setInterval_utils } from "./JavaScript/Global.utils";
import { validateJson } from "./JavaScript/JSON.utils";
import { TryCatch } from "./JavaScript/Statements";

import {
  objectkeys,
  encodeQueryParamFromObj,
  getKeyInObjOfObjWithFilterMkr,
  makeArrayFromEnum,
} from "../_005/JavaScript/ObjectUtils";
import { Promise_utils as PU } from "../_005/JavaScript/Promise_Utils";
import {
  generateFilename,
  customTag,
  splitAtChar,
  PathBuilder,
} from "../_005/JavaScript/StringUtils";
import { ZionRegExp } from "../_005/JavaScript/RegExpUtils";
import {
  changePosition_v1,
  checkArrayElementsConstructor_v1,
  checkArraysContent_v1,
  checkObjectConstructor_v1,
  ensureArray,
  extractSameElementsFromArray_v1,
  ExtendedArray,
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
  TupleArray,
  deepEquals,
  difference,
  ArrayUtils as AU,
} from "../_005/JavaScript/ArrayUtils";
import { MapUtils as MU } from "../_005/JavaScript/MapUtils";
import { BasicClass } from "../_005/JavaScript/ClassUtils";
const { stringifyMap } = MU;

declare module "./JavaScript" {
  namespace JavaScript {
    interface Global_utils {}
    namespace Global_utils {
      type it = string;
    }

    interface JSON_utils {}
    namespace JSON_utils {}

    interface Statements {}
    namespace Statements {}

    interface ObjectUtils {}
    namespace ObjectUtils {}

    interface MapUtils {}
    namespace MapUtils {}

    interface ClassUtils {}
    namespace ClassUtils {}

    interface String_utils {}
    namespace String_utils {}

    interface RegExp_utils {}
    namespace RegExp_utils {}

    // export class Global_utils extends GU {}

    // export class JSON_utils extends JU {}
    // export namespace JSON_utils {}

    namespace ArrayBufferUtils {}
    namespace AsyncFunction_utils {}
    namespace AsyncGenerator_utils {}
    namespace AsyncGeneratorFunction_utils {}
    namespace AsyncIterator_utils {}
    namespace DataView_utils {}
    namespace Date_utils {}
    namespace Error_utils {}
    namespace Function_utils {}
    namespace Generator_utils {}
    namespace GeneratorFunction_utils {}
    namespace Math_utils {}
    namespace Proxy_utils {}
    namespace RegExpUtils_utils {}
    namespace Buffer_utils {}

    namespace WebApisUtils {
      namespace ServiceWorker_API {}
      namespace Canvas_API {}
      namespace CookieStore_API {}
      namespace DOM_API {}
      namespace Fetch_API {}
      namespace PointerEvents_API {}
      namespace TouchEvents_API {}
      namespace UIEvents_API {}
      namespace File_API {}
      namespace FileSystem_API {}
      namespace HTMLDOM_API {}
      namespace HTMLDragNDrop_API {}
      namespace HTMLSanitizer_API {}
      namespace History_API {}
      namespace IntersectionObserver_API {}
      namespace Keyboard_API {}
      namespace GeoLocation_API {}
      namespace URL_API {}
      namespace WebCrypto_API {}
      namespace Websockets_API {}
      namespace WebStorage_API {}
      namespace WebWorker_API {}
    }
  }
}
export namespace JavaScript {
  export import ArrayUtils = AU;
  export import Promise_Utils = PU;
}

// JavaScript.Global_utils.setInterval_utils.Interval;
export const Global_utils: JavaScript.Global_utils = {
  setTimeout_utils,
  setInterval_utils,
};

export const JSON_utils: JavaScript.JSON_utils = { validateJson };
export const Statements: JavaScript.Statements = { TryCatch };
export const ObjectUtils: JavaScript.ObjectUtils = {
  encodeQueryParamFromObj,
  getKeyInObjOfObjWithFilterMkr,
  makeArrayFromEnum,
  objectkeys,
};
export const Promise_Utils: JavaScript.Promise_Utils = PU;
export const String_utils: JavaScript.String_utils = {
  generateFilename,
  customTag,
  splitAtChar,
  PathBuilder,
};
export const RegExp_utils: JavaScript.RegExp_utils = {
  ZionRegExp,
};
export const ArrayUtils = {
  changePosition_v1,
  checkArrayElementsConstructor_v1,
  checkArraysContent_v1,
  checkObjectConstructor_v1,
  ensureArray,
  ExtendedArray,
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
  TupleArray,
  deepEquals,
  difference,
};
export const MapUtils: JavaScript.MapUtils = {
  stringifyMap,
};
export const ClassUtils: JavaScript.ClassUtils = {
  BasicClass,
};
