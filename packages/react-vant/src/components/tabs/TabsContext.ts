import React, { createContext, Context } from 'react'
import { TabsProps } from './PropsType'

export interface TabsContextState {
  props?: React.PropsWithChildren<TabsProps>
  currentName?: React.ReactText
  scrollIntoView?: (immediate?: boolean) => void
}

const TabsContext: Context<TabsContextState> = createContext({})

export default TabsContext
