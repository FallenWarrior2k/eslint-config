module.exports = {
    extends: [
        "@fallenwarrior2k/eslint-config/index",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "prettier/react"
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    settings: {
        react: {
            version: "detect"
        }
    }
};
