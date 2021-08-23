import BaseGrid from './Grid';
import GridItem from './GridItem';
import { GridStatic } from './PropsType';

const Grid = BaseGrid as GridStatic;

Grid.Item = GridItem;

export default Grid;
