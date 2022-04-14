import Tabs from './Tabs';
import TabPane from './TabPane';
import './style/index.less';

const TabsNamespace = Object.assign(Tabs, { TabPane });

export default TabsNamespace;

export { TabsNamespace as Tabs };

export type { TabsInstance } from './PropsType';
