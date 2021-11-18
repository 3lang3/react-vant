module.exports = {
  extends: [require.resolve('@react-vant/fabric/dist/eslint')],
  ignorePatterns: ['/.*'],
  rules: {
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/object-curly-spacing': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-param-reassign': 'off',
    'no-use-before-define': 'off',
    'no-explicit-any': 'off',
    'no-underscore-dangle': 'off',
    'react/default-props-match-prop-types': 'off',
    'react/require-default-props': 'off',
  },
};
