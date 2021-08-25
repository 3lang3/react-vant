import CellGroup from './CellGroup';
import Cell from './Cell';

const CellNamespace = Object.assign(Cell, { Group: CellGroup });

export default CellNamespace;
