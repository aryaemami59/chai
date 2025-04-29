/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

import {AssertionError} from 'assertion-error';
import * as chai from '../../../index.js';
import type {Operator} from '../../types.js';
import {Assertion} from '../assertion.js';

/**
 * @param {unknown} val
 * @param {string} message
 * @returns {Assertion}
 */
function expect(val: any, message?: string): Assertion {
  return new Assertion(val, message);
}

export {expect};

/**
 * ### .fail([message])
 * ### .fail(actual, expected, [message], [operator])
 *
 * Throw a failure.
 *
 *     expect.fail();
 *     expect.fail("custom error message");
 *     expect.fail(1, 2);
 *     expect.fail(1, 2, "custom error message");
 *     expect.fail(1, 2, "custom error message", ">");
 *     expect.fail(1, 2, undefined, ">");
 *
 * @name fail
 * @param {unknown} actual
 * @param {unknown} expected
 * @param {string} message
 * @param {string} operator
 * @namespace expect
 * @public
 */
expect.fail = function (
  actual: any,
  expected: any,
  message?: string,
  operator?: Operator
) {
  if (arguments.length < 2) {
    message = actual;
    actual = undefined;
  }

  message = message || 'expect.fail()';
  throw new AssertionError(
    message,
    {
      actual,
      expected,
      operator
    },
    chai.expect.fail
  );
};
