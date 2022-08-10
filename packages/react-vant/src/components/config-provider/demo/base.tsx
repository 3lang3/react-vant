import React, { useState } from 'react'
import { ConfigProvider, Button, Rate, Field, Slider } from 'react-vant'
import './style.less'

const themeVars = {
  rateIconFullColor: '#ffcc56',
  sliderBarHeight: '4px',
  sliderButtonWidth: '20px',
  sliderButtonHeight: '20px',
  sliderActiveBackgroundColor: '#951fff',
  buttonPrimaryBorderColor: '#951fff',
  buttonPrimaryBackgroundColor: '#951fff',
}

export default () => {
  const [rate, updateRate] = useState(4)
  const [slider, updateSlider] = useState(50)
  return (
    <div className='demo-config-prodiver'>
      <ConfigProvider themeVars={themeVars}>
        <Field label='评分'>
          <Rate value={rate} onChange={updateRate} />
        </Field>
        <Field label='滑块'>
          <Slider value={slider} onChange={updateSlider} />
        </Field>
        <div style={{ margin: 16 }}>
          <Button block round type='primary'>
            提交
          </Button>
        </div>
      </ConfigProvider>
    </div>
  )
}
