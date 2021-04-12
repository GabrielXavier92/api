module.exports = {
  extends: ['airbnb-typescript/base'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    'import/extensions': 0,
    'max-len': [2, 130, 4, { ignoreUrls: true }],
    'no-underscore-dangle': 'off',
    'implicit-arrow-linebreak': 'off',
    'class-methods-use-this': 'off',
    'operator-linebreak': 'off',
  },
};
