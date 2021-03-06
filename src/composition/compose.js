/**
 * composeLeft takes two functions and composes them from left to right.
 * composeRight takes two functions and composes them from right to left.
 *
 * @param {function} func1
 * @param {function} func2
 */

export const composeLeft = (func1, func2) => (...args) => func2(func1(...args));
export const composeRight = (func1, func2) => (...args) => func1(func2(...args));
