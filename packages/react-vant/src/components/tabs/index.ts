import './style/index.less';
import Tabs from './Tabs';
import TabPane from './TabPane';

const TabsNamespace = Object.assign(Tabs, { TabPane });
export { TabsNamespace as Tabs };
export type { TabsInstance } from './PropsType';
