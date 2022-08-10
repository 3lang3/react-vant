import React, { useState } from 'react'
import { Field, Flex, Popup, Picker, Button } from 'react-vant'
import { ArrowDown } from '@react-vant/icons'

const columns = ['86 🇨🇳', '87 🇺🇸', '88 🏳️‍🌈', '89 🏳️‍⚧️', '90 🇴🇲', '91 🇵🇪', '92 🇩🇪']

export default () => {
  const [sms, setSms] = useState('')
  const [visible, setVisible] = useState(false)
  const [field, setVield] = useState(columns[0])

  return (
    <>
      <Field
        value={sms}
        center
        label='短信验证码'
        placeholder='手机号'
        onChange={setSms}
        prefix={
          <Flex align='center' onClick={() => setVisible(true)}>
            +{field} <ArrowDown style={{ paddingLeft: 8 }} />
          </Flex>
        }
        suffix={
          <Button size='small' type='primary'>
            发送
          </Button>
        }
      />
      <Popup
        round
        visible={visible}
        position='bottom'
        onClose={() => setVisible(false)}
      >
        <Picker
          title='标题'
          onConfirm={(value: string) => {
            setVield(value)
            setVisible(false)
          }}
          columns={columns}
        />
      </Popup>
    </>
  )
}
