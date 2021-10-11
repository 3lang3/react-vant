import { BaseTypeProps } from "../utils";

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
  /** 设置统一样式前缀。注意：需要配合 less 变量 @ant-prefix 使用	 */
  prefixCls?: string;
  tag?: keyof HTMLElementTagNameMap;
}
