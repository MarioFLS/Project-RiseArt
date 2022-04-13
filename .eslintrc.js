module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
  },
  plugins: [
    'react',
  ],
  rules: {
    'max-len': ['error', { code: 90, ignoreUrls: true, ignoreComments: true }],
    'no-unreachable': 'error',
    'no-else-return': 'error',
    'consistent-return': ['off', { treatUndefinedAsUnspecified: true }],
  },
};
