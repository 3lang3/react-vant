import './style/index.less'
import _IndexBar from './IndexBar'
import IndexAnchor from './IndexAnchor'

const IndexBar = Object.assign(_IndexBar, { Anchor: IndexAnchor })
export { IndexBar, IndexAnchor }
export type {
  IndexBarProps,
  IndexAnchorProps,
  IndexBarInstance,
} from './PropsType'
