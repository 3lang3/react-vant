// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import packageJson from '../package.json';
import { dev } from './commands/dev';
import { build } from './commands/build';
import { test } from './commands/jest';
import { lint } from './commands/lint';
import { clean } from './commands/clean';
import { release } from './commands/release';
import { buildSite } from './commands/build-site';
import { commitLint } from './commands/commit-lint';

export const cliVersion: string = packageJson.version;

process.env.REACT_VANT_CLI_VERSION = cliVersion;

export {
  dev,
  lint,
  test,
  clean,
  build,
  release,
  buildSite,
  commitLint,
};
