import { createContext, Context } from 'react';

export interface IndexBarContextState {
  zIndex?: number | string;
  highlightColor?: string;
  sticky?: boolean;
}

const IndexBarContext: Context<IndexBarContextState> = createContext({});

export default IndexBarContext;
