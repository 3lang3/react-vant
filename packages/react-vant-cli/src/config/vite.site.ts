import { join } from 'path';
import { get } from 'lodash-es';
import react from '@vitejs/plugin-react';
import { injectHtml } from 'vite-plugin-html';
import type { InlineConfig } from 'vite';
import mdoc from 'vite-plugin-react-mdoc';
import { setBuildTarget, getVantConfig, isDev } from '../common/index.js';
import {
  SITE_DIST_DIR,
  SITE_MOBILE_SHARED_FILE,
  SITE_MOBILE_DEMO_FILE,
  SITE_DESKTOP_SHARED_FILE,
  SITE_SRC_DIR,
  SRC_DIR,
  ROOT,
} from '../common/constant.js';

function getSiteConfig(vantConfig: any) {
  const siteConfig = vantConfig.site;

  if (siteConfig.locales) {
    return siteConfig.locales[siteConfig.defaultLang || 'en-US'];
  }

  return siteConfig;
}

function getTitle(config: { title: string; description?: string }) {
  let { title } = config;

  if (config.description) {
    title += ` - ${config.description}`;
  }

  return title;
}

function getHTMLMeta(vantConfig: any) {
  const meta = get(vantConfig, 'site.htmlMeta');

  if (meta) {
    return Object.keys(meta)
      .map((key) => `<meta name="${key}" content="${meta[key]}">`)
      .join('\n');
  }

  return '';
}

export function getViteConfigForSiteDev(): InlineConfig {
  setBuildTarget('site');

  const vantConfig = getVantConfig();
  const siteConfig = getSiteConfig(vantConfig);
  const title = getTitle(siteConfig);
  const baiduAnalytics = get(vantConfig, 'site.baiduAnalytics');
  const enableVConsole = isDev() && get(vantConfig, 'site.enableVConsole');

  return {
    base: './',
    root: SITE_SRC_DIR,
    plugins: [
      react(),
      mdoc({
        root: ROOT,
        codeBlockOutput: ['independent'],
        localPkgs: {
          'react-vant': {
            version: '2.0.0-alpha.19',
          },
        },
        replaceHtml: (JSX) => {
          const group = JSX.replace(/(<h3\s+id=)/g, ':::$1')
            .replace(/<h2/g, ':::<h2')
            .split(':::');

          const ne = group
            .map((fragment) => {
              if (fragment.indexOf('<h3') !== -1) {
                return `<div className="van-doc-card">${fragment}</div>`;
              }

              return fragment;
            })
            .join('');

          return ne;
        },
      }) as any,
      injectHtml({
        data: {
          ...siteConfig,
          title,
          baiduAnalytics,
          enableVConsole,
          meta: getHTMLMeta(vantConfig),
        },
      }),
    ],
    resolve: {
      alias: {
        [vantConfig.name]: SRC_DIR,
        'site-mobile-demo': SITE_MOBILE_DEMO_FILE,
        'site-mobile-shared': SITE_MOBILE_SHARED_FILE,
        'site-desktop-shared': SITE_DESKTOP_SHARED_FILE,
      },
    },
    optimizeDeps: {
      entries: [join(SITE_SRC_DIR, '*.html')],
    },
    server: {
      port: 4000,
    },
  };
}

export function getViteConfigForSiteProd(): InlineConfig {
  const devConfig = getViteConfigForSiteDev();
  const vantConfig = getVantConfig();
  const outDir = get(vantConfig, 'build.site.outputDir', SITE_DIST_DIR);
  const publicPath = get(vantConfig, 'build.site.publicPath', '/');

  return {
    ...devConfig,
    base: publicPath,
    build: {
      outDir,
      brotliSize: false,
      emptyOutDir: true,
      // https://github.com/youzan/vant/issues/9703
      cssTarget: ['chrome53'],
      rollupOptions: {
        input: {
          main: join(SITE_SRC_DIR, 'index.html'),
          mobile: join(SITE_SRC_DIR, 'mobile.html'),
        },
      },
    },
  };
}
