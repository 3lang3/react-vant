import { consola } from '../common/logger';
import { setNodeEnv } from '../common';
import { clean } from './clean';
import { LIB_DIR, ES_DIR } from '../common/constant';
import { genStyleDepsMap } from '../compiler/gen-style-deps-map';

import compile from '../compiler/compile';

export async function build(cmd: { watch?: boolean } = {}) {
  setNodeEnv('production');

  try {
    await clean();
    await genStyleDepsMap();
    await compile({ targetPath: ES_DIR, watch: cmd.watch, type: 'esm' });
    await compile({ targetPath: LIB_DIR, watch: cmd.watch, type: 'cjs' });
  } catch (err) {
    consola.error('Build failed');
    process.exit(1);
  }
}
