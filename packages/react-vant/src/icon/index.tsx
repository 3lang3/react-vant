import Icon from './Icon';
import createFromIconfontCN from './createFromIconfontCN';
import './style/index.less';

const IconNameSpace = Object.assign(Icon, { createFromIconfontCN });
export default IconNameSpace;
export { IconNameSpace as Icon, createFromIconfontCN };
export type { IconProps } from './PropsType';
