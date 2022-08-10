import './style/index.less'
import _Tabs from './Tabs'
import TabPane from './TabPane'

const Tabs = Object.assign(_Tabs, { TabPane })
export default Tabs
export { Tabs }
export type { TabsInstance } from './PropsType'
