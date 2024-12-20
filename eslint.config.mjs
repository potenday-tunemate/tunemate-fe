import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: ["prettier"],
    extends: [
      "plugin:react/recommended",
      "plugin:prettier/recommended", // prettier 통합
      "@typescript-eslint/recommended",
    ],
    rules: {
      "prettier/prettier": "error", // Prettier와의 충돌 방지
      "@typescript-eslint/no-explicit-any": "error", // any 타입 사용 금지
      "no-console": "warn", // 콘솔 사용에 대한 경고
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          js: "never",
          jsx: "never",
          ts: "never",
          tsx: "never",
        },
      ],
      "unused-imports/no-unused-imports": "error", // 사용되지 않는 import 모듈
      "no-unused-vars": [
        "error",
        { args: "after-used", ignoreRestSiblings: true },
      ], // 사용되지 않는 변수
    },
    overrides: [
      // 규칙 무시
      {
        parserOptions: {
          project: "./tsconfig.json", // TypeScript 설정 파일 적용
        },
      },
    ],
  },
];
