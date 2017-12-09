/**
 * composeLeft takes two functions and composes them from left to right.
 * composeRight takes two functions and composes them from right to left.
 * compose is an alias for composeRight.
 *
 * @param func1
 * @param func2
 *
 * The first function applies itself to the application of the second function to one or more arguments.
 */

export const composeLeft = (func1, func2) => (...args) => func2(func1(...args));
export const composeRight = (func1, func2) => (...args) => func1(func2(...args));
export const compose = composeRight;