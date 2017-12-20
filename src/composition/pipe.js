/**
 * pipeLeft takes multiple functions and composes them from left to right.
 * pipeRight takes multiple functions and composes them from right to left.
 *
 * @param funcs
 */
import { composeLeft, composeRight } from './compose';

export const pipeLeft = (...funcs) => funcs.reduce(composeLeft);
export const pipeRight = (...funcs) => funcs.reduce(composeRight);
