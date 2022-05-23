import './style/index.less';
import Button from './Button';
import Group from './ButtonGroup';

const ButtonNameSpace = Object.assign(Button, { Group });

export { ButtonNameSpace as Button };
export type { ButtonProps, ButtonType, ButtonSize, ButtonIconPosition } from './PropsType';
