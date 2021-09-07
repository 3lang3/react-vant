import Sidebar from './Sidebar';
import SidebarItem from './SidebarItem';

const SidebarNamespace = Object.assign(Sidebar, { Item: SidebarItem });

export default SidebarNamespace;
export { SidebarNamespace as Sidebar, SidebarItem };
export type { SidebarProps, SidebarItemProps } from './PropsType';
