export const isFunction = (func) => {
  expect(typeof func).toEqual('function');
}

export const resemblesBox = object => {
  isFunction(object.map);
  isFunction(object.fold);
  isFunction(object.inspect);
};