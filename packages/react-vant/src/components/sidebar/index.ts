import './style/index.less';
import Sidebar from './Sidebar';
import SidebarItem from './SidebarItem';

const SidebarNamespace = Object.assign(Sidebar, { Item: SidebarItem });
export { SidebarNamespace as Sidebar, SidebarItem };
export type { SidebarProps, SidebarItemProps } from './PropsType';
