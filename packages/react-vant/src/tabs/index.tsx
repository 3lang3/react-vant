import _Tabs from './Tabs';
import TabPane from './TabPane';
import './style/index.less';

const Tabs = Object.assign(_Tabs, { TabPane });

export default Tabs;

export type { TabsInstance } from './PropsType';
