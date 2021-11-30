import { join } from 'path';
import type { InlineConfig, LibraryFormats } from 'vite';
import { setBuildTarget } from '../common/index.js';
import { CWD, ES_DIR, getVantConfig, LIB_DIR } from '../common/constant.js';

export function getViteConfigForPackage({
  minify,
  formats,
  external,
}: {
  minify: boolean;
  formats: LibraryFormats[];
  external: string[];
}): InlineConfig {
  setBuildTarget('package');

  const { name } = getVantConfig();

  return {
    root: CWD,

    logLevel: 'silent',

    build: {
      lib: {
        name,
        entry: join(ES_DIR, 'index.js'),
        formats,
        fileName: (format: string) => {
          const suffix = format === 'umd' ? '' : `.${format}`;
          return minify ? `${name}${suffix}.min.js` : `${name}${suffix}.js`;
        },
      },
      // terser has better compression than esbuild
      minify: minify ? 'terser' : false,
      rollupOptions: {
        external,
        output: {
          dir: LIB_DIR,
          exports: 'named',
          globals: {
            react: 'React',
          },
        },
      },
    },
  };
}
