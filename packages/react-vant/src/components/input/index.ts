import _Input from './Input'
import TextArea from '../text-area'
import './style/index.less'

const Input = Object.assign(_Input, { TextArea })

export default Input
export { Input }
export type { InputProps, InputInstance } from './PropsType'

export type { TextAreaProps, TextAreaInstance } from '../text-area/PropsType'
