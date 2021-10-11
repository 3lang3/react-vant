import { COMPONENT_CLASSIFICATION } from '../../common/constant';
import { getComponents, kebabCase } from '../../common';

export const ComponentPrompt = [
  {
    name: 'componentName',
    type: 'input',
    message: 'Please enter a new component name(CamelCase)? eg:ActionBar',
    validate(input) {
      if (getComponents().includes(kebabCase(input))) {
        return new Error(`${input} already exists`);
      }
      if (!/([A-Z][a-z0-9]+)+/g.test(input)) {
        return new Error(`${input} does not match camel case`);
      }
      return true;
    },
  },
  {
    name: 'aliasName',
    type: 'input',
    message: 'Please enter the alias of the component? eg:动作栏',
  },
  {
    name: 'classification',
    type: 'rawlist',
    message: 'Please select component classification? eg:布局组件',
    choices: COMPONENT_CLASSIFICATION,
  },
  {
    name: 'introduction',
    type: 'input',
    message:
      '(option)Please enter a brief introduction to the component. eg:用于为页面相关操作提供便捷交互。',
  },
  // TODO 多选生成所需要的文件
];
