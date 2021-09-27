import { createContext, Context } from 'react';
import { createNamespace } from '../utils';
import type { CreateNamespaceReturn } from '../utils'

export const defaultPrefixCls = 'rv';
export const defaultIconPrefixCls = 'van';

export interface ConfigProviderContextState {
  prefixCls?: string;
  createNamespace?: (name?: string, prefix?: string) => CreateNamespaceReturn
}

export const INITIAL_STATE = {
  prefixCls: defaultPrefixCls,
  createNamespace: (name, prefix) => {
    return createNamespace(name, prefix);
  },
} as ConfigProviderContextState;

const ConfigProvider: Context<ConfigProviderContextState> = createContext(INITIAL_STATE);

export default ConfigProvider;
