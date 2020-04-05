module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:eslint-comments/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "plugin:unicorn/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "prettier/unicorn",
        "prettier/@typescript-eslint"
    ],
    parserOptions: {
        ecmaVersion: 2018
    },
    rules: {
        "eslint-comments/no-unused-disable": "error"
    }
};
