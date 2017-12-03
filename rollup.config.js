import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

const pkg = require('./package');

const input = 'src/index.js';
const output = 'dist/functionals.js';
const banner = `//  Functionals v${pkg.version}
//  https://github.com/phixid/${pkg.name}
//  (c) 2017-${new Date().getFullYear()} ${pkg.author}
//  Functionals may be freely distributed under the ${pkg.license} license.`;

const config = {
  input: input,
  output: {
    file: output,
    format: 'es',
    name: 'Functionals'
  },
  banner: banner,
  plugins: [
      resolve(),
      commonjs()
  ]
};

module.exports = config;
