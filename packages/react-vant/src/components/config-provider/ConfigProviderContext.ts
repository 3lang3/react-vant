import { createContext, Context } from 'react'
import { zhCN as locale } from '../locale'
import { ConfigProviderProps } from './PropsType'

export const defaultPrefixCls = 'rv'
export const defaultIconPrefixCls = 'van-icon'

export type ConfigProviderContextState = Pick<ConfigProviderProps, 'locale'>

export const INITIAL_STATE = {
  locale,
} as ConfigProviderContextState

const ConfigProvider: Context<ConfigProviderContextState> =
  createContext(INITIAL_STATE)

export default ConfigProvider
