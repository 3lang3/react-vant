import { useForm, List } from 'rc-field-form';
import Form from './Form';
import FormItem from './FormItem';
import './style/index.less';

const FormNamespace = Object.assign(Form, { Item: FormItem, useForm, List });

export default FormNamespace;
export { FormNamespace as Form, FormItem };

export type { FormProps, FormItemProps, FormInstance } from './PropsType';
