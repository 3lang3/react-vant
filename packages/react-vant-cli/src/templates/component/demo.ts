import { SRC_DIR } from '../../common/constant';

/**
 * demo 相关
 */
export const DEMO_INDEX_PATH = (HLComponent) => `${SRC_DIR}/${HLComponent}/demo/index.tsx`;
export const DEMO_STYLE_PATH = (HLComponent) => `${SRC_DIR}/${HLComponent}/demo/style.less`;

// demo
export const DEMO_INDEX_CONTENT = (ComponentName) => `\
import React from 'react';
import { components } from 'site-mobile-demo';
import { ${ComponentName} } from '..';
import './style.less';

export default (): React.ReactNode => {
const { DemoBlock, DemoSection } = components;
  return (
    <DemoSection>
      <DemoBlock title="基础用法">
        <${ComponentName}></${ComponentName}>
      </DemoBlock>
    </DemoSection>
  );
};
`;

// demo style
export const DEMO_STYLE_CONTENT = (HLComponent) => `\
@import '../../styles/var.less';

.demo-${HLComponent} {

}
`;
