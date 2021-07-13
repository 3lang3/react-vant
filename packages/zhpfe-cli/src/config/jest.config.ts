/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import { join } from 'path';
import { existsSync } from 'fs-extra';
import {
  ROOT,
  SRC_DIR,
  JEST_SETUP_FILE,
  JEST_FILE_MOCK_FILE,
  JEST_STYLE_MOCK_FILE,
} from '../common/constant';

const DEFAULT_CONFIG = {
  setupFilesAfterEnv: [JEST_SETUP_FILE],
  transform: {
    '\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|scss)$': JEST_STYLE_MOCK_FILE,
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': JEST_FILE_MOCK_FILE,
    'site-mobile-demo$': join(ROOT, 'tests/shared/demoWrapper'),
    '^zhpfe$': SRC_DIR,
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'md'],
  testPathIgnorePatterns: ['/node_modules/', '_site', 'site'],
  transformIgnorePatterns: ['/node_modules/(?!(@zhpfe/cli))/'],
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
