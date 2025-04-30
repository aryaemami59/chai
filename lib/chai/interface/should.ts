/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

import {AssertionError} from 'assertion-error';
import type {AssertionStatic, Operator, ShouldAssertion} from '../../types.js';
import {Assertion} from '../assertion.js';

export interface Should extends ShouldAssertion {
  not: ShouldAssertion;
  fail(message?: string): never;
  fail(
    actual: any,
    expected: any,
    message?: string,
    operator?: Operator
  ): never;
}

// export type {Should} from '../../types.js';

/**
 * @returns {void}
 */
function loadShould(): Should {
  // explicitly define this method as function as to have it's name to include as `ssfi`
  /**
   * @returns {Assertion}
   */
  function shouldGetter(this: Assertion & AssertionStatic) {
    if (
      this instanceof String ||
      this instanceof Number ||
      this instanceof Boolean ||
      (typeof Symbol === 'function' && this instanceof Symbol) ||
      (typeof BigInt === 'function' && this instanceof BigInt)
    ) {
      return new Assertion(this.valueOf(), undefined, shouldGetter);
    }
    return new Assertion(this, undefined, shouldGetter);
  }
  /**
   * @param {unknown} value
   */
  function shouldSetter(this: Assertion & AssertionStatic, value: unknown) {
    // See https://github.com/chaijs/chai/issues/86: this makes
    // `whatever.should = someValue` actually set `someValue`, which is
    // especially useful for `global.should = require('chai').should()`.
    //
    // Note that we have to use [[DefineProperty]] instead of [[Put]]
    // since otherwise we would trigger this very setter!
    Object.defineProperty(this, 'should', {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  }
  // modify Object.prototype to have `should`
  Object.defineProperty(Object.prototype, 'should', {
    set: shouldSetter,
    get: shouldGetter,
    configurable: true
  });

  const should = {} as Should;

  /**
   * ### .fail([message])
   * ### .fail(actual, expected, [message], [operator])
   *
   * Throw a failure.
   *
   *     should.fail();
   *     should.fail("custom error message");
   *     should.fail(1, 2);
   *     should.fail(1, 2, "custom error message");
   *     should.fail(1, 2, "custom error message", ">");
   *     should.fail(1, 2, undefined, ">");
   *
   * @name fail
   * @param {unknown} actual
   * @param {unknown} expected
   * @param {string} message
   * @param {string} operator
   * @namespace BDD
   * @public
   */
  // should.fail =
  // function fail(message?: string): never;

  // function fail(
  //   actual: any,
  //   expected: any,
  //   message?: string,
  //   operator?: Operator
  // ): never;

  function fail(
    actual?: any,
    expected?: any,
    message?: string,
    operator?: Operator
  ): never {
    if (arguments.length < 2) {
      message = actual;
      actual = undefined;
    }

    message = message || 'should.fail()';
    throw new AssertionError(
      message,
      {
        actual,
        expected,
        operator
      },
      should.fail
    );
  }

  should.fail = fail;

  /**
   * ### .equal(actual, expected, [message])
   *
   * Asserts non-strict equality (`==`) of `actual` and `expected`.
   *
   *     should.equal(3, '3', '== coerces values to strings');
   *
   * @name equal
   * @param {unknown} actual
   * @param {unknown} expected
   * @param {string} message
   * @namespace Should
   * @public
   */
  should.equal = function (actual, expected, message) {
    new Assertion(actual, message).to.equal(expected);
  };

  /**
   * ### .throw(function, [constructor/string/regexp], [string/regexp], [message])
   *
   * Asserts that `function` will throw an error that is an instance of
   * `constructor`, or alternately that it will throw an error with message
   * matching `regexp`.
   *
   *     should.throw(fn, 'function throws a reference error');
   *     should.throw(fn, /function throws a reference error/);
   *     should.throw(fn, ReferenceError);
   *     should.throw(fn, ReferenceError, 'function throws a reference error');
   *     should.throw(fn, ReferenceError, /function throws a reference error/);
   *
   * @name throw
   * @alias Throw
   * @param {Function} actual
   * @param {Error} constructor
   * @param {RegExp} expected
   * @param {string} message
   * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
   * @namespace Should
   * @public
   */
  should.Throw = function (
    actual: (...args: any) => any,
    constructor?: Error | ((...args: any) => any) | string | RegExp,
    expected?: string | RegExp,
    message?: string
  ): void {
    new Assertion(actual, message).to.Throw(constructor as never, expected);
  };

  /**
   * ### .exist
   *
   * Asserts that the target is neither `null` nor `undefined`.
   *
   *     var foo = 'hi';
   *     should.exist(foo, 'foo exists');
   *
   * @param {unknown} val
   * @param {string} msg
   * @name exist
   * @namespace Should
   * @public
   */
  should.exist = function (val, msg) {
    new Assertion(val, msg).to.exist;
  };

  // negation
  should.not = {} as ShouldAssertion;

  /**
   * ### .not.equal(actual, expected, [message])
   *
   * Asserts non-strict inequality (`!=`) of `actual` and `expected`.
   *
   *     should.not.equal(3, 4, 'these numbers are not equal');
   *
   * @name not.equal
   * @param {unknown} actual
   * @param {unknown} expected
   * @param {string} msg
   * @namespace Should
   * @public
   */
  should.not.equal = function (actual, expected, msg) {
    new Assertion(actual, msg).to.not.equal(expected);
  };

  /**
   * ### .throw(function, [constructor/regexp], [message])
   *
   * Asserts that `function` will _not_ throw an error that is an instance of
   * `constructor`, or alternately that it will not throw an error with message
   * matching `regexp`.
   *
   *     should.not.throw(fn, Error, 'function does not throw');
   *
   * @name not.throw
   * @alias not.Throw
   * @param {Function} actual
   * @param {Error} constructor
   * @param {RegExp} expected
   * @param {string} message
   * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
   * @namespace Should
   * @public
   */
  should.not.Throw = function (
    actual: (...args: any) => any,
    constructor?: Error | ((...args: any) => any) | string | RegExp,
    expected?: string | RegExp,
    message?: string
  ) {
    new Assertion(actual, message).to.not.Throw(constructor as never, expected);
  };

  /**
   * ### .not.exist
   *
   * Asserts that the target is neither `null` nor `undefined`.
   *
   *     var bar = null;
   *     should.not.exist(bar, 'bar does not exist');
   *
   * @namespace Should
   * @name not.exist
   * @param {unknown} val
   * @param {string} msg
   * @public
   */
  should.not.exist = function (val, msg) {
    new Assertion(val, msg).to.not.exist;
  };

  should['throw'] = should['Throw'];
  should.not['throw'] = should.not['Throw'];

  return should as Should;
}

export const should = loadShould;
export const Should = loadShould;
