import { SRC_DIR } from '../../common/constant';

export const PROPS_TYPE_CONTENT = (ComponentName) => `\
import React from 'react';
import { BaseTypeProps } from '../utils';

export interface ${ComponentName}Props extends BaseTypeProps {
  // 这里写组件的props
}
`;
export const PROPS_PATH = (HLComponent) => `${SRC_DIR}/${HLComponent}/PropsType.ts`;
