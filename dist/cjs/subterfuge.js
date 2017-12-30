/*  Subterfuge v0.7.1
 *  https://github.com/phixid/subterfuge
 *  (c) 2017-2017 Kristof Hermans <@phixid>
 *  Subterfuge may be freely distributed under the MIT license.
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Box takes a value and 'boxes' it up.
 * The box a has an API which allows us to see the value inside (inspect), let it be changed (map) or given back (fold).
 *
 * @param value
 *
 * Box.map: takes a function parameter, applies it to the Boxed value and returns the result in a new Box.
 * Box.fold: takes a function parameter, applies it to the Boxed value and returns the result.
 * Box.inspect: returns a string-template showing the Boxed up value.
 */

const Box = value => ({
  map: f => Box(f(value)),
  fold: (f = x => x) => f(value),
  inspect: () => `Box(${value})`
});

/**
 * LazyBox takes a function and 'boxes' it up.
 *
 * @param g
 *
 * LazyBox.map: takes a function parameter, returns a new LazyBox containing a function that composes the parameter with the boxed function.
 * LazyBox.fold: takes a function parameter, composes the parameter with the boxed function and returns the result.
 * LazyBox.inspect: returns a string-template showing the Boxed up value.
 */

const LazyBox = g => ({
  map: f => LazyBox(() => f(g())),
  fold: (f = x => x) => f(g())
});

/**
 * composeLeft takes two functions and composes them from left to right.
 * composeRight takes two functions and composes them from right to left.
 *
 * @param {function} func1
 * @param {function} func2
 */

const composeLeft = (func1, func2) => (...args) => func2(func1(...args));
const composeRight = (func1, func2) => (...args) => func1(func2(...args));

/**
 * pipeLeft takes multiple functions and composes them from left to right.
 * pipeRight takes multiple functions and composes them from right to left.
 *
 * @param funcs
 */
const pipeLeft = (...funcs) => funcs.reduce(composeLeft);
const pipeRight = (...funcs) => funcs.reduce(composeRight);

const Left = value => ({
  map: func => Left(value),
  fold: (errorhandler, successhandler) => errorhandler(value),
  inspect: () => `Left(${value})`
});

const Right = value => ({
  map: func => Right(func(value)),
  fold: (errorhandler, successhandler) => successhandler(value),
  inspect: () => `Right(${value})`
});

const Either = value => (value ? Right(value) : Left(value));

// prettier-ignore

/**
 * Range returns an array containing numbers starting at the first parameter all the
 * way up to, but not including the last parameter.
 * example: range(2, 6) --> [2, 3, 4, 5];
 *
 * When only one parameter is passed in, creates an array of length equal to the parameter starting at zero.
 * example: range(4) --> [0, 1, 2, 3];
 *
 * @param {number} start
 * @param {number} end
 * @returns {array.<number>}
 */

const range = (start, end = 0) => Array
		.from(Array(Math.abs(start - end)))
		.map((_, index) => end
				? end > start
						? start + index
						: start - index
				: index
		);

exports.Box = Box;
exports.LazyBox = LazyBox;
exports.composeLeft = composeLeft;
exports.composeRight = composeRight;
exports.pipeLeft = pipeLeft;
exports.pipeRight = pipeRight;
exports.Either = Either;
exports.Left = Left;
exports.Right = Right;
exports.range = range;
