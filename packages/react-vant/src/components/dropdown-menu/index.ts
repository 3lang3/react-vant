import './style/index.less'
import _DropdownMenu from './DropdownMenu'
import DropdownMenuItem from './DropdownMenuItem'

const DropdownMenu = Object.assign(_DropdownMenu, { Item: DropdownMenuItem })
export { DropdownMenu }
export default DropdownMenu
export type {
  DropdownMenuInstance,
  DropdownItemOption,
  DropdownMenuDirection,
} from './PropsType'
