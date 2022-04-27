import Flex from './Flex';
import FlexItem from './FlexItem';
import './style/index.less';

const FlexNamespace = Object.assign(Flex, { Item: FlexItem });

export default FlexNamespace;
export { FlexNamespace as Flex };
export type { FlexProps, FlexItemProps } from './PropsType';
