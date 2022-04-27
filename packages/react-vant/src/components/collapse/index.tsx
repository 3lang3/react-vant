import Collapse from './Collapse';
import CollapseItem from './CollapseItem';
import './style/index.less';

const CollapseNamespace = Object.assign(Collapse, { Item: CollapseItem });

export default CollapseNamespace;
export { CollapseNamespace as Collapse, CollapseItem };
export type { CollapseProps, CollapseItemProps } from './PropsType';
