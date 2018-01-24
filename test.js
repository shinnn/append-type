'use strict';

const appendType = require('.');
const nop = require('nop');
const test = require('tape');

test('appendType()', t => {
	t.equal(
		appendType(true),
		'true (boolean)',
		'should stringify boolean.'
	);

	t.equal(
		appendType(1.23),
		'1.23 (number)',
		'should stringify number.'
	);

	t.equal(
		appendType('foo'),
		'foo (string)',
		'should stringify string.'
	);

	t.equal(
		appendType(Symbol('bar')),
		'Symbol(bar) (symbol)',
		'should stringify symbol.'
	);

	t.equal(
		appendType(nop),
		'function nop(){} (function)',
		'should stringify function.'
	);

	t.equal(
		appendType(/baz/),
		'/baz/ (object)',
		'should stringify object.'
	);

	t.equal(
		appendType(undefined),
		'undefined',
		'should return \'undefined\' when it receives `undefined`.'
	);

	t.equal(
		appendType(null),
		'null',
		'should return \'null\' when it receives `null`.'
	);

	t.end();
});
