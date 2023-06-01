import React, { useContext, useEffect, useMemo, useRef } from 'react'
import cls from 'clsx'
import ConfigProviderContext from '../config-provider/ConfigProviderContext'
import { CouponListProps } from './PropsType'
import Tabs from '../tabs'
import { useSetState } from '../hooks'
import Button from '../button'
import Field from '../field'
import Coupon from './Coupon'
import { createNamespace } from '../utils'
import { mergeProps } from '../utils/get-default-props'

const [bem] = createNamespace('coupon-list')

const CouponList: React.FC<CouponListProps> = p => {
  const props = mergeProps(p, {
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
  })
  const { locale } = useContext(ConfigProviderContext)

  const innerEffect = useRef(false)
  const [state, updateState] = useSetState({
    tab: 0,
    code: props.code,
  })

  const buttonDisabled = useMemo(
    () =>
      !props.exchangeButtonLoading &&
      (props.exchangeButtonDisabled ||
        !state.code ||
        state.code.length < props.exchangeMinLength),
    [
      props.exchangeButtonLoading,
      props.exchangeButtonDisabled,
      state.code,
      props.exchangeMinLength,
    ]
  )

  const innerChange = (code: string) => {
    updateState({ code })
    innerEffect.current = true
  }

  const onExchange = () => {
    if (props.onExchange) props.onExchange(state.code)

    // auto clear currentCode when not use v-model
    if (!props.code) {
      innerChange('')
    }
  }

  const renderEmpty = () => (
    <div className={cls(bem('empty'))}>
      <img alt='empty' src={props.emptyImage} />
      <p>{locale.noCoupon}</p>
    </div>
  )

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
            placeholder={
              props.inputPlaceholder || locale.vanCouponList.placeholder
            }
            maxLength={20}
          />
          <Button
            plain
            type='primary'
            className={cls(bem('exchange'))}
            text={props.exchangeButtonText || locale.vanCouponList.exchange}
            loading={props.exchangeButtonLoading}
            disabled={buttonDisabled}
            onClick={onExchange}
          />
        </div>
      )
    }
    return null
  }

  const renderCouponTab = () => {
    const { coupons } = props
    const count = props.showCount ? ` (${coupons.length})` : ''
    const title = (props.enabledTitle || locale.vanCouponList.enable) + count

    return (
      <Tabs.TabPane title={title}>
        <div
          className={cls(
            bem('list', {
              'with-bar': props.showExchangeBar,
              'with-bottom': props.showCloseButton,
            })
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
    )
  }

  const renderDisabledTab = () => {
    const { disabledCoupons } = props
    const count = props.showCount ? ` (${disabledCoupons.length})` : ''
    const title = (props.disabledTitle || locale.vanCouponList.disabled) + count

    return (
      <Tabs.TabPane title={title}>
        <div
          className={cls(
            bem('list', {
              'with-bar': props.showExchangeBar,
              'with-bottom': props.showCloseButton,
            })
          )}
        >
          {disabledCoupons.map(coupon => (
            <Coupon
              disabled
              key={coupon.id}
              coupon={coupon}
              currency={props.currency}
            />
          ))}
          {!disabledCoupons.length && renderEmpty()}
          {props.disabledListFooter}
        </div>
      </Tabs.TabPane>
    )
  }

  useEffect(() => {
    if (innerEffect.current) {
      innerEffect.current = true
      return
    }
    updateState({ code: props.code })
  }, [props.code])

  return (
    <div className={cls(bem(), props.className)} style={props.style}>
      {renderExchangeBar()}
      <Tabs
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
          type='primary'
          className={cls(bem('close'))}
          text={props.closeButtonText || locale.vanCouponList.close}
          onClick={() => props.onChange?.(-1)}
        />
      </div>
    </div>
  )
}

const EMPTY_IMAGE = 'https://img.yzcdn.cn/vant/coupon-empty.png'

export default CouponList
