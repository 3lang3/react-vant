import { createContext, Context } from 'react';

export interface SwipeContextState {
  size?: number;
  count?: number;
  activeIndicator?: number;
  loop?: boolean;
  vertical?: boolean;
  lazyRender?: boolean;
}

const SwipeContext: Context<SwipeContextState> = createContext({});

export default SwipeContext;
