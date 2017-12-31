// prettier-ignore
import { Left, Right } from './left-right'

/**
 * Either branches our code based on a parameter. If the parameter is truthy it will
 * branch to a Right, otherwise it will branch to a Left.
 *
 * @param value
 */

export const Either = value => (value ? Right(value) : Left(value));

/**
 * fromNullable branches our code based on a parameter. If the parameter is null or undefined it will
 * branch to a Left containing null, otherwise it will branch to a Right containing the value.
 *
 * @param value
 */

export const fromNullable = value => (value == null ? Left(null) : Right(value));
