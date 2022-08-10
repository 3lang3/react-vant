import './style/index.less'
import Grid from './Grid'
import GridItem from './GridItem'

const GridNamespace = Object.assign(Grid, { Item: GridItem })
export { GridNamespace as Grid, GridItem }
export type { GridProps, GridItemProps, GridDirection } from './PropsType'
