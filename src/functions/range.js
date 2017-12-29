export const range = (n, o = 0) =>
  Array.from(Array(Math.abs(n - o))).map(
    (_, index) => (o ? (o > n ? n + index : n - index) : index)
  );
