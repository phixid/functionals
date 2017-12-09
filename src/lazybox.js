/**
 * LazyBox takes a function and 'boxes' it up.
 *
 * @param func1
 *
 * LazyBox.map: takes a function parameter, returns a new LazyBox containing a function that composes the parameter with the boxed function.
 * LazyBox.fold: takes a function parameter, composes the parameter with the boxed function and returns the result.
 * LazyBox.inspect: returns a string-template showing the Boxed up value.
 */

export const LazyBox = func1 => ({
  map: func2 => LazyBox(() => func2(func1())),
  fold: (func2 = x => x) => func2(func1())
});
