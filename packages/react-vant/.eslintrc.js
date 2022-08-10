module.exports = {
  extends: ['../../.eslintrc', 'plugin:react/recommended'],
  overrides: [
    {
      settings: {
        react: {
          version: 'detect',
        },
      },
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension
      plugins: ['@typescript-eslint', 'react', 'react-hooks'],
      // As mentioned in the comments, you should extend TypeScript plugins here,
      // instead of extending them outside the `overrides`.
      // If you don't want to extend any rules, you don't need an `extends` attribute.
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,  // monorepo 的話要加上這行，才不會去找到最外層
      },
      rules: {
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/object-curly-spacing': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-unnecessary-type-assertion': 'off',
        '@typescript-eslint/restrict-plus-operands': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        'require-atomic-updates': 'off',
        'import/no-unresolved': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-param-reassign': 'off',
        'no-use-before-define': 'off',
        'no-explicit-any': 'off',
        'no-underscore-dangle': 'off',
        'react/default-props-match-prop-types': 'off',
        'react/require-default-props': 'off',
        'react-hooks/exhaustive-deps': 'off', // Checks deps of Hooks
        'react/display-name': 'off',
        'react/prop-types': 'off'
      },
    },
  ],
};
