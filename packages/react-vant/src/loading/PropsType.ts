import { BaseTypeProps } from '../utils';

export type LoadingType = 'circular' | 'spinner' | 'ball';

export interface LoadingProps extends BaseTypeProps {
  /**
   * 加载图标大小，默认单位为 px
   * @default '30px'
   */
  size?: string | number;
  /**
   * 颜色
   * @default '#c9c9c9'
   */
  color?: string;
  /** 是否垂直排列图标和文字内容	 */
  vertical?: boolean;
  /** 文字大小，默认单位为 px	 */
  textSize?: string | number;
  /**
   * 文字颜色
   * @default '#c9c9c9'
   */
  textColor?: string;
  /** 类型 */
  type?: LoadingType;
}
