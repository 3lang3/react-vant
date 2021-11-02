/* eslint-disable no-console */
import React, { useState } from 'react';
import { components } from 'site-mobile-demo';
import { Popup, Toast, CouponCell } from 'react-vant';
import { CouponList } from '..';
import './style.less';

const data = {
  id: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '优惠券名称',
  description: '描述信息',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '1.5',
  unitDesc: '元',
};
const discountCoupon = {
  ...data,
  id: 2,
  value: 12,
  valueDesc: '8.8',
  unitDesc: '折',
};

const disabledCoupon = {
  ...data,
  id: 3,
  reason: '优惠券不可用原因',
};

const disabledDiscountCoupon = {
  ...discountCoupon,
  valueDesc: '1',
  unitDesc: '折',
  id: 4,
  reason: '优惠券不可用原因',
};

const getRandomId = (max = 999999) => String(Math.floor(Math.random() * max) + 1);

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const [coupons, setCoupons] = useState([data, disabledDiscountCoupon]);
  const [disabledCoupons] = useState([disabledCoupon, disabledDiscountCoupon]);
  const [chosenCoupon, setChosenCoupon] = useState(-1);
  const [visible, setVisible] = useState(false);

  const onChange = (index: number) => {
    setVisible(false);
    setChosenCoupon(index);
  };

  const onExchange = (code) => {
    console.log('object', code);
    Toast('兑换成功');
    setCoupons((v) => [...v, { ...data, id: getRandomId() } as any]);
  };

  console.log(coupons, disabledCoupons);

  return (
    <DemoSection>
      <DemoBlock title="基础用法">
        <CouponCell
          coupons={coupons}
          chosenCoupon={chosenCoupon}
          onClick={() => setVisible(true)}
        />
        <Popup
          round
          position="bottom"
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
      </DemoBlock>
    </DemoSection>
  );
};
