import { createContext, Context } from 'react';

export interface ToastContextState {
  message?: string | React.ReactNode;
}

const ToastContext: Context<ToastContextState> = createContext({});

export default ToastContext;
