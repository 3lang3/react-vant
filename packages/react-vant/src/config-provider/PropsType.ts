import { BaseTypeProps } from '../utils';

export interface Theme {
  primaryColor?: string;
  dangerColor?: string;
  successColor?: string;
  errorColor?: string;
  warningColor?: string;
}

export interface ConfigProviderProps extends BaseTypeProps {
  themeVars?: Record<string, string | number>;
  /** 设置图标统一样式前缀 */
  iconPrefix?: string;
  tag?: keyof HTMLElementTagNameMap;
}
