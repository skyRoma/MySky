module.exports = {
  env: {
    node: true,
    commonjs: true,
    es6: true,
  },
  extends: 'eslint:recommended',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'no-var': 'error',
    'prefer-const': 'error',
    'sort-requires/sort-requires': 2,
  },
  plugins: ['sort-requires'],
};
