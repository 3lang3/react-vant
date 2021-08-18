import { emptyDir } from 'fs-extra';
import { setNodeEnv, setBuildTarget } from '../common';
import { compileSite } from '../compiler/compile-site';
import { DOC_DIST_DIR } from '../common/constant';

export async function buildSite() {
  setNodeEnv('production');
  setBuildTarget('site');

  await emptyDir(DOC_DIST_DIR);
  await compileSite(true);
}
