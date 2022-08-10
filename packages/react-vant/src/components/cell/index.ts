import './style/index.less'
import CellGroup from './CellGroup'
import _Cell from './Cell'

const Cell = Object.assign(_Cell, { Group: CellGroup })
export default Cell
export { Cell, CellGroup }
export type { CellProps, CellGroupProps, CellArrowDirection } from './PropsType'
