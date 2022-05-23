import CellGroup from './CellGroup';
import Cell from './Cell';
import './style/index.less';

const CellNamespace = Object.assign(Cell, { Group: CellGroup });
export { CellNamespace as Cell, CellGroup };
export type { CellProps, CellGroupProps, CellArrowDirection } from './PropsType';
