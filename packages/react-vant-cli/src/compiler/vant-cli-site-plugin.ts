/* eslint-disable class-methods-use-this */
import { Compiler } from 'webpack';
import { genDemoMobileShared } from './gen-demo-mobile-shared';
import { genSiteMobileShared } from './gen-site-mobile-shared';
import { genSiteDesktopShared } from './gen-site-desktop-shared';
import { genStyleDepsMap } from './gen-style-deps-map';

const PLUGIN_NAME = 'VantCliSitePlugin';

async function genSiteEntry() {
  genStyleDepsMap().then(() => {
    genDemoMobileShared();
    genSiteMobileShared();
    genSiteDesktopShared();
  });
}

export class VantCliSitePlugin {
  apply(compiler: Compiler) {
    if (process.env.NODE_ENV === 'production') {
      compiler.hooks.beforeCompile.tapPromise(PLUGIN_NAME, genSiteEntry);
    } else {
      compiler.hooks.watchRun.tapPromise(PLUGIN_NAME, genSiteEntry);
    }
  }
}
