/*!
 * chai
 * Copyright(c) 2011 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

// Dependencies that are used for multiple exports are required here only once
import {
  compatibleConstructor,
  compatibleInstance,
  compatibleMessage
} from 'check-error';
import type {ChaiUtils} from '../../types.js';
export * as checkError from 'check-error';

// test utility
import {test} from './test.js';

// type utility
export {type} from './type-detect.js';

// expectTypes utility
import {expectTypes} from './expectTypes.js';

// message utility
export {getMessage} from './getMessage.js';

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
export {default as eql} from 'deep-eql';

// Deep path info
import {getPathInfo, hasProperty} from 'pathval';

/**
 * Function name
 *
 * @param {Function} fn
 * @returns {string}
 */
export function getName(fn: (...args: any[]) => any): string {
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
export {getOwnEnumerablePropertySymbols} from './getOwnEnumerablePropertySymbols.js';

// Get own enumerable properties method
import {getOwnEnumerableProperties} from './getOwnEnumerableProperties.js';

// Proxify util
import {proxify} from './proxify.js';

// addLengthGuard util
import {addLengthGuard} from './addLengthGuard.js';

// isProxyEnabled helper
import {isProxyEnabled} from './isProxyEnabled.js';
import {type} from './type-detect.js';

// isNaN method
export {isNaN} from './isNaN.js';

// getOperator method
export {getOperator} from './getOperator.js';

/**
 * Determines if an object is a `RegExp`
 * This is used since `instanceof` will not work in virtual contexts
 *
 * @param {*} obj Object to test
 * @returns {boolean}
 */
export function isRegExp(obj: any): boolean {
  return Object.prototype.toString.call(obj) === '[object RegExp]';
}

/**
 * Determines if an object is numeric or not
 *
 * @param {unknown} obj Object to test
 * @returns {boolean}
 */
export function isNumeric(obj: unknown): boolean {
  return ['Number', 'BigInt'].includes(type(obj));
}

import {getProperties} from './getProperties.js';

import {getMessage} from './getMessage.js';

import {getOwnEnumerablePropertySymbols} from './getOwnEnumerablePropertySymbols.js';

export const util = {
  overwriteChainableMethod,
  compareByInspect,
  getOwnEnumerableProperties,
  expectTypes,
  getActual,
  inspect,
  objDisplay,
  flag,
  transferFlags,
  getPathInfo,
  hasProperty,
  addProperty,
  addMethod,
  overwriteProperty,
  overwriteMethod,
  addChainableMethod,
  proxify,
  addLengthGuard,
  isProxyEnabled,
  getProperties,
  getOwnEnumerablePropertySymbols,
  getMessage,
  compatibleInstance,
  test,
  compatibleConstructor,
  compatibleMessage
} satisfies ChaiUtils;
