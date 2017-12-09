/**
 * Compose takes two functions and composes them from right to left.
 *
 * @param func1
 * @param func2
 *
 * The first function applies itself to the application of the second function to one or more arguments.
 */

export const compose = (func1, func2) => (...args) => func1(func2(...args));