import './style/index.less'
import _Steps from './Steps'
import StepsItem from './StepsItem'

const Steps = Object.assign(_Steps, { Item: StepsItem })
export { Steps, StepsItem }
export type { StepsProps } from './PropsType'
