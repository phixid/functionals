# Subterfuge

A functional Javascript library to use and learn from! The idea is two-fold. A library 
to make your professional life easier as well as teach you the concepts behind functional programming.

Subterfuge will provide you with the means to rewrite the library. This means 
you will be able to implement the behaviour yourself using the test-suite of 
the library, making sure your own implementation behaves as expected.

## Concepts
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
