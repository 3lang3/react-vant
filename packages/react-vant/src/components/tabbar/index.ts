import './style/index.less';
import Tabbar from './Tabbar';
import TabbarItem from './TabbarItem';

const TabbarNamespace = Object.assign(Tabbar, { Item: TabbarItem });
export { TabbarNamespace as Tabbar, TabbarItem };
export type { TabbarProps, TabbarItemProps } from './PropsType';
