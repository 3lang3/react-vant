import { createContext, Context } from 'react';
import { TabbarProps } from './PropsType';

export interface TabbarState {
  parent?: TabbarProps;
}

const TabbarContext: Context<TabbarState> = createContext({});

export default TabbarContext;
