import React, { useState } from 'react'
import { Cell, Field, Stepper, Form, Switch, Radio, hooks } from 'react-vant'
import type { FloatingBallProps } from 'react-vant'
import Bubble from './bubble'
import Menu from './menu'
import './style.less'

export default () => {
  const [form] = Form.useForm()
  const [formUpdated, setFormUpdated] = useState(0)
  const [config, updateConfig] = useState<
    FloatingBallProps & Record<string, unknown>
  >({})

  const handleFormChange = () => setFormUpdated(v => v + 1)

  hooks.useUpdateEffect(() => {
    const getValue = async () => {
      const values = await form.getFieldsValue()
      if (!values.adsorb_show) values.adsorb = false

      delete values.adsorb_show
      updateConfig(values)
    }
    getValue()
  }, [formUpdated])

  return (
    <div className='demo-floating-box'>
      <Cell title='设置悬浮球' />
      <Form form={form} onValuesChange={handleFormChange}>
        <Form.Item name='type' label='DEMO' initialValue='0'>
          <Radio.Group>
            <Radio name='0'>普通悬浮球</Radio>
            <Radio name='1'>带菜单的悬浮球</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          valuePropName='checked'
          name='disabled'
          label='禁用'
          initialValue={false}
        >
          <Switch size={20} />
        </Form.Item>
        <Form.Item
          valuePropName='checked'
          name='draggable'
          label='拖动'
          initialValue={true}
        >
          <Switch size={20} />
        </Form.Item>
        <Form.Item
          tooltip='拖动结束后，会吸附在更靠近的屏幕一侧'
          valuePropName='checked'
          name='adsorb_show'
          label='近边停靠'
          initialValue={true}
        >
          <Switch size={20} />
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={(prev, next) => prev.adsorb_show !== next.adsorb_show}
        >
          {() => {
            const show = form.getFieldValue('adsorb_show')
            if (!show) return null
            return (
              <>
                <Form.Item
                  tooltip='吸附在屏幕一侧时距离侧边的距离'
                  name={['adsorb', 'distance']}
                  label='停靠距离'
                  initialValue={20}
                >
                  <Field rightIcon={<div>PX</div>} />
                </Form.Item>
                <Form.Item
                  tooltip='滚动时悬浮球移动到屏外的比率'
                  name={['adsorb', 'indent']}
                  label='滚动缩进'
                  initialValue={0.5}
                >
                  <Stepper min={0} max={1} step={0.1} />
                </Form.Item>
              </>
            )
          }}
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={(prev, next) => prev.type !== next.type}
        >
          {() => {
            const type = form.getFieldValue('type')
            if (+type === 0) return null
            return (
              <Form.Item
                name={['menu', 'direction']}
                label='菜单展开方向'
                initialValue='around'
              >
                <Radio.Group>
                  <Radio name='around'>around</Radio>
                  <Radio name='vertical'>vertical</Radio>
                  <Radio name='horizontal'>horizontal</Radio>
                </Radio.Group>
              </Form.Item>
            )
          }}
        </Form.Item>
      </Form>
      {+config.type === 1 ? <Menu {...config} /> : <Bubble {...config} />}
      <div style={{ height: 1000 }} />
    </div>
  )
}
