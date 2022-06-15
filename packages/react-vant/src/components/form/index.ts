import './style/index.less';
import { useForm, List } from 'rc-field-form';
import Form from './Form';
import FormItem from './FormItem';

const FormNamespace = Object.assign(Form, { Item: FormItem, useForm, List });
export { FormNamespace as Form, FormItem };
export type { FormProps, FormItemProps, FormInstance } from './PropsType';
