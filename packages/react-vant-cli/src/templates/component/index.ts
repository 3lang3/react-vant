import { SRC_DIR } from '../../common/constant';

export { DEMO_INDEX_CONTENT, DEMO_INDEX_PATH, DEMO_STYLE_CONTENT, DEMO_STYLE_PATH } from './demo';
export { README_CONTENT, README_PATH } from './README';
export { PROPS_TYPE_CONTENT, PROPS_PATH } from './PropsType';
export { ComponentPrompt } from './Prompt';

/**
 * 组件主体
 * @param HLComponent 中横线
 * @param ComponentName 组件名称
 */
export const INDEX_CONTENT = (HLComponent: string, ComponentName: string) => `\
import React, { useContext } from 'react';
import cls from 'clsx';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';
import { ${ComponentName}Props } from './PropsType';

const ${ComponentName}: React.FC<${ComponentName}Props> = (props) => {
  const { prefixCls,  createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('${HLComponent}', prefixCls);

  return (
      <div
        className={cls(props.className, bem())}
        style={props.style}
      >
        ${ComponentName}
      </div>
  );
};

// defaultProps defined if need
${ComponentName}.defaultProps = {

};

export default ${ComponentName};
`;

// 组件路径
export const INDEX_PATH = (HLComponent: string, ComponentName: string) =>
  `${SRC_DIR}/${HLComponent}/${ComponentName}.tsx`;

export const REGISTER_SRC_PATH = `${SRC_DIR}/index.ts`;

export const REGISTER_SRC_CONTENT = (previousContent, ComponentName, HLComponent) =>
  `${previousContent}export { default as ${ComponentName} } from './${HLComponent}';`;

export const configContent = (config) => `\
/* eslint-disable no-param-reassign */
module.exports =
${JSON.stringify(config)}
  `;
