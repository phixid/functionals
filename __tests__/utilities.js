export const addOne = x => x + 1;
export const addOneToEach = numbers => numbers.map(num => num + 1);

export const double = x => x * 2;
export const doubleEach = numbers => numbers.map(num => num * 2);

export const minusFive = x => x - 5;
export const minusFiveEach = numbers => numbers.map(num => num - 5);

export const randomNumberBetween1And10 = () => Math.floor(Math.random() * 10 + 1);
export const toArray = (...args) => args;
