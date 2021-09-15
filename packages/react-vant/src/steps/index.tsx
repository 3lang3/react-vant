import Steps from './Steps';
import StepsItem from './StepsItem';

const StepsNamespace = Object.assign(Steps, { Item: StepsItem });

export default StepsNamespace;
export { StepsNamespace as Steps, StepsItem };
export type { StepsProps } from './PropsType';
