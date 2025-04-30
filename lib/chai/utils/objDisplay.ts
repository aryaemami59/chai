/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

import {config} from '../config.js';
import {inspect} from './inspect.js';

/**
 * ### .objDisplay(object)
 *
 * Determines if an object or an array matches
 * criteria to be inspected in-line for error
 * messages or should be truncated.
 *
 * @param {unknown} obj javascript object to inspect
 * @returns {string} stringified object
 * @name objDisplay
 * @namespace Utils
 * @public
 */
export function objDisplay(obj: unknown): string {
  const str = inspect(obj);
  const type = Object.prototype.toString.call(obj);

  if (config.truncateThreshold && str.length >= config.truncateThreshold) {
    if (type === '[object Function]') {
      const fn = obj as () => void;
      return !fn.name || fn.name === ''
        ? '[Function]'
        : '[Function: ' + fn.name + ']';
    } else if (type === '[object Array]') {
      return `[ Array(${(obj as []).length}) ]`;
    } else if (type === '[object Object]') {
      const keys = Object.keys(obj as object);
      const kstr =
        keys.length > 2
          ? keys.splice(0, 2).join(', ') + ', ...'
          : keys.join(', ');
      return '{ Object (' + kstr + ') }';
    } else {
      return str;
    }
  } else {
    return str;
  }
}
