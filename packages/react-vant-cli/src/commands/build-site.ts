import { emptyDir } from 'fs-extra';
import { setNodeEnv, setBuildTarget } from '../common/index.js';
import { compileSite } from '../compiler/compile-site.js';
import { DOC_DIST_DIR } from '../common/constant.js';

export async function buildSite() {
  setNodeEnv('production');
  setBuildTarget('site');

  await emptyDir(DOC_DIST_DIR);
  await compileSite(true);
}
