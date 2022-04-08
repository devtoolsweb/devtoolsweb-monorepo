/* global module */
module.exports = {
    extends: [ 'plugin:jsdoc/recommended',
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended' ],
    parser: '@typescript-eslint/parser',
    plugins: [ '@typescript-eslint', 'jsdoc' ],
    root: true,
    rules: {
        '@typescript-eslint/brace-style': [ 'warn', 'stroustrup', { allowSingleLine: false }],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/indent': ['error'],
        '@typescript-eslint/lines-between-class-members': [ 'warn', 'always' ],
        '@typescript-eslint/member-ordering': [ 'warn', {
            'default': {
                memberTypes: [
                    'signature',
                    'public-static-field',
                    'protected-static-field',
                    'private-static-field',
                    'public-field',
                    'protected-field',
                    'private-field',
                    'constructor',
                    [ 'public-get', 'public-set' ],
                    [ 'protected-get', 'protected-set' ],
                    [ 'private-get', 'private-set' ],
                    'public-method',
                    'protected-method',
                    'private-method',
                    'public-static-get',
                    'protected-static-get',
                    'private-static-get',
                    'public-static-method',
                    'protected-static-method',
                    'private-static-method',
                ],
                order: 'alphabetically'
            },
            'interfaces': {
                memberTypes: [
                    'signature',
                    'field',
                    'method'
                ],
                order: 'alphabetically'
            }
        }],
        '@typescript-eslint/no-empty-interface': [ 'warn', { 'allowSingleExtends': true }],
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-unused-vars': [ 'warn', {
            argsIgnorePattern: '^_',
            varsIgnorePattern: 'only|skip|wrapper|assert|timeout'
        }],
        '@typescript-eslint/space-before-blocks': ['warn'],
        '@typescript-eslint/triple-slash-reference': [ 'warn', { path: 'always' }],
        '@typescript-eslint/type-annotation-spacing': [ 'warn', {
            after: true,
            before: false,
            overrides: { arrow: {
                'before': true,
                'after': true
            } }
        }],
        'array-bracket-spacing': [ 'warn', 'always', {
            'objectsInArrays': false,
            'singleValue': false
        }],
        'array-element-newline': [ 'warn', {
            ArrayExpression: 'consistent',
            ArrayPattern: { minItems: 2 }
        }],
        'arrow-spacing': [ 'warn', { // See also '@typescript-eslint/type-annotation-spacing'
            'before': true,
            'after': true
        }],
        'brace-style': 'off',
        'comma-spacing': [ 'warn', {
            after: true,
            before: false
        }],
        'func-call-spacing': [ 'warn', 'never' ],
        // 'function-paren-newline': [ 'error', 'consistent' ],
        'function-paren-newline': [ 'warn', 'multiline' ],
        'jsdoc/require-jsdoc': 0,
        'jsdoc/check-indentation': [ 'warn', { excludeTags: [] }],
        'indent': 'off',
        'key-spacing': [ 'warn', { beforeColon: false }],
        // 'key-spacing': [ 'error', { beforeColon: false, align: 'colon' }],
        'lines-between-class-members': 'off',
        'max-len': 'off',
        // 'multiline-comment-style': [ 'warn', 'starred-block' ],
        'no-empty': [ 'warn', { allowEmptyCatch: true }],
        'no-empty-function': 'warn',
        'no-lone-blocks': 'error',
        'no-multi-spaces': [ 'warn', { exceptions: {} }],
        'no-multiple-empty-lines': [ 'error', {
            max: 1,
            maxEOF: 0
        }],
        'no-tabs': [ 'warn', { allowIndentationTabs: false }],
        'no-trailing-spaces': ['warn'],
        'no-unused-vars': 'off',
        'object-curly-newline': [ 'warn', { ObjectExpression: {
            multiline: false,
            minProperties: 2
        } }],
        'object-curly-spacing': [ 'warn', 'always' ],
        'object-property-newline': [ 'warn', { allowAllPropertiesOnSameLine: false }],
        'object-shorthand': [ 'warn', 'always' ],
        'padded-blocks': [ 'warn', { classes: 'always' }],
        'prefer-const': ['error'],
        'quotes': [ 'warn', 'single' ],
        'semi': [ 'warn', 'never' ],
        'space-before-blocks': 'off',
        'space-before-function-paren': [ 'warn', {
            anonymous: 'always',
            asyncArrow: 'always',
            named: 'always'
        }],
        'space-infix-ops': ['warn'],
        'space-in-parens': [ 'warn', 'never' ],
        // 'space-in-parens': [ 'warn', 'always', {
        //     'exceptions': [ '{}', '[]', '()', 'empty' ]
        // }],
        'spaced-comment': [ 'warn', 'always', {
            block: {
                'balanced': true,
                'exceptions': ['-']
            },
            markers: ['/']
        }]
    }
}
