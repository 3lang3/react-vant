import './style/index.less';
import CellGroup from './CellGroup';
import Cell from './Cell';

const CellNamespace = Object.assign(Cell, { Group: CellGroup });
export { CellNamespace as Cell, CellGroup };
export type { CellProps, CellGroupProps, CellArrowDirection } from './PropsType';
