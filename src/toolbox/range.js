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

export const range = (start, end = 0) => Array
		.from(Array(Math.abs(start - end)))
		.map((_, index) => end
				? end > start
						? start + index
						: start - index
				: index
		);
