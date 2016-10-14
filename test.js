'use strict';

const appendType = require('.');
const nop = require('nop');
const test = require('tape');

test('appendType()', t => {
  t.strictEqual(
    appendType(true),
    'true (boolean)',
    'should stringify boolean.'
  );

  t.strictEqual(
    appendType(1.23),
    '1.23 (number)',
    'should stringify number.'
  );

  t.strictEqual(
    appendType('foo'),
    'foo (string)',
    'should stringify string.'
  );

  t.strictEqual(
    appendType(Symbol('bar')),
    'Symbol(bar) (symbol)',
    'should stringify symbol.'
  );

  t.strictEqual(
    appendType(nop),
    'function nop(){} (function)',
    'should stringify function.'
  );

  t.strictEqual(
    appendType(/baz/),
    '/baz/ (object)',
    'should stringify object.'
  );

  t.strictEqual(
    appendType(undefined),
    'undefined',
    'should return \'undefined\' when it receives `undefined`.'
  );

  t.strictEqual(
    appendType(null),
    'null',
    'should return \'null\' when it receives `null`.'
  );

  t.end();
});
