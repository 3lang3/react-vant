import { BaseTypeProps } from '../utils';

export type LoadingType = 'circular' | 'spinner';
export type PullRefreshStatus = 'normal' | 'loading' | 'loosing' | 'pulling' | 'success';

type StatusTextType = React.ReactNode | (({ distance }: { distance: number }) => React.ReactNode);
export interface PullRefreshProps extends BaseTypeProps {
  /** 是否禁用下拉刷新	 */
  disabled?: boolean;
  /** 刷新成功提示文案	 */
  successText?: StatusTextType;
  /** 下拉过程提示文案	 */
  pullingText?: StatusTextType;
  /** 释放过程提示文案	 */
  loosingText?: StatusTextType;
  /** 加载过程提示文案	 */
  loadingText?: StatusTextType;
  /** 刷新成功提示展示时长(ms)	 */
  successDuration?: number | string;
  /** 动画时长	 */
  animationDuration?: number | string;
  /**
   * 顶部内容高度
   * @default 50
   */
  headHeight?: number | string;
  /**
   * 触发下拉刷新的距离
   * @default '与 headHeight 一致'
   */
  pullDistance?: number | string;
  /** 下拉刷新时触发 */
  onRefresh: () => Promise<unknown> | void;
  children?: React.ReactNode;
}
