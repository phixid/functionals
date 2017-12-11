const fs = require('fs');
const pkg = require('../package');

const versionIndices = {
  major: 0,
  minor: 1,
  patch: 2
};

const nextVersionPkg = (pkg, versionIndex) =>
  Object.assign({}, pkg, {
    version: pkg.version
      .split('.')
      .map((num, i) => (i > versionIndex ? 0 : i < versionIndex ? num : parseInt(num) + 1))
      .join('.')
  });

fs.writeFile(
  './package.json',
  JSON.stringify(nextVersionPkg(pkg, versionIndices[process.argv[2]])),
  'utf8',
  err => {
    return err ? process.exit(1) : null;
  }
);
