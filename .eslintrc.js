module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
    'prettier'
  ],
  plugins:["prettier"],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "prettier/prettier":"error",
    "class-method-use-this": "off",
    "no-param-reassing":"off",
    "camelcase":"off",
    "no-console":"off",
    "no-unused-vars" : ["error" , {"argsIgnorePattern" : "next"}]
  },
};
