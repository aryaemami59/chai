/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

import {AssertionError} from 'assertion-error';
import * as chai from '../../index.js';
import type {Operator, OperatorComparable} from '../../types.js';
import {Assertion} from '../assertion.js';
import {flag, inspect} from '../utils/index.js';

export interface Assert {
  /**
   * @param expression    Expression to test for truthiness.
   * @param message    Message to display on error.
   */
  (expression: any, message?: string): asserts expression;

  /**
   * Throws a failure.
   *
   * **Note**: Node.js assert module-compatible.
   *
   * @param message    Message to display on error.
   */
  fail(message?: string): never;

  /**
   * Throws a failure.
   *
   * **Note**: Node.js assert module-compatible.
   *
   * T   Type of the objects.
   *
   * @param actual   Actual value.
   * @param expected   Potential expected value.
   * @param message    Message to display on error.
   * @param operator   Comparison operator, if not strict equality.
   */
  fail<T>(actual: T, expected: T, message?: string, operator?: Operator): never;

  /**
   * Asserts that object is truthy.
   *
   * @param object   Object to test.
   * @param message    Message to display on error.
   */
  isOk(value: unknown, message?: string): asserts value;

  /**
   * Asserts that object is truthy.
   *
   * @param object   Object to test.
   * @param message    Message to display on error.
   */
  ok(value: unknown, message?: string): asserts value;

  /**
   * Asserts that object is falsy.
   *
   * T   Type of object.
   *
   * @param object   Object to test.
   * @param message    Message to display on error.
   */
  isNotOk<T>(value: T, message?: string): void;

  /**
   * Asserts that object is falsy.
   *
   * T   Type of object.
   *
   * @param object   Object to test.
   * @param message    Message to display on error.
   */
  notOk<T>(value: T, message?: string): void;

  /**
   * Asserts non-strict equality (==) of actual and expected.
   *
   * T   Type of the objects.
   *
   * @param actual   Actual value.
   * @param expected   Potential expected value.
   * @param message   Message to display on error.
   */
  equal<T>(actual: T, expected: T, message?: string): void;

  /**
   * Asserts non-strict inequality (!=) of actual and expected.
   *
   * T   Type of the objects.
   *
   * @param actual   Actual value.
   * @param expected   Potential expected value.
   * @param message   Message to display on error.
   */
  notEqual<T>(actual: T, expected: T, message?: string): void;

  /**
   * Asserts strict equality (===) of actual and expected.
   *
   * T   Type of the objects.
   *
   * @param actual   Actual value.
   * @param expected   Potential expected value.
   * @param message   Message to display on error.
   */
  strictEqual<T>(actual: T, expected: T, message?: string): void;

  /**
   * Asserts strict inequality (!==) of actual and expected.
   *
   * T   Type of the objects.
   *
   * @param actual   Actual value.
   * @param expected   Potential expected value.
   * @param message   Message to display on error.
   */
  notStrictEqual<T>(actual: T, expected: T, message?: string): void;

  /**
   * Asserts that actual is deeply equal to expected.
   *
   * T   Type of the objects.
   *
   * @param actual   Actual value.
   * @param expected   Potential expected value.
   * @param message   Message to display on error.
   */
  deepEqual<T>(actual: T, expected: T, message?: string): void;

  /**
   * Asserts that actual is not deeply equal to expected.
   *
   * T   Type of the objects.
   *
   * @param actual   Actual value.
   * @param expected   Potential expected value.
   * @param message   Message to display on error.
   */
  notDeepEqual<T>(actual: T, expected: T, message?: string): void;

  /**
   * Alias to deepEqual
   *
   * T   Type of the objects.
   *
   * @param actual   Actual value.
   * @param expected   Potential expected value.
   * @param message   Message to display on error.
   */
  deepStrictEqual<T>(actual: T, expected: T, message?: string): void;

  /**
   * Partially matches actual and expected.
   *
   * @param actual   Actual value.
   * @param expected   Potential subset of the value.
   * @param message   Message to display on error.
   */
  containSubset(val: any, exp: any, msg?: string): void;

  /**
   * Partially matches actual and expected.
   *
   * @param actual   Actual value.
   * @param expected   Potential subset of the value.
   * @param message   Message to display on error.
   */
  containsSubset(val: any, exp: any, msg?: string): void;

  /**
   * No partial match between actual and expected exists.
   *
   * @param actual   Actual value.
   * @param expected   Potential subset of the value.
   * @param message   Message to display on error.
   */
  doesNotContainSubset(val: any, exp: any, msg?: string): void;

  /**
   * Asserts valueToCheck is strictly greater than (>) valueToBeAbove.
   *
   * @param valueToCheck   Actual value.
   * @param valueToBeAbove   Minimum Potential expected value.
   * @param message   Message to display on error.
   */
  isAbove(valueToCheck: number, valueToBeAbove: number, message?: string): void;

  /**
   * Asserts valueToCheck is greater than or equal to (>=) valueToBeAtLeast.
   *
   * @param valueToCheck   Actual value.
   * @param valueToBeAtLeast   Minimum Potential expected value.
   * @param message   Message to display on error.
   */
  isAtLeast(
    valueToCheck: number,
    valueToBeAtLeast: number,
    message?: string
  ): void;

  /**
   * Asserts valueToCheck is strictly less than (<) valueToBeBelow.
   *
   * @param valueToCheck   Actual value.
   * @param valueToBeBelow   Minimum Potential expected value.
   * @param message   Message to display on error.
   */
  isBelow(valueToCheck: number, valueToBeBelow: number, message?: string): void;

  /**
   * Asserts valueToCheck is less than or equal to (<=) valueToBeAtMost.
   *
   * @param valueToCheck   Actual value.
   * @param valueToBeAtMost   Minimum Potential expected value.
   * @param message   Message to display on error.
   */
  isAtMost(
    valueToCheck: number,
    valueToBeAtMost: number,
    message?: string
  ): void;

  /**
   * Asserts that value is true.
   *
   * @param value   Actual value.
   * @param message   Message to display on error.
   */
  isTrue(value: unknown, message?: string): asserts value is true;

  /**
   * Asserts that value is false.
   *
   * @param value   Actual value.
   * @param message   Message to display on error.
   */
  isFalse(value: unknown, message?: string): asserts value is false;

  /**
   * Asserts that value is not true.
   *
   * T   Type of value.
   *
   * @param value   Actual value.
   * @param message   Message to display on error.
   */
  isNotTrue<T>(value: T, message?: string): asserts value is Exclude<T, true>;

  /**
   * Asserts that value is not false.
   *
   * @param value   Actual value.
   * @param message   Message to display on error.
   */
  isNotFalse<T>(value: T, message?: string): asserts value is Exclude<T, false>;

  /**
   * Asserts that value is null.
   *
   * @param value   Actual value.
   * @param message   Message to display on error.
   */
  isNull(value: unknown, message?: string): asserts value is null;

  /**
   * Asserts that value is not null.
   *
   * T   Type of value.
   *
   * @param value   Actual value.
   * @param message   Message to display on error.
   */
  isNotNull<T>(value: T, message?: string): asserts value is Exclude<T, null>;

  /**
   * Asserts that value is NaN.
   *
   * T   Type of value.
   *
   * @param value   Actual value.
   * @param message   Message to display on error.
   */
  isNaN<T>(value: T, message?: string): void;

  /**
   * Asserts that value is not NaN.
   *
   * T   Type of value.
   *
   * @param value   Actual value.
   * @param message   Message to display on error.
   */
  isNotNaN<T>(value: T, message?: string): void;

  /**
   * Asserts that the target is neither null nor undefined.
   *
   * T   Type of value.
   *
   * @param value   Actual value.
   * @param message    Message to display on error.
   */
  exists<T>(value: T, message?: string): asserts value is NonNullable<T>;

  /**
   * Asserts that the target is either null or undefined.
   *
   * @param value   Actual value.
   * @param message    Message to display on error.
   */
  notExists(
    value: unknown,
    message?: string
  ): asserts value is null | undefined;

  /**
   * Asserts that value is undefined.
   *
   * @param value   Actual value.
   * @param message   Message to display on error.
   */
  isUndefined(value: unknown, message?: string): asserts value is undefined;

  /**
   * Asserts that value is not undefined.
   *
   * T   Type of value.
   *
   * @param value   Actual value.
   * @param message   Message to display on error.
   */
  isDefined<T>(
    value: T,
    message?: string
  ): asserts value is Exclude<T, undefined>;

  /**
   * Asserts that value is a function.
   *
   * T   Type of value.
   *
   * @param value   Actual value.
   * @param message   Message to display on error.
   */
  isFunction<T>(value: T, message?: string): void;

  /**
   * Asserts that value is not a function.
   *
   * T   Type of value.
   *
   * @param value   Actual value.
   * @param message   Message to display on error.
   */
  isNotFunction<T>(value: T, message?: string): void;

  /**
   * Asserts that value is an object of type 'Object'
   * (as revealed by Object.prototype.toString).
   *
   * **Note**: The assertion does not match subclassed objects.
   *
   * T   Type of value.
   *
   * @param value   Actual value.
   * @param message   Message to display on error.
   */
  isObject<T>(value: T, message?: string): void;

  /**
   * Asserts that value is not an object of type 'Object'
   * (as revealed by Object.prototype.toString).
   *
   * T   Type of value.
   *
   * @param value   Actual value.
   * @param message   Message to display on error.
   */
  isNotObject<T>(value: T, message?: string): void;

  /**
   * Asserts that value is an array.
   *
   * T   Type of value.
   *
   * @param value   Actual value.
   * @param message   Message to display on error.
   */
  isArray<T>(value: T, message?: string): void;

  /**
   * Asserts that value is not an array.
   *
   * T   Type of value.
   *
   * @param value   Actual value.
   * @param message   Message to display on error.
   */
  isNotArray<T>(value: T, message?: string): void;

  /**
   * Asserts that value is a string.
   *
   * T   Type of value.
   *
   * @param value   Actual value.
   * @param message   Message to display on error.
   */
  isString<T>(value: T, message?: string): void;

  /**
   * Asserts that value is not a string.
   *
   * T   Type of value.
   *
   * @param value   Actual value.
   * @param message   Message to display on error.
   */
  isNotString<T>(value: T, message?: string): void;

  /**
   * Asserts that value is a number.
   *
   * T   Type of value.
   *
   * @param value   Actual value.
   * @param message   Message to display on error.
   */
  isNumber<T>(value: T, message?: string): asserts value is Extract<T, number>;

  /**
   * Asserts that value is not a number.
   *
   * T   Type of value.
   *
   * @param value   Actual value.
   * @param message   Message to display on error.
   */
  isNotNumber<T>(value: T, message?: string): void;

  /**
   * Asserts that value is a finite number.
   * Unlike `.isNumber`, this will fail for `NaN` and `Infinity`.
   *
   * T   Type of value
   *
   * @param value    Actual value
   * @param message   Message to display on error.
   */
  isFinite<T>(value: T, message?: string): void;

  /**
   * Asserts that value is a boolean.
   *
   * T   Type of value.
   *
   * @param value   Actual value.
   * @param message   Message to display on error.
   */
  isBoolean<T>(
    value: T,
    message?: string
  ): asserts value is Extract<T, boolean>;

  /**
   * Asserts that value is not a boolean.
   *
   * T   Type of value.
   *
   * @param value   Actual value.
   * @param message   Message to display on error.
   */
  isNotBoolean<T>(
    value: T,
    message?: string
  ): asserts value is Exclude<T, boolean>;

  /**
   * Asserts that value's type is name, as determined by Object.prototype.toString.
   *
   * T   Type of value.
   *
   * @param value   Actual value.
   * @param name   Potential expected type name of value.
   * @param message   Message to display on error.
   */
  typeOf<T>(value: T, name: string, message?: string): void;

  /**
   * Asserts that value's type is not name, as determined by Object.prototype.toString.
   *
   * T   Type of value.
   *
   * @param value   Actual value.
   * @param name   Potential expected type name of value.
   * @param message   Message to display on error.
   */
  notTypeOf<T>(value: T, name: string, message?: string): void;

  /**
   * Asserts that value is an instance of constructor.
   *
   * T   Expected type of value.
   *
   * @param value   Actual value.
   * @param constructor   Potential expected contructor of value.
   * @param message   Message to display on error.
   */
  instanceOf<T extends abstract new (...args: any) => any>(
    value: unknown,
    constructor: InstanceType<T>,
    message?: string
  ): asserts value is T;

  /**
   * Asserts that value is not an instance of constructor.
   *
   * T   Type of value.
   * U   Type that value shouldn't be an instance of.
   *
   * @param value   Actual value.
   * @param constructor   Potential expected contructor of value.
   * @param message   Message to display on error.
   */
  notInstanceOf<T, U extends abstract new (...args: any) => any>(
    value: T,
    type: InstanceType<U>,
    message?: string
  ): asserts value is Exclude<T, U>;

  /**
   * Asserts that haystack includes needle.
   *
   * @param haystack   Container string.
   * @param needle   Potential substring of haystack.
   * @param message   Message to display on error.
   */
  include(haystack: string, needle: string, message?: string): void;

  /**
   * Asserts that haystack includes needle.
   *
   * T   Type of values in haystack.
   *
   * @param haystack   Container array, set or map.
   * @param needle   Potential value contained in haystack.
   * @param message   Message to display on error.
   */
  include<T>(
    haystack: readonly T[] | ReadonlySet<T> | ReadonlyMap<any, T>,
    needle: T,
    message?: string
  ): void;

  /**
   * Asserts that haystack includes needle.
   *
   * T   Type of values in haystack.
   *
   * @param haystack   WeakSet container.
   * @param needle   Potential value contained in haystack.
   * @param message   Message to display on error.
   */
  include<T extends object>(
    haystack: WeakSet<T>,
    needle: T,
    message?: string
  ): void;

  /**
   * Asserts that haystack includes needle.
   *
   * T   Type of haystack.
   *
   * @param haystack   Object.
   * @param needle   Potential subset of the haystack's properties.
   * @param message   Message to display on error.
   */
  include<T>(haystack: T, needle: Partial<T>, message?: string): void;

  /**
   * Asserts that haystack does not include needle.
   *
   * @param haystack   Container string.
   * @param needle   Potential substring of haystack.
   * @param message   Message to display on error.
   */
  notInclude(haystack: string, needle: string, message?: string): void;

  /**
   * Asserts that haystack does not include needle.
   *
   * T   Type of values in haystack.
   *
   * @param haystack   Container array, set or map.
   * @param needle   Potential value contained in haystack.
   * @param message   Message to display on error.
   */
  notInclude<T>(
    haystack: readonly T[] | ReadonlySet<T> | ReadonlyMap<any, T>,
    needle: T,
    message?: string
  ): void;

  /**
   * Asserts that haystack does not include needle.
   *
   * T   Type of values in haystack.
   *
   * @param haystack   WeakSet container.
   * @param needle   Potential value contained in haystack.
   * @param message   Message to display on error.
   */
  notInclude<T extends object>(
    haystack: WeakSet<T>,
    needle: T,
    message?: string
  ): void;

  /**
   * Asserts that haystack does not include needle.
   *
   * T   Type of haystack.
   *
   * @param haystack   Object.
   * @param needle   Potential subset of the haystack's properties.
   * @param message   Message to display on error.
   */
  notInclude<T>(haystack: T, needle: Partial<T>, message?: string): void;

  /**
   * Asserts that haystack includes needle. Deep equality is used.
   *
   * @param haystack   Container string.
   * @param needle   Potential substring of haystack.
   * @param message   Message to display on error.
   *
   * @deprecated Does not have any effect on string. Use {@link Assert#include} instead.
   */
  deepInclude(haystack: string, needle: string, message?: string): void;

  /**
   * Asserts that haystack includes needle. Deep equality is used.
   *
   * T   Type of values in haystack.
   *
   * @param haystack   Container array, set or map.
   * @param needle   Potential value contained in haystack.
   * @param message   Message to display on error.
   */
  deepInclude<T>(
    haystack: readonly T[] | ReadonlySet<T> | ReadonlyMap<any, T>,
    needle: T,
    message?: string
  ): void;

  /**
   * Asserts that haystack includes needle. Deep equality is used.
   *
   * T   Type of haystack.
   *
   * @param haystack   Object.
   * @param needle   Potential subset of the haystack's properties.
   * @param message   Message to display on error.
   */
  deepInclude<T>(
    haystack: T,
    needle: T extends WeakSet<any> ? never : Partial<T>,
    message?: string
  ): void;

  /**
   * Asserts that haystack does not include needle. Deep equality is used.
   *
   * @param haystack   Container string.
   * @param needle   Potential substring of haystack.
   * @param message   Message to display on error.
   *
   * @deprecated Does not have any effect on string. Use {@link Assert#notInclude} instead.
   */
  notDeepInclude(haystack: string, needle: string, message?: string): void;

  /**
   * Asserts that haystack does not include needle. Deep equality is used.
   *
   * T   Type of values in haystack.
   *
   * @param haystack   Container array, set or map.
   * @param needle   Potential value contained in haystack.
   * @param message   Message to display on error.
   */
  notDeepInclude<T>(
    haystack: readonly T[] | ReadonlySet<T> | ReadonlyMap<any, T>,
    needle: T,
    message?: string
  ): void;

  /**
   * Asserts that haystack does not include needle. Deep equality is used.
   *
   * T   Type of haystack.
   *
   * @param haystack   Object.
   * @param needle   Potential subset of the haystack's properties.
   * @param message   Message to display on error.
   */
  notDeepInclude<T>(
    haystack: T,
    needle: T extends WeakSet<any> ? never : Partial<T>,
    message?: string
  ): void;

  /**
   * Asserts that ‘haystack’ includes ‘needle’. Can be used to assert the inclusion of a subset of properties in an object.
   *
   * Enables the use of dot- and bracket-notation for referencing nested properties.
   * ‘[]’ and ‘.’ in property names can be escaped using double backslashes.Asserts that ‘haystack’ includes ‘needle’.
   * Can be used to assert the inclusion of a subset of properties in an object.
   * Enables the use of dot- and bracket-notation for referencing nested properties.
   * ‘[]’ and ‘.’ in property names can be escaped using double backslashes.
   *
   * @param haystack
   * @param needle
   * @param message   Message to display on error.
   */
  nestedInclude(haystack: any, needle: any, message?: string): void;

  /**
   * Asserts that ‘haystack’ does not include ‘needle’. Can be used to assert the absence of a subset of properties in an object.
   *
   * Enables the use of dot- and bracket-notation for referencing nested properties.
   * ‘[]’ and ‘.’ in property names can be escaped using double backslashes.Asserts that ‘haystack’ includes ‘needle’.
   * Can be used to assert the inclusion of a subset of properties in an object.
   * Enables the use of dot- and bracket-notation for referencing nested properties.
   * ‘[]’ and ‘.’ in property names can be escaped using double backslashes.
   *
   * @param haystack
   * @param needle
   * @param message   Message to display on error.
   */
  notNestedInclude(haystack: any, needle: any, message?: string): void;

  /**
   * Asserts that ‘haystack’ includes ‘needle’. Can be used to assert the inclusion of a subset of properties in an object while checking for deep equality
   *
   * Enables the use of dot- and bracket-notation for referencing nested properties.
   * ‘[]’ and ‘.’ in property names can be escaped using double backslashes.Asserts that ‘haystack’ includes ‘needle’.
   * Can be used to assert the inclusion of a subset of properties in an object.
   * Enables the use of dot- and bracket-notation for referencing nested properties.
   * ‘[]’ and ‘.’ in property names can be escaped using double backslashes.
   *
   * @param haystack
   * @param needle
   * @param message   Message to display on error.
   */
  deepNestedInclude(haystack: any, needle: any, message?: string): void;

  /**
   * Asserts that ‘haystack’ does not include ‘needle’. Can be used to assert the absence of a subset of properties in an object while checking for deep equality.
   *
   * Enables the use of dot- and bracket-notation for referencing nested properties.
   * ‘[]’ and ‘.’ in property names can be escaped using double backslashes.Asserts that ‘haystack’ includes ‘needle’.
   * Can be used to assert the inclusion of a subset of properties in an object.
   * Enables the use of dot- and bracket-notation for referencing nested properties.
   * ‘[]’ and ‘.’ in property names can be escaped using double backslashes.
   *
   * @param haystack
   * @param needle
   * @param message   Message to display on error.
   */
  notDeepNestedInclude(haystack: any, needle: any, message?: string): void;

  /**
   * Asserts that ‘haystack’ includes ‘needle’. Can be used to assert the inclusion of a subset of properties in an object while ignoring inherited properties.
   *
   * @param haystack
   * @param needle
   * @param message   Message to display on error.
   */
  ownInclude(haystack: any, needle: any, message?: string): void;

  /**
   * Asserts that ‘haystack’ includes ‘needle’. Can be used to assert the absence of a subset of properties in an object while ignoring inherited properties.
   *
   * @param haystack
   * @param needle
   * @param message   Message to display on error.
   */
  notOwnInclude(haystack: any, needle: any, message?: string): void;

  /**
   * Asserts that ‘haystack’ includes ‘needle’. Can be used to assert the inclusion of a subset of properties in an object while ignoring inherited properties and checking for deep
   *
   * @param haystack
   * @param needle
   * @param message   Message to display on error.
   */
  deepOwnInclude(haystack: any, needle: any, message?: string): void;

  /**
   * Asserts that ‘haystack’ includes ‘needle’. Can be used to assert the absence of a subset of properties in an object while ignoring inherited properties and checking for deep equality.
   *
   * @param haystack
   * @param needle
   * @param message   Message to display on error.
   */
  notDeepOwnInclude(haystack: any, needle: any, message?: string): void;

  /**
   * Asserts that value matches the regular expression regexp.
   *
   * @param value   Actual value.
   * @param regexp   Potential match of value.
   * @param message   Message to display on error.
   */
  match(value: string, regexp: RegExp, message?: string): void;

  /**
   * Asserts that value does not match the regular expression regexp.
   *
   * @param value   Actual value.
   * @param regexp   Potential match of value.
   * @param message   Message to display on error.
   */
  notMatch(expected: any, regexp: RegExp, message?: string): void;

  /**
   * Asserts that object has a property named by property.
   *
   * T   Type of object.
   *
   * @param object   Container object.
   * @param property   Potential contained property of object.
   * @param message   Message to display on error.
   */
  property<T>(
    object: (Record<string, never> & string) | keyof T,
    property: string,
    /* keyof T */ message?: string
  ): void;

  /**
   * Asserts that object does not have a property named by property.
   *
   * T   Type of object.
   *
   * @param object   Container object.
   * @param property   Potential contained property of object.
   * @param message   Message to display on error.
   */
  notProperty<T>(
    object: T,
    property: string,
    /* keyof T */ message?: string
  ): void;

  /**
   * Asserts that object has a property named by property, which can be a string
   * using dot- and bracket-notation for deep reference.
   *
   * T   Type of object.
   *
   * @param object   Container object.
   * @param property   Potential contained property of object.
   * @param message   Message to display on error.
   */
  deepProperty<T>(object: T, property: string, message?: string): void;

  /**
   * Asserts that object does not have a property named by property, which can be a
   * string using dot- and bracket-notation for deep reference.
   *
   * T   Type of object.
   *
   * @param object   Container object.
   * @param property   Potential contained property of object.
   * @param message   Message to display on error.
   */
  notDeepProperty<T>(object: T, property: string, message?: string): void;

  /**
   * Asserts that object has a property named by property with value given by value.
   *
   * T   Type of object.
   * V   Type of value.
   *
   * @param object   Container object.
   * @param property   Potential contained property of object.
   * @param value   Potential expected property value.
   * @param message   Message to display on error.
   */
  propertyVal<T, V>(
    object: T,
    property: string,
    /* keyof T */ value: V,
    message?: string
  ): void;

  /**
   * Asserts that object has a property named by property with value given by value.
   *
   * T   Type of object.
   * V   Type of value.
   *
   * @param object   Container object.
   * @param property   Potential contained property of object.
   * @param value   Potential expected property value.
   * @param message   Message to display on error.
   */
  notPropertyVal<T, V>(
    object: T,
    property: string,
    /* keyof T */ value: V,
    message?: string
  ): void;

  /**
   * Asserts that object has a property named by property, which can be a string
   * using dot- and bracket-notation for deep reference.
   *
   * T   Type of object.
   * V   Type of value.
   *
   * @param object   Container object.
   * @param property   Potential contained property of object.
   * @param value   Potential expected property value.
   * @param message   Message to display on error.
   */
  deepPropertyVal<T, V>(
    object: T,
    property: string,
    value: V,
    message?: string
  ): void;

  /**
   * Asserts that object does not have a property named by property, which can be a
   * string using dot- and bracket-notation for deep reference.
   *
   * T   Type of object.
   * V   Type of value.
   *
   * @param object   Container object.
   * @param property   Potential contained property of object.
   * @param value   Potential expected property value.
   * @param message   Message to display on error.
   */
  notDeepPropertyVal<T, V>(
    object: T,
    property: string,
    value: V,
    message?: string
  ): void;

  /**
   * Asserts that object has a length property with the expected value.
   *
   * T   Type of object.
   *
   * @param object   Container object.
   * @param length   Potential expected length of object.
   * @param message   Message to display on error.
   */
  lengthOf<
    T extends
      | {readonly length?: number | undefined}
      | {readonly size?: number | undefined}
  >(
    object: T,
    length: number,
    message?: string
  ): void;

  /**
   * Asserts that fn will throw an error.
   *
   * @param fn   Function that may throw.
   * @param errMsgMatcher   Expected error message matcher.
   * @param ignored   Ignored parameter.
   * @param message   Message to display on error.
   */
  // throw(
  //   fn: () => void,
  //   errMsgMatcher?: RegExp | string,
  //   ignored?: any,
  //   message?: string
  // ): void;

  /**
   * Asserts that fn will throw an error.
   *
   * @param fn   Function that may throw.
   * @param errorLike   Expected error constructor or error instance.
   * @param errMsgMatcher   Expected error message matcher.
   * @param message   Message to display on error.
   */
  throw(
    fn: () => void,
    errorLike?: ErrorConstructor | Error | null | RegExp | string,
    errMsgMatcher?: RegExp | string | null,
    message?: string
  ): void;

  /**
   * Asserts that fn will throw an error.
   *
   * @param fn   Function that may throw.
   * @param errMsgMatcher   Expected error message matcher.
   * @param ignored   Ignored parameter.
   * @param message   Message to display on error.
   */
  // throws(
  //   fn: () => void,
  //   errMsgMatcher?: RegExp | string,
  //   ignored?: any,
  //   message?: string
  // ): void;

  /**
   * Asserts that fn will throw an error.
   *
   * @param fn   Function that may throw.
   * @param errorLike   Expected error constructor or error instance.
   * @param errMsgMatcher   Expected error message matcher.
   * @param message   Message to display on error.
   */
  throws(
    fn: () => void,
    errorLike?: ErrorConstructor | Error | null | RegExp | string,
    errMsgMatcher?: RegExp | string | null,
    message?: string
  ): void;

  /**
   * Asserts that fn will throw an error.
   *
   * @param fn   Function that may throw.
   * @param errMsgMatcher   Expected error message matcher.
   * @param ignored   Ignored parameter.
   * @param message   Message to display on error.
   */
  // Throw(
  //   fn: () => void,
  //   errMsgMatcher?: RegExp | string,
  //   ignored?: any,
  //   message?: string
  // ): void;

  /**
   * Asserts that fn will throw an error.
   *
   * @param fn   Function that may throw.
   * @param errorLike   Expected error constructor or error instance.
   * @param errMsgMatcher   Expected error message matcher.
   * @param message   Message to display on error.
   */
  Throw(
    fn: () => void,
    errorLike?: ErrorConstructor | Error | null | RegExp | string,
    errMsgMatcher?: RegExp | string | null,
    message?: string
  ): void;

  /**
   * Asserts that fn will not throw an error.
   *
   * @param fn   Function that may throw.
   * @param errMsgMatcher   Expected error message matcher.
   * @param ignored   Ignored parameter.
   * @param message   Message to display on error.
   */
  // doesNotThrow(
  //   fn: () => void,
  //   errMsgMatcher?: RegExp | string,
  //   ignored?: any,
  //   message?: string
  // ): void;

  /**
   * Asserts that fn will not throw an error.
   *
   * @param fn   Function that may throw.
   * @param errorLike   Expected error constructor or error instance.
   * @param errMsgMatcher   Expected error message matcher.
   * @param message   Message to display on error.
   */
  doesNotThrow(
    fn: () => void,
    errorLike?: ErrorConstructor | Error | null | RegExp | string,
    errMsgMatcher?: RegExp | string | null,
    message?: string
  ): void;

  /**
   * Compares two values using operator.
   *
   * @param val1   Left value during comparison.
   * @param operator   Comparison operator.
   * @param val2   Right value during comparison.
   * @param message   Message to display on error.
   */
  operator(
    val1: OperatorComparable,
    operator: Operator,
    val2: OperatorComparable,
    message?: string
  ): void;

  /**
   * Asserts that the target is equal to expected, to within a +/- delta range.
   *
   * @param actual   Actual value
   * @param expected   Potential expected value.
   * @param delta   Maximum differenced between values.
   * @param message   Message to display on error.
   */
  closeTo(
    actual: number,
    expected: number,
    delta: number,
    message?: string
  ): void;

  /**
   * Asserts that the target is equal to expected, to within a +/- delta range.
   *
   * @param actual   Actual value
   * @param expected   Potential expected value.
   * @param delta   Maximum differenced between values.
   * @param message   Message to display on error.
   */
  approximately(
    act: number,
    exp: number,
    delta: number,
    message?: string
  ): void;

  /**
   * Asserts that set1 and set2 have the same members. Order is not take into account.
   *
   * T   Type of set values.
   *
   * @param set1   Actual set of values.
   * @param set2   Potential expected set of values.
   * @param message   Message to display on error.
   */
  sameMembers<T>(set1: T[], set2: T[], message?: string): void;

  /**
   * Asserts that set1 and set2 have the same members using deep equality checking.
   * Order is not take into account.
   *
   * T   Type of set values.
   *
   * @param set1   Actual set of values.
   * @param set2   Potential expected set of values.
   * @param message   Message to display on error.
   */
  sameDeepMembers<T>(set1: T[], set2: T[], message?: string): void;

  /**
   * Asserts that `set1` and `set2` don't have the same members in any order.
   * Uses a deep equality check.
   *
   * T   Type of set values.
   *
   * @param set1
   * @param set2
   * @param message
   */
  notSameDeepMembers<T>(set1: T[], set2: T[], message?: string): void;

  /**
   * Asserts that set1 and set2 have the same members in the same order.
   * Uses a strict equality check (===).
   *
   * T   Type of set values.
   *
   * @param set1   Actual set of values.
   * @param set2   Potential expected set of values.
   * @param message   Message to display on error.
   */
  sameOrderedMembers<T>(set1: T[], set2: T[], message?: string): void;

  /**
   * Asserts that set1 and set2 don’t have the same members in the same order.
   * Uses a strict equality check (===).
   *
   * T   Type of set values.
   *
   * @param set1   Actual set of values.
   * @param set2   Potential expected set of values.
   * @param message   Message to display on error.
   */
  notSameOrderedMembers<T>(set1: T[], set2: T[], message?: string): void;

  /**
   * Asserts that set1 and set2 have the same members in the same order.
   * Uses a deep equality check.
   *
   * T   Type of set values.
   *
   * @param set1   Actual set of values.
   * @param set2   Potential expected set of values.
   * @param message   Message to display on error.
   */
  sameDeepOrderedMembers<T>(set1: T[], set2: T[], message?: string): void;

  /**
   * Asserts that set1 and set2 don’t have the same members in the same order.
   * Uses a deep equality check.
   *
   * T   Type of set values.
   *
   * @param set1   Actual set of values.
   * @param set2   Potential expected set of values.
   * @param message   Message to display on error.
   */
  notSameDeepOrderedMembers<T>(set1: T[], set2: T[], message?: string): void;

  /**
   * Asserts that subset is included in superset in the same order beginning with the first element in superset.
   * Uses a strict equality check (===).
   *
   * T   Type of set values.
   *
   * @param superset   Actual set of values.
   * @param subset   Potential contained set of values.
   * @param message   Message to display on error.
   */
  includeOrderedMembers<T>(superset: T[], subset: T[], message?: string): void;

  /**
   * Asserts that subset isn’t included in superset in the same order beginning with the first element in superset.
   * Uses a strict equality check (===).
   *
   * T   Type of set values.
   *
   * @param superset   Actual set of values.
   * @param subset   Potential contained set of values.
   * @param message   Message to display on error.
   */
  notIncludeOrderedMembers<T>(
    superset: T[],
    subset: T[],
    message?: string
  ): void;

  /**
   * Asserts that subset is included in superset in the same order beginning with the first element in superset.
   * Uses a deep equality check.
   *
   * T   Type of set values.
   *
   * @param superset   Actual set of values.
   * @param subset   Potential contained set of values.
   * @param message   Message to display on error.
   */
  includeDeepOrderedMembers<T>(
    superset: T[],
    subset: T[],
    message?: string
  ): void;

  /**
   * Asserts that subset isn’t included in superset in the same order beginning with the first element in superset.
   * Uses a deep equality check.
   *
   * T   Type of set values.
   *
   * @param superset   Actual set of values.
   * @param subset   Potential contained set of values.
   * @param message   Message to display on error.
   */
  notIncludeDeepOrderedMembers<T>(
    superset: T[],
    subset: T[],
    message?: string
  ): void;

  /**
   * Asserts that subset is included in superset. Order is not take into account.
   *
   * T   Type of set values.
   *
   * @param superset   Actual set of values.
   * @param subset   Potential contained set of values.
   * @param message   Message to display on error.
   */
  includeMembers<T>(superset: T[], subset: T[], message?: string): void;

  /**
   * Asserts that subset isn’t included in superset in any order.
   * Uses a strict equality check (===). Duplicates are ignored.
   *
   * T   Type of set values.
   *
   * @param superset   Actual set of values.
   * @param subset   Potential not contained set of values.
   * @param message   Message to display on error.
   */
  notIncludeMembers<T>(superset: T[], subset: T[], message?: string): void;

  /**
   * Asserts that subset is included in superset using deep equality checking.
   * Order is not take into account.
   *
   * T   Type of set values.
   *
   * @param superset   Actual set of values.
   * @param subset   Potential contained set of values.
   * @param message   Message to display on error.
   */
  includeDeepMembers<T>(superset: T[], subset: T[], message?: string): void;

  /**
   * Asserts that `subset` isn't included in `superset` in any order. Uses a
   * deep equality check. Duplicates are ignored.
   *
   * assert.notIncludeDeepMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { b: 2 }, { f: 5 } ], 'not include deep members');
   *
   * T   Type of set values.
   *
   * @param superset   Actual set of values.
   * @param subset   Potential contained set of values.
   * @param message   Message to display on error.
   */
  notIncludeDeepMembers<T>(superset: T[], subset: T[], message?: string): void;

  /**
   * Asserts that non-object, non-array value inList appears in the flat array list.
   *
   * T   Type of list values.
   *
   * @param inList   Value expected to be in the list.
   * @param list   List of values.
   * @param message   Message to display on error.
   */
  oneOf<T>(inList: T, list: T[], message?: string): void;

  /**
   * Asserts that a function changes the value of a property.
   *
   * T   Type of object.
   *
   * @param modifier   Function to run.
   * @param object   Container object.
   * @param property   Property of object expected to be modified.
   * @param message   Message to display on error.
   */
  changes<T>(
    modifier: (...args: any[]) => any,
    object: T,
    property: string,
    /* keyof T */ message?: string
  ): void;

  /**
   * Asserts that a function changes the value of a property by an amount (delta).
   *
   * @param modifier function
   * @param object or getter function
   * @param property name _optional_
   * @param change amount (delta)
   * @param message _optional_
   */
  changesBy<ObjectType extends Record<string, any>>(
    modifier: (...args: any[]) => any,
    object: ObjectType,
    property: (Record<string, never> & string) | keyof ObjectType,
    change: number,
    message?: string
  ): void;
  changesBy(
    modifier: (...args: any[]) => any,
    object: Record<string, any>,
    change: number,
    message?: string
  ): void;

  /**
   * Asserts that a function does not change the value of a property.
   *
   * T   Type of object.
   *
   * @param modifier   Function to run.
   * @param object   Container object.
   * @param property   Property of object expected not to be modified.
   * @param message   Message to display on error.
   */
  doesNotChange(
    modifier: (...args: any[]) => any,
    object: Record<string, number>,
    property: string,
    message?: string
  ): void;

  /**
   * Asserts that a function increases an object property.
   *
   * T   Type of object.
   *
   * @param modifier   Function to run.
   * @param object   Container object.
   * @param property   Property of object expected to be increased.
   * @param message   Message to display on error.
   */
  increases<T>(
    modifier: (...args: any[]) => any,
    object: T,
    property: string,
    /* keyof T */ message?: string
  ): void;

  /**
   * Asserts that a function increases a numeric object property or a function's return value by an amount (delta).
   *
   * T   Type of object or function.
   *
   * @param modifier function
   * @param object or getter function
   * @param property name _optional_
   * @param change amount (delta)
   * @param message _optional_
   */
  increasesBy<T extends Record<string, any>>(
    modifier: (...args: any[]) => any,
    object: T,
    property: (Record<string, never> & string) | keyof T,
    change: number,
    message?: string
  ): void;
  increasesBy<T>(
    modifier: (...args: any[]) => any,
    object: T,
    change: number,
    message?: string
  ): void;

  /**
   * Asserts that a function does not increase an object property.
   *
   * T   Type of object.
   *
   * @param modifier   Function to run.
   * @param object   Container object.
   * @param property   Property of object expected not to be increased.
   * @param message   Message to display on error.
   */
  doesNotIncrease<T extends Record<string, any>>(
    modifier: (...args: any[]) => any,
    object: T,
    property: string,
    message?: string
  ): void;

  /**
   * Asserts that a function does not increase a numeric object property or function's return value by an amount (delta).
   *
   * T   Type of object or function.
   *
   * @param modifier function
   * @param object or getter function
   * @param property name _optional_
   * @param change amount (delta)
   * @param message _optional_
   */

  increasesButNotBy<T extends Record<string, any>>(
    modifier: (...args: any[]) => any,
    object: T,
    property: string,
    /* keyof T */ change: number,
    message?: string
  ): void;
  increasesButNotBy<T>(
    modifier: (...args: any[]) => any,
    object: T,
    change: number,
    message?: string
  ): void;

  /**
   * Asserts that a function decreases an object property.
   *
   * T   Type of object.
   *
   * @param modifier   Function to run.
   * @param object   Container object.
   * @param property   Property of object expected to be decreased.
   * @param message   Message to display on error.
   */
  decreases<T>(
    modifier: (...args: any[]) => any,
    object: T,
    property: string,
    message?: string
  ): void;

  /**
   * Asserts that a function decreases a numeric object property or a function's return value by an amount (delta)
   *
   * T   Type of object or function.
   *
   * @param modifier function
   * @param object or getter function
   * @param property name _optional_
   * @param change amount (delta)
   * @param message _optional_
   */

  decreasesBy<T>(
    modifier: (...args: any[]) => any,
    object: T,
    property: string,
    /* keyof T */ change: number,
    message?: string
  ): void;
  decreasesBy<T>(
    modifier: (...args: any[]) => any,
    object: T,
    change: number,
    message?: string
  ): void;

  /**
   * Asserts that a function does not decrease an object property.
   *
   * T   Type of object.
   *
   * @param modifier   Function to run.
   * @param object   Container object.
   * @param property   Property of object expected not to be decreased.
   * @param message   Message to display on error.
   */
  doesNotDecrease<T>(
    modifier: (...args: any[]) => any,
    object: T,
    property: string,
    message?: string
  ): void;

  /**
   * Asserts that a function does not decreases a numeric object property or a function's return value by an amount (delta)
   *
   * T   Type of object or function.
   *
   * @param modifier function
   * @param object or getter function
   * @param property name _optional_
   * @param change amount (delta)
   * @param message _optional_
   */

  doesNotDecreaseBy<T>(
    modifier: (...args: any[]) => any,
    object: T,
    property: string,
    /* keyof T */ change: number,
    message?: string
  ): void;
  doesNotDecreaseBy<T>(
    modifier: (...args: any[]) => any,
    object: T,
    change: number,
    message?: string
  ): void;

  /**
   * Asserts that a function does not decreases a numeric object property or a function's return value by an amount (delta)
   *
   * T   Type of object or function.
   *
   * @param modifier function
   * @param object or getter function
   * @param property name _optional_
   * @param change amount (delta)
   * @param message _optional_
   */

  decreasesButNotBy<T>(
    modifier: (...args: any[]) => any,
    object: T,
    property: string,
    /* keyof T */ change: number,
    message?: string
  ): void;
  decreasesButNotBy<T>(
    modifier: (...args: any[]) => any,
    object: T,
    change: number,
    message?: string
  ): void;

  /**
   * Asserts if value is not a false value, and throws if it is a true value.
   *
   * This is added to allow for chai to be a drop-in replacement for
   * Node’s assert class.
   *
   * T   Type of object.
   *
   * @param object   Actual value.
   * @param message   Message to display on error.
   */
  ifError<T>(object: T, message?: string): void;

  /**
   * Asserts that object is extensible (can have new properties added to it).
   *
   * T   Type of object
   *
   * @param object   Actual value.
   * @param message   Message to display on error.
   */
  isExtensible<T>(object: T, message?: string): void;

  /**
   * Asserts that object is extensible (can have new properties added to it).
   *
   * T   Type of object
   *
   * @param object   Actual value.
   * @param message   Message to display on error.
   */
  extensible<T>(object: T, message?: string): void;

  /**
   * Asserts that object is not extensible.
   *
   * T   Type of object
   *
   * @param object   Actual value.
   * @param message   Message to display on error.
   */
  isNotExtensible<T>(object: T, message?: string): void;

  /**
   * Asserts that object is not extensible.
   *
   * T   Type of object
   *
   * @param object   Actual value.
   * @param message   Message to display on error.
   */
  notExtensible<T>(object: T, message?: string): void;

  /**
   * Asserts that object is sealed (can have new properties added to it
   * and its existing properties cannot be removed).
   *
   * T   Type of object
   *
   * @param object   Actual value.
   * @param message   Message to display on error.
   */
  isSealed<T>(object: T, message?: string): void;

  /**
   * Asserts that object is sealed (can have new properties added to it
   * and its existing properties cannot be removed).
   *
   * T   Type of object
   *
   * @param object   Actual value.
   * @param message   Message to display on error.
   */
  sealed<T>(object: T, message?: string): void;

  /**
   * Asserts that object is not sealed.
   *
   * T   Type of object
   *
   * @param object   Actual value.
   * @param message   Message to display on error.
   */
  isNotSealed<T>(object: T, message?: string): void;

  /**
   * Asserts that object is not sealed.
   *
   * T   Type of object
   *
   * @param object   Actual value.
   * @param message   Message to display on error.
   */
  notSealed<T>(object: T, message?: string): void;

  /**
   * Asserts that object is frozen (cannot have new properties added to it
   * and its existing properties cannot be removed).
   *
   * T   Type of object
   *
   * @param object   Actual value.
   * @param message   Message to display on error.
   */
  isFrozen<T>(object: T, message?: string): void;

  /**
   * Asserts that object is frozen (cannot have new properties added to it
   * and its existing properties cannot be removed).
   *
   * T   Type of object
   *
   * @param object   Actual value.
   * @param message   Message to display on error.
   */
  frozen<T>(object: T, message?: string): void;

  /**
   * Asserts that object is not frozen (cannot have new properties added to it
   * and its existing properties cannot be removed).
   *
   * T   Type of object
   *
   * @param object   Actual value.
   * @param message   Message to display on error.
   */
  isNotFrozen<T>(object: T, message?: string): void;

  /**
   * Asserts that object is not frozen (cannot have new properties added to it
   * and its existing properties cannot be removed).
   *
   * T   Type of object
   *
   * @param object   Actual value.
   * @param message   Message to display on error.
   */
  notFrozen<T>(object: T, message?: string): void;

  /**
   * Asserts that the target does not contain any values. For arrays and
   * strings, it checks the length property. For Map and Set instances, it
   * checks the size property. For non-function objects, it gets the count
   * of own enumerable string keys.
   *
   * T   Type of object
   *
   * @param object   Actual value.
   * @param message   Message to display on error.
   */
  isEmpty<T extends object | any[] | string | Map<any, any> | Set<any>>(
    object: T,
    message?: string
  ): void;

  /**
   * Asserts that the target contains values. For arrays and strings, it checks
   * the length property. For Map and Set instances, it checks the size property.
   * For non-function objects, it gets the count of own enumerable string keys.
   *
   * T   Type of object.
   *
   * @param object   Object to test.
   * @param message    Message to display on error.
   */
  isNotEmpty<T>(object: T, message?: string): void;

  /**
   * Asserts that `object` has at least one of the `keys` provided.
   * You can also provide a single object instead of a `keys` array and its keys
   * will be used as the expected set of keys.
   *
   * T   Type of object.
   *
   * @param object   Object to test.
   * @param keys   Keys to check
   * @param message    Message to display on error.
   */
  hasAnyKeys<T>(
    object: T,
    keys: Array<object | string> | {[key: string]: any},
    message?: string
  ): void;

  /**
   * Asserts that `object` has all and only all of the `keys` provided.
   * You can also provide a single object instead of a `keys` array and its keys
   * will be used as the expected set of keys.
   *
   * T   Type of object.
   *
   * @param object   Object to test.
   * @param keys   Keys to check
   * @param message    Message to display on error.
   */
  hasAllKeys<T>(
    object: T,
    keys: Array<object | string> | {[key: string]: any},
    message?: string
  ): void;

  /**
   * Asserts that `object` has all of the `keys` provided but may have more keys not listed.
   * You can also provide a single object instead of a `keys` array and its keys
   * will be used as the expected set of keys.
   *
   * T   Type of object.
   *
   * @param object   Object to test.
   * @param keys   Keys to check
   * @param message    Message to display on error.
   */
  containsAllKeys<T>(
    object: T,
    keys: Array<object | string> | {[key: string]: any},
    message?: string
  ): void;

  /**
   * Asserts that `object` has none of the `keys` provided.
   * You can also provide a single object instead of a `keys` array and its keys
   * will be used as the expected set of keys.
   *
   * T   Type of object.
   *
   * @param object   Object to test.
   * @param keys   Keys to check
   * @param message    Message to display on error.
   */
  doesNotHaveAnyKeys<T>(
    object: T,
    keys: Array<object | string> | {[key: string]: any},
    message?: string
  ): void;

  /**
   * Asserts that `object` does not have at least one of the `keys` provided.
   * You can also provide a single object instead of a `keys` array and its keys
   * will be used as the expected set of keys.
   *
   * T   Type of object.
   *
   * @param object   Object to test.
   * @param keys   Keys to check
   * @param message    Message to display on error.
   */
  doesNotHaveAllKeys<T>(
    object: T,
    keys: Array<object | string> | {[key: string]: any},
    message?: string
  ): void;

  /**
   * Asserts that `object` has at least one of the `keys` provided.
   * Since Sets and Maps can have objects as keys you can use this assertion to perform
   * a deep comparison.
   * You can also provide a single object instead of a `keys` array and its keys
   * will be used as the expected set of keys.
   *
   * T   Type of object.
   *
   * @param object   Object to test.
   * @param keys   Keys to check
   * @param message    Message to display on error.
   */
  hasAnyDeepKeys<T>(
    object: T,
    keys: Array<object | string> | {[key: string]: any},
    message?: string
  ): void;

  /**
   * Asserts that `object` has all and only all of the `keys` provided.
   * Since Sets and Maps can have objects as keys you can use this assertion to perform
   * a deep comparison.
   * You can also provide a single object instead of a `keys` array and its keys
   * will be used as the expected set of keys.
   *
   * T   Type of object.
   *
   * @param object   Object to test.
   * @param keys   Keys to check
   * @param message    Message to display on error.
   */
  hasAllDeepKeys<T>(
    object: T,
    keys: Array<object | string> | {[key: string]: any},
    message?: string
  ): void;

  /**
   * Asserts that `object` contains all of the `keys` provided.
   * Since Sets and Maps can have objects as keys you can use this assertion to perform
   * a deep comparison.
   * You can also provide a single object instead of a `keys` array and its keys
   * will be used as the expected set of keys.
   *
   * T   Type of object.
   *
   * @param object   Object to test.
   * @param keys   Keys to check
   * @param message    Message to display on error.
   */
  containsAllDeepKeys<T>(
    object: T,
    keys: Array<object | string> | {[key: string]: any},
    message?: string
  ): void;

  /**
   * Asserts that `object` contains all of the `keys` provided.
   * Since Sets and Maps can have objects as keys you can use this assertion to perform
   * a deep comparison.
   * You can also provide a single object instead of a `keys` array and its keys
   * will be used as the expected set of keys.
   *
   * T   Type of object.
   *
   * @param object   Object to test.
   * @param keys   Keys to check
   * @param message    Message to display on error.
   */
  doesNotHaveAnyDeepKeys<T>(
    object: T,
    keys: Array<object | string> | {[key: string]: any},
    message?: string
  ): void;

  /**
   * Asserts that `object` contains all of the `keys` provided.
   * Since Sets and Maps can have objects as keys you can use this assertion to perform
   * a deep comparison.
   * You can also provide a single object instead of a `keys` array and its keys
   * will be used as the expected set of keys.
   *
   * T   Type of object.
   *
   * @param object   Object to test.
   * @param keys   Keys to check
   * @param message    Message to display on error.
   */
  doesNotHaveAllDeepKeys<T>(
    object: T,
    keys: Array<object | string> | {[key: string]: any},
    message?: string
  ): void;

  /**
   * Asserts that object has a direct or inherited property named by property,
   * which can be a string using dot- and bracket-notation for nested reference.
   *
   * T   Type of object.
   *
   * @param object   Object to test.
   * @param property    Property to test.
   * @param message    Message to display on error.
   */
  nestedProperty<T>(object: T, property: string, message?: string): void;

  /**
   * Asserts that object does not have a property named by property,
   * which can be a string using dot- and bracket-notation for nested reference.
   * The property cannot exist on the object nor anywhere in its prototype chain.
   *
   * T   Type of object.
   *
   * @param object   Object to test.
   * @param property    Property to test.
   * @param message    Message to display on error.
   */
  notNestedProperty<T>(object: T, property: string, message?: string): void;

  /**
   * Asserts that object has a property named by property with value given by value.
   * property can use dot- and bracket-notation for nested reference. Uses a strict equality check (===).
   *
   * T   Type of object.
   *
   * @param object   Object to test.
   * @param property    Property to test.
   * @param value    Value to test.
   * @param message    Message to display on error.
   */
  nestedPropertyVal<T>(
    object: T,
    property: string,
    value: any,
    message?: string
  ): void;

  /**
   * Asserts that object does not have a property named by property with value given by value.
   * property can use dot- and bracket-notation for nested reference. Uses a strict equality check (===).
   *
   * T   Type of object.
   *
   * @param object   Object to test.
   * @param property    Property to test.
   * @param value    Value to test.
   * @param message    Message to display on error.
   */
  notNestedPropertyVal<T>(
    object: T,
    property: string,
    value: any,
    message?: string
  ): void;

  /**
   * Asserts that object has a property named by property with a value given by value.
   * property can use dot- and bracket-notation for nested reference. Uses a deep equality check.
   *
   * T   Type of object.
   *
   * @param object   Object to test.
   * @param property    Property to test.
   * @param value    Value to test.
   * @param message    Message to display on error.
   */
  deepNestedPropertyVal<T>(
    object: T,
    property: string,
    value: any,
    message?: string
  ): void;

  /**
   * Asserts that object does not have a property named by property with value given by value.
   * property can use dot- and bracket-notation for nested reference. Uses a deep equality check.
   *
   * T   Type of object.
   *
   * @param object   Object to test.
   * @param property    Property to test.
   * @param value    Value to test.
   * @param message    Message to display on error.
   */
  notDeepNestedPropertyVal<T>(
    object: T,
    property: string,
    value: any,
    message?: string
  ): void;

  isCallable(value: unknown, message?: string): void;
  isNotCallable(value: unknown, message?: string): void;
  isNumeric(value: unknown, message?: string): void;
  isNotNumeric(value: unknown, message?: string): void;
  ownProperty<T extends Record<string, any>>(
    obj: T,
    prop: (Record<string, never> & string) | keyof T,
    message?: string
  ): void;

  notOwnProperty(
    obj: Record<string, any>,
    prop: string,
    message?: string
  ): void;
  ownPropertyVal<T extends Record<string, any>>(
    obj: T,
    prop: (Record<string, never> & string) | keyof T,
    value: any,
    message?: string
  ): void;
  notOwnPropertyVal(
    obj: Record<string, any>,
    prop: string,
    value: any,
    message?: string
  ): void;
  deepOwnPropertyVal(
    obj: Record<string, any>,
    prop: string,
    value: any,
    message?: string
  ): void;
  notDeepOwnPropertyVal(
    obj: Record<string, any>,
    prop: string,
    value: any,
    message?: string
  ): void;
  notSameMembers(set1: any[], set2: any[], message?: string): void;
  isIterable(obj: unknown, message?: string): void;
  changesButNotBy(
    modifier: (...args: any[]) => any,
    object: object,
    property: string,
    delta: number,
    message?: string
  ): void;
  changesButNotBy(
    modifier: (...args: any[]) => any,
    object: object,
    delta: number,
    message?: string
  ): void;
  empty<T>(object: T, message?: string): void;
  notEmpty<T>(object: T, message?: string): void;
}

/**
 * ### assert(expression, message)
 *
 * Write your own test expressions.
 *
 *     assert('foo' !== 'bar', 'foo is not bar');
 *     assert(Array.isArray([]), 'empty arrays are arrays');
 *
 * @param {unknown} expression - expression to test for truthiness
 * @param {string} message - message to display on error
 * @name assert
 * @namespace Assert
 * @public
 */
function asserts(expression: any, message?: string): asserts expression {
  const test = new Assertion(null, undefined, chai.assert, true);
  test.assert(expression, message, '[ negation message unavailable ]');
}

export const assert = asserts as Assert;

/**
 * ### .fail([message])
 * ### .fail(actual, expected, [message], [operator])
 *
 * Throw a failure. Node.js `assert` module-compatible.
 *
 *     assert.fail();
 *     assert.fail("custom error message");
 *     assert.fail(1, 2);
 *     assert.fail(1, 2, "custom error message");
 *     assert.fail(1, 2, "custom error message", ">");
 *     assert.fail(1, 2, undefined, ">");
 *
 * @name fail
 * @param {unknown} actual
 * @param {unknown} expected
 * @param {string} message
 * @param {string} operator
 * @namespace Assert
 * @public
 */
assert.fail = function (
  actual: unknown,
  expected?: unknown,
  message?: string,
  operator?: Operator
) {
  if (message == null && operator == null && arguments.length < 2) {
    // Comply with Node's fail([message]) interface

    message = actual as string;
    actual = undefined!;
  }

  message = message || 'assert.fail()';
  throw new AssertionError(
    message as string,
    {
      actual,
      expected,
      operator
    },
    assert.fail
  );
};

/**
 * ### .isOk(object, [message])
 *
 * Asserts that `object` is truthy.
 *
 *     assert.isOk('everything', 'everything is ok');
 *     assert.isOk(false, 'this will fail');
 *
 * @name isOk
 * @alias ok
 * @param {unknown} value object to test
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.isOk = function (value: unknown, message: string): asserts value {
  new Assertion(value, message, assert.isOk, true).is.ok;
};

/**
 * ### .isNotOk(object, [message])
 *
 * Asserts that `object` is falsy.
 *
 *     assert.isNotOk('everything', 'this will fail');
 *     assert.isNotOk(false, 'this will pass');
 *
 * @name isNotOk
 * @alias notOk
 * @param {unknown} value object to test
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.isNotOk = function (value: unknown, message: string) {
  new Assertion(value, message, assert.isNotOk, true).is.not.ok;
};

/**
 * ### .equal(actual, expected, [message])
 *
 * Asserts non-strict equality (`==`) of `actual` and `expected`.
 *
 *     assert.equal(3, '3', '== coerces values to strings');
 *
 * @name equal
 * @param {unknown} actual
 * @param {unknown} expected
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.equal = function (actual: unknown, expected: unknown, message: string) {
  const test = new Assertion(actual, message, assert.equal, true);

  test.assert(
    expected == flag(test, 'object'),
    'expected #{this} to equal #{exp}',
    'expected #{this} to not equal #{act}',
    expected,
    actual,
    true
  );
};

/**
 * ### .notEqual(actual, expected, [message])
 *
 * Asserts non-strict inequality (`!=`) of `actual` and `expected`.
 *
 *     assert.notEqual(3, 4, 'these numbers are not equal');
 *
 * @name notEqual
 * @param {unknown} actual
 * @param {unknown} expression
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.notEqual = function (
  actual: unknown,
  expression: unknown,
  message: string
) {
  const test = new Assertion(actual, message, assert.notEqual, true);

  test.assert(
    expression != flag(test, 'object'),
    'expected #{this} to not equal #{exp}',
    'expected #{this} to equal #{act}',
    expression,
    actual,
    true
  );
};

/**
 * ### .strictEqual(actual, expected, [message])
 *
 * Asserts strict equality (`===`) of `actual` and `expected`.
 *
 *     assert.strictEqual(true, true, 'these booleans are strictly equal');
 *
 * @name strictEqual
 * @param {unknown} actual
 * @param {unknown} expression
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.strictEqual = function (
  actual: unknown,
  expression: unknown,
  message: string
) {
  new Assertion(actual, message, assert.strictEqual, true).to.equal(expression);
};

/**
 * ### .notStrictEqual(actual, expected, [message])
 *
 * Asserts strict inequality (`!==`) of `actual` and `expected`.
 *
 *     assert.notStrictEqual(3, '3', 'no coercion for strict equality');
 *
 * @name notStrictEqual
 * @param {unknown} actual
 * @param {unknown} expression
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.notStrictEqual = function (
  actual: unknown,
  expression: unknown,
  message: string
) {
  new Assertion(actual, message, assert.notStrictEqual, true).to.not.equal(
    expression
  );
};

/**
 * ### .deepEqual(actual, expected, [message])
 *
 * Asserts that `actual` is deeply equal to `expected`.
 *
 *     assert.deepEqual({ tea: 'green' }, { tea: 'green' });
 *
 * @name deepEqual
 * @param {unknown} actual
 * @param {unknown} expression
 * @param {string} message
 * @alias deepStrictEqual
 * @namespace Assert
 * @public
 */
assert.deepEqual = assert.deepStrictEqual = function (
  actual: unknown,
  expression: unknown,
  message: string
) {
  new Assertion(actual, message, assert.deepEqual, true).to.eql(expression);
};

/**
 * ### .notDeepEqual(actual, expected, [message])
 *
 * Assert that `actual` is not deeply equal to `expected`.
 *
 *     assert.notDeepEqual({ tea: 'green' }, { tea: 'jasmine' });
 *
 * @name notDeepEqual
 * @param {unknown} actual
 * @param {unknown} expression
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.notDeepEqual = function (
  actual: unknown,
  expression: unknown,
  message: string
) {
  new Assertion(actual, message, assert.notDeepEqual, true).to.not.eql(
    expression
  );
};

/**
 * ### .isAbove(valueToCheck, valueToBeAbove, [message])
 *
 * Asserts `valueToCheck` is strictly greater than (>) `valueToBeAbove`.
 *
 *     assert.isAbove(5, 2, '5 is strictly greater than 2');
 *
 * @name isAbove
 * @param {unknown} valueToCheck
 * @param {unknown} valueToBeAbove
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.isAbove = function (
  valueToCheck: number,
  valueToBeAbove: number,
  message?: string
): void {
  new Assertion(valueToCheck, message, assert.isAbove, true).to.be.above(
    valueToBeAbove
  );
};

/**
 * ### .isAtLeast(valueToCheck, valueToBeAtLeast, [message])
 *
 * Asserts `valueToCheck` is greater than or equal to (>=) `valueToBeAtLeast`.
 *
 *     assert.isAtLeast(5, 2, '5 is greater or equal to 2');
 *     assert.isAtLeast(3, 3, '3 is greater or equal to 3');
 *
 * @name isAtLeast
 * @param {unknown} valueToCheck
 * @param {unknown} valueToBeAtLeast
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.isAtLeast = function (
  valueToCheck: number,
  valueToBeAtLeast: number,
  message?: string
): void {
  new Assertion(valueToCheck, message, assert.isAtLeast, true).to.be.least(
    valueToBeAtLeast
  );
};

/**
 * ### .isBelow(valueToCheck, valueToBeBelow, [message])
 *
 * Asserts `valueToCheck` is strictly less than (<) `valueToBeBelow`.
 *
 *     assert.isBelow(3, 6, '3 is strictly less than 6');
 *
 * @name isBelow
 * @param {unknown} valueToCheck
 * @param {unknown} valueToBeBelow
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.isBelow = function (
  valueToCheck: number,
  valueToBeBelow: number,
  message?: string
) {
  new Assertion(valueToCheck, message, assert.isBelow, true).to.be.below(
    valueToBeBelow
  );
};

/**
 * ### .isAtMost(valueToCheck, valueToBeAtMost, [message])
 *
 * Asserts `valueToCheck` is less than or equal to (<=) `valueToBeAtMost`.
 *
 *     assert.isAtMost(3, 6, '3 is less than or equal to 6');
 *     assert.isAtMost(4, 4, '4 is less than or equal to 4');
 *
 * @name isAtMost
 * @param {unknown} valueToCheck
 * @param {unknown} valueToBeAtMost
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.isAtMost = function (
  valueToCheck: number,
  valueToBeAtMost: number,
  message?: string
) {
  new Assertion(valueToCheck, message, assert.isAtMost, true).to.be.most(
    valueToBeAtMost
  );
};

/**
 * ### .isTrue(value, [message])
 *
 * Asserts that `value` is true.
 *
 *     var teaServed = true;
 *     assert.isTrue(teaServed, 'the tea has been served');
 *
 * @name isTrue
 * @param {unknown} value
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.isTrue = function (value: unknown, message: string) {
  new Assertion(value, message, assert.isTrue, true).is['true'];
};

/**
 * ### .isNotTrue(value, [message])
 *
 * Asserts that `value` is not true.
 *
 *     var tea = 'tasty chai';
 *     assert.isNotTrue(tea, 'great, time for tea!');
 *
 * @name isNotTrue
 * @param {unknown} value
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.isNotTrue = function (value: unknown, message: string) {
  new Assertion(value, message, assert.isNotTrue, true).to.not.equal(true);
};

/**
 * ### .isFalse(value, [message])
 *
 * Asserts that `value` is false.
 *
 *     var teaServed = false;
 *     assert.isFalse(teaServed, 'no tea yet? hmm...');
 *
 * @name isFalse
 * @param {unknown} value
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.isFalse = function (value: unknown, message: string) {
  new Assertion(value, message, assert.isFalse, true).is.false;
};

/**
 * ### .isNotFalse(value, [message])
 *
 * Asserts that `value` is not false.
 *
 *     var tea = 'tasty chai';
 *     assert.isNotFalse(tea, 'great, time for tea!');
 *
 * @name isNotFalse
 * @param {unknown} value
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.isNotFalse = function (value: unknown, message: string) {
  new Assertion(value, message, assert.isNotFalse, true).to.not.equal(false);
};

/**
 * ### .isNull(value, [message])
 *
 * Asserts that `value` is null.
 *
 *     assert.isNull(err, 'there was no error');
 *
 * @name isNull
 * @param {unknown} value
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.isNull = function (value: unknown, message: string) {
  new Assertion(value, message, assert.isNull, true).to.equal(null);
};

/**
 * ### .isNotNull(value, [message])
 *
 * Asserts that `value` is not null.
 *
 *     var tea = 'tasty chai';
 *     assert.isNotNull(tea, 'great, time for tea!');
 *
 * @name isNotNull
 * @param {unknown} value
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.isNotNull = function (value: unknown, message: string) {
  new Assertion(value, message, assert.isNotNull, true).to.not.equal(null);
};

/**
 * ### .isNaN
 *
 * Asserts that value is NaN.
 *
 *     assert.isNaN(NaN, 'NaN is NaN');
 *
 * @name isNaN
 * @param {unknown} value
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.isNaN = function (value: unknown, message: string) {
  new Assertion(value, message, assert.isNaN, true).to.be.NaN;
};

/**
 * ### .isNotNaN
 *
 * Asserts that value is not NaN.
 *
 *     assert.isNotNaN(4, '4 is not NaN');
 *
 * @name isNotNaN
 * @param {unknown} value
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.isNotNaN = function (value: unknown, message: string) {
  new Assertion(value, message, assert.isNotNaN, true).not.to.be.NaN;
};

/**
 * ### .exists
 *
 * Asserts that the target is neither `null` nor `undefined`.
 *
 *     var foo = 'hi';
 *     assert.exists(foo, 'foo is neither `null` nor `undefined`');
 *
 * @name exists
 * @param {unknown} value
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.exists = function (value: unknown, message: string) {
  new Assertion(value, message, assert.exists, true).to.exist;
};

/**
 * ### .notExists
 *
 * Asserts that the target is either `null` or `undefined`.
 *
 *     var bar = null
 *     , baz;
 *
 *     assert.notExists(bar);
 *     assert.notExists(baz, 'baz is either null or undefined');
 *
 * @name notExists
 * @param {unknown} value
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.notExists = function (value: unknown, message: string) {
  new Assertion(value, message, assert.notExists, true).to.not.exist;
};

/**
 * ### .isUndefined(value, [message])
 *
 * Asserts that `value` is `undefined`.
 *
 *     var tea;
 *     assert.isUndefined(tea, 'no tea defined');
 *
 * @name isUndefined
 * @param {unknown} value
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.isUndefined = function (value: unknown, message: string) {
  new Assertion(value, message, assert.isUndefined, true).to.equal(undefined);
};

/**
 * ### .isDefined(value, [message])
 *
 * Asserts that `value` is not `undefined`.
 *
 *     var tea = 'cup of chai';
 *     assert.isDefined(tea, 'tea has been defined');
 *
 * @name isDefined
 * @param {unknown} value
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.isDefined = function (value: unknown, message: string) {
  new Assertion(value, message, assert.isDefined, true).to.not.equal(undefined);
};

/**
 * ### .isCallable(value, [message])
 *
 * Asserts that `value` is a callable function.
 *
 *     function serveTea() { return 'cup of tea'; };
 *     assert.isCallable(serveTea, 'great, we can have tea now');
 *
 * @name isCallable
 * @param {unknown} value
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.isCallable = function (value: unknown, message: string) {
  new Assertion(value, message, assert.isCallable, true).is.callable;
};

/**
 * ### .isNotCallable(value, [message])
 *
 * Asserts that `value` is _not_ a callable function.
 *
 *     var serveTea = [ 'heat', 'pour', 'sip' ];
 *     assert.isNotCallable(serveTea, 'great, we have listed the steps');
 *
 * @name isNotCallable
 * @param {unknown} value
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.isNotCallable = function (value: unknown, message: string) {
  new Assertion(value, message, assert.isNotCallable, true).is.not.callable;
};

/**
 * ### .isObject(value, [message])
 *
 * Asserts that `value` is an object of type 'Object' (as revealed by `Object.prototype.toString`).
 * _The assertion does not match subclassed objects._
 *
 *     var selection = { name: 'Chai', serve: 'with spices' };
 *     assert.isObject(selection, 'tea selection is an object');
 *
 * @name isObject
 * @param {unknown} value
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.isObject = function (value: unknown, message: string) {
  new Assertion(value, message, assert.isObject, true).to.be.a('object');
};

/**
 * ### .isNotObject(value, [message])
 *
 * Asserts that `value` is _not_ an object of type 'Object' (as revealed by `Object.prototype.toString`).
 *
 *     var selection = 'chai'
 *     assert.isNotObject(selection, 'tea selection is not an object');
 *     assert.isNotObject(null, 'null is not an object');
 *
 * @name isNotObject
 * @param {unknown} value
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.isNotObject = function (value: unknown, message: string) {
  new Assertion(value, message, assert.isNotObject, true).to.not.be.a('object');
};

/**
 * ### .isArray(value, [message])
 *
 * Asserts that `value` is an array.
 *
 *     var menu = [ 'green', 'chai', 'oolong' ];
 *     assert.isArray(menu, 'what kind of tea do we want?');
 *
 * @name isArray
 * @param {unknown} value
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.isArray = function (value: unknown, message: string) {
  new Assertion(value, message, assert.isArray, true).to.be.an('array');
};

/**
 * ### .isNotArray(value, [message])
 *
 * Asserts that `value` is _not_ an array.
 *
 *     var menu = 'green|chai|oolong';
 *     assert.isNotArray(menu, 'what kind of tea do we want?');
 *
 * @name isNotArray
 * @param {unknown} value
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.isNotArray = function (value: unknown, message: string) {
  new Assertion(value, message, assert.isNotArray, true).to.not.be.an('array');
};

/**
 * ### .isString(value, [message])
 *
 * Asserts that `value` is a string.
 *
 *     var teaOrder = 'chai';
 *     assert.isString(teaOrder, 'order placed');
 *
 * @name isString
 * @param {unknown} value
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.isString = function (value: unknown, message: string) {
  new Assertion(value, message, assert.isString, true).to.be.a('string');
};

/**
 * ### .isNotString(value, [message])
 *
 * Asserts that `value` is _not_ a string.
 *
 *     var teaOrder = 4;
 *     assert.isNotString(teaOrder, 'order placed');
 *
 * @name isNotString
 * @param {unknown} value
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.isNotString = function (value: unknown, message: string) {
  new Assertion(value, message, assert.isNotString, true).to.not.be.a('string');
};

/**
 * ### .isNumber(value, [message])
 *
 * Asserts that `value` is a number.
 *
 *     var cups = 2;
 *     assert.isNumber(cups, 'how many cups');
 *
 * @name isNumber
 * @param {number} value
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.isNumber = function (value: unknown, message: string) {
  new Assertion(value, message, assert.isNumber, true).to.be.a('number');
};

/**
 * ### .isNotNumber(value, [message])
 *
 * Asserts that `value` is _not_ a number.
 *
 *     var cups = '2 cups please';
 *     assert.isNotNumber(cups, 'how many cups');
 *
 * @name isNotNumber
 * @param {unknown} value
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.isNotNumber = function (value: unknown, message: string) {
  new Assertion(value, message, assert.isNotNumber, true).to.not.be.a('number');
};

/**
 * ### .isNumeric(value, [message])
 *
 * Asserts that `value` is a number or BigInt.
 *
 *     var cups = 2;
 *     assert.isNumeric(cups, 'how many cups');
 *
 *     var cups = 10n;
 *     assert.isNumeric(cups, 'how many cups');
 *
 * @name isNumeric
 * @param {unknown} value
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.isNumeric = function (value: unknown, message: string) {
  new Assertion(value, message, assert.isNumeric, true).is.numeric;
};

/**
 * ### .isNotNumeric(value, [message])
 *
 * Asserts that `value` is _not_ a number or BigInt.
 *
 *     var cups = '2 cups please';
 *     assert.isNotNumeric(cups, 'how many cups');
 *
 * @name isNotNumeric
 * @param {unknown} value
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.isNotNumeric = function (value: unknown, message: string) {
  new Assertion(value, message, assert.isNotNumeric, true).is.not.numeric;
};

/**
 * ### .isFinite(value, [message])
 *
 * Asserts that `value` is a finite number. Unlike `.isNumber`, this will fail for `NaN` and `Infinity`.
 *
 *     var cups = 2;
 *     assert.isFinite(cups, 'how many cups');
 *     assert.isFinite(NaN); // throws
 *
 * @name isFinite
 * @param {number} value
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.isFinite = function (value: unknown, message: string) {
  new Assertion(value, message, assert.isFinite, true).to.be.finite;
};

/**
 * ### .isBoolean(value, [message])
 *
 * Asserts that `value` is a boolean.
 *
 *     var teaReady = true
 *     , teaServed = false;
 *
 *     assert.isBoolean(teaReady, 'is the tea ready');
 *     assert.isBoolean(teaServed, 'has tea been served');
 *
 * @name isBoolean
 * @param {unknown} value
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.isBoolean = function (value: unknown, message: string) {
  new Assertion(value, message, assert.isBoolean, true).to.be.a('boolean');
};

/**
 * ### .isNotBoolean(value, [message])
 *
 * Asserts that `value` is _not_ a boolean.
 *
 *     var teaReady = 'yep'
 *     , teaServed = 'nope';
 *
 *     assert.isNotBoolean(teaReady, 'is the tea ready');
 *     assert.isNotBoolean(teaServed, 'has tea been served');
 *
 * @name isNotBoolean
 * @param {unknown} value
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.isNotBoolean = function (value: unknown, message: string) {
  new Assertion(value, message, assert.isNotBoolean, true).to.not.be.a(
    'boolean'
  );
};

/**
 * ### .typeOf(value, name, [message])
 *
 * Asserts that `value`'s type is `name`, as determined by
 * `Object.prototype.toString`.
 *
 *     assert.typeOf({ tea: 'chai' }, 'object', 'we have an object');
 *     assert.typeOf(['chai', 'jasmine'], 'array', 'we have an array');
 *     assert.typeOf('tea', 'string', 'we have a string');
 *     assert.typeOf(/tea/, 'regexp', 'we have a regular expression');
 *     assert.typeOf(null, 'null', 'we have a null');
 *     assert.typeOf(undefined, 'undefined', 'we have an undefined');
 *
 * @name typeOf
 * @param {unknown} value
 * @param {string} type
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.typeOf = function (value: unknown, type: string, message: string) {
  new Assertion(value, message, assert.typeOf, true).to.be.a(type);
};

/**
 * ### .notTypeOf(value, name, [message])
 *
 * Asserts that `value`'s type is _not_ `name`, as determined by
 * `Object.prototype.toString`.
 *
 *     assert.notTypeOf('tea', 'number', 'strings are not numbers');
 *
 * @name notTypeOf
 * @param {unknown} value
 * @param {string} type
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.notTypeOf = function (value: unknown, type: string, message: string) {
  new Assertion(value, message, assert.notTypeOf, true).to.not.be.a(type);
};

/**
 * ### .instanceOf(object, constructor, [message])
 *
 * Asserts that `value` is an instance of `constructor`.
 *
 *     var Tea = function (name) { this.name = name; }
 *     , chai = new Tea('chai');
 *
 *     assert.instanceOf(chai, Tea, 'chai is an instance of tea');
 *
 * @name instanceOf
 * @param {object} value
 * @param {object} type
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.instanceOf = function (value: object, type: object, message: string) {
  new Assertion(value, message, assert.instanceOf, true).to.be.instanceOf(type);
};

/**
 * ### .notInstanceOf(object, constructor, [message])
 *
 * Asserts `value` is not an instance of `constructor`.
 *
 *     var Tea = function (name) { this.name = name; }
 *     , chai = new String('chai');
 *
 *     assert.notInstanceOf(chai, Tea, 'chai is not an instance of tea');
 *
 * @name notInstanceOf
 * @param {object} value
 * @param {object} type
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.notInstanceOf = function <
  T,
  U extends abstract new (...args: any) => any
>(value: T, type: InstanceType<U>, message: string) {
  new Assertion(
    value,
    message,
    assert.notInstanceOf,
    true
  ).to.not.be.instanceOf(type);
};

/**
 * ### .include(haystack, needle, [message])
 *
 * Asserts that `haystack` includes `needle`. Can be used to assert the
 * inclusion of a value in an array, a substring in a string, or a subset of
 * properties in an object.
 *
 *     assert.include([1,2,3], 2, 'array contains value');
 *     assert.include('foobar', 'foo', 'string contains substring');
 *     assert.include({ foo: 'bar', hello: 'universe' }, { foo: 'bar' }, 'object contains property');
 *
 * Strict equality (===) is used. When asserting the inclusion of a value in
 * an array, the array is searched for an element that's strictly equal to the
 * given value. When asserting a subset of properties in an object, the object
 * is searched for the given property keys, checking that each one is present
 * and strictly equal to the given property value. For instance:
 *
 *     var obj1 = {a: 1}
 *     , obj2 = {b: 2};
 *     assert.include([obj1, obj2], obj1);
 *     assert.include({foo: obj1, bar: obj2}, {foo: obj1});
 *     assert.include({foo: obj1, bar: obj2}, {foo: obj1, bar: obj2});
 *
 * @name include
 * @param {Array | string} expression
 * @param {unknown} inc
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.include = function <T>(
  expression:
    | string
    | readonly T[]
    | ReadonlySet<T>
    | ReadonlyMap<any, T>
    | object,
  inc: unknown,
  message: string
) {
  new Assertion(expression, message, assert.include, true).include(inc);
};

/**
 * ### .notInclude(haystack, needle, [message])
 *
 * Asserts that `haystack` does not include `needle`. Can be used to assert
 * the absence of a value in an array, a substring in a string, or a subset of
 * properties in an object.
 *
 *     assert.notInclude([1,2,3], 4, "array doesn't contain value");
 *     assert.notInclude('foobar', 'baz', "string doesn't contain substring");
 *     assert.notInclude({ foo: 'bar', hello: 'universe' }, { foo: 'baz' }, 'object doesn't contain property');
 *
 * Strict equality (===) is used. When asserting the absence of a value in an
 * array, the array is searched to confirm the absence of an element that's
 * strictly equal to the given value. When asserting a subset of properties in
 * an object, the object is searched to confirm that at least one of the given
 * property keys is either not present or not strictly equal to the given
 * property value. For instance:
 *
 *     var obj1 = {a: 1}
 *     , obj2 = {b: 2};
 *     assert.notInclude([obj1, obj2], {a: 1});
 *     assert.notInclude({foo: obj1, bar: obj2}, {foo: {a: 1}});
 *     assert.notInclude({foo: obj1, bar: obj2}, {foo: obj1, bar: {b: 2}});
 *
 * @name notInclude
 * @param {Array | string} expression
 * @param {unknown} inc
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.notInclude = function <T>(
  expression:
    | string
    | readonly T[]
    | ReadonlySet<T>
    | ReadonlyMap<any, T>
    | object,
  inc: unknown,
  message: string
) {
  new Assertion(expression, message, assert.notInclude, true).not.include(inc);
};

/**
 * ### .deepInclude(haystack, needle, [message])
 *
 * Asserts that `haystack` includes `needle`. Can be used to assert the
 * inclusion of a value in an array or a subset of properties in an object.
 * Deep equality is used.
 *
 *     var obj1 = {a: 1}
 *     , obj2 = {b: 2};
 *     assert.deepInclude([obj1, obj2], {a: 1});
 *     assert.deepInclude({foo: obj1, bar: obj2}, {foo: {a: 1}});
 *     assert.deepInclude({foo: obj1, bar: obj2}, {foo: {a: 1}, bar: {b: 2}});
 *
 * @name deepInclude
 * @param {Array | string} expression
 * @param {unknown} inc
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.deepInclude = function <T>(
  expression:
    | string
    | readonly T[]
    | ReadonlySet<T>
    | ReadonlyMap<any, T>
    | object,
  inc: unknown,
  message: string
) {
  new Assertion(expression, message, assert.deepInclude, true).deep.include(
    inc
  );
};

/**
 * ### .notDeepInclude(haystack, needle, [message])
 *
 * Asserts that `haystack` does not include `needle`. Can be used to assert
 * the absence of a value in an array or a subset of properties in an object.
 * Deep equality is used.
 *
 *     var obj1 = {a: 1}
 *     , obj2 = {b: 2};
 *     assert.notDeepInclude([obj1, obj2], {a: 9});
 *     assert.notDeepInclude({foo: obj1, bar: obj2}, {foo: {a: 9}});
 *     assert.notDeepInclude({foo: obj1, bar: obj2}, {foo: {a: 1}, bar: {b: 9}});
 *
 * @name notDeepInclude
 * @param {Array | string} expression
 * @param {unknown} inc
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.notDeepInclude = function <T>(
  expression:
    | string
    | readonly T[]
    | ReadonlySet<T>
    | ReadonlyMap<any, T>
    | object,
  inc: unknown,
  message: string
) {
  new Assertion(
    expression,
    message,
    assert.notDeepInclude,
    true
  ).not.deep.include(inc);
};

/**
 * ### .nestedInclude(haystack, needle, [message])
 *
 * Asserts that 'haystack' includes 'needle'.
 * Can be used to assert the inclusion of a subset of properties in an
 * object.
 * Enables the use of dot- and bracket-notation for referencing nested
 * properties.
 * '[]' and '.' in property names can be escaped using double backslashes.
 *
 *     assert.nestedInclude({'.a': {'b': 'x'}}, {'\\.a.[b]': 'x'});
 *     assert.nestedInclude({'a': {'[b]': 'x'}}, {'a.\\[b\\]': 'x'});
 *
 * @name nestedInclude
 * @param {object} expression
 * @param {object} inc
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.nestedInclude = function (
  expression: object,
  inc: object,
  message: string
) {
  new Assertion(expression, message, assert.nestedInclude, true).nested.include(
    inc
  );
};

/**
 * ### .notNestedInclude(haystack, needle, [message])
 *
 * Asserts that 'haystack' does not include 'needle'.
 * Can be used to assert the absence of a subset of properties in an
 * object.
 * Enables the use of dot- and bracket-notation for referencing nested
 * properties.
 * '[]' and '.' in property names can be escaped using double backslashes.
 *
 *     assert.notNestedInclude({'.a': {'b': 'x'}}, {'\\.a.b': 'y'});
 *     assert.notNestedInclude({'a': {'[b]': 'x'}}, {'a.\\[b\\]': 'y'});
 *
 * @name notNestedInclude
 * @param {object} expression
 * @param {object} inc
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.notNestedInclude = function (
  expression: object,
  inc: object,
  message: string
) {
  new Assertion(
    expression,
    message,
    assert.notNestedInclude,
    true
  ).not.nested.include(inc);
};

/**
 * ### .deepNestedInclude(haystack, needle, [message])
 *
 * Asserts that 'haystack' includes 'needle'.
 * Can be used to assert the inclusion of a subset of properties in an
 * object while checking for deep equality.
 * Enables the use of dot- and bracket-notation for referencing nested
 * properties.
 * '[]' and '.' in property names can be escaped using double backslashes.
 *
 *     assert.deepNestedInclude({a: {b: [{x: 1}]}}, {'a.b[0]': {x: 1}});
 *     assert.deepNestedInclude({'.a': {'[b]': {x: 1}}}, {'\\.a.\\[b\\]': {x: 1}});
 *
 * @name deepNestedInclude
 * @param {object} expression
 * @param {object} inc
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.deepNestedInclude = function (
  expression: object,
  inc: object,
  message: string
) {
  new Assertion(
    expression,
    message,
    assert.deepNestedInclude,
    true
  ).deep.nested.include(inc);
};

/**
 * ### .notDeepNestedInclude(haystack, needle, [message])
 *
 * Asserts that 'haystack' does not include 'needle'.
 * Can be used to assert the absence of a subset of properties in an
 * object while checking for deep equality.
 * Enables the use of dot- and bracket-notation for referencing nested
 * properties.
 * '[]' and '.' in property names can be escaped using double backslashes.
 *
 *     assert.notDeepNestedInclude({a: {b: [{x: 1}]}}, {'a.b[0]': {y: 1}})
 *     assert.notDeepNestedInclude({'.a': {'[b]': {x: 1}}}, {'\\.a.\\[b\\]': {y: 2}});
 *
 * @name notDeepNestedInclude
 * @param {object} expression
 * @param {object} inc
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.notDeepNestedInclude = function (
  expression: object,
  inc: object,
  message: string
) {
  new Assertion(
    expression,
    message,
    assert.notDeepNestedInclude,
    true
  ).not.deep.nested.include(inc);
};

/**
 * ### .ownInclude(haystack, needle, [message])
 *
 * Asserts that 'haystack' includes 'needle'.
 * Can be used to assert the inclusion of a subset of properties in an
 * object while ignoring inherited properties.
 *
 *     assert.ownInclude({ a: 1 }, { a: 1 });
 *
 * @name ownInclude
 * @param {object} expression
 * @param {object} inc
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.ownInclude = function (
  expression: object,
  inc: object,
  message: string
) {
  new Assertion(expression, message, assert.ownInclude, true).own.include(inc);
};

/**
 * ### .notOwnInclude(haystack, needle, [message])
 *
 * Asserts that 'haystack' does not include 'needle'.
 * Can be used to assert the absence of a subset of properties in an
 * object while ignoring inherited properties.
 *
 *     Object.prototype.b = 2;
 *     assert.notOwnInclude({ a: 1 }, { b: 2 });
 *
 * @name notOwnInclude
 * @param {object} expression
 * @param {object} inc
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.notOwnInclude = function (
  expression: object,
  inc: object,
  message: string
) {
  new Assertion(
    expression,
    message,
    assert.notOwnInclude,
    true
  ).not.own.include(inc);
};

/**
 * ### .deepOwnInclude(haystack, needle, [message])
 *
 * Asserts that 'haystack' includes 'needle'.
 * Can be used to assert the inclusion of a subset of properties in an
 * object while ignoring inherited properties and checking for deep equality.
 *
 *     assert.deepOwnInclude({a: {b: 2}}, {a: {b: 2}});
 *
 * @name deepOwnInclude
 * @param {object} expression
 * @param {object} inc
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.deepOwnInclude = function (
  expression: object,
  inc: object,
  message: string
) {
  new Assertion(
    expression,
    message,
    assert.deepOwnInclude,
    true
  ).deep.own.include(inc);
};

/**
 * ### .notDeepOwnInclude(haystack, needle, [message])
 *
 * Asserts that 'haystack' includes 'needle'.
 * Can be used to assert the absence of a subset of properties in an
 * object while ignoring inherited properties and checking for deep equality.
 *
 *     assert.notDeepOwnInclude({a: {b: 2}}, {a: {c: 3}});
 *
 * @name notDeepOwnInclude
 * @param {object} expression
 * @param {object} inc
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.notDeepOwnInclude = function (
  expression: object,
  inc: object,
  message: string
) {
  new Assertion(
    expression,
    message,
    assert.notDeepOwnInclude,
    true
  ).not.deep.own.include(inc);
};

/**
 * ### .match(value, regexp, [message])
 *
 * Asserts that `value` matches the regular expression `regexp`.
 *
 *     assert.match('foobar', /^foo/, 'regexp matches');
 *
 * @name match
 * @param {unknown} expression
 * @param {RegExp} re
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.match = function (expression: unknown, re: RegExp, message: string) {
  new Assertion(expression, message, assert.match, true).to.match(re);
};

/**
 * ### .notMatch(value, regexp, [message])
 *
 * Asserts that `value` does not match the regular expression `regexp`.
 *
 *     assert.notMatch('foobar', /^foo/, 'regexp does not match');
 *
 * @name notMatch
 * @param {unknown} expression
 * @param {RegExp} re
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.notMatch = function (expression: unknown, re: RegExp, message: string) {
  new Assertion(expression, message, assert.notMatch, true).to.not.match(re);
};

/**
 * ### .property(object, property, [message])
 *
 * Asserts that `object` has a direct or inherited property named by
 * `property`.
 *
 *     assert.property({ tea: { green: 'matcha' }}, 'tea');
 *     assert.property({ tea: { green: 'matcha' }}, 'toString');
 *
 * @name property
 * @param {object} obj
 * @param {string} prop
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.property = function (obj, prop: string, message: string) {
  new Assertion(obj, message, assert.property, true).to.have.property(prop);
};

/**
 * ### .notProperty(object, property, [message])
 *
 * Asserts that `object` does _not_ have a direct or inherited property named
 * by `property`.
 *
 *     assert.notProperty({ tea: { green: 'matcha' }}, 'coffee');
 *
 * @name notProperty
 * @param {object} obj
 * @param {string} prop
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.notProperty = function (obj, prop: string, message: string) {
  new Assertion(obj, message, assert.notProperty, true).to.not.have.property(
    prop
  );
};

/**
 * ### .propertyVal(object, property, value, [message])
 *
 * Asserts that `object` has a direct or inherited property named by
 * `property` with a value given by `value`. Uses a strict equality check
 * (===).
 *
 *     assert.propertyVal({ tea: 'is good' }, 'tea', 'is good');
 *
 * @name propertyVal
 * @param {object} obj
 * @param {string} prop
 * @param {unknown} value
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.propertyVal = function (
  obj,
  prop: string,
  value: unknown,
  message: string
) {
  new Assertion(obj, message, assert.propertyVal, true).to.have.property(
    prop,
    value
  );
};

/**
 * ### .notPropertyVal(object, property, value, [message])
 *
 * Asserts that `object` does _not_ have a direct or inherited property named
 * by `property` with value given by `value`. Uses a strict equality check
 * (===).
 *
 *     assert.notPropertyVal({ tea: 'is good' }, 'tea', 'is bad');
 *     assert.notPropertyVal({ tea: 'is good' }, 'coffee', 'is good');
 *
 * @name notPropertyVal
 * @param {object} obj
 * @param {string} prop
 * @param {unknown} value
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.notPropertyVal = function (
  obj,
  prop: string,
  value: unknown,
  message: string
) {
  new Assertion(obj, message, assert.notPropertyVal, true).to.not.have.property(
    prop,
    value
  );
};

/**
 * ### .deepPropertyVal(object, property, value, [message])
 *
 * Asserts that `object` has a direct or inherited property named by
 * `property` with a value given by `value`. Uses a deep equality check.
 *
 *     assert.deepPropertyVal({ tea: { green: 'matcha' } }, 'tea', { green: 'matcha' });
 *
 * @name deepPropertyVal
 * @param {object} obj
 * @param {string} prop
 * @param {unknown} value
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.deepPropertyVal = function (
  obj,
  prop: string,
  value: unknown,
  message: string
) {
  new Assertion(
    obj,
    message,
    assert.deepPropertyVal,
    true
  ).to.have.deep.property(prop, value);
};

/**
 * ### .notDeepPropertyVal(object, property, value, [message])
 *
 * Asserts that `object` does _not_ have a direct or inherited property named
 * by `property` with value given by `value`. Uses a deep equality check.
 *
 *     assert.notDeepPropertyVal({ tea: { green: 'matcha' } }, 'tea', { black: 'matcha' });
 *     assert.notDeepPropertyVal({ tea: { green: 'matcha' } }, 'tea', { green: 'oolong' });
 *     assert.notDeepPropertyVal({ tea: { green: 'matcha' } }, 'coffee', { green: 'matcha' });
 *
 * @name notDeepPropertyVal
 * @param {object} obj
 * @param {string} prop
 * @param {unknown} value
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.notDeepPropertyVal = function (
  obj,
  prop: string,
  value: unknown,
  message: string
) {
  new Assertion(
    obj,
    message,
    assert.notDeepPropertyVal,
    true
  ).to.not.have.deep.property(prop, value);
};

/**
 * ### .ownProperty(object, property, [message])
 *
 * Asserts that `object` has a direct property named by `property`. Inherited
 * properties aren't checked.
 *
 *     assert.ownProperty({ tea: { green: 'matcha' }}, 'tea');
 *
 * @name ownProperty
 * @param {object} obj
 * @param {string} prop
 * @param {string} message
 * @public
 */
assert.ownProperty = function (obj, prop: string, message: string) {
  new Assertion(obj, message, assert.ownProperty, true).to.have.own.property(
    prop
  );
};

/**
 * ### .notOwnProperty(object, property, [message])
 *
 * Asserts that `object` does _not_ have a direct property named by
 * `property`. Inherited properties aren't checked.
 *
 *     assert.notOwnProperty({ tea: { green: 'matcha' }}, 'coffee');
 *     assert.notOwnProperty({}, 'toString');
 *
 * @name notOwnProperty
 * @param {object} obj
 * @param {string} prop
 * @param {string} message
 * @public
 */
assert.notOwnProperty = function (obj: object, prop: string, message: string) {
  new Assertion(
    obj,
    message,
    assert.notOwnProperty,
    true
  ).to.not.have.own.property(prop);
};

/**
 * ### .ownPropertyVal(object, property, value, [message])
 *
 * Asserts that `object` has a direct property named by `property` and a value
 * equal to the provided `value`. Uses a strict equality check (===).
 * Inherited properties aren't checked.
 *
 *     assert.ownPropertyVal({ coffee: 'is good'}, 'coffee', 'is good');
 *
 * @name ownPropertyVal
 * @param {object} obj
 * @param {string} prop
 * @param {unknown} value
 * @param {string} message
 * @public
 */
assert.ownPropertyVal = function (
  obj: object,
  prop: string,
  value: unknown,
  message: string
) {
  new Assertion(obj, message, assert.ownPropertyVal, true).to.have.own.property(
    prop,
    value
  );
};

/**
 * ### .notOwnPropertyVal(object, property, value, [message])
 *
 * Asserts that `object` does _not_ have a direct property named by `property`
 * with a value equal to the provided `value`. Uses a strict equality check
 * (===). Inherited properties aren't checked.
 *
 *     assert.notOwnPropertyVal({ tea: 'is better'}, 'tea', 'is worse');
 *     assert.notOwnPropertyVal({}, 'toString', Object.prototype.toString);
 *
 * @name notOwnPropertyVal
 * @param {object} obj
 * @param {string} prop
 * @param {unknown} value
 * @param {string} message
 * @public
 */
assert.notOwnPropertyVal = function (
  obj: object,
  prop: string,
  value: unknown,
  message: string
) {
  new Assertion(
    obj,
    message,
    assert.notOwnPropertyVal,
    true
  ).to.not.have.own.property(prop, value);
};

/**
 * ### .deepOwnPropertyVal(object, property, value, [message])
 *
 * Asserts that `object` has a direct property named by `property` and a value
 * equal to the provided `value`. Uses a deep equality check. Inherited
 * properties aren't checked.
 *
 *     assert.deepOwnPropertyVal({ tea: { green: 'matcha' } }, 'tea', { green: 'matcha' });
 *
 * @name deepOwnPropertyVal
 * @param {object} obj
 * @param {string} prop
 * @param {unknown} value
 * @param {string} message
 * @public
 */
assert.deepOwnPropertyVal = function (
  obj: object,
  prop: string,
  value: unknown,
  message: string
) {
  new Assertion(
    obj,
    message,
    assert.deepOwnPropertyVal,
    true
  ).to.have.deep.own.property(prop, value);
};

/**
 * ### .notDeepOwnPropertyVal(object, property, value, [message])
 *
 * Asserts that `object` does _not_ have a direct property named by `property`
 * with a value equal to the provided `value`. Uses a deep equality check.
 * Inherited properties aren't checked.
 *
 *     assert.notDeepOwnPropertyVal({ tea: { green: 'matcha' } }, 'tea', { black: 'matcha' });
 *     assert.notDeepOwnPropertyVal({ tea: { green: 'matcha' } }, 'tea', { green: 'oolong' });
 *     assert.notDeepOwnPropertyVal({ tea: { green: 'matcha' } }, 'coffee', { green: 'matcha' });
 *     assert.notDeepOwnPropertyVal({}, 'toString', Object.prototype.toString);
 *
 * @name notDeepOwnPropertyVal
 * @param {object} obj
 * @param {string} prop
 * @param {unknown} value
 * @param {string} message
 * @public
 */
assert.notDeepOwnPropertyVal = function (
  obj: object,
  prop: string,
  value: unknown,
  message: string
) {
  new Assertion(
    obj,
    message,
    assert.notDeepOwnPropertyVal,
    true
  ).to.not.have.deep.own.property(prop, value);
};

/**
 * ### .nestedProperty(object, property, [message])
 *
 * Asserts that `object` has a direct or inherited property named by
 * `property`, which can be a string using dot- and bracket-notation for
 * nested reference.
 *
 *     assert.nestedProperty({ tea: { green: 'matcha' }}, 'tea.green');
 *
 * @name nestedProperty
 * @param {object} obj
 * @param {string} prop
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.nestedProperty = function (obj, prop: string, message: string) {
  new Assertion(
    obj,
    message,
    assert.nestedProperty,
    true
  ).to.have.nested.property(prop);
};

/**
 * ### .notNestedProperty(object, property, [message])
 *
 * Asserts that `object` does _not_ have a property named by `property`, which
 * can be a string using dot- and bracket-notation for nested reference. The
 * property cannot exist on the object nor anywhere in its prototype chain.
 *
 *     assert.notNestedProperty({ tea: { green: 'matcha' }}, 'tea.oolong');
 *
 * @name notNestedProperty
 * @param {object} obj
 * @param {string} prop
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.notNestedProperty = function (obj, prop: string, message: string) {
  new Assertion(
    obj,
    message,
    assert.notNestedProperty,
    true
  ).to.not.have.nested.property(prop);
};

/**
 * ### .nestedPropertyVal(object, property, value, [message])
 *
 * Asserts that `object` has a property named by `property` with value given
 * by `value`. `property` can use dot- and bracket-notation for nested
 * reference. Uses a strict equality check (===).
 *
 *     assert.nestedPropertyVal({ tea: { green: 'matcha' }}, 'tea.green', 'matcha');
 *
 * @name nestedPropertyVal
 * @param {object} obj
 * @param {string} prop
 * @param {unknown} value
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.nestedPropertyVal = function (
  obj,
  prop: string,
  value: unknown,
  message: string
) {
  new Assertion(
    obj,
    message,
    assert.nestedPropertyVal,
    true
  ).to.have.nested.property(prop, value);
};

/**
 * ### .notNestedPropertyVal(object, property, value, [message])
 *
 * Asserts that `object` does _not_ have a property named by `property` with
 * value given by `value`. `property` can use dot- and bracket-notation for
 * nested reference. Uses a strict equality check (===).
 *
 *     assert.notNestedPropertyVal({ tea: { green: 'matcha' }}, 'tea.green', 'konacha');
 *     assert.notNestedPropertyVal({ tea: { green: 'matcha' }}, 'coffee.green', 'matcha');
 *
 * @name notNestedPropertyVal
 * @param {object} obj
 * @param {string} prop
 * @param {unknown} value
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.notNestedPropertyVal = function (
  obj,
  prop: string,
  value: unknown,
  message: string
) {
  new Assertion(
    obj,
    message,
    assert.notNestedPropertyVal,
    true
  ).to.not.have.nested.property(prop, value);
};

/**
 * ### .deepNestedPropertyVal(object, property, value, [message])
 *
 * Asserts that `object` has a property named by `property` with a value given
 * by `value`. `property` can use dot- and bracket-notation for nested
 * reference. Uses a deep equality check.
 *
 *     assert.deepNestedPropertyVal({ tea: { green: { matcha: 'yum' } } }, 'tea.green', { matcha: 'yum' });
 *
 * @name deepNestedPropertyVal
 * @param {object} obj
 * @param {string} prop
 * @param {unknown} value
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.deepNestedPropertyVal = function (
  obj,
  prop: string,
  value: unknown,
  message: string
) {
  new Assertion(
    obj,
    message,
    assert.deepNestedPropertyVal,
    true
  ).to.have.deep.nested.property(prop, value);
};

/**
 * ### .notDeepNestedPropertyVal(object, property, value, [message])
 *
 * Asserts that `object` does _not_ have a property named by `property` with
 * value given by `value`. `property` can use dot- and bracket-notation for
 * nested reference. Uses a deep equality check.
 *
 *     assert.notDeepNestedPropertyVal({ tea: { green: { matcha: 'yum' } } }, 'tea.green', { oolong: 'yum' });
 *     assert.notDeepNestedPropertyVal({ tea: { green: { matcha: 'yum' } } }, 'tea.green', { matcha: 'yuck' });
 *     assert.notDeepNestedPropertyVal({ tea: { green: { matcha: 'yum' } } }, 'tea.black', { matcha: 'yum' });
 *
 * @name notDeepNestedPropertyVal
 * @param {object} obj
 * @param {string} prop
 * @param {unknown} value
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.notDeepNestedPropertyVal = function (
  obj,
  prop: string,
  value: unknown,
  message: string
) {
  new Assertion(
    obj,
    message,
    assert.notDeepNestedPropertyVal,
    true
  ).to.not.have.deep.nested.property(prop, value);
};

/**
 * ### .lengthOf(object, length, [message])
 *
 * Asserts that `object` has a `length` or `size` with the expected value.
 *
 *     assert.lengthOf([1,2,3], 3, 'array has length of 3');
 *     assert.lengthOf('foobar', 6, 'string has length of 6');
 *     assert.lengthOf(new Set([1,2,3]), 3, 'set has size of 3');
 *     assert.lengthOf(new Map([['a',1],['b',2],['c',3]]), 3, 'map has size of 3');
 *
 * @name lengthOf
 * @param {unknown} expression
 * @param {number} len
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.lengthOf = function (expression: unknown, len: number, message: string) {
  new Assertion(expression, message, assert.lengthOf, true).to.have.lengthOf(
    len
  );
};

/**
 * ### .hasAnyKeys(object, [keys], [message])
 *
 * Asserts that `object` has at least one of the `keys` provided.
 * You can also provide a single object instead of a `keys` array and its keys
 * will be used as the expected set of keys.
 *
 *     assert.hasAnyKeys({foo: 1, bar: 2, baz: 3}, ['foo', 'iDontExist', 'baz']);
 *     assert.hasAnyKeys({foo: 1, bar: 2, baz: 3}, {foo: 30, iDontExist: 99, baz: 1337});
 *     assert.hasAnyKeys(new Map([[{foo: 1}, 'bar'], ['key', 'value']]), [{foo: 1}, 'key']);
 *     assert.hasAnyKeys(new Set([{foo: 'bar'}, 'anotherKey']), [{foo: 'bar'}, 'anotherKey']);
 *
 * @name hasAnyKeys
 * @param {unknown} obj
 * @param {Array | object} keys
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.hasAnyKeys = function (
  obj: unknown,
  keys: Array<any> | object,
  message: string
) {
  new Assertion(obj, message, assert.hasAnyKeys, true).to.have.any.keys(keys);
};

/**
 * ### .hasAllKeys(object, [keys], [message])
 *
 * Asserts that `object` has all and only all of the `keys` provided.
 * You can also provide a single object instead of a `keys` array and its keys
 * will be used as the expected set of keys.
 *
 *     assert.hasAllKeys({foo: 1, bar: 2, baz: 3}, ['foo', 'bar', 'baz']);
 *     assert.hasAllKeys({foo: 1, bar: 2, baz: 3}, {foo: 30, bar: 99, baz: 1337]);
 *     assert.hasAllKeys(new Map([[{foo: 1}, 'bar'], ['key', 'value']]), [{foo: 1}, 'key']);
 *     assert.hasAllKeys(new Set([{foo: 'bar'}, 'anotherKey']), [{foo: 'bar'}, 'anotherKey']);
 *
 * @name hasAllKeys
 * @param {unknown} obj
 * @param {string[]} keys
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.hasAllKeys = function (obj: unknown, keys: string[], message: string) {
  new Assertion(obj, message, assert.hasAllKeys, true).to.have.all.keys(keys);
};

/**
 * ### .containsAllKeys(object, [keys], [message])
 *
 * Asserts that `object` has all of the `keys` provided but may have more keys not listed.
 * You can also provide a single object instead of a `keys` array and its keys
 * will be used as the expected set of keys.
 *
 *     assert.containsAllKeys({foo: 1, bar: 2, baz: 3}, ['foo', 'baz']);
 *     assert.containsAllKeys({foo: 1, bar: 2, baz: 3}, ['foo', 'bar', 'baz']);
 *     assert.containsAllKeys({foo: 1, bar: 2, baz: 3}, {foo: 30, baz: 1337});
 *     assert.containsAllKeys({foo: 1, bar: 2, baz: 3}, {foo: 30, bar: 99, baz: 1337});
 *     assert.containsAllKeys(new Map([[{foo: 1}, 'bar'], ['key', 'value']]), [{foo: 1}]);
 *     assert.containsAllKeys(new Map([[{foo: 1}, 'bar'], ['key', 'value']]), [{foo: 1}, 'key']);
 *     assert.containsAllKeys(new Set([{foo: 'bar'}, 'anotherKey']), [{foo: 'bar'}]);
 *     assert.containsAllKeys(new Set([{foo: 'bar'}, 'anotherKey']), [{foo: 'bar'}, 'anotherKey']);
 *
 * @name containsAllKeys
 * @param {unknown} obj
 * @param {string[]} keys
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.containsAllKeys = function (
  obj: unknown,
  keys: string[],
  message: string
) {
  new Assertion(obj, message, assert.containsAllKeys, true).to.contain.all.keys(
    keys
  );
};

/**
 * ### .doesNotHaveAnyKeys(object, [keys], [message])
 *
 * Asserts that `object` has none of the `keys` provided.
 * You can also provide a single object instead of a `keys` array and its keys
 * will be used as the expected set of keys.
 *
 *     assert.doesNotHaveAnyKeys({foo: 1, bar: 2, baz: 3}, ['one', 'two', 'example']);
 *     assert.doesNotHaveAnyKeys({foo: 1, bar: 2, baz: 3}, {one: 1, two: 2, example: 'foo'});
 *     assert.doesNotHaveAnyKeys(new Map([[{foo: 1}, 'bar'], ['key', 'value']]), [{one: 'two'}, 'example']);
 *     assert.doesNotHaveAnyKeys(new Set([{foo: 'bar'}, 'anotherKey']), [{one: 'two'}, 'example']);
 *
 * @name doesNotHaveAnyKeys
 * @param {unknown} obj
 * @param {string[]} keys
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.doesNotHaveAnyKeys = function (
  obj: unknown,
  keys: string[],
  message: string
) {
  new Assertion(
    obj,
    message,
    assert.doesNotHaveAnyKeys,
    true
  ).to.not.have.any.keys(keys);
};

/**
 * ### .doesNotHaveAllKeys(object, [keys], [message])
 *
 * Asserts that `object` does not have at least one of the `keys` provided.
 * You can also provide a single object instead of a `keys` array and its keys
 * will be used as the expected set of keys.
 *
 *     assert.doesNotHaveAllKeys({foo: 1, bar: 2, baz: 3}, ['one', 'two', 'example']);
 *     assert.doesNotHaveAllKeys({foo: 1, bar: 2, baz: 3}, {one: 1, two: 2, example: 'foo'});
 *     assert.doesNotHaveAllKeys(new Map([[{foo: 1}, 'bar'], ['key', 'value']]), [{one: 'two'}, 'example']);
 *     assert.doesNotHaveAllKeys(new Set([{foo: 'bar'}, 'anotherKey']), [{one: 'two'}, 'example']);
 *
 * @name doesNotHaveAllKeys
 * @param {unknown} obj
 * @param {string[]} keys
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.doesNotHaveAllKeys = function (
  obj: unknown,
  keys: string[],
  message: string
) {
  new Assertion(
    obj,
    message,
    assert.doesNotHaveAllKeys,
    true
  ).to.not.have.all.keys(keys);
};

/**
 * ### .hasAnyDeepKeys(object, [keys], [message])
 *
 * Asserts that `object` has at least one of the `keys` provided.
 * Since Sets and Maps can have objects as keys you can use this assertion to perform
 * a deep comparison.
 * You can also provide a single object instead of a `keys` array and its keys
 * will be used as the expected set of keys.
 *
 *     assert.hasAnyDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [1, 2]]), {one: 'one'});
 *     assert.hasAnyDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [1, 2]]), [{one: 'one'}, {two: 'two'}]);
 *     assert.hasAnyDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [{two: 'two'}, 'valueTwo']]), [{one: 'one'}, {two: 'two'}]);
 *     assert.hasAnyDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), {one: 'one'});
 *     assert.hasAnyDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), [{one: 'one'}, {three: 'three'}]);
 *     assert.hasAnyDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), [{one: 'one'}, {two: 'two'}]);
 *
 * @name hasAnyDeepKeys
 * @param {unknown} obj
 * @param {Array | object} keys
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.hasAnyDeepKeys = function (
  obj: unknown,
  keys: Array<any> | object,
  message: string
) {
  new Assertion(
    obj,
    message,
    assert.hasAnyDeepKeys,
    true
  ).to.have.any.deep.keys(keys);
};

/**
 * ### .hasAllDeepKeys(object, [keys], [message])
 *
 * Asserts that `object` has all and only all of the `keys` provided.
 * Since Sets and Maps can have objects as keys you can use this assertion to perform
 * a deep comparison.
 * You can also provide a single object instead of a `keys` array and its keys
 * will be used as the expected set of keys.
 *
 *     assert.hasAllDeepKeys(new Map([[{one: 'one'}, 'valueOne']]), {one: 'one'});
 *     assert.hasAllDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [{two: 'two'}, 'valueTwo']]), [{one: 'one'}, {two: 'two'}]);
 *     assert.hasAllDeepKeys(new Set([{one: 'one'}]), {one: 'one'});
 *     assert.hasAllDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), [{one: 'one'}, {two: 'two'}]);
 *
 * @name hasAllDeepKeys
 * @param {unknown} obj
 * @param {Array | object} keys
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.hasAllDeepKeys = function (
  obj: unknown,
  keys: Array<any> | object,
  message: string
) {
  new Assertion(
    obj,
    message,
    assert.hasAllDeepKeys,
    true
  ).to.have.all.deep.keys(keys);
};

/**
 * ### .containsAllDeepKeys(object, [keys], [message])
 *
 * Asserts that `object` contains all of the `keys` provided.
 * Since Sets and Maps can have objects as keys you can use this assertion to perform
 * a deep comparison.
 * You can also provide a single object instead of a `keys` array and its keys
 * will be used as the expected set of keys.
 *
 *     assert.containsAllDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [1, 2]]), {one: 'one'});
 *     assert.containsAllDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [{two: 'two'}, 'valueTwo']]), [{one: 'one'}, {two: 'two'}]);
 *     assert.containsAllDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), {one: 'one'});
 *     assert.containsAllDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), [{one: 'one'}, {two: 'two'}]);
 *
 * @name containsAllDeepKeys
 * @param {unknown} obj
 * @param {Array | object} keys
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.containsAllDeepKeys = function (
  obj: unknown,
  keys: Array<any> | object,
  message: string
) {
  new Assertion(
    obj,
    message,
    assert.containsAllDeepKeys,
    true
  ).to.contain.all.deep.keys(keys);
};

/**
 * ### .doesNotHaveAnyDeepKeys(object, [keys], [message])
 *
 * Asserts that `object` has none of the `keys` provided.
 * Since Sets and Maps can have objects as keys you can use this assertion to perform
 * a deep comparison.
 * You can also provide a single object instead of a `keys` array and its keys
 * will be used as the expected set of keys.
 *
 *     assert.doesNotHaveAnyDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [1, 2]]), {thisDoesNot: 'exist'});
 *     assert.doesNotHaveAnyDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [{two: 'two'}, 'valueTwo']]), [{twenty: 'twenty'}, {fifty: 'fifty'}]);
 *     assert.doesNotHaveAnyDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), {twenty: 'twenty'});
 *     assert.doesNotHaveAnyDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), [{twenty: 'twenty'}, {fifty: 'fifty'}]);
 *
 * @name doesNotHaveAnyDeepKeys
 * @param {unknown} obj
 * @param {Array | object} keys
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.doesNotHaveAnyDeepKeys = function (
  obj: unknown,
  keys: Array<any> | object,
  message: string
) {
  new Assertion(
    obj,
    message,
    assert.doesNotHaveAnyDeepKeys,
    true
  ).to.not.have.any.deep.keys(keys);
};

/**
 * ### .doesNotHaveAllDeepKeys(object, [keys], [message])
 *
 * Asserts that `object` does not have at least one of the `keys` provided.
 * Since Sets and Maps can have objects as keys you can use this assertion to perform
 * a deep comparison.
 * You can also provide a single object instead of a `keys` array and its keys
 * will be used as the expected set of keys.
 *
 *     assert.doesNotHaveAllDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [1, 2]]), {thisDoesNot: 'exist'});
 *     assert.doesNotHaveAllDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [{two: 'two'}, 'valueTwo']]), [{twenty: 'twenty'}, {one: 'one'}]);
 *     assert.doesNotHaveAllDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), {twenty: 'twenty'});
 *     assert.doesNotHaveAllDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), [{one: 'one'}, {fifty: 'fifty'}]);
 *
 * @name doesNotHaveAllDeepKeys
 * @param {unknown} obj
 * @param {Array | object} keys
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.doesNotHaveAllDeepKeys = function (
  obj: unknown,
  keys: Array<any> | object,
  message: string
) {
  new Assertion(
    obj,
    message,
    assert.doesNotHaveAllDeepKeys,
    true
  ).to.not.have.all.deep.keys(keys);
};

/**
 * ### .throws(fn, [errorLike/string/regexp], [string/regexp], [message])
 *
 * If `errorLike` is an `Error` constructor, asserts that `fn` will throw an error that is an
 * instance of `errorLike`.
 * If `errorLike` is an `Error` instance, asserts that the error thrown is the same
 * instance as `errorLike`.
 * If `errMsgMatcher` is provided, it also asserts that the error thrown will have a
 * message matching `errMsgMatcher`.
 *
 *     assert.throws(fn, 'Error thrown must have this message');
 *     assert.throws(fn, /Error thrown must have a message that matches this/);
 *     assert.throws(fn, ReferenceError);
 *     assert.throws(fn, errorInstance);
 *     assert.throws(fn, ReferenceError, 'Error thrown must be a ReferenceError and have this message');
 *     assert.throws(fn, errorInstance, 'Error thrown must be the same errorInstance and have this message');
 *     assert.throws(fn, ReferenceError, /Error thrown must be a ReferenceError and match this/);
 *     assert.throws(fn, errorInstance, /Error thrown must be the same errorInstance and match this/);
 *
 * @name throws
 * @alias throw
 * @alias Throw
 * @param {Function} fn
 * @param {Error} errorLike
 * @param {RegExp | string} errMsgMatcher
 * @param {string} message
 * @returns {unknown}
 * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
 * @namespace Assert
 * @public
 */
assert.throws = function (
  fn: () => void,
  errorLike?: ErrorConstructor | Error | null | RegExp | string,
  errMsgMatcher?: RegExp | string | null,
  message?: string
) {
  if ('string' === typeof errorLike || errorLike instanceof RegExp) {
    errMsgMatcher = errorLike;
    errorLike = null;
  }

  const assertErr = new Assertion(fn, message, assert.throws, true).to.throw(
    errorLike!,
    errMsgMatcher!
  );
  return flag(assertErr, 'object');
};

/**
 * ### .doesNotThrow(fn, [errorLike/string/regexp], [string/regexp], [message])
 *
 * If `errorLike` is an `Error` constructor, asserts that `fn` will _not_ throw an error that is an
 * instance of `errorLike`.
 * If `errorLike` is an `Error` instance, asserts that the error thrown is _not_ the same
 * instance as `errorLike`.
 * If `errMsgMatcher` is provided, it also asserts that the error thrown will _not_ have a
 * message matching `errMsgMatcher`.
 *
 *     assert.doesNotThrow(fn, 'Any Error thrown must not have this message');
 *     assert.doesNotThrow(fn, /Any Error thrown must not match this/);
 *     assert.doesNotThrow(fn, Error);
 *     assert.doesNotThrow(fn, errorInstance);
 *     assert.doesNotThrow(fn, Error, 'Error must not have this message');
 *     assert.doesNotThrow(fn, errorInstance, 'Error must not have this message');
 *     assert.doesNotThrow(fn, Error, /Error must not match this/);
 *     assert.doesNotThrow(fn, errorInstance, /Error must not match this/);
 *
 * @name doesNotThrow
 * @param {Function} fn
 * @param {Error} errorLike
 * @param {RegExp | string} errMsgMatcher
 * @param {string} message
 * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
 * @namespace Assert
 * @public
 */
assert.doesNotThrow = function (
  fn: () => void,
  errorLike?: ErrorConstructor | Error | null | RegExp | string,
  errMsgMatcher?: RegExp | string | null,
  message?: string
) {
  if ('string' === typeof errorLike || errorLike instanceof RegExp) {
    errMsgMatcher = errorLike;
    errorLike = null;
  }

  new Assertion(fn, message, assert.doesNotThrow, true).to.not.throw(
    errorLike!,
    errMsgMatcher!
  );
};

/**
 * ### .operator(val1, operator, val2, [message])
 *
 * Compares two values using `operator`.
 *
 *     assert.operator(1, '<', 2, 'everything is ok');
 *     assert.operator(1, '>', 2, 'this will fail');
 *
 * @name operator
 * @param {unknown} value
 * @param {string} operator
 * @param {unknown} val2
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.operator = function (
  value: OperatorComparable,
  operator: Operator,
  val2: OperatorComparable,
  message?: string
) {
  let ok;
  switch (operator) {
    case '==':
      ok = value == val2;
      break;
    case '===':
      ok = value === val2;
      break;
    case '>':
      ok = (value as number) > (val2 as number);
      break;
    case '>=':
      ok = (value as number) >= (val2 as number);
      break;
    case '<':
      ok = (value as number) < (val2 as number);
      break;
    case '<=':
      ok = (value as number) <= (val2 as number);
      break;
    case '!=':
      ok = value != val2;
      break;
    case '!==':
      ok = value !== val2;
      break;
    default:
      message = message ? message + ': ' : message;
      throw new AssertionError(
        message + 'Invalid operator "' + operator + '"',
        undefined,
        assert.operator
      );
  }
  const test = new Assertion(ok, message, assert.operator, true);
  test.assert(
    true === flag(test, 'object'),
    'expected ' + inspect(value) + ' to be ' + operator + ' ' + inspect(val2),
    'expected ' +
      inspect(value) +
      ' to not be ' +
      operator +
      ' ' +
      inspect(val2)
  );
};

/**
 * ### .closeTo(actual, expected, delta, [message])
 *
 * Asserts that the target is equal `expected`, to within a +/- `delta` range.
 *
 *     assert.closeTo(1.5, 1, 0.5, 'numbers are close');
 *
 * @name closeTo
 * @param {number} actual
 * @param {number} expression
 * @param {number} delta
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.closeTo = function (
  actual: number,
  expression: number,
  delta: number,
  message: string
) {
  new Assertion(actual, message, assert.closeTo, true).to.be.closeTo(
    expression,
    delta
  );
};

/**
 * ### .approximately(actual, expected, delta, [message])
 *
 * Asserts that the target is equal `expected`, to within a +/- `delta` range.
 *
 *     assert.approximately(1.5, 1, 0.5, 'numbers are close');
 *
 * @name approximately
 * @param {number} actual
 * @param {number} expression
 * @param {number} delta
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.approximately = function (
  actual: number,
  expression: number,
  delta: number,
  message: string
) {
  new Assertion(
    actual,
    message,
    assert.approximately,
    true
  ).to.be.approximately(expression, delta);
};

/**
 * ### .sameMembers(set1, set2, [message])
 *
 * Asserts that `set1` and `set2` have the same members in any order. Uses a
 * strict equality check (===).
 *
 *     assert.sameMembers([ 1, 2, 3 ], [ 2, 1, 3 ], 'same members');
 *
 * @name sameMembers
 * @param {Array} set1
 * @param {Array} set2
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.sameMembers = function (
  set1: Array<any>,
  set2: Array<any>,
  message: string
) {
  new Assertion(set1, message, assert.sameMembers, true).to.have.same.members(
    set2
  );
};

/**
 * ### .notSameMembers(set1, set2, [message])
 *
 * Asserts that `set1` and `set2` don't have the same members in any order.
 * Uses a strict equality check (===).
 *
 *     assert.notSameMembers([ 1, 2, 3 ], [ 5, 1, 3 ], 'not same members');
 *
 * @name notSameMembers
 * @param {Array} set1
 * @param {Array} set2
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.notSameMembers = function (
  set1: Array<any>,
  set2: Array<any>,
  message: string
) {
  new Assertion(
    set1,
    message,
    assert.notSameMembers,
    true
  ).to.not.have.same.members(set2);
};

/**
 * ### .sameDeepMembers(set1, set2, [message])
 *
 * Asserts that `set1` and `set2` have the same members in any order. Uses a
 * deep equality check.
 *
 *     assert.sameDeepMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [{ b: 2 }, { a: 1 }, { c: 3 }], 'same deep members');
 *
 * @name sameDeepMembers
 * @param {Array} set1
 * @param {Array} set2
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.sameDeepMembers = function (
  set1: Array<any>,
  set2: Array<any>,
  message: string
) {
  new Assertion(
    set1,
    message,
    assert.sameDeepMembers,
    true
  ).to.have.same.deep.members(set2);
};

/**
 * ### .notSameDeepMembers(set1, set2, [message])
 *
 * Asserts that `set1` and `set2` don't have the same members in any order.
 * Uses a deep equality check.
 *
 *     assert.notSameDeepMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [{ b: 2 }, { a: 1 }, { f: 5 }], 'not same deep members');
 *
 * @name notSameDeepMembers
 * @param {Array} set1
 * @param {Array} set2
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.notSameDeepMembers = function (
  set1: Array<any>,
  set2: Array<any>,
  message: string
) {
  new Assertion(
    set1,
    message,
    assert.notSameDeepMembers,
    true
  ).to.not.have.same.deep.members(set2);
};

/**
 * ### .sameOrderedMembers(set1, set2, [message])
 *
 * Asserts that `set1` and `set2` have the same members in the same order.
 * Uses a strict equality check (===).
 *
 *     assert.sameOrderedMembers([ 1, 2, 3 ], [ 1, 2, 3 ], 'same ordered members');
 *
 * @name sameOrderedMembers
 * @param {Array} set1
 * @param {Array} set2
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.sameOrderedMembers = function (
  set1: Array<any>,
  set2: Array<any>,
  message: string
) {
  new Assertion(
    set1,
    message,
    assert.sameOrderedMembers,
    true
  ).to.have.same.ordered.members(set2);
};

/**
 * ### .notSameOrderedMembers(set1, set2, [message])
 *
 * Asserts that `set1` and `set2` don't have the same members in the same
 * order. Uses a strict equality check (===).
 *
 *     assert.notSameOrderedMembers([ 1, 2, 3 ], [ 2, 1, 3 ], 'not same ordered members');
 *
 * @name notSameOrderedMembers
 * @param {Array} set1
 * @param {Array} set2
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.notSameOrderedMembers = function (
  set1: Array<any>,
  set2: Array<any>,
  message: string
) {
  new Assertion(
    set1,
    message,
    assert.notSameOrderedMembers,
    true
  ).to.not.have.same.ordered.members(set2);
};

/**
 * ### .sameDeepOrderedMembers(set1, set2, [message])
 *
 * Asserts that `set1` and `set2` have the same members in the same order.
 * Uses a deep equality check.
 *
 *     assert.sameDeepOrderedMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { a: 1 }, { b: 2 }, { c: 3 } ], 'same deep ordered members');
 *
 * @name sameDeepOrderedMembers
 * @param {Array} set1
 * @param {Array} set2
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.sameDeepOrderedMembers = function (
  set1: Array<any>,
  set2: Array<any>,
  message: string
) {
  new Assertion(
    set1,
    message,
    assert.sameDeepOrderedMembers,
    true
  ).to.have.same.deep.ordered.members(set2);
};

/**
 * ### .notSameDeepOrderedMembers(set1, set2, [message])
 *
 * Asserts that `set1` and `set2` don't have the same members in the same
 * order. Uses a deep equality check.
 *
 *     assert.notSameDeepOrderedMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { a: 1 }, { b: 2 }, { z: 5 } ], 'not same deep ordered members');
 *     assert.notSameDeepOrderedMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { b: 2 }, { a: 1 }, { c: 3 } ], 'not same deep ordered members');
 *
 * @name notSameDeepOrderedMembers
 * @param {Array} set1
 * @param {Array} set2
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.notSameDeepOrderedMembers = function (
  set1: Array<any>,
  set2: Array<any>,
  message: string
) {
  new Assertion(
    set1,
    message,
    assert.notSameDeepOrderedMembers,
    true
  ).to.not.have.same.deep.ordered.members(set2);
};

/**
 * ### .includeMembers(superset, subset, [message])
 *
 * Asserts that `subset` is included in `superset` in any order. Uses a
 * strict equality check (===). Duplicates are ignored.
 *
 *     assert.includeMembers([ 1, 2, 3 ], [ 2, 1, 2 ], 'include members');
 *
 * @name includeMembers
 * @param {Array} superset
 * @param {Array} subset
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.includeMembers = function (
  superset: Array<any>,
  subset: Array<any>,
  message: string
) {
  new Assertion(
    superset,
    message,
    assert.includeMembers,
    true
  ).to.include.members(subset);
};

/**
 * ### .notIncludeMembers(superset, subset, [message])
 *
 * Asserts that `subset` isn't included in `superset` in any order. Uses a
 * strict equality check (===). Duplicates are ignored.
 *
 *     assert.notIncludeMembers([ 1, 2, 3 ], [ 5, 1 ], 'not include members');
 *
 * @name notIncludeMembers
 * @param {Array} superset
 * @param {Array} subset
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.notIncludeMembers = function (
  superset: Array<any>,
  subset: Array<any>,
  message: string
) {
  new Assertion(
    superset,
    message,
    assert.notIncludeMembers,
    true
  ).to.not.include.members(subset);
};

/**
 * ### .includeDeepMembers(superset, subset, [message])
 *
 * Asserts that `subset` is included in `superset` in any order. Uses a deep
 * equality check. Duplicates are ignored.
 *
 *     assert.includeDeepMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { b: 2 }, { a: 1 }, { b: 2 } ], 'include deep members');
 *
 * @name includeDeepMembers
 * @param {Array} superset
 * @param {Array} subset
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.includeDeepMembers = function (
  superset: Array<any>,
  subset: Array<any>,
  message: string
) {
  new Assertion(
    superset,
    message,
    assert.includeDeepMembers,
    true
  ).to.include.deep.members(subset);
};

/**
 * ### .notIncludeDeepMembers(superset, subset, [message])
 *
 * Asserts that `subset` isn't included in `superset` in any order. Uses a
 * deep equality check. Duplicates are ignored.
 *
 *     assert.notIncludeDeepMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { b: 2 }, { f: 5 } ], 'not include deep members');
 *
 * @name notIncludeDeepMembers
 * @param {Array} superset
 * @param {Array} subset
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.notIncludeDeepMembers = function (
  superset: Array<any>,
  subset: Array<any>,
  message: string
) {
  new Assertion(
    superset,
    message,
    assert.notIncludeDeepMembers,
    true
  ).to.not.include.deep.members(subset);
};

/**
 * ### .includeOrderedMembers(superset, subset, [message])
 *
 * Asserts that `subset` is included in `superset` in the same order
 * beginning with the first element in `superset`. Uses a strict equality
 * check (===).
 *
 *     assert.includeOrderedMembers([ 1, 2, 3 ], [ 1, 2 ], 'include ordered members');
 *
 * @name includeOrderedMembers
 * @param {Array} superset
 * @param {Array} subset
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.includeOrderedMembers = function (
  superset: Array<any>,
  subset: Array<any>,
  message: string
) {
  new Assertion(
    superset,
    message,
    assert.includeOrderedMembers,
    true
  ).to.include.ordered.members(subset);
};

/**
 * ### .notIncludeOrderedMembers(superset, subset, [message])
 *
 * Asserts that `subset` isn't included in `superset` in the same order
 * beginning with the first element in `superset`. Uses a strict equality
 * check (===).
 *
 *     assert.notIncludeOrderedMembers([ 1, 2, 3 ], [ 2, 1 ], 'not include ordered members');
 *     assert.notIncludeOrderedMembers([ 1, 2, 3 ], [ 2, 3 ], 'not include ordered members');
 *
 * @name notIncludeOrderedMembers
 * @param {Array} superset
 * @param {Array} subset
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.notIncludeOrderedMembers = function (
  superset: Array<any>,
  subset: Array<any>,
  message: string
) {
  new Assertion(
    superset,
    message,
    assert.notIncludeOrderedMembers,
    true
  ).to.not.include.ordered.members(subset);
};

/**
 * ### .includeDeepOrderedMembers(superset, subset, [message])
 *
 * Asserts that `subset` is included in `superset` in the same order
 * beginning with the first element in `superset`. Uses a deep equality
 * check.
 *
 *     assert.includeDeepOrderedMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { a: 1 }, { b: 2 } ], 'include deep ordered members');
 *
 * @name includeDeepOrderedMembers
 * @param {Array} superset
 * @param {Array} subset
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.includeDeepOrderedMembers = function (
  superset: Array<any>,
  subset: Array<any>,
  message: string
) {
  new Assertion(
    superset,
    message,
    assert.includeDeepOrderedMembers,
    true
  ).to.include.deep.ordered.members(subset);
};

/**
 * ### .notIncludeDeepOrderedMembers(superset, subset, [message])
 *
 * Asserts that `subset` isn't included in `superset` in the same order
 * beginning with the first element in `superset`. Uses a deep equality
 * check.
 *
 *     assert.notIncludeDeepOrderedMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { a: 1 }, { f: 5 } ], 'not include deep ordered members');
 *     assert.notIncludeDeepOrderedMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { b: 2 }, { a: 1 } ], 'not include deep ordered members');
 *     assert.notIncludeDeepOrderedMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { b: 2 }, { c: 3 } ], 'not include deep ordered members');
 *
 * @name notIncludeDeepOrderedMembers
 * @param {Array} superset
 * @param {Array} subset
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.notIncludeDeepOrderedMembers = function (
  superset: Array<any>,
  subset: Array<any>,
  message: string
) {
  new Assertion(
    superset,
    message,
    assert.notIncludeDeepOrderedMembers,
    true
  ).to.not.include.deep.ordered.members(subset);
};

/**
 * ### .oneOf(inList, list, [message])
 *
 * Asserts that non-object, non-array value `inList` appears in the flat array `list`.
 *
 *     assert.oneOf(1, [ 2, 1 ], 'Not found in list');
 *
 * @name oneOf
 * @param {*} inList
 * @param {Array<*>} list
 * @param {string} message
 * @namespace Assert
 * @public
 */
assert.oneOf = function (inList: any, list: Array<any>, message: string) {
  new Assertion(inList, message, assert.oneOf, true).to.be.oneOf(list);
};

/**
 * ### isIterable(obj, [message])
 *
 * Asserts that the target is an iterable, which means that it has a iterator
 * with the exception of `String.`
 *
 *     assert.isIterable([1, 2]);
 *
 * @param {unknown} obj
 * @param {string} [message]
 * @namespace Assert
 * @public
 */
// TODO: Add to interface
assert.isIterable = function (obj: unknown, message: string) {
  if (obj == undefined || !(obj as Iterable<any>)[Symbol.iterator]) {
    message = message
      ? `${message} expected ${inspect(obj)} to be an iterable`
      : `expected ${inspect(obj)} to be an iterable`;

    throw new AssertionError(message, undefined, assert.isIterable);
  }
};

/**
 * ### .changes(function, object, property, [message])
 *
 * Asserts that a function changes the value of a property.
 *
 *     var obj = { value: 10 };
 *     var fn = function() { obj.value = 22 };
 *     assert.changes(fn, obj, 'value');
 *
 * @name changes
 * @param {Function} modifier modifier function
 * @param {object} object object or getter function
 * @param {string} property property name _optional_
 * @param {string} message _optional_
 * @namespace Assert
 * @public
 */
assert.changes = function (
  modifier: (...args: any[]) => any,
  object,
  property: string,
  message?: string
) {
  if (arguments.length === 3 && typeof object === 'function') {
    message = property as string;
    property = null!;
  }

  new Assertion(modifier, message, assert.changes, true).to.change(
    object,
    property as never
  );
};

/**
 * ### .changesBy(function, object, property, delta, [message])
 *
 * Asserts that a function changes the value of a property by an amount (delta).
 *
 *     var obj = { value: 10 };
 *     var fn = function() { obj.value += 2 };
 *     assert.changesBy(fn, obj, 'value', 2);
 *
 * @name changesBy
 * @param {Function} modifier modifier function
 * @param {object} object object or getter function
 * @param {string} property property name _optional_
 * @param {number} change message change amount (delta)
 * @param {string} message _optional_
 * @namespace Assert
 * @public
 */
assert.changesBy = function (
  modifier: (...args: any[]) => any,
  object: Record<string, any>,
  property: string | number,
  change?: string | number,
  message?: string
) {
  if (arguments.length === 4 && typeof object === 'function') {
    const tmpMsg = change;
    change = property as number;
    message = tmpMsg as unknown as string;
  } else if (arguments.length === 3) {
    change = property as number;
    property = null!;
  }

  new Assertion(modifier, message as string, assert.changesBy, true).to
    .change(object, property as string)
    .by(change as number);
};

/**
 * ### .doesNotChange(function, object, property, [message])
 *
 * Asserts that a function does not change the value of a property.
 *
 *   var obj = { value: 10 };
 *   var fn = function() { console.log('foo'); };
 *   assert.doesNotChange(fn, obj, 'value');
 *
 * @name doesNotChange
 * @param {Function} modifier modifier function
 * @param {object} object object or getter function
 * @param {string} property property name _optional_
 * @param {string} message _optional_
 * @returns {unknown}
 * @namespace Assert
 * @public
 */
assert.doesNotChange = function (modifier, object, property, message): unknown {
  if (arguments.length === 3 && typeof object === 'function') {
    message = property;
    property = null!;
  }

  return new Assertion(
    modifier,
    message,
    assert.doesNotChange,
    true
  ).to.not.change(object, property);
};

/**
 * ### .changesButNotBy(function, object, property, delta, [message])
 *
 * Asserts that a function does not change the value of a property or of a function's return value by an amount (delta)
 *
 *     var obj = { value: 10 };
 *     var fn = function() { obj.value += 10 };
 *     assert.changesButNotBy(fn, obj, 'value', 5);
 *
 * @name changesButNotBy
 * @param {Function} modifier - modifier function
 * @param {object} object - object or getter function
 * @param {string} property - property name _optional_
 * @param {number} delta - change amount (delta)
 * @param {string} message - message _optional_
 * @namespace Assert
 * @public
 */
assert.changesButNotBy = function (
  modifier: (...args: any[]) => any,
  object: Record<string, any>,
  property: string | number,
  delta?: string | number,
  message?: string
) {
  if (arguments.length === 4 && typeof object === 'function') {
    const tmpMsg = delta as string;
    delta = property;
    message = tmpMsg;
  } else if (arguments.length === 3) {
    delta = property;
    property = null!;
  }

  new Assertion(modifier, message, assert.changesButNotBy, true).to
    .change(object, property as string)
    .but.not.by(delta as number);
};

/**
 * ### .increases(function, object, property, [message])
 *
 * Asserts that a function increases a numeric object property.
 *
 *     var obj = { value: 10 };
 *     var fn = function() { obj.value = 13 };
 *     assert.increases(fn, obj, 'value');
 *
 * @public
 * @namespace Assert
 * @name increases
 * @param {(...args: any[]) => any} fn - modifier function
 * @param {object} obj - object or getter function
 * @param {string} property - property name _optional_
 * @param {string} message - message _optional_
 * @returns {unknown}
 */
assert.increases = function (
  fn: (...args: any[]) => any,
  obj,
  property,
  message: string
): unknown {
  if (arguments.length === 3 && typeof obj === 'function') {
    message = property;
    property = null!;
  }

  return new Assertion(fn, message, assert.increases, true).to.increase(
    obj,
    property as never
  );
};

/**
 * ### .increasesBy(function, object, property, delta, [message])
 *
 * Asserts that a function increases a numeric object property or a function's return value by an amount (delta).
 *
 *     var obj = { value: 10 };
 *     var fn = function() { obj.value += 10 };
 *     assert.increasesBy(fn, obj, 'value', 10);
 *
 * @public
 * @name increasesBy
 * @namespace Assert
 * @param {Function} modifier - modifier function
 * @param {object} object - object or getter function
 * @param {string} property - property name _optional_
 * @param {number} change - change amount (delta)
 * @param {string} message - message _optional_
 */
assert.increasesBy = function (
  modifier: (...args: any[]) => any,
  object: Record<string, any>,
  property: string | number,
  change?: string | number,
  message?: string
) {
  if (arguments.length === 4 && typeof object === 'function') {
    const tmpMsg = change as string;
    change = property;
    message = tmpMsg;
  } else if (arguments.length === 3) {
    change = property;
    property = null!;
  }

  new Assertion(modifier, message, assert.increasesBy, true).to
    .increase(object, property as string)
    .by(change as number);
};

/**
 * ### .doesNotIncrease(function, object, property, [message])
 *
 * Asserts that a function does not increase a numeric object property.
 *
 *     var obj = { value: 10 };
 *     var fn = function() { obj.value = 8 };
 *     assert.doesNotIncrease(fn, obj, 'value');
 *
 * @name doesNotIncrease
 * @param {Function} modifier modifier function
 * @param {object} object object or getter function
 * @param {string} property property name _optional_
 * @returns {Assertion}
 * @param {string} message _optional_
 * @namespace Assert
 * @public
 */
assert.doesNotIncrease = function (
  modifier: (...args: any[]) => any,
  object: Record<string, any>,
  property: string,
  message: string
): Assertion {
  if (arguments.length === 3 && typeof object === 'function') {
    message = property;
    property = null!;
  }

  return new Assertion(
    modifier,
    message,
    assert.doesNotIncrease,
    true
  ).to.not.increase(object, property);
};

/**
 * ### .increasesButNotBy(function, object, property, delta, [message])
 *
 * Asserts that a function does not increase a numeric object property or function's return value by an amount (delta).
 *
 *     var obj = { value: 10 };
 *     var fn = function() { obj.value = 15 };
 *     assert.increasesButNotBy(fn, obj, 'value', 10);
 *
 * @name increasesButNotBy
 * @param {Function} modifier modifier function
 * @param {object} object object or getter function
 * @param {string} property property name _optional_
 * @param {number} change change amount (delta)
 * @param {string} message _optional_
 * @namespace Assert
 * @public
 */
assert.increasesButNotBy = function (
  modifier: (...args: any[]) => any,
  object: Record<string, any>,
  property: string | number,
  change?: string | number,
  message?: string
) {
  if (arguments.length === 4 && typeof object === 'function') {
    const tmpMsg = change as string;
    change = property;
    message = tmpMsg;
  } else if (arguments.length === 3) {
    change = property;
    property = null!;
  }

  new Assertion(modifier, message, assert.increasesButNotBy, true).to
    .increase(object, property as string)
    .but.not.by(change as number);
};

/**
 * ### .decreases(function, object, property, [message])
 *
 * Asserts that a function decreases a numeric object property.
 *
 *     var obj = { value: 10 };
 *     var fn = function() { obj.value = 5 };
 *     assert.decreases(fn, obj, 'value');
 *
 * @name decreases
 * @param {Function} modifier modifier function
 * @param {object} object object or getter function
 * @param {string} property property name _optional_
 * @returns {Assertion}
 * @param {string} message _optional_
 * @namespace Assert
 * @public
 */
assert.decreases = function (
  modifier: (...args: any[]) => any,
  object,
  property,
  message: string
): Assertion {
  if (arguments.length === 3 && typeof object === 'function') {
    message = property;
    property = null!;
  }

  return new Assertion(modifier, message, assert.decreases, true).to.decrease(
    object,
    property as never
  );
};

/**
 * ### .decreasesBy(function, object, property, delta, [message])
 *
 * Asserts that a function decreases a numeric object property or a function's return value by an amount (delta)
 *
 *     var obj = { value: 10 };
 *     var fn = function() { obj.value -= 5 };
 *     assert.decreasesBy(fn, obj, 'value', 5);
 *
 * @name decreasesBy
 * @param {Function} modifier modifier function
 * @param {object} object object or getter function
 * @param {string} property property name _optional_
 * @param {number} change change amount (delta)
 * @param {string} message _optional_
 * @namespace Assert
 * @public
 */
assert.decreasesBy = function (
  modifier: (...args: any[]) => any,
  object: Record<string, any>,
  property: string | number,
  change?: string | number,
  message?: string
) {
  if (arguments.length === 4 && typeof object === 'function') {
    const tmpMsg = change as string;
    change = property;
    message = tmpMsg;
  } else if (arguments.length === 3) {
    change = property;
    property = null!;
  }

  new Assertion(modifier, message, assert.decreasesBy, true).to
    .decrease(object, property as string)
    .by(change as number);
};

/**
 * ### .doesNotDecrease(function, object, property, [message])
 *
 * Asserts that a function does not decreases a numeric object property.
 *
 *     var obj = { value: 10 };
 *     var fn = function() { obj.value = 15 };
 *     assert.doesNotDecrease(fn, obj, 'value');
 *
 * @name doesNotDecrease
 * @param {Function} modifier modifier function
 * @param {object} object object or getter function
 * @param {string} property property name _optional_
 * @returns {Assertion}
 * @param {string} message _optional_
 * @namespace Assert
 * @public
 */
assert.doesNotDecrease = function (
  modifier: (...args: any[]) => any,
  object,
  property,
  message: string
): Assertion {
  if (arguments.length === 3 && typeof object === 'function') {
    message = property;
    property = null!;
  }

  return new Assertion(
    modifier,
    message,
    assert.doesNotDecrease,
    true
  ).to.not.decrease(object, property as never);
};

/**
 * ### .doesNotDecreaseBy(function, object, property, delta, [message])
 *
 * Asserts that a function does not decreases a numeric object property or a function's return value by an amount (delta)
 *
 *     var obj = { value: 10 };
 *     var fn = function() { obj.value = 5 };
 *     assert.doesNotDecreaseBy(fn, obj, 'value', 1);
 *
 * @name doesNotDecreaseBy
 * @param {Function} modifier modifier function
 * @param {object} object object or getter function
 * @param {string} property property name _optional_
 * @param {number} change change amount (delta)
 * @returns {Assertion}
 * @param {string} message _optional_
 * @namespace Assert
 * @public
 */
assert.doesNotDecreaseBy = function (
  modifier: (...args: any[]) => any,
  object: Record<string, any>,
  property: string | number,
  change?: string | number,
  message?: string
): Assertion {
  if (arguments.length === 4 && typeof object === 'function') {
    const tmpMsg = change as string;
    change = property;
    message = tmpMsg;
  } else if (arguments.length === 3) {
    change = property;
    property = null!;
  }

  return new Assertion(modifier, message, assert.doesNotDecreaseBy, true).to.not
    .decrease(object, property as string)
    .by(change as number);
};

/**
 * ### .decreasesButNotBy(function, object, property, delta, [message])
 *
 * Asserts that a function does not decreases a numeric object property or a function's return value by an amount (delta)
 *
 *     var obj = { value: 10 };
 *     var fn = function() { obj.value = 5 };
 *     assert.decreasesButNotBy(fn, obj, 'value', 1);
 *
 * @name decreasesButNotBy
 * @param {Function} modifier modifier function
 * @param {object} object object or getter function
 * @param {string} property property name _optional_
 * @param {number} change change amount (delta)
 * @param {string} message _optional_
 * @namespace Assert
 * @public
 */
assert.decreasesButNotBy = function (
  modifier: (...args: any[]) => any,
  object: Record<string, any>,
  property: string | number,
  change?: string | number,
  message?: string
) {
  if (arguments.length === 4 && typeof object === 'function') {
    const tmpMsg = change as string;
    change = property;
    message = tmpMsg;
  } else if (arguments.length === 3) {
    change = property;
    property = null!;
  }

  new Assertion(modifier, message, assert.decreasesButNotBy, true).to
    .decrease(object, property as string)
    .but.not.by(change as number);
};

/**
 * ### .ifError(object)
 *
 * Asserts if value is not a false value, and throws if it is a true value.
 * This is added to allow for chai to be a drop-in replacement for Node's
 * assert class.
 *
 *     var err = new Error('I am a custom error');
 *     assert.ifError(err); // Rethrows err!
 *
 * @name ifError
 * @param {object} value
 * @namespace Assert
 * @public
 */
assert.ifError = function (value) {
  if (value) {
    throw value;
  }
};

/**
 * ### .isExtensible(object)
 *
 * Asserts that `object` is extensible (can have new properties added to it).
 *
 *     assert.isExtensible({});
 *
 * @name isExtensible
 * @alias extensible
 * @param {object} object
 * @param {string} message _optional_
 * @namespace Assert
 * @public
 */
assert.isExtensible = function (object, message) {
  new Assertion(object, message, assert.isExtensible, true).to.be.extensible;
};

/**
 * ### .isNotExtensible(object)
 *
 * Asserts that `object` is _not_ extensible.
 *
 *     var nonExtensibleObject = Object.preventExtensions({});
 *     var sealedObject = Object.seal({});
 *     var frozenObject = Object.freeze({});
 *
 *     assert.isNotExtensible(nonExtensibleObject);
 *     assert.isNotExtensible(sealedObject);
 *     assert.isNotExtensible(frozenObject);
 *
 * @name isNotExtensible
 * @alias notExtensible
 * @param {object} object
 * @param {string} message _optional_
 * @namespace Assert
 * @public
 */
assert.isNotExtensible = function (object, message) {
  new Assertion(object, message, assert.isNotExtensible, true).to.not.be
    .extensible;
};

/**
 * ### .isSealed(object)
 *
 * Asserts that `object` is sealed (cannot have new properties added to it
 * and its existing properties cannot be removed).
 *
 *     var sealedObject = Object.seal({});
 *     var frozenObject = Object.seal({});
 *
 *     assert.isSealed(sealedObject);
 *     assert.isSealed(frozenObject);
 *
 * @name isSealed
 * @alias sealed
 * @param {object} object
 * @param {string} message _optional_
 * @namespace Assert
 * @public
 */
assert.isSealed = function (object, message) {
  new Assertion(object, message, assert.isSealed, true).to.be.sealed;
};

/**
 * ### .isNotSealed(object)
 *
 * Asserts that `object` is _not_ sealed.
 *
 *     assert.isNotSealed({});
 *
 * @name isNotSealed
 * @alias notSealed
 * @param {object} object
 * @param {string} message _optional_
 * @namespace Assert
 * @public
 */
assert.isNotSealed = function (object, message) {
  new Assertion(object, message, assert.isNotSealed, true).to.not.be.sealed;
};

/**
 * ### .isFrozen(object)
 *
 * Asserts that `object` is frozen (cannot have new properties added to it
 * and its existing properties cannot be modified).
 *
 *     var frozenObject = Object.freeze({});
 *     assert.frozen(frozenObject);
 *
 * @name isFrozen
 * @alias frozen
 * @param {object} obj
 * @param {string} message _optional_
 * @namespace Assert
 * @public
 */
assert.isFrozen = function (obj, message) {
  new Assertion(obj, message, assert.isFrozen, true).to.be.frozen;
};

/**
 * ### .isNotFrozen(object)
 *
 * Asserts that `object` is _not_ frozen.
 *
 *     assert.isNotFrozen({});
 *
 * @name isNotFrozen
 * @alias notFrozen
 * @param {object} object
 * @param {string} message _optional_
 * @namespace Assert
 * @public
 */
assert.isNotFrozen = function (object, message) {
  new Assertion(object, message, assert.isNotFrozen, true).to.not.be.frozen;
};

/**
 * ### .isEmpty(target)
 *
 * Asserts that the target does not contain any values.
 * For arrays and strings, it checks the `length` property.
 * For `Map` and `Set` instances, it checks the `size` property.
 * For non-function objects, it gets the count of own
 * enumerable string keys.
 *
 *     assert.isEmpty([]);
 *     assert.isEmpty('');
 *     assert.isEmpty(new Map);
 *     assert.isEmpty({});
 *
 * @name isEmpty
 * @alias empty
 * @param {object | Array | string | Map | Set} value
 * @param {string} message _optional_
 * @namespace Assert
 * @public
 */
assert.isEmpty = function (value, message) {
  new Assertion(value, message, assert.isEmpty, true).to.be.empty;
};

/**
 * ### .isNotEmpty(target)
 *
 * Asserts that the target contains values.
 * For arrays and strings, it checks the `length` property.
 * For `Map` and `Set` instances, it checks the `size` property.
 * For non-function objects, it gets the count of own
 * enumerable string keys.
 *
 *     assert.isNotEmpty([1, 2]);
 *     assert.isNotEmpty('34');
 *     assert.isNotEmpty(new Set([5, 6]));
 *     assert.isNotEmpty({ key: 7 });
 *
 * @name isNotEmpty
 * @alias notEmpty
 * @param {object | Array | string | Map | Set} value
 * @param {string} message _optional_
 * @namespace Assert
 * @public
 */
assert.isNotEmpty = function (value, message) {
  new Assertion(value, message, assert.isNotEmpty, true).to.not.be.empty;
};

/**
 * ### .containsSubset(target, subset)
 *
 * Asserts that the target primitive/object/array structure deeply contains all provided fields
 * at the same key/depth as the provided structure.
 *
 * When comparing arrays, the target must contain the subset of at least one of each object/value in the subset array.
 * Order does not matter.
 *
 *     assert.containsSubset(
 *         [{name: {first: "John", last: "Smith"}}, {name: {first: "Jane", last: "Doe"}}],
 *         [{name: {first: "Jane"}}]
 *     );
 *
 * @name containsSubset
 * @alias containSubset
 * @param {unknown} value
 * @param {unknown} expression
 * @param {string} message _optional_
 * @namespace Assert
 * @public
 */
assert.containsSubset = function (
  value: unknown,
  expression: unknown,
  message: string
) {
  new Assertion(value, message).to.containSubset(expression);
};

/**
 * ### .doesNotContainSubset(target, subset)
 *
 * The negation of assert.containsSubset.
 *
 * @name doesNotContainSubset
 * @param {unknown} value
 * @param {unknown} expression
 * @param {string} message _optional_
 * @namespace Assert
 * @public
 */
assert.doesNotContainSubset = function (
  value: unknown,
  expression: unknown,
  message: string
) {
  new Assertion(value, message).to.not.containSubset(expression);
};

/**
 * Aliases.
 *
 * @param {unknown} name
 * @param {unknown} as
 * @returns {unknown}
 */
const aliases = [
  ['isOk', 'ok'] as const,
  ['isNotOk', 'notOk'] as const,
  ['throws', 'throw'] as const,
  ['throws', 'Throw'] as const,
  ['isExtensible', 'extensible'] as const,
  ['isNotExtensible', 'notExtensible'] as const,
  ['isSealed', 'sealed'] as const,
  ['isNotSealed', 'notSealed'] as const,
  ['isFrozen', 'frozen'] as const,
  ['isNotFrozen', 'notFrozen'],
  ['isEmpty', 'empty'] as const,
  ['isNotEmpty', 'notEmpty'] as const,
  ['isCallable', 'isFunction'] as const,
  ['isNotCallable', 'isNotFunction'] as const,
  ['containsSubset', 'containSubset'] as const
] as const;
for (const [name, as] of aliases) {
  assert[as] = assert[name] as Assert;
}
