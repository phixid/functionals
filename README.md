# Subterfuge 
[![Build Status](https://travis-ci.org/phixid/subterfuge.svg?branch=master)](https://travis-ci.org/phixid/subterfuge)
[![Coverage Status](https://coveralls.io/repos/github/phixid/subterfuge/badge.svg?branch=master)](https://coveralls.io/github/phixid/subterfuge?branch=master)

A functional Javascript library to use and learn from! The idea is two-fold. A library 
to make your professional life easier as well as teach you some of the concepts behind 
functional programming.

Subterfuge will provide you with good documentation in the comments and a documenting test-suite. 
This means you will be able to implement the behaviour yourself using the documentation and tests 
as a guide, making sure your own implementation behaves as expected.

## Contents:
- [Function composition](#function-composition)
    - [composeRight](#composeright)
    - [composeLeft](#composeleft)
    - [pipeRight](#piperight)
    - [pipeLeft](#pipeleft)
- [Container types](#container-types)
    - [Box](#box)
    - [LazyBox](#lazybox)
    - [Right](#right)
    - [Left](#left)
    - [Either](#either)
    - [fromNullable](#fromnullable)
- [Functionality](#functionality)
    - [range](#range)

## Function composition
- [composeRight](#composeright)
- [composeLeft](#composeleft)
- [pipeRight](#piperight)
- [pipeLeft](#pipeleft)

### composeRight
Composes two functions from right to left into one new function. This new function takes one or more parameters. 

### composeLeft
Composes two functions from left to right into one new function. This new function takes one or more parameters. 

### pipeRight
Composes multiple functions from right to left into one new function. This new function takes one or more parameters.

### pipeLeft
Composes multiple functions from left to right into one new function. This new function takes one or more parameters.


## Container types
- [Box](#box)
- [LazyBox](#lazybox)
- [Right](#right)
- [Left](#left)
- [Either](#either)
- [fromNullable](#fromnullable)

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
const Box = (value) => ({
  map: (f) => Box(f(value)),
  fold: (f) => f(value),
  inspect: () => `Box(${value})`
});
```

The Box above is just the simplest form of the concept. Based on what you want to put in and/or 
want to get back out of it, the implementation differs. Some examples of Boxes are: Left, Right, 
Maybe, Nothing, [LazyBox](#lazybox), ...

### LazyBox
Does the same as [Box](#box) but does it to a function instead of a value. The function passed to 
the LazyBox will not be executed while mapping over it. Only when you fold the LazyBox, the chained 
functionality will be executed.

```javascript
const LazyBox = g => ({
  map: f => LazyBox(() => f(g())),
  fold: (f = x => x) => f(g())
});
```

### Right
Right is like a Box. The map method on Right does the same as the one in Box. 
Fold takes two functions, an error-handler and a success-handler. It applies the success-handler 
to the contained value.
```javascript
const Right = value => ({
  map: func => Right(func(value)),
  fold: (errorhandler, successhandler) => successhandler(value),
  inspect: () => `Right(${value})`
});
```

### Left
Left is like a Box, it has a map, fold and inspect method. The map method on Left does not apply 
the function to the contained value. Fold takes two functions, an error-handler and a success-handler. 
It applies the error-handler to the contained value.

```javascript
const Left = value => ({
  map: func => Left(value),
  fold: (errorhandler, successhandler) => errorhandler(value),
  inspect: () => `Left(${value})`
});
```

### Either
Branches your code to a Right or a Left based on the value it was given. If the value is 
truthy it will branch to a Right, otherwise it will branch to a Left.

```javascript
const Either = value => value ? Right(value) : Left(value);
```

### fromNullable
Branches your code to a Right or a Left based on the value it was given. If the value is 
null or undefined it will branch to a Left passing in null, otherwise it will branch to a Right. 

```javascript
const fromNullable = (value) => value == null ? Left(null) : Right(value);
```

## Functionality
- [range](#range)

### range
Range returns an array containing numbers starting at the first parameter all the
way up to, but not including the last parameter.
example: range(2, 6) --> [2, 3, 4, 5];

When only one parameter is passed in, creates an array of length equal to the parameter starting at zero.
example: range(4) --> [0, 1, 2, 3];
