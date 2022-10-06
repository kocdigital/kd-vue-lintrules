module.exports = {
    rules: {
        // Only allow 4 space indentation
        // https://eslint.org/docs/latest/rules/indent
        // indent: ['error', 4, {
        //     'ignoreNodes': ['PropertyDefinition'],
        // }],
        indent: 'off',
        '@typescript-eslint/indent': ['error', 4, {
            'ignoredNodes': [
                'FunctionExpression > .params[decorators.length > 0]',
                'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
                'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key',
            ],
        }],

        // Enforce all quotes to be single line
        // https://eslint.org/docs/latest/rules/quotes
        quotes: ['error', 'single'],

        // Do not allow inline comments
        // https://eslint.org/docs/latest/rules/no-inline-comments
        'no-inline-comments': 'error',

        // Disallow spaces in curly braces
        // https://eslint.org/docs/latest/rules/object-curly-spacing
        'object-curly-spacing': ['error', 'never'],

        // Disallow spaces before function parenthesses
        // https://eslint.org/docs/latest/rules/space-before-function-paren
        'space-before-function-paren': ['error', {
            anonymous: 'never',
            named: 'never',
            asyncArrow: 'always',
        }],

        // Require trailing commas in multiline object literals
        // https://eslint.org/docs/latest/rules/comma-dangle
        'comma-dangle': ['error', {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'always-multiline',
        }],

        // Enforce spacing before and after comma
        // https://eslint.org/docs/latest/rules/comma-spacing
        'comma-spacing': ['error', { before: false, after: true }],

        // Enforce one true comma style
        // https://eslint.org/docs/latest/rules/comma-style
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

        // Enforce newline at the end of file, with no multiple empty lines
        // https://eslint.org/docs/latest/rules/eol-last
        'eol-last': ['error', 'always'],

        // Require or disallow use of semicolons instead of ASI
        // https://eslint.org/docs/latest/rules/semi
        semi: ['error', 'always'],

        // Enforce spacing before and after semicolons
        // https://eslint.org/docs/latest/rules/semi-spacing
        'semi-spacing': ['error', { before: false, after: true }],

        // Disallow unnecessary semicolons
        // https://eslint.org/docs/latest/rules/no-extra-semi
        'no-extra-semi': 'error',

        // Disallow console
        // https://eslint.org/docs/latest/rules/no-console
        'no-console': 'error',

        // Disallog debugger
        // https://eslint.org/docs/latest/rules/no-debugger
        'no-debugger': 'error',

        // Allow prototyping
        // https://eslint.org/docs/latest/rules/no-prototype-builtins
        'no-prototype-builtins': 'off',

        // Require newline before return
        // https://eslint.org/docs/latest/rules/newline-before-return
        'newline-before-return': 'error',

        // https://eslint.org/docs/latest/rules/
    },
};
