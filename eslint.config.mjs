import ts from "@typescript-eslint/eslint-plugin";
import prettier from "eslint-plugin-prettier";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";


export default [
  // "eslint:recommended",
  {
    files: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    plugins: {
      "@typescript-eslint": ts
    },

    languageOptions: {
      sourceType: "module",
      globals: {
        ...globals.jest,
        ...globals.browser,
        ...globals.node
      },
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json"
      }
    },

    rules: {
      ...ts.configs.recommended.rules,
      ...prettier.rules,
      "react/react-in-jsx-scope": "off"
    }
  }
];
