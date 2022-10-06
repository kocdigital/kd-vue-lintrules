module.exports = {
    rules: {
        'vue/html-indent': ['error', 4],
        'vue/require-valid-default-prop': 'off',
        'vue/mustache-interpolation-spacing': ['error', 'never'],
        'vue/html-closing-bracket-spacing': 'off',
        'vue/html-closing-bracket-newline': ['error', {
            singleline: 'never',
            multiline: 'never',
        }],
        'vue/prop-name-casing': ['error', 'camelCase'],
        'vue/no-multi-spaces': ['error', {
            ignoreProperties: false,
        }],
        'vue/first-attribute-linebreak': ['error', {
            'singleline': 'ignore',
            'multiline': 'beside',
        }],
        'vue/max-attributes-per-line': ['error', {
            multiline: {
                max: 1,
            },
        }],
        'vue/no-spaces-around-equal-signs-in-attribute': ['error'],
        'vue/no-use-v-if-with-v-for': ['error', {
            allowUsingIterationVar: false,
        }],
        '@kocdigital/no-template-src': 'error',
    },
};
