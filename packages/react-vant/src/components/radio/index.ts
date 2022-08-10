import './style/index.less'
import RadioGroup from './RadioGroup'
import _Radio from './Radio'

const Radio = Object.assign(_Radio, { Group: RadioGroup })
export { Radio, RadioGroup }
export type { RadioGroupProps, RadioProps } from './PropsType'
