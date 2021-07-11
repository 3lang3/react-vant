const strictEslint = require('./eslint');
// const softyEslint = require('./softyEslint');
const stylelint = require('./stylelint');
const prettier = require('./prettier');

module.exports = {
  stylelint,
  prettier,
  strictEslint,
  //   eslint: softyEslint,
  //   default: softyEslint,
};
