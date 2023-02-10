module.exports = {
  collectCoverageFrom: [
    'packages/**/*.js',
    'packages/**/*.jsx',
    '!**/*.config.js',
    '!**/*.stories.jsx',
    '!**/node_modules/**',
    '!**/dist/**',
    '!**/examples/**',
    '!**/docs-examples/**'
  ],
  coverageReporters: ['json', 'lcov', 'text', 'clover', 'json-summary'],
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 85,
      lines: 85,
      statements: 85
    }
  },
  moduleNameMapper: {
    '.+\\.(css|scss)$': 'identity-obj-proxy',
    '.+\\.(png|jpg|svg)$': '<rootDir>/__mocks__/fileMock.js',
    '@boozallen-uip/uswds-react-core': '<rootDir>/packages/core/src/index.js',
    '@boozallen-uip/uswds-react-utils': '<rootDir>/packages/utils/src/index.js',
    '@uswds/uswds/js/(.*)': '<rootDir>/node_modules/@uswds/uswds/packages/$1/src/index.js'
  },
  setupFilesAfterEnv: ['./setupTests.js'],
  testEnvironment: 'jsdom'
};
