import * as checkError from 'check-error';
import deepEqual from 'deep-eql';

import type {AssertionError} from 'assertion-error';
import type {Assertion} from './chai/assertion.js';
import type {Config} from './chai/config.js';
import type {Assert} from './chai/interface/assert.js';
import type {Should} from './chai/interface/should.js';

// declare global {
// export declare namespace Chai {
export type Message = string | (() => string);
export type ObjectProperty = string | symbol | number;

export interface PathInfo {
  parent: object;
  name: string;
  value?: any;
  exists: boolean;
}

export interface Constructor<T> {
  new (...args: any[]): T;
}

export interface ErrorConstructor {
  new (...args: any[]): Error;
}

export interface ChaiUtils {
  // FIXME:
  addChainableMethod(
    // object to define the method on, e.g. chai.Assertion.prototype
    ctx: object,
    // method name
    name: string,
    // method itself; any arguments
    method: (...args: any[]) => void,
    // called when property is accessed
    chainingBehavior?: () => void
  ): void;
  overwriteChainableMethod(
    ctx: object,
    name: string,
    method: (...args: any[]) => (...args: any[]) => any,
    chainingBehavior?: (...args: any[]) => (...args: any[]) => any
  ): void;
  addLengthGuard(
    fn: Function,
    assertionName: string,
    isChainable: boolean
  ): void;
  addMethod(ctx: object, name: string, method: Function): void;
  addProperty(ctx: object, name: string, getter: () => any): void;
  overwriteMethod(ctx: object, name: string, method: Function): void;
  // FIXME:
  overwriteProperty(
    ctx: object,
    name: string,
    getter: (this: Assertion, _super: any) => any
  ): void;
  compareByInspect(a: object, b: object): -1 | 1;
  expectTypes(obj: object, types: string[]): void;
  flag(obj: object, key: string, value?: any): any;
  getActual(obj: object, args: AssertionArgs): any;
  // getProperties(obj: object): string[];
  getOwnEnumerablePropertySymbols(obj: object): symbol[];
  getOwnEnumerableProperties(obj: object): Array<string | symbol>;
  // getMessage(errorLike: Error | string): string;
  getMessage(obj: any, args: AssertionArgs): string;
  inspect(
    obj: any,
    showHidden?: boolean,
    depth?: number,
    colors?: boolean
  ): string;
  isProxyEnabled(): boolean;
  objDisplay(obj: object): void;
  proxify(obj: object, nonChainableMethodName: string): object;
  test(obj: object, args: AssertionArgs): boolean;
  transferFlags(assertion: Assertion, obj: object, includeAll?: boolean): void;
  // compatibleInstance(
  //   thrown: Error,
  //   errorLike: Error | ErrorConstructor
  // ): boolean;
  // compatibleConstructor(
  //   thrown: Error,
  //   errorLike: Error | ErrorConstructor
  // ): boolean;
  // compatibleMessage(thrown: Error, errMatcher: string | RegExp): boolean;
  // getConstructorName(constructorFn: Function): string;
  // getFuncName(constructorFn: Function): string | null;
  getName(constructorFn: Function): string | null;

  // Reexports from pathval:
  hasProperty(obj: object | undefined | null, name: ObjectProperty): boolean;
  getPathInfo(obj: object, path: string): PathInfo;
  getOperator(
    obj: object,
    args: AssertionArgs
  ):
    | Operator
    | 'notDeepStrictEqual'
    | 'notStrictEqual'
    | 'deepStrictEqual'
    | 'strictEqual'
    | undefined;
  // getPathValue(obj: object, path: string): object | undefined;

  isNaN: typeof Number.isNaN;
  isRegExp(obj: any): boolean;
  isNumeric(obj: any): boolean;

  eql: typeof deepEqual;
  checkError: typeof checkError;
}

export type ChaiPlugin = (chai: ChaiStatic, utils: ChaiUtils) => void;

export interface ChaiStatic {
  expect: ExpectStatic;
  should(): Should;
  /**
   * Provides a way to extend the internals of Chai
   */
  use(fn: ChaiPlugin): ChaiStatic;
  util: ChaiUtils;
  assert: AssertStatic;
  config: Config;
  Assertion: AssertionStatic;
  AssertionError: typeof AssertionError;
  version: string;
}

export interface ExpectStatic {
  (val: any, message?: string): Assertion;
  fail(message?: string): never;
  fail(
    actual: any,
    expected: any,
    message?: string,
    operator?: Operator
  ): never;
}

export interface AssertStatic extends Assert {}

// chai.Assertion.prototype.assert arguments
export type AssertionArgs = [
  any, // expression to be tested
  Message, // message or function that returns message to display if expression fails
  Message, // negatedMessage or function that returns negatedMessage to display if expression fails
  any?, // expected value
  any?, // actual value
  boolean? // showDiff, when set to `true`, assert will display a diff in addition to the message if expression fails
];

export interface AssertionPrototype {
  assert(
    expression: any,
    message: Message,
    negatedMessage: Message,
    expectedValue?: any,
    actualValue?: any,
    showDiff?: boolean
  ): void;
  _obj: any;
}

export interface AssertionStatic {
  prototype: AssertionPrototype;
  // __flags: {[key: PropertyKey]: unknown};

  new (
    target: any,
    message?: string,
    ssfi?: (...args: any[]) => any,
    lockSsfi?: boolean
  ): Assertion;

  // Deprecated properties:
  includeStack: boolean;
  showDiff: boolean;

  // Partials of functions on ChaiUtils:
  addProperty(
    name: string,
    getter: (this: AssertionPrototype & Assertion) => any
  ): void;
  addMethod(
    name: string,
    method: (this: AssertionPrototype & Assertion, ...args: any[]) => any
  ): void;
  // FIXME:
  addChainableMethod(
    name: string,
    method: (this: AssertionPrototype & Assertion, ...args: any[]) => void,
    chainingBehavior?: () => void
  ): void;
  // FIXME:
  overwriteProperty(
    name: string,
    getter: (this: AssertionPrototype & Assertion, _super: any) => any
  ): void;
  overwriteMethod(
    name: string,
    method: (this: AssertionPrototype & Assertion, ...args: any[]) => any
  ): void;
  overwriteChainableMethod(
    name: string,
    method: (
      this: AssertionPrototype & Assertion,
      ...args: any[]
    ) => (...args: any[]) => any,
    chainingBehavior?: (...args: any[]) => any
  ): void;
}

export type Operator =
  | (string & Record<string, never>)
  | '=='
  | '==='
  | '>'
  | '>='
  | '<'
  | '<='
  | '!='
  | '!==';

export type OperatorComparable =
  | boolean
  | null
  | number
  | string
  | undefined
  | Date;

export interface ShouldAssertion {
  equal(value1: any, value2: any, message?: string): void;
  Throw: ShouldThrow;
  throw: ShouldThrow;
  exist(value: any, message?: string): void;
}

export interface ShouldThrow {
  // FIXME:
  (
    actual: (...args: any) => any,
    expected?: string | RegExp,
    message?: string
  ): void;
  (
    actual: (...args: any) => any,
    constructor: Error | ((...args: any) => any),
    expected?: string | RegExp,
    message?: string
  ): void;
}

export interface LanguageChains {
  to: Assertion;
  be: Assertion;
  been: Assertion;
  is: Assertion;
  that: Assertion;
  which: Assertion;
  and: Assertion;
  has: Assertion;
  have: Assertion;
  with: Assertion;
  at: Assertion;
  of: Assertion;
  same: Assertion;
  but: this extends DeltaAssertion ? DeltaAssertion : Assertion;
  does: Assertion;
}

export interface NumericComparison {
  above: NumberComparer;
  gt: NumberComparer;
  greaterThan: NumberComparer;
  least: NumberComparer;
  gte: NumberComparer;
  greaterThanOrEqual: NumberComparer;
  below: NumberComparer;
  lt: NumberComparer;
  lessThan: NumberComparer;
  most: NumberComparer;
  lte: NumberComparer;
  lessThanOrEqual: NumberComparer;
  within(start: number, finish: number, message?: string): Assertion;
  within(start: Date, finish: Date, message?: string): Assertion;
}

export interface NumberComparer {
  (value: number | Date, message?: string): Assertion;
}

export interface TypeComparison {
  (type: string, message?: string): Assertion;
  instanceof: InstanceOf;
  instanceOf: InstanceOf;
}

export interface InstanceOf {
  (constructor: any, message?: string): Assertion;
}

export interface CloseTo {
  (expected: number, delta: number, message?: string): Assertion;
}

export interface Nested {
  include: Include;
  includes: Include;
  contain: Include;
  contains: Include;
  property: Property;
  members: Members;
}

export interface Own {
  include: Include;
  includes: Include;
  contain: Include;
  contains: Include;
  property: Property;
}

export interface Deep extends KeyFilter {
  be: Assertion;
  equal: Equal;
  equals: Equal;
  eq: Equal;
  include: Include;
  includes: Include;
  contain: Include;
  contains: Include;
  property: Property;
  ordered: Ordered;
  nested: Nested;
  oneOf: OneOf;
  own: Own;
}

export interface Ordered {
  members: Members;
}

export interface KeyFilter {
  // FIXME:
  deep: Deep;
  keys: Keys;
  members: Members;
}

export interface Equal {
  (value: any, message?: string): Assertion;
}

export interface ContainSubset {
  (expected: any): Assertion;
}

export interface Property {
  (name: string | symbol, value: any, message?: string): Assertion;
  (name: string | symbol, message?: string): Assertion;
}

export interface OwnPropertyDescriptor {
  (
    name: string | symbol,
    descriptor: PropertyDescriptor,
    message?: string
  ): Assertion;
  (name: string | symbol, message?: string): Assertion;
}

export interface Length extends LanguageChains, NumericComparison {
  (length: number, message?: string): Assertion;
}

export interface Include {
  (value: any, message?: string): Assertion;
  keys: Keys;
  deep: Deep;
  ordered: Ordered;
  members: Members;
  any: KeyFilter;
  all: KeyFilter;
  oneOf: OneOf;
}

export interface OneOf {
  (list: readonly unknown[], message?: string): Assertion;
}

export interface Match {
  (regexp: RegExp, message?: string): Assertion;
}

export interface Keys {
  (...keys: string[]): Assertion;
  (keys: readonly any[] | Object): Assertion;
}

export interface Throw {
  (expected?: string | RegExp, message?: string): Assertion;
  (
    constructor: Error | ((...args: any[]) => any),
    expected?: string | RegExp,
    message?: string
  ): Assertion;
}

export interface RespondTo {
  (method: string, message?: string): Assertion;
}

export interface Satisfy {
  (matcher: (...args: any[]) => any, message?: string): Assertion;
}

export interface Members {
  (set: readonly any[], message?: string): Assertion;
}

export interface PropertyChange {
  <ObjectType>(
    object: ObjectType,
    property?: (Record<string, never> & string) | keyof ObjectType,
    message?: string
  ): DeltaAssertion;
}

export interface DeltaAssertion extends Assertion {
  by(delta: number, msg?: string): Assertion & DeltaAssertion;
}

// FIXME:
// export class AssertionError {
//   constructor(message: string, _props?: any, ssf?: Function);
//   name: string;
//   message: string;
//   showDiff: boolean;
//   stack: string;
// }
// }
// }

// export function use(fn: Chai.ChaiPlugin): Chai.ChaiStatic;

// export const util: Chai.ChaiUtils;
// export const config: Chai.Config;
// export const Assertion: Chai.AssertionStatic;
// export function should(): Chai.Should;
// export function Should(): Chai.Should;
// export const assert: Chai.AssertStatic;
// export const expect: Chai.ExpectStatic;

// declare global {
//     interface Object {
//         should: Chai.Assertion;
//     }
// }
