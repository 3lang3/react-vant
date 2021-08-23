import BaseGrid from './Steps';
import StepsItem from './StepsItem';
import { StepStatic } from './PropsType';

const Steps = BaseGrid as StepStatic;

Steps.Item = StepsItem;

export default Steps;
