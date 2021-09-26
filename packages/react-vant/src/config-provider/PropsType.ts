import { BaseTypeProps } from "../utils";

export interface ConfigProviderProps extends BaseTypeProps {
  themeVars?: Record<string, string | number>;
  iconPrefix?: string;
  tag?: keyof HTMLElementTagNameMap;
}
