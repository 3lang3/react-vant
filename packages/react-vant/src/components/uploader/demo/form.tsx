import React from 'react'
import { Form, Uploader, UploaderValueItem, Button } from 'react-vant'
import { upload } from './utils'
import './style.less'

type AvatarUploadProps = {
  value?: string
  onChange?: (val: string) => void
}

const AvatarUpload = (props: AvatarUploadProps) => {
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
    const values = await form.getFieldsValue()
    console.log(values)
  }
  return (
    <Form
      colon
      form={form}
      footer={
        <Button onClick={onFinish} type='primary' round block>
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
        <AvatarUpload />
      </Form.Item>
    </Form>
  )
}
