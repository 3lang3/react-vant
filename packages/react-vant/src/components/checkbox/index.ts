import './style/index.less'
import CheckboxGroup from './CheckboxGroup'
import _Checkbox from './Checkbox'

const Checkbox = Object.assign(_Checkbox, { Group: CheckboxGroup })

export default Checkbox
export { Checkbox, CheckboxGroup }
export type {
  CheckboxGroupInstance,
  CheckboxInstance,
  CheckboxGroupProps,
  CheckboxProps,
  CheckboxGroupToggleAllOptions,
} from './PropsType'
