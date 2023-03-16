module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "plugin:vue/essential",
    "plugin:vue/recommended",
    "prettier"
  ],
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "ecmaVersion": 13,
    "sourceType": "module"
  },
  "plugins": [
    "vue"
  ],
  "rules": {
    "vue/multi-word-component-names": [
      "error",
      {
        "ignores": [
          "Breakpoint",
          "Footer",
          "Header",
          "Error",
          "Order"
        ]
      }
    ]
  }
}