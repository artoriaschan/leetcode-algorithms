module.exports = {
  extends: ['eslint:recommended', 'airbnb-base/legacy', 'prettier'],
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module'
  },
  env: {
    es6: true,
    node: true,
    browser: true
  },
  plugins: ['prettier'],
  rules: {
    "prettier/prettier": ["error", {
      "endOfLine":"auto"
    }],
    "no-param-reassign": ["error", { "props": false }],
    "strict": "off",
    "no-console": "off",
    "import/no-dynamic-require": "off",
    "global-require": "off",
    "require-yield": "off",
    "no-restricted-syntax": "off",
    "guard-for-in": "off",
    "no-nested-ternary":"off",
    "no-use-before-define":"off",
    "no-shadow": "off",
    "no-underscore-dangle": "off",
    "no-return-assign": "off",
    "no-plusplus": "off",
    "no-bitwise": "off",
    "consistent-return": "off",
    "no-param-reassign": "off",
    "no-continue": "off",
    "max-classes-per-file": "off",
    "no-unused-vars": "off"
  },
  settings: {
    // ...
  },
  globals: {
    // ...
    "BigInt": "readonly",
    "TreeNode": "readonly"
  }
};