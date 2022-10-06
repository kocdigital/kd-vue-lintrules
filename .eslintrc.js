module.exports = {
    extends: [
        'plugin:eslint-plugin/recommended',
    ],
    parserOptions: {
        sourceType: 'script',
        ecmaVersion: 'latest',
    },
    rules: {
        indent: ['error', 4],
        quotes: ['error', 'single'],
        'comma-dangle': ['error', {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'always-multiline',
        }],
        // enforce spacing before and after comma
        'comma-spacing': ['error', { before: false, after: true }],

        // enforce one true comma style
        'comma-style': ['error', 'last', {
            exceptions: {
                ArrayExpression: false,
                ArrayPattern: false,
                ArrowFunctionExpression: false,
                CallExpression: false,
                FunctionDeclaration: false,
                FunctionExpression: false,
                ImportDeclaration: false,
                ObjectExpression: false,
                ObjectPattern: false,
                VariableDeclaration: false,
                NewExpression: false,
            },
        }],
        // enforce newline at the end of file, with no multiple empty lines
        'eol-last': ['error', 'always'],
        // require or disallow use of semicolons instead of ASI
        semi: ['error', 'always'],
        // enforce spacing before and after semicolons
        'semi-spacing': ['error', { before: false, after: true }],
        // disallow unnecessary semicolons
        'no-extra-semi': 'error',
    },
};
