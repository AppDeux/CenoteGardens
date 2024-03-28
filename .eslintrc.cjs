module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: ["eslint:recommended"],
  rules: {
    semi: ["error", "always"],
    "linebreak-style": ["error", "windows"],
  },
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
    // Configuration for Astro
    {
      files: ["*.astro"],
      extends: ["plugin:astro/recommended"],
      plugins: ["astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      globals: {
        Astro: "readonly",
      },
    },
    // Configuration for React
    {
      parser: "@typescript-eslint/parser",
      files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
      plugins: ["react", "prettier"],
      extends: ["plugin:react/recommended", "plugin:prettier/recommended"],
      parserOptions: {
        project: "./tsconfig.json",
      },
      rules: {
        "react/react-in-jsx-scope": 0,
        "react/prop-types": 0,
        "prettier/prettier": [
          "error",
          {
            endOfLine: "auto",
          },
        ],
      },
    },
    // Configuration for Vue
    {
      files: ["*.vue"],
      plugins: ["vue", "prettier"],
      extends: ["plugin:vue/recommended", "plugin:prettier/recommended"],
      parserOptions: {
        project: "./tsconfig.json",
      },
      rules: {
        "prettier/prettier": [
          "error",
          {
            endOfLine: "auto",
          },
        ],
      },
    },
  ],
};
