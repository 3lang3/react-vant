import React, { useContext } from 'react';
import cls from 'clsx';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';
import { SubmitBarProps } from './PropsType';
import { Icon } from '../icon';
import { Button } from '../button';

const SubmitBar: React.FC<SubmitBarProps> = (props) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('submit-bar', prefixCls);

  const renderText = () => {
    const { price, label, currency, textAlign, suffixLabel, decimalLength } = props;

    if (typeof +price === 'number') {
      const pricePair = (+price / 100).toFixed(+decimalLength).split('.');
      const decimal = decimalLength ? `.${pricePair[1]}` : '';

      return (
        <div className={cls(bem('text'))} style={{ textAlign }}>
          <span>{label || '合计：'}</span>
          <span className={cls(bem('price'))}>
            {currency}
            <span className={cls(bem('price-integer'))}>{pricePair[0]}</span>
            {decimal}
          </span>
          {suffixLabel && <span className={cls(bem('suffix-label'))}>{suffixLabel}</span>}
        </div>
      );
    }
    return null;
  };

  const renderTip = () => {
    const { tip, tipIcon } = props;
    if (tip) {
      return (
        <div className={cls(bem('tip'))}>
          {typeof tipIcon === 'string' ? (
            <Icon className={cls(bem('tip-icon'))} name={tipIcon} />
          ) : (
            tipIcon
          )}
          {tip && <span className={cls(bem('tip-text'))}>{tip}</span>}
        </div>
      );
    }
    return null;
  };

  const onClickButton = () => props?.onSubmit();

  const renderButton = () => {
    if (props.button) {
      return props.button;
    }

    return (
      <Button
        round
        type={props.buttonType}
        text={props.buttonText}
        className={cls(bem('button', props.buttonType))}
        color={props.buttonColor}
        loading={props.loading}
        disabled={props.disabled}
        onClick={onClickButton}
      />
    );
  };

  return (
    <div
      className={cls(props.className, bem(), { 'van-safe-area-bottom': props.safeAreaInsetBottom })}
      style={props.style}
    >
      {props.top}
      {renderTip()}
      <div className={cls(bem('bar'))}>
        {props.children}
        {renderText()}
        {renderButton()}
      </div>
    </div>
  );
};

// defaultProps defined if need
SubmitBar.defaultProps = {
  buttonType: 'danger',
  decimalLength: 2,
  currency: '¥',
  safeAreaInsetBottom: true,
};

export default SubmitBar;
