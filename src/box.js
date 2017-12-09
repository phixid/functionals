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

export const Box = (value) => ({
  map: (f) => Box(f(value)),
  fold: (f = x => x) => f(value),
  inspect: () => `Box(${value})`
});