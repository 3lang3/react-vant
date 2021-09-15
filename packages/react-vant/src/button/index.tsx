import Button from './Button';
import Group from './ButtonGroup';

const ButtonNameSpace = Object.assign(Button, { Group });
export default ButtonNameSpace;
export { ButtonNameSpace as Button };
export type { ButtonProps, ButtonType, ButtonSize, ButtonIconPosition } from './PropsType';
