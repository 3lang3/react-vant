import RadioGroup from './RadioGroup';
import Radio from './Radio';

const RadioNamespace = Object.assign(Radio, { Group: RadioGroup });

export default RadioNamespace;
export { RadioNamespace as Radio, RadioGroup };
export type { RadioGroupProps, RadioProps } from './PropsType';
