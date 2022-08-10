import React, { useState } from 'react'
import { CouponList, Popup, Toast, CouponCell } from 'react-vant'
import { data, disabledDiscountCoupon, disabledCoupon } from './demo'

const getRandomId = (max = 999999) =>
  String(Math.floor(Math.random() * max) + 1)

export default () => {
  const [coupons, setCoupons] = useState([data, disabledDiscountCoupon])
  const [disabledCoupons] = useState([disabledCoupon, disabledDiscountCoupon])
  const [chosenCoupon, setChosenCoupon] = useState(-1)
  const [visible, setVisible] = useState(false)

  const onChange = (index: number) => {
    setVisible(false)
    setChosenCoupon(index)
  }

  const onExchange = code => {
    console.log('code: ', code)
    Toast('兑换成功')
    setCoupons(v => [...v, { ...data, id: getRandomId() } as any])
  }

  return (
    <>
      <CouponCell
        coupons={coupons}
        chosenCoupon={chosenCoupon}
        onClick={() => setVisible(true)}
      />
      <Popup
        round
        position='bottom'
        style={{ height: '90%', paddingTop: 4 }}
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <CouponList
          chosenCoupon={chosenCoupon}
          coupons={coupons}
          disabledCoupons={disabledCoupons}
          onChange={onChange}
          onExchange={onExchange}
        />
      </Popup>
    </>
  )
}
