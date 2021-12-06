import React from 'react';
import { BaseTypeProps } from '../utils';

export type StepsDirection = 'horizontal' | 'vertical';

export interface StepsProps extends BaseTypeProps {
  /** 图标类名前缀，等同于 Icon 组件的 class-prefix 属性	 */
  iconPrefix?: string;
  /** 已完成步骤对应的底部图标，优先级高于 inactive-icon，可选值见 Icon 组件	 */
  finishIcon?: string | React.ReactNode;
  /** 当前步骤和已完成步骤的颜色	 */
  activeColor?: string;
  /** 非当前步骤对应的底部图标，可选值见 Icon 组件	 */
  inactiveIcon?: string | React.ReactNode;
  /** 未激活步骤的颜色	 */
  inactiveColor?: string;
  /** 当前步骤对应的索引值	 */
  active?: number;
  /** 步骤条方向 */
  direction?: StepsDirection;
  /** 当前步骤对应的底部图标，可选值见 Icon 组件 */
  activeIcon?: string | React.ReactNode;
  /** 点击步骤的标题或图标时触发	 */
  onClickStep?: (index: number) => void;
}

export interface StepsItemProps extends BaseTypeProps {
  /** @private */
  parent?: StepsProps;
  /** @private */
  index?: number;
  /** 已完成步骤对应的底部图标，优先级高于 inactiveIcon */
  finishIcon?: React.ReactNode;
  /** 非当前步骤对应的底部图标，可选值见 Icon 组件	 */
  inactiveIcon?: React.ReactNode;
  /** 当前步骤对应的底部图标，可选值见 Icon 组件 */
  activeIcon?: React.ReactNode;
}
