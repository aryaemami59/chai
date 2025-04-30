/*!
 * chai
 * Copyright(c) 2011 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

// Dependencies that are used for multiple exports are required here only once
import * as checkError from 'check-error';
import type {ChaiUtils} from '../../types.js';

// test utility
import {test} from './test.js';

// type utility
import {type} from './type-detect.js';
// export {type};

// expectTypes utility
import {expectTypes} from './expectTypes.js';

// message utility
import {getMessage} from './getMessage.js';

// actual utility
import {getActual} from './getActual.js';

// Inspect util
import {inspect} from './inspect.js';

// Object Display util
import {objDisplay} from './objDisplay.js';

// Flag utility
import {flag} from './flag.js';

// Flag transferring utility
import {transferFlags} from './transferFlags.js';

// Deep equal utility
import {default as eql} from 'deep-eql';

// Deep path info
import {getPathInfo, hasProperty} from 'pathval';

/**
 * Function name
 *
 * @param {Function} fn
 * @returns {string}
 */
function getName(fn: (...args: any[]) => any): string {
  return fn.name;
}

// add Property
import {addProperty} from './addProperty.js';

// add Method
import {addMethod} from './addMethod.js';

// overwrite Property
import {overwriteProperty} from './overwriteProperty.js';

// overwrite Method
import {overwriteMethod} from './overwriteMethod.js';

// Add a chainable method
import {addChainableMethod} from './addChainableMethod.js';

// Overwrite chainable method
import {overwriteChainableMethod} from './overwriteChainableMethod.js';

// Compare by inspect method
import {compareByInspect} from './compareByInspect.js';

// Get own enumerable property symbols method
import {getOwnEnumerablePropertySymbols} from './getOwnEnumerablePropertySymbols.js';

// Get own enumerable properties method
import {getOwnEnumerableProperties} from './getOwnEnumerableProperties.js';

// Checks error against a given set of criteria
// export {checkError};

// Proxify util
import {proxify} from './proxify.js';

// addLengthGuard util
import {addLengthGuard} from './addLengthGuard.js';

// isProxyEnabled helper
import {isProxyEnabled} from './isProxyEnabled.js';

// isNaN method
import {isNaN} from './isNaN.js';

// getOperator method
import {getOperator} from './getOperator.js';

/**
 * Determines if an object is a `RegExp`
 * This is used since `instanceof` will not work in virtual contexts
 *
 * @param {*} obj Object to test
 * @returns {boolean}
 */
function isRegExp(obj: any): boolean {
  return Object.prototype.toString.call(obj) === '[object RegExp]';
}

/**
 * Determines if an object is numeric or not
 *
 * @param {unknown} obj Object to test
 * @returns {boolean}
 */
function isNumeric(obj: unknown): boolean {
  return ['Number', 'BigInt'].includes(type(obj));
}

export const util = {
  addChainableMethod,
  addLengthGuard,
  addMethod,
  addProperty,
  compareByInspect,
  expectTypes,
  flag,
  getActual,
  getMessage,
  getName,
  getOwnEnumerableProperties,
  getOwnEnumerablePropertySymbols,
  getPathInfo,
  hasProperty,
  inspect,
  isProxyEnabled,
  objDisplay,
  overwriteChainableMethod,
  overwriteMethod,
  overwriteProperty,
  proxify,
  test,
  eql,
  isNaN,
  isRegExp,
  isNumeric,
  getOperator,
  checkError,
  transferFlags
} satisfies ChaiUtils;

export {
  addChainableMethod,
  addLengthGuard,
  addMethod,
  addProperty,
  checkError,
  compareByInspect,
  eql,
  expectTypes,
  flag,
  getActual,
  getMessage,
  getName,
  getOperator,
  getOwnEnumerableProperties,
  getOwnEnumerablePropertySymbols,
  getPathInfo,
  hasProperty,
  inspect,
  isNaN,
  isNumeric,
  isProxyEnabled,
  isRegExp,
  objDisplay,
  overwriteChainableMethod,
  overwriteMethod,
  overwriteProperty,
  proxify,
  test,
  transferFlags,
  type
};
