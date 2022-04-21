module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:testing-library/react',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
  },
  plugins: [
    'react',
    'testing-library',
  ],
  rules: {
    'max-len': ['error', { code: 90, ignoreUrls: true, ignoreComments: true }],
    'no-unreachable': 'error',
    'no-else-return': 'error',
    'consistent-return': ['off', { treatUndefinedAsUnspecified: true }],
    'testing-library/await-async-query': 'warn',
    'testing-library/no-await-sync-query': 'warn',
    'testing-library/no-debugging-utils': 'warn',
    'testing-library/no-dom-import': 'warn',
  },
};
