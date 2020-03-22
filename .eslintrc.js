module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["plugin:react/recommended", "airbnb"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    React: "writable"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/prop-types": [0],
    quotes: ["error", "double"],
    "arrow-parens": ["error", "as-needed"],
    "comma-dangle": ["error", "only-multiline"]
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["./"]
      }
    },
    react: {
      pragma: "React",
      version: "16.9.0"
    }
  },
  parser: "babel-eslint"
};
