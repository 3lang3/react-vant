import { SRC_DIR } from '../../common/constant';

export const README_CONTENT = (ComponentName, introduction: string, aliasName: string) => `\
# ${ComponentName} ${aliasName}

### 介绍

${introduction || '介绍一下这个组件'}

### 引入
\`\`\`js
 import { ${ComponentName} } from 'react-vant';
\`\`\`

## 代码演示

### 基础用法

## API

### ${ComponentName} Props
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| 参数 | 说明 | 类型 | 默认值 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                                   | 默认值                       | 描述 |
| ------------------------------------- | ---------------------------- | ---- |
|                                       |                              | -    |

`;
export const README_PATH = (HLComponent) => `${SRC_DIR}/${HLComponent}/README.md`;
