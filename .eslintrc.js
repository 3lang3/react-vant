module.exports = {
  extends: [require.resolve('@rokku/fabric/dist/eslint')],
  ignorePatterns: ['/.*'],
  rules: {
    '@typescript-eslint/ban-types': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-param-reassign': 'off',
    'no-use-before-define': 'off',
    'no-explicit-any': 'off',
  },
};
