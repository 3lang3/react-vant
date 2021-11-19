import Tabbar from './Tabbar';
import TabbarItem from './TabbarItem';
import './style/index.less';

const TabbarNamespace = Object.assign(Tabbar, { Item: TabbarItem });

export default TabbarNamespace;
export { TabbarNamespace as Tabbar, TabbarItem };

export type { TabbarProps, TabbarItemProps } from './PropsType';
