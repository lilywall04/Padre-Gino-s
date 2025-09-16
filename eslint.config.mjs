import js from "eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";
import reactPlugin from "eslint-plugin-react";
import { react } from "@babel/types";

/** atype {import('eslint).linter.Config[]} */
export default [
  js.configs.recommended,
  {
    ...reactPlugin.config.flat.recommended,
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  reactPlugin.configs.flat["jsx-runtime"],
  {
    files: ["**/*js", "**/*.jsx"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      "react/no-unescaped-entites": "off",
      "react/prop-types": "off",
    },
  },
  prettier,
];
