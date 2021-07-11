import * as path from 'path';
import * as fs from 'fs';

let parserOptions: {
  tsconfigRootDir?: string;
  project?: string;
  createDefaultProgram?: boolean;
} = {
  project: './tsconfig.json',
};

if (!fs.existsSync(path.join(process.env.PWD || '.', './tsconfig.json'))) {
  parserOptions = {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
    /**
     * parserOptions.createDefaultProgram
     * Default .false
     * This option allows you to request that when the setting is specified,
     * files will be allowed when not included in the projects defined by the provided files.
     * Using this option will incur significant performance costs.
     * This option is primarily included for backwards-compatibility.
     * See the project section above for more information.projecttsconfig.json
     */
    createDefaultProgram: true,
  };
}

module.exports = {
  root: true,
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint'],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true,
  },
  // ignorePatterns: ['/.*'],
  rules: {
    'react/jsx-wrap-multilines': 0,
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/sort-comp': 1,
    'react/jsx-one-expression-per-line': 0,
    'generator-star-spacing': 0,
    'function-paren-newline': 0,
    'import/no-named-as-default-member': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': [
      2,
      {
        ignore: ['^@/', '^@@/', '^@alipay/bigfish/'],
        caseSensitive: true,
        commonjs: true,
      },
    ],
    'import/order': 'warn',
    'react/jsx-props-no-spreading': 0,
    'react/state-in-constructor': 0,
    'react/static-property-placement': 0,
    'import/no-extraneous-dependencies': [
      2,
      {
        optionalDependencies: true,
        devDependencies: [
          '**/tests/**.{ts,js,jsx,tsx}',
          '**/_test_/**.{ts,js,jsx,tsx}',
          '/mock/**/**.{ts,js,jsx,tsx}',
          '**/**.test.{ts,js,jsx,tsx}',
          '**/_mock.{ts,js,jsx,tsx}',
          '**/example/**.{ts,js,jsx,tsx}',
          '**/examples/**.{ts,js,jsx,tsx}',
        ],
      },
    ],
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'linebreak-style': 0,
    // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': 'off',
    'import/prefer-default-export': 'off',
    'import/no-default-export': [0, 'camel-case'],
    // Too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': 'off',
    'sort-imports': 0,
    // Use function hoisting to improve code readability
    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
    // Makes no sense to allow type inferrence for expression parameters, but require typing the response
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true, typedefs: true },
    ],
    '@typescript-eslint/explicit-function-return-type': [
      'off',
      { allowTypedFunctionExpressions: true },
    ],
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/no-var-requires': 0,
    // Common abbreviations are known and readable
    'unicorn/prevent-abbreviations': 'off',
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    'import/no-cycle': 0,
    'react/no-array-index-key': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    // issue https://github.com/facebook/react/issues/15204
    'react-hooks/exhaustive-deps': 'off',
    // Conflict with prettier
    'arrow-body-style': 0,
    'arrow-parens': 0,
    'object-curly-newline': 0,
    'implicit-arrow-linebreak': 0,
    'operator-linebreak': 0,
    'eslint-comments/no-unlimited-disable': 0,
    'no-param-reassign': 2,
    'space-before-function-paren': 0,
    'import/extensions': 0,
  },
  parserOptions,
};
