const { join } = require('path');
const { existsSync } = require('fs');
const { ROOT } = require('./shared.cjs');

const JEST_SETUP_FILE = join(__dirname, 'jest.setup.cjs');
const JEST_FILE_MOCK_FILE = join(__dirname, 'jest.file-mock.cjs');
const JEST_STYLE_MOCK_FILE = join(__dirname, 'jest.style-mock.cjs');

const DEFAULT_CONFIG = {
  setupFilesAfterEnv: [JEST_SETUP_FILE],
  transform: {
    '\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|scss)$': JEST_STYLE_MOCK_FILE,
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      JEST_FILE_MOCK_FILE,
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'md'],
  testPathIgnorePatterns: ['/node_modules/', '_site', 'site'],
  transformIgnorePatterns: ['/node_modules/(?!(@react-vant/cli))/'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/demo/**'],
  coverageDirectory: './tests/coverage',
  snapshotSerializers: ['enzyme-to-json/serializer'],
};

function readRootConfig() {
  const ROOT_CONFIG_PATH = join(ROOT, 'jest.config.js');

  if (existsSync(ROOT_CONFIG_PATH)) {
    return require(ROOT_CONFIG_PATH);
  }

  return {};
}

module.exports = {
  ...DEFAULT_CONFIG,
  ...readRootConfig(),
};
