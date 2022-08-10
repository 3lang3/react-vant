import './style/index.less'
import _Collapse from './Collapse'
import CollapseItem from './CollapseItem'

const Collapse = Object.assign(_Collapse, { Item: CollapseItem })
export default Collapse
export { Collapse, CollapseItem }
export type { CollapseProps, CollapseItemProps } from './PropsType'
