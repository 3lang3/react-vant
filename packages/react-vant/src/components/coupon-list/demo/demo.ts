export const data = {
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
}

export const discountCoupon = {
  ...data,
  id: 2,
  value: 12,
  valueDesc: '8.8',
  unitDesc: '折',
}

export const disabledCoupon = {
  ...data,
  id: 3,
  reason: '优惠券不可用原因',
}

export const disabledDiscountCoupon = {
  ...discountCoupon,
  valueDesc: '1',
  unitDesc: '折',
  id: 4,
  reason: '优惠券不可用原因',
}
