import { createContext, Context } from 'react';

export interface CollapseContextState {
  isExpanded?: (name: string | number) => boolean;
  toggle?: (name: string | number, expanded: boolean) => void;
}

const CollapseContext: Context<CollapseContextState> = createContext({});

export default CollapseContext;
