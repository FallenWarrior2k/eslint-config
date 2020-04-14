module.exports = {
    extends: [
        "@fallenwarrior2k/eslint-config/index",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/strict",
        "prettier/react"
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        "unicorn/prevent-abbreviations": [
            "error",
            {
                replacements: {
                    prop: false,
                    props: false
                }
            }
        ]
    },
    settings: {
        react: {
            version: "detect"
        }
    }
};
