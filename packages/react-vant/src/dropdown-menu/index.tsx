import DropdownMenu from './DropdownMenu';
import DropdownMenuItem from './DropdownMenuItem';

const DropdownMenuNamespace = Object.assign(DropdownMenu, { Item: DropdownMenuItem });

export default DropdownMenuNamespace;
export type { DropdownItemInstance, DropdownItemOption, DropdownMenuDirection } from './PropsType'
