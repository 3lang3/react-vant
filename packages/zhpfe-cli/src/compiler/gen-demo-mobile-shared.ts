import { join } from 'path';
import { pathExistsSync } from 'fs-extra';
import {
  SITE_MOBILE_COMPONENTS,
  SITE_MODILE_DEMO_FILE,
} from '../common/constant';
import { pascalize, smartOutputFile, normalizePath } from '../common';

type DemoItem = {
  name: string;
  path: string;
  component: string;
};

function genDemoImports(demo_components: DemoItem[]) {
  return demo_components
    .map((item) => `import ${item.name} from '${normalizePath(item.path)}';`)
    .join('\n');
}

function genDemoExports(demo_components: DemoItem[]) {
  return `export const components = {\n  ${demo_components
    .map((item) => item.name)
    .join(',\n  ')}\n};`;
}

function genCode() {
  const demos = ['DemoBlock', 'DemoSection']
    .map((component) => ({
      component,
      name: pascalize(component),
      path: join(SITE_MOBILE_COMPONENTS, component),
    }))
    .filter((item) => pathExistsSync(item.path));

  return `
 ${genDemoImports(demos)}
 ${genDemoExports(demos)}
`;
}

export function genDemoMobileShared() {
  const code = genCode();

  smartOutputFile(SITE_MODILE_DEMO_FILE, code);
}
