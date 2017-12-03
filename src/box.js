/**
 * Box takes a value and 'boxes' it up.
 * The box a has an API which allows us to see the value inside (inspect), let it be changed (map) or given back (fold).
 *
 * Box.map: takes a function parameter, applies the it to the Box'ed value and returns the result in a new Box.
 * Box.fold: takes a function parameter, applies it to the  Box'ed value and returns the result.
 * Box.inspect: returns a string-template showing the Box'ed up value.
 */

export const Box = (value) => ({
  map: (f) => Box(f(value)),
  fold: (f) => f(value),
  inspect: () => `Box(${value})`
});