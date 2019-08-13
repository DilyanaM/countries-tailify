module.exports = {
  moduleNameMapper: {
    '\\.styl$': 'identity-obj-proxy',
  },
  setupFiles: ['jest-prop-type-error', '<rootDir>/src/setupTests.js'],
  setupFilesAfterEnv: ['jest-enzyme'],
  testEnvironment: 'enzyme',
  testEnvironmentOptions: {
    enzymeAdapter: 'react16',
  },
};
