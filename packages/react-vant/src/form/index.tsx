import { useForm } from 'rc-field-form';
import Form from './Form';
import FormItem from './FormItem';

const FormNamespace = Object.assign(Form, { Item: FormItem, useForm });

export default FormNamespace;
export { Form, FormItem };

export type { FormProps, FormItemProps } from './PropsType';
