import './style/index.less';
import IndexBar from './IndexBar';
import IndexAnchor from './IndexAnchor';

const IndexBarNamespace = Object.assign(IndexBar, { Anchor: IndexAnchor });
export { IndexBarNamespace as IndexBar, IndexAnchor };
export type { IndexBarProps, IndexAnchorProps, IndexBarInstance } from './PropsType';
