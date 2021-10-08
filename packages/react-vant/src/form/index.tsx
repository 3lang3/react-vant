import Form from './Form';
import FormItem from './FormItem';

const FormNamespace = Object.assign(Form, { Item: FormItem });

export default FormNamespace;
export { Form, FormItem };

export type { FormProps, FormItemProps } from './PropsType';
