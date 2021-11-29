import chalk from 'chalk';
import { createRequire } from 'module';
import { createServer, build } from 'vite';
import { getViteConfigForSiteDev, getViteConfigForSiteProd } from '../config/vite.site.js';
import { mergeCustomViteConfig } from '../common/index.js';
import { genSiteMobileShared } from './gen-site-mobile-shared.js';
import { genSiteDesktopShared } from './gen-site-desktop-shared.js';
import { genStyleDepsMap } from './gen-style-deps-map.js';
import { genDemoMobileShared } from './gen-demo-mobile-shared.js';

export async function genSiteEntry(): Promise<void> {
  return new Promise((resolve, reject) => {
    genStyleDepsMap()
      .then(() => {
        genDemoMobileShared();
        genSiteMobileShared();
        genSiteDesktopShared();
        resolve();
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
}

export async function compileSite(production = false) {
  await genSiteEntry();
  if (production) {
    const config = mergeCustomViteConfig(getViteConfigForSiteProd());
    await build(config);
  } else {
    const config = mergeCustomViteConfig(getViteConfigForSiteDev());
    const server = await createServer(config);
    await server.listen();

    const require = createRequire(import.meta.url);
    const { version } = require('vite/package.json');
    const viteInfo = chalk.cyan(`vite v${version}`);
    console.log(`\n  ${viteInfo}${chalk.green(` dev server running at:\n`)}`);
    server.printUrls();
  }
}
