import Steps from './Steps';
import StepsItem from './StepsItem';
import './style/index.less';

const StepsNamespace = Object.assign(Steps, { Item: StepsItem });

export default StepsNamespace;
export { StepsNamespace as Steps, StepsItem };
export type { StepsProps } from './PropsType';
