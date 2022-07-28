import './style/index.less'
import _Button from './Button'
import Group from './ButtonGroup'

const Button = Object.assign(_Button, { Group })

export default Button
export { Button }
export type {
  ButtonProps,
  ButtonType,
  ButtonSize,
  ButtonIconPosition,
} from './PropsType'
