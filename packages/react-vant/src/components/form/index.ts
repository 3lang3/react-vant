import './style/index.less'
import { useWatch, useForm, List } from 'rc-field-form'
import { FormSubscribe as Subscribe } from './FormSubscribe'
import _Form from './Form'
import Item from './FormItem'

const Form = Object.assign(_Form, { Item, useForm, List, Subscribe, useWatch })

export { Form }
export type { FormProps, FormItemProps, FormInstance } from './PropsType'
export type { FormSubscribeProps } from './FormSubscribe'
