import tseslint from 'typescript-eslint';
import parser from "@typescript-eslint/parser";
import reactHooks from "eslint-plugin-react-hooks";
import eslintPluginPrettier from "eslint-plugin-prettier";

export default tseslint.config(
    {
        languageOptions: {
            parser,
        },
        plugins: {
            'react-hooks':  reactHooks,
            'prettier': eslintPluginPrettier
        },
        files: ["packages/**/src/*.ts", "packages/**/src/*.tsx"],
        rules: {
            // General
            'no-underscore-dangle': ['warn', {allowAfterThis: true, allow: ['_id']}],
            'class-methods-use-this': 'off',
            'global-require': 'error',
            'prefer-arrow-callback': ['error', {allowNamedFunctions: true}],
            'no-return-assign': ['error', 'except-parens'],
            'no-console': ['error'],
            'no-plusplus': 'off',
            'no-unused-vars': ['error', {varsIgnorePattern: 'd', argsIgnorePattern: 'server|context|ctx|type'}],
            'lines-between-class-members': ['off'],
            'no-use-before-define': ['off'],
            'func-names': ['error', 'always'],
            'no-alert': ['error'],

            // Typescript
            '@typescript-eslint/indent': ['off'],
            // '@typescript-eslint/no-unused-vars': ['error', {varsIgnorePattern: 'd'}],
            '@typescript-eslint/no-unused-expressions': ['off'], // This was disabled because some upgrade to airbnb rules.
            '@typescript-eslint/explicit-member-accessibility': ['off'],
            '@typescript-eslint/explicit-function-return-type': ['off', {allowExpressions: true, allowTypedFunctionExpressions: true}],
            '@typescript-eslint/no-explicit-any': ['off'],
            '@typescript-eslint/ban-ts-ignore': ['off'],
            '@typescript-eslint/ban-ts-comment': ['off'],
            '@typescript-eslint/lines-between-class-members': ['off'],
            '@typescript-eslint/interface-name-prefix': ['off'],
            '@typescript-eslint/no-before-define': ['off'], // This was disabled to support optional chaining: https://github.com/typescript-eslint/typescript-eslint/issues/1116
            '@typescript-eslint/explicit-module-boundary-types': ['off'],

            // React
            'react/jsx-uses-react': ['off'],
            'react/react-in-jsx-scope': ['off'],
            // 'react/forbid-prop-types': 'error',
            'react/jsx-indent': ['off'],
            'react/jsx-indent-props': ['off'],
            // 'react/jsx-filename-extension': ['error', {extensions: ['.tsx']}],
            'react/require-default-props': 'off',
            // 'react/prefer-stateless-function': 'error',
            // 'react/no-unknown-property': ['error', {ignore: ['for']}],
            'react/no-unused-prop-types': 'off',
            'react/no-typos': 'off',
            'react/no-children-prop': 'off',
            'react/destructuring-assignment': ['off', 'always'],
            'react/jsx-curly-newline': ['off'],
            'react/jsx-one-expression-per-line': 'off',
            'react/jsx-props-no-spreading': ['off'],
            'react/jsx-wrap-multilines': ['off'],
            'react/display-name': ['off'],
            'react/prop-types': ['off'],

            // ES6 Import
            'import/no-extraneous-dependencies': 'off',
            'import/no-unresolved': 'off',
            'import/prefer-default-export': 'off',
            'import/extensions': 'off',
            'import/no-named-default': 'off',
            'import/no-default-export': 'off',

            // JSX a11y
            'jsx-a11y/label-has-for': 'off',
            'jsx-a11y/anchor-is-valid': 'off',
            'jsx-a11y/label-has-associated-control': 'off',

            // React Hooks
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',

            // Prettier
            'prettier/prettier': [
                "error",
                {
                    "endOfLine": "auto"
                },
            ],
        }
    }
);