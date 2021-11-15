import React, { useContext, useMemo } from 'react';
import cls from 'clsx';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';
import { CouponProps } from './PropsType';
import { padZero } from '../utils';
import { Checkbox } from '../checkbox';

function getDate(timeStamp: number) {
  const date = new Date(timeStamp * 1000);
  return `${date.getFullYear()}.${padZero(date.getMonth() + 1)}.${padZero(date.getDate())}`;
}

function formatDiscount(discount: number) {
  return (discount / 10).toFixed(discount % 10 === 0 ? 0 : 1);
}

function formatAmount(amount: number) {
  // eslint-disable-next-line no-nested-ternary
  return (amount / 100).toFixed(amount % 100 === 0 ? 0 : amount % 10 === 0 ? 1 : 2);
}

const Coupon: React.FC<CouponProps> = (props) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('coupon', prefixCls);

  const validPeriod = useMemo(() => {
    const { startAt, endAt } = props.coupon;
    return `${getDate(startAt)} - ${getDate(endAt)}`;
  }, [props.coupon]);

  const faceAmount = useMemo(() => {
    const { coupon, currency } = props;

    if (coupon.valueDesc) {
      return (
        <>
          {coupon.valueDesc} <span>{coupon.unitDesc || ''}</span>
        </>
      );
    }

    if (coupon.denominations) {
      const denominations = formatAmount(coupon.denominations);
      return (
        <>
          <span>{currency}</span> ${denominations}
        </>
      );
    }

    if (coupon.discount) {
      return `${formatDiscount(coupon.discount)}折`;
    }

    return '';
  }, [props.coupon, props.coupon]);

  const conditionMessage = useMemo(() => {
    const condition = formatAmount(props.coupon.originCondition || 0);
    return condition === '0' ? '无使用门槛' : `满${condition}元可用`;
  }, [props.coupon.originCondition]);

  const { chosen, coupon, disabled } = props;
  const description = (disabled && coupon.reason) || coupon.description;

  return (
    <div
      className={cls(props.className, bem({ disabled }))}
      style={props.style}
      onClick={props.onClick}
    >
      <div className={cls(bem('content'))}>
        <div className={cls(bem('head'))}>
          <h2 className={cls(bem('amount'))}>{faceAmount}</h2>
          <p className={cls(bem('condition'))}>{coupon.condition || conditionMessage}</p>
        </div>
        <div className={cls(bem('body'))}>
          <p className={cls(bem('name'))}>{coupon.name}</p>
          <p className={cls(bem('valid'))}>{validPeriod}</p>
          {!disabled && <Checkbox className={cls(bem('corner'))} checked={chosen} />}
        </div>
      </div>
      {description && <p className={cls(bem('description'))}>{description}</p>}
    </div>
  );
};

// defaultProps defined if need
Coupon.defaultProps = {
  currency: '¥',
};

export default Coupon;
