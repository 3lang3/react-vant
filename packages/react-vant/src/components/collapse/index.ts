import './style/index.less';
import Collapse from './Collapse';
import CollapseItem from './CollapseItem';

const CollapseNamespace = Object.assign(Collapse, { Item: CollapseItem });
export { CollapseNamespace as Collapse, CollapseItem };
export type { CollapseProps, CollapseItemProps } from './PropsType';
