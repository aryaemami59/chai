import eslintjs from '@eslint/js';
import jsdoc from 'eslint-plugin-jsdoc';
import {configs} from 'typescript-eslint';

const {configs: eslintConfigs} = eslintjs;

export default [
  jsdoc.configs['flat/recommended'],
  eslintConfigs.recommended,
  ...configs.recommended,
  {
    languageOptions: {
      // if we ever use more globals than this, pull in the `globals` package
      globals: {
        console: false
      }
    },
    rules: {
      'no-var': 'error',
      'jsdoc/require-param-description': 'off',
      'jsdoc/require-returns-description': 'off',
      'jsdoc/tag-lines': ['error', 'any', {startLines: 1}],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_'
        }
      ],
      '@typescript-eslint/no-unsafe-function-type': 'off',
      'prefer-rest-params': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-declaration-merging': 'off',
      '@typescript-eslint/no-empty-object-type': 'off'
    }
  }
];
