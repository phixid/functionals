/*  Subterfuge v0.8.1
 *  https://github.com/phixid/subterfuge
 *  (c) 2017-2018 Kristof Hermans <@phixid>
 *  Subterfuge may be freely distributed under the MIT license.
 */

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

/**
 * Box takes a value and 'boxes' it up.
 * The box a has an API which allows us to see the value inside (inspect), let it be
 * changed (map) or given back (fold).
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

// prettier-ignore
/**
 * Left resembles a Box. Meaning it has a map, fold and inspect method.
 *
 * @param value
 *
 * Left.fold: takes two function parameters, applies the first one to the value.
 * Left.inspect: returns a string-template showing the value in a Left.
 * Left.map: takes a function parameter, returns itself.
 */

const Left = value => ({
	chain: _ => Left(value),
	fold: (errorhandler, _) => errorhandler(value),
	inspect: () => `Left(${value})`,
	map: _ => Left(value)
});

/**
 * Right resembles a Box. Meaning it has a map, fold and inspect method.
 *
 * @param value
 *
 * Right.fold: takes two function parameters, applies the second one to the value.
 * Right.inspect: returns a string-template showing the value in a Right.
 * Right.map: takes a function parameter, a new Right containing the function applied to the value.
 */

const Right = value => ({
  chain: f => f(value),
  fold: (_, successhandler) => successhandler(value),
  inspect: () => `Right(${value})`,
  map: f => Right(f(value))
});

/**
 * Either branches our code based on a parameter. If the parameter is truthy it will
 * branch to a Right, otherwise it will branch to a Left.
 *
 * @param value
 */

const Either = value => (value ? Right(value) : Left(value));

/**
 * fromNullable branches our code based on a parameter. If the parameter is null or undefined it will
 * branch to a Left containing null, otherwise it will branch to a Right containing the value.
 *
 * @param value
 */

const fromNullable = value => (value == null ? Left(null) : Right(value));

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

// Function composition

export { composeLeft, composeRight, pipeLeft, pipeRight, Box, LazyBox, Left, Right, Either, fromNullable, range };
