import { createContext, Context } from 'react';
import { SkuValueType } from './PropsType';

export interface SkuContextState {
  value?: SkuValueType;
  onInnerChange?: (value) => void;
}

const SkuContext: Context<SkuContextState> = createContext({});

export default SkuContext;
