'use strict';

module.exports = {
    rules: {
        'no-template-src': require('./rules/no-template-src'),
    },
    configs: {
        recommended: require('./configs/recommended'),
        loose: require('./configs/loose'),
    },
};
