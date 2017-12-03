/**
 * Box
 * @param value
 */
export const Box = (value) => ({
  map: (f) => Box(f(value)),
  fold: (f) => f(value),
  inspect: () => `Box(${value})`
});