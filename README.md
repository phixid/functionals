# Subterfuge 
[![Build Status](https://travis-ci.org/phixid/subterfuge.svg?branch=master)](https://travis-ci.org/phixid/subterfuge)
[![Coverage Status](https://coveralls.io/repos/github/phixid/subterfuge/badge.svg?branch=master)](https://coveralls.io/github/phixid/subterfuge?branch=master)

A functional Javascript library to use and learn from! The idea is two-fold. A library 
to make your professional life easier as well as teach you some of the concepts behind 
functional programming.

Subterfuge will provide you with good documentation in the comments and a documenting test-suite. 
This means you will be able to implement the behaviour yourself using the documentation and tests 
as a guide, making sure your own implementation behaves as expected.

## Functionality

- [Box](#box)
- LazyBox
- composeLeft
- composeRight
- pipeLeft
- pipeRight

## Functional concepts
### Box
A Box takes a value and boxes it up. On the box you'll be able to use a minimal, Box-specific API 
which does not care about the value inside the Box. The API is as follows:

- map:
    - takes a function
    - applies the function to the Box value
    - returns a new Box which contains the result    
- fold:
    - takes a function
    - applies the function to the Box value
    - returns the result
- inspect (optional):
    - shows you the Box with the value inside

```javascript
export const Box = (value) => ({
  map: (f) => Box(f(value)),
  fold: (f) => f(value),
  inspect: () => `Box(${value})`
});
```

The Box above is just the simplest form of the concept. Based on what you want to put in and/or 
want to get back out of it, the implementation differs. Some examples of Boxes are: Left, Right, 
Maybe, Nothing, LazyBox, ...
