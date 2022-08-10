import type { Locale } from '../locale/lang/base'
import { BaseTypeProps } from '../utils'

export interface Theme {
  primaryColor?: string
  dangerColor?: string
  successColor?: string
  errorColor?: string
  warningColor?: string
}

export interface ConfigProviderProps extends BaseTypeProps {
  themeVars?: Record<string, string | number>
  locale?: Locale
  tag?: keyof HTMLElementTagNameMap
}
