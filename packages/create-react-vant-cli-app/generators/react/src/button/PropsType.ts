import { LoadingType } from '../loading/PropsType';
import { BaseTypeProps } from '../utils';

export type ButtonType = 'default' | 'primary' | 'info' | 'warning' | 'danger';
export type ButtonSize = 'large' | 'normal' | 'small' | 'mini';
export type ButtonIconPosition = 'right' | 'left';

export interface ButtonProps extends BaseTypeProps {
  /**
   * 指定渲染的dom标签
   * @default 'button'
   */
  tag?: keyof HTMLElementTagNameMap | string;
  /** 按钮类型 */
  type?: ButtonType;
  /** 按钮尺寸 */
  size?: ButtonSize;
  /**
   * 按钮文本
   * 业务内建议使用children代替
   * */
  text?: string;
  /** 左侧图标名称或图片链接 */
  icon?: string | React.ReactNode;
  /** 按钮颜色，支持传入 linear-gradient 渐变色 */
  color?: string;
  /** 是否为块级元素(全宽)	 */
  block?: boolean;
  /** 是否为朴素按钮	 */
  plain?: boolean;
  /** 是否为圆形按钮	 */
  round?: boolean;
  /** 是否为方形按钮	 */
  square?: boolean;
  /** 是否为阴影按钮 */
  shadow?: boolean | 1 | 2 | 3;
  /** 是否显示为加载状态	 */
  loading?: boolean;
  /** 是否使用 0.5px 边框	 */
  hairline?: boolean;
  /** 是否禁用 */
  disabled?: boolean;
  /** 原生 button 标签的 type 属性	 */
  nativeType?: string;
  /** 图标类名前缀，同 Icon 组件的 classPrefix 属性	 */
  iconPrefix?: string;
  /** 图标展示位置，可选值为 `right` */
  iconPosition?: ButtonIconPosition;
  /** 加载图标大小	 */
  loadingSize?: string;
  /**
   * 加载图标类型，可选值为 `spinner`
   * @default circular
   * */
  loadingType?: LoadingType;
  /**
   * 加载状态提示文字
   */
  loadingText?: string;
  /**
   * 点击事件
   */
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
