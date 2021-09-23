/*
 * @Author: beiluo1@xiaohongshu.com
 * @Date: 2021-04-10 17:24:34
 * @LastEditTime: 2021-09-23 15:28:49
 * @LastEditors: beiluo1@xiaohongshu.com
 * @Description: eslint规则
 */
module.exports = {
  extends: ["eslint:recommended", "airbnb-base/legacy", "prettier"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    strict: "off",
    "no-console": "off",
    "import/no-dynamic-require": "off",
    "global-require": "off",
    "require-yield": "off",
    "no-restricted-syntax": "off",
    "guard-for-in": "off",
    "no-nested-ternary": "off",
    "no-use-before-define": "off",
    "no-shadow": "off",
    "no-underscore-dangle": "off",
    "no-return-assign": "off",
    "no-plusplus": "off",
    "no-bitwise": "off",
    "consistent-return": "off",
    "no-continue": "off",
    "max-classes-per-file": "off",
    "no-unused-vars": "off",
    "no-param-reassign": "off",
  },
  settings: {},
  globals: {
    BigInt: "readonly",
    TreeNode: "readonly",
  },
};
