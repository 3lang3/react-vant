import { Context, createContext } from 'react';

type PopupContextProps = {
  visible?: boolean;
};

const PopupContext: Context<PopupContextProps> = createContext({});

export default PopupContext;
