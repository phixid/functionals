/*  Subterfuge v0.6.0
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
 * @param func1
 * @param func2
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

const Either = value => (value == null ? Left(value) : Right(value));

exports.Box = Box;
exports.LazyBox = LazyBox;
exports.composeLeft = composeLeft;
exports.composeRight = composeRight;
exports.pipeLeft = pipeLeft;
exports.pipeRight = pipeRight;
exports.Either = Either;
exports.Left = Left;
exports.Right = Right;
