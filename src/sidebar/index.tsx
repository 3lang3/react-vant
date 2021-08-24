import BaseSidebar from './Sidebar';
import SidebarItem from './SidebarItem';
import { SidebarStatic } from './PropsType';

const Sidebar = BaseSidebar as SidebarStatic;

Sidebar.Item = SidebarItem;

export default Sidebar;
