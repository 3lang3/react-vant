import { BaseTypeProps } from '../utils';

export type TagSize = '' | 'mini' | 'medium' | 'large';
export type TagType = 'default' | 'primary' | 'success' | 'warning' | 'danger';
export interface TagProps extends BaseTypeProps {
  /** 大小, 可选值为 large medium	 */
  size?: TagSize;
  /** 是否为标记样式	 */
  mark?: boolean;
  /** 标签颜色	 */
  color?: string;
  /** 是否为空心样式	 */
  plain?: boolean;
  /** 是否为圆角样式	 */
  round?: boolean;
  /** 文本颜色，优先级高于 color 属性	 */
  textColor?: string;
  /** 是否为可关闭标签	 */
  closeable?: boolean;
  /** 类型 */
  type?: TagType;
  /** 是否展示标签	 */
  show?: boolean;
  onClose?: (e: React.MouseEvent) => void;
  onClick?: (e: React.MouseEvent) => void;
}
