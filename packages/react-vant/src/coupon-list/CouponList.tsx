import React, { useContext, useEffect, useMemo, useRef } from 'react';
import cls from 'clsx';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';
import { CouponListProps } from './PropsType';
import Tabs from '../tabs';
import { useSetState } from '../hooks';
import { Button } from '../button';
import { Field } from '../field';
import Coupon from './Coupon';

const CouponList: React.FC<CouponListProps> = (props) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('coupon-list', prefixCls);

  const innerEffect = useRef(false);
  const [state, updateState] = useSetState({
    tab: 0,
    code: props.code,
  });

  const buttonDisabled = useMemo(
    () =>
      !props.exchangeButtonLoading &&
      (props.exchangeButtonDisabled || !state.code || state.code.length < props.exchangeMinLength),
    [
      props.exchangeButtonLoading,
      props.exchangeButtonDisabled,
      state.code,
      props.exchangeMinLength,
    ],
  );

  const innerChange = (code: string) => {
    updateState({ code });
    innerEffect.current = true;
  };

  const onExchange = () => {
    if (props.onExchange) props.onExchange(state.code);

    // auto clear currentCode when not use v-model
    if (!props.code) {
      innerChange('');
    }
  };

  const renderEmpty = () => (
    <div className={cls(bem('empty'))}>
      <img alt="empty" src={props.emptyImage} />
      <p>暂无优惠券</p>
    </div>
  );

  const renderExchangeBar = () => {
    if (props.showExchangeBar) {
      return (
        <div className={cls(bem('exchange-bar'))}>
          <Field
            value={state.code}
            onChange={innerChange}
            clearable
            border={false}
            className={cls(bem('field'))}
            placeholder={props.inputPlaceholder || '请输入优惠码'}
            maxlength={20}
          />
          <Button
            plain
            type="danger"
            className={cls(bem('exchange'))}
            text={props.exchangeButtonText || '兑换'}
            loading={props.exchangeButtonLoading}
            disabled={buttonDisabled}
            onClick={onExchange}
          />
        </div>
      );
    }
    return null;
  };

  const renderCouponTab = () => {
    const { coupons } = props;
    const count = props.showCount ? ` (${coupons.length})` : '';
    const title = (props.enabledTitle || '可用') + count;

    return (
      <Tabs.TabPane title={title}>
        <div
          className={cls(
            bem('list', {
              'with-bar': props.showExchangeBar,
              'with-bottom': props.showCloseButton,
            }),
          )}
        >
          {coupons.map((coupon, index) => (
            <Coupon
              key={coupon.id}
              coupon={coupon}
              chosen={index === props.chosenCoupon}
              currency={props.currency}
              onClick={() => props.onChange(index)}
            />
          ))}
          {!coupons.length && renderEmpty()}
          {props.listFooter}
        </div>
      </Tabs.TabPane>
    );
  };

  const renderDisabledTab = () => {
    const { disabledCoupons } = props;
    const count = props.showCount ? ` (${disabledCoupons.length})` : '';
    const title = (props.disabledTitle || '不可用') + count;

    return (
      <Tabs.TabPane title={title}>
        <div
          className={cls(
            bem('list', {
              'with-bar': props.showExchangeBar,
              'with-bottom': props.showCloseButton,
            }),
          )}
        >
          {disabledCoupons.map((coupon) => (
            <Coupon disabled key={coupon.id} coupon={coupon} currency={props.currency} />
          ))}
          {!disabledCoupons.length && renderEmpty()}
          {props.disabledListFooter}
        </div>
      </Tabs.TabPane>
    );
  };

  useEffect(() => {
    if (innerEffect.current) {
      innerEffect.current = true;
      return;
    }
    updateState({ code: props.code });
  }, [props.code]);

  return (
    <div className={cls(bem(), props.className)} style={props.style}>
      {renderExchangeBar()}
      <Tabs
        titleActiveColor="#f44336"
        color="#f44336"
        active={state.tab}
        border={false}
        {...props.tabsProps}
        className={cls(bem('tab'), props.tabsProps?.className)}
      >
        {renderCouponTab()}
        {renderDisabledTab()}
      </Tabs>
      <div className={cls(bem('bottom'))}>
        <Button
          v-show={props.showCloseButton}
          round
          block
          type="danger"
          className={cls(bem('close'))}
          text={props.closeButtonText || '不使用优惠券'}
          onClick={() => props.onChange?.(-1)}
        />
      </div>
    </div>
  );
};

const EMPTY_IMAGE = 'https://img.yzcdn.cn/vant/coupon-empty.png';

// defaultProps defined if need
CouponList.defaultProps = {
  showCount: true,
  showExchangeBar: true,
  showCloseButton: true,
  code: '',
  exchangeMinLength: 1,
  chosenCoupon: -1,
  coupons: [],
  disabledCoupons: [],
  displayedCouponIndex: -1,
  currency: '¥',
  emptyImage: EMPTY_IMAGE,
};

export default CouponList;
