module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        'eslint-config-standard-with-typescript',
        'prettier',
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        project: './tsconfig.json',
    },
    "plugins": [
        "react",
        '@typescript-eslint', 'prettier'
    ],
    "rules": {
        'prettier/prettier': 'error'
    }
}
