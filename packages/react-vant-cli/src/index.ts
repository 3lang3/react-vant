import fs from 'fs';
import { URL, fileURLToPath } from 'url';
import { dev } from './commands/dev.js';
import { build } from './commands/build.js';
import { test } from './commands/jest.js';
import { lint } from './commands/lint.js';
import { clean } from './commands/clean.js';
import { changelog } from './commands/changelog.js';
import { buildSite } from './commands/build-site.js';
import { commitLint } from './commands/commit-lint.js';

const packagePath = fileURLToPath(new URL('../package.json', import.meta.url));
const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf-8'));
export const cliVersion: string = packageJson.version;

process.env.REACT_VANT_CLI_VERSION = cliVersion;

export { dev, changelog, lint, test, clean, build, buildSite, commitLint };
