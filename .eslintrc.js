module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['jest', 'react', 'react-hooks'],
  ignorePatterns: [
    '*.config.js',
    'build',
    'coverage',
    'dist',
    'docs/',
    'node_modules/',
    'scripts/',
    'packages/table/' // TODO: remove this after fixing table linting issues
  ],
  rules: {
    /**
     * This rule prevents arrow functions from returning values.
     */
    'consistent-return': 'off',
    /**
     * This rule disallows the usage of the unary operators `++` and `--`.
     */
    'no-plusplus': 'off',
    /**
     * Storybook add-on imports appear to be extraneous.
     */
    'import/no-extraneous-dependencies': 'off',
    /**
     * Detects cycles for ES6 imports.
     */
    'import/no-cycle': 'off',
    /**
     * Workspace imports appear unresolved even though they work.
     */
    'import/no-unresolved': 'off',
    /**
     * Don't disallow any prop-types.
     */
    'react/forbid-prop-types': 'off',
    /**
     * Props that are not required should have default values provided via defaultProps.
     */
    'react/require-default-props': 'off',
    /**
     * Prop spreading (`...props`) in JSX decreases code readability.
     * However, when creating reusable components, this practice is quite common and useful.
     */
    'react/jsx-props-no-spreading': 'off',
    /**
     * This rule conflicts with Prettier formatting.
     */
    'react/jsx-curly-newline': 'off',
    /**
     * Entities should be escaped.
     */
    'react/no-unescaped-entities': 'off',
    /**
     * Disallows multiple JSX expressions on a single line.
     */
    'react/jsx-one-expression-per-line': 'off',
    /**
     * Disallows binding functions to JSX props.
     */
    'react/jsx-no-bind': 'off',
    /**
     * USWDS uses redundant roles in some instances.
     */
    'jsx-a11y/no-redundant-roles': 'off',
    /**
     * React uses `htmlFor` instead of `for` so this rule causes false positives.
     */
    'jsx-a11y/label-has-associated-control': 'off',
    /**
     * This rule disallows nested ternaries.
     */
    'no-nested-ternary': 'warn',
    /**
     * The rule disallows using array indexes in or as keys.
     */
    'react/no-array-index-key': 'warn',
    /**
     * Must use destructuring props assignment.
     */
    'react/destructuring-assignment': 'warn',
    /**
     * Components without any children content should be self-closing.
     */
    'react/self-closing-comp': 'error',
    /**
     * Enforces consistency for boolean attributes in JSX.
     */
    'react/jsx-boolean-value': ['error', 'never'],
    /**
     * Airbnb's ruleset disallows `for...of` and `for...in` loops.
     * This overrides their `no-restricted-syntax` rule to allow them.
     */
    'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
    /**
     * Turn off pascal case requirement for storybook
     */
    'storybook/prefer-pascal-case': 'off'
  }
};
