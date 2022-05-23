import './style/index.less';
import DropdownMenu from './DropdownMenu';
import DropdownMenuItem from './DropdownMenuItem';

const DropdownMenuNamespace = Object.assign(DropdownMenu, { Item: DropdownMenuItem });
export { DropdownMenuNamespace as DropdownMenu };
export type { DropdownMenuInstance, DropdownItemOption, DropdownMenuDirection } from './PropsType';
