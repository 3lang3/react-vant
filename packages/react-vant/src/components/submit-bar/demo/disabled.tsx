import React from 'react'
import { InfoO } from '@react-vant/icons'
import { SubmitBar } from 'react-vant'

export default () => {
  return (
    <div className='demo-submit-bar'>
      <SubmitBar
        disabled
        price='3050'
        tip='你的收货地址不支持同城送, 我们已为你推荐快递'
        tipIcon={<InfoO />}
        buttonText='提交订单'
      />
    </div>
  )
}
