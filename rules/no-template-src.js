'use strict';

var utils = require('eslint-plugin-vue/lib/utils');

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Disallow src property on Vue template tags',
            categories: undefined,
            url: 'https://github.com/kocdigital/kd-vue-lintrules',
        },
        fixable: null,
        hasSuggestions: false,
        schema: [],
        messages: {
            hasSrc: 'HTML file is not allowed. HTML syntax must be in `.vue` file. [No src]',
        },
    },
    /** @param {RuleContext} context */
    create(context) {
        return {
            /** @param {Program} program */
            Program(program) {
                const element = program.templateBody;
                if (element == null) {
                    return;
                }

                const hasSrc = utils.hasAttribute(element, 'src');

                if (hasSrc) {
                    context.report({
                        node: element,
                        loc: element.loc,
                        messageId: 'hasSrc',
                    });
                }
            },
        };
    },
};
