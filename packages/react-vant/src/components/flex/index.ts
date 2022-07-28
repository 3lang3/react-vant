import './style/index.less'
import _Flex from './Flex'
import FlexItem from './FlexItem'

const Flex = Object.assign(_Flex, { Item: FlexItem })
export { Flex }
export default Flex
export type { FlexProps, FlexItemProps } from './PropsType'
