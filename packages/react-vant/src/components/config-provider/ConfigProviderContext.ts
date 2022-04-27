import { createContext, Context } from 'react';
import { createNamespace } from '../utils';
import { zhCN as locale } from '../locale';
import type { CreateNamespaceReturn } from '../utils';
import { ConfigProviderProps } from './PropsType';

export const defaultPrefixCls = 'rv';
export const defaultIconPrefixCls = 'van-icon';

export type ConfigProviderContextState = {
  prefixCls?: string;
  createNamespace?: (name?: string, prefix?: string) => CreateNamespaceReturn;
} & Pick<ConfigProviderProps, 'locale'>;

export const INITIAL_STATE = {
  prefixCls: defaultPrefixCls,
  locale,
  createNamespace: (name, prefix) => {
    return createNamespace(name, prefix);
  },
} as ConfigProviderContextState;

const ConfigProvider: Context<ConfigProviderContextState> = createContext(INITIAL_STATE);

export default ConfigProvider;
