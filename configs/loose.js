module.exports = {
    extends: [
        './recommended',
        './partials/typescript',
    ].map(require.resolve),
    rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript/interface-name-prefix': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-implicit-any': 'off',
        '@kocdigital/no-template-src': 'warn',
    },
};
