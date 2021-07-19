module.exports = {
  extends: [require.resolve('@zhpfe/fabric/dist/eslint')],
  ignorePatterns: ['/.*'],
  rules: {
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/object-curly-spacing': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-param-reassign': 'off',
    'no-use-before-define': 'off',
    'no-explicit-any': 'off'
  },
};
