import Collapse from './Collapse';
import CollapseItem from './CollapseItem';

const CollapseNamespace = Object.assign(Collapse, { Item: CollapseItem });

export default CollapseNamespace;
export { Collapse, CollapseItem };
export type { CollapseProps, CollapseItemProps } from './PropsType';
