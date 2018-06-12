module.exports = {
  "extends": ["eslint:recommended", "google", "plugin:react/recommended"],
  "parserOptions": {
    "ecmaVersion": 7,
    "sourceType": "module"
  },
  "env": {
    "node": true,
    "browser": true,
    "es6": true
  },
  "rules": {
    "no-plusplus": 0,
    "no-unused-vars": 0,
    "no-use-before-define": 0,
    "react/jsx-filename-extension": 0,
    "react/no-array-index-key": 0,
    "react/no-unused-state": 0,
    "react/prop-types": 0,
    "react/no-multi-comp": 0,
    "import/no-duplicates": 0,
    "import/first": 0,
    "max-len": 0,
    "require-jsdoc": 0,
  }
};
