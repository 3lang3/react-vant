import './style/index.less'
import _Tabbar from './Tabbar'
import TabbarItem from './TabbarItem'

const Tabbar = Object.assign(_Tabbar, { Item: TabbarItem })
export { Tabbar, TabbarItem }
export type { TabbarProps, TabbarItemProps } from './PropsType'
