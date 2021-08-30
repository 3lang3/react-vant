import CellGroup from './CellGroup';
import Cell from './Cell';

const CellNamespace = Object.assign(Cell, { Group: CellGroup });

export default CellNamespace;
export { Cell, CellGroup };
export type { CellProps, CellGroupProps, CellArrowDirection } from './PropsType';
