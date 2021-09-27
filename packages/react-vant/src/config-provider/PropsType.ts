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
  iconPrefix?: string;
  prefixCls?: string;
  tag?: keyof HTMLElementTagNameMap;
}
