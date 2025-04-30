/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

import {AssertionError} from 'assertion-error';
import packageJson from '../package.json' with {type: 'json'};
import {Assertion} from './chai/assertion.js';
import {config} from './chai/config.js';
import './chai/core/assertions.js';
import {assert} from './chai/interface/assert.js';
import {expect} from './chai/interface/expect.js';
import * as should from './chai/interface/should.js';
import * as utils from './chai/utils/index.js';
import type {ChaiPlugin, ChaiStatic, ChaiUtils} from './types.js';

const {version} = packageJson;

const util = utils as ChaiUtils;

const used: ChaiPlugin[] = [];

// Assertion Error
export {AssertionError};

/**
 * # .use(function)
 *
 * Provides a way to extend the internals of Chai.
 *
 * @param {Function} fn
 * @returns {this} for chaining
 * @public
 */
export function use(fn: ChaiPlugin): ChaiStatic {
  const exports = {
    use,
    AssertionError,
    util,
    config,
    expect,
    assert,
    Assertion,
    version,
    ...should
  } satisfies ChaiStatic;

  if (!~used.indexOf(fn)) {
    fn(exports, util);
    used.push(fn);
  }

  return exports;
}

// Utility Functions
export {util};

// Configuration
export {config};

// Primary `Assertion` prototype
export * from './chai/assertion.js';

// Expect interface
export * from './chai/interface/expect.js';

// Should interface
export * from './chai/interface/should.js';

// Assert interface
export * from './chai/interface/assert.js';
