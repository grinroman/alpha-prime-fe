module.exports = {
  $schema: "https://json.schemastore.org/eslintrc",
  root: true,
  extends: [
    "plugin:tailwindcss/recommended",
    "next/core-web-vitals",
    "prettier",
  ],
  plugins: [
    "eslint-plugin-prettier",
    "eslint-plugin-tailwindcss",
    "unused-imports",
  ],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
    "tailwindcss/no-custom-classname": "off",
    "tailwindcss/classnames-order": "warn",
    "react-hooks/rules-of-hooks": "warn",
    "unused-imports/no-unused-imports": "warn",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
  },
  settings: {
    tailwindcss: {
      callees: ["cn"],
      config: "tailwind.config.js",
    },
    next: {
      rootDir: true,
    },
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
    },
  ],
}
