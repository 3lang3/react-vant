import React from 'react'
import { Form, Uploader, UploaderValueItem, Button } from 'react-vant'
import { upload } from './utils'
import './style.less'

type AvatarUploaderProps = {
  value?: string
  onChange?: (val: string) => void
}

const AvatarUploader = (props: AvatarUploaderProps) => {
  const [tasks, setTasks] = React.useState<UploaderValueItem[]>([])
  const idCountRef = React.useRef(0)

  React.useEffect(() => {
    if (props.value === undefined) return
    if (!tasks[0] || props.value !== tasks[0].url) {
      setTasks([{ url: props.value, id: idCountRef.current++ }])
    }
  }, [props.value])

  const innerChange = (items: UploaderValueItem[]) => {
    setTasks(items)
    const currentUrl = items[0]?.url
    props.onChange?.(currentUrl)
  }

  return (
    <Uploader
      value={tasks}
      upload={upload}
      maxCount={1}
      onChange={innerChange}
    />
  )
}

export default () => {
  const [form] = Form.useForm()

  const onFinish = async () => {
    const values = await form.validateFields()
    console.log(values)
  }
  return (
    <Form
      colon
      form={form}
      footer={
        <Button
          style={{ marginTop: 20 }}
          onClick={onFinish}
          type='primary'
          round
          block
        >
          确认
        </Button>
      }
    >
      <Form.Item
        rules={[{ required: true, message: '请上传头像' }]}
        label='上传头像'
        name='avatar'
        initialValue='https://iili.io/NZiS9e.png'
      >
        {/* 通过封装自定义表单组件，按需实现实际业务逻辑 */}
        <AvatarUploader />
      </Form.Item>
      <Form.Item
        rules={[{ required: true, message: '请上传头像' }]}
        label='上传附件'
        name='files'
      >
        <Uploader accept='*' />
      </Form.Item>
    </Form>
  )
}
