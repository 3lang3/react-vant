import './style/index.less';
import ActionBar from './ActionBar';
import ActionBarIcon from './ActionBarIcon';
import ActionBarButton from './ActionBarButton';

const ActionBarNamespace = Object.assign(ActionBar, {
  Icon: ActionBarIcon,
  Button: ActionBarButton,
});

export { ActionBarNamespace as ActionBar };
export type { ActionBarProps, ActionBarIconProps, ActionBarButtonProps } from './PropsType';
