export const Left = value => ({
  map: func => Left(value),
  fold: (errorhandler, successhandler) => errorhandler(value),
  inspect: () => `Left(${value})`
});

export const Right = value => ({
  map: func => Right(func(value)),
  fold: (errorhandler, successhandler) => successhandler(value),
  inspect: () => `Right(${value})`
});

export const Either = value => (value == null ? Left(value) : Right(value));
