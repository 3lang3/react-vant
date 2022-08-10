import React from 'react'
import { ConfigProvider, Calendar } from 'react-vant'
import locale from './enUs'
import './style.less'

export default () => {
  return (
    <div className='demo-config-prodiver'>
      <ConfigProvider locale={locale}>
        <Calendar style={{ height: 420 }} poppable={false} />
      </ConfigProvider>
    </div>
  )
}
