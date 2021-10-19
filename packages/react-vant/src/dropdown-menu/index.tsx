import DropdownMenu from './DropdownMenu';
import DropdownMenuItem from './DropdownMenuItem';
import './style/index.less';

const DropdownMenuNamespace = Object.assign(DropdownMenu, { Item: DropdownMenuItem });

export default DropdownMenuNamespace;
export type { DropdownItemInstance, DropdownItemOption, DropdownMenuDirection } from './PropsType';
