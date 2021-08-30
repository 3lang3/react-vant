import Flex from './Flex';
import FlexItem from './FlexItem';

const FlexNamespace = Object.assign(Flex, { Item: FlexItem });

export default FlexNamespace;
export { FlexNamespace as Flex };
export type { FlexProps, FlexItemProps } from './PropsType';
