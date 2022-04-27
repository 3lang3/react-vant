import { createContext, Context } from 'react';

export interface FlexContextState {
  gutter?: [number, number];
}

const FlexContext: Context<FlexContextState> = createContext({});

export default FlexContext;
