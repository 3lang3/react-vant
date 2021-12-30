import React, { isValidElement, useContext } from 'react';
import clsx from 'clsx';
import Icon from '../icon';
import Loading from '../loading';
import { ButtonProps } from './PropsType';
import { BORDER_SURROUND, WHITE } from '../utils/constant';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

const Button: React.FC<ButtonProps> = (props) => {
  const {
    tag = 'button',
    type,
    color,
    plain,
    disabled,
    loading,
    hairline,
    className,
    iconPrefix,
    loadingText,
    iconPosition,
  } = props;

  const TagElement = tag as React.ElementType;

  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('button', prefixCls);

  const classes = clsx(
    className,
    bem([
      type,
      props.size,
      {
        plain,
        loading,
        disabled,
        hairline,
        block: props.block,
        round: props.round,
        square: props.square,
        shadow: props.shadow,
        [`shadow-${+props.shadow}`]: props.shadow,
      },
    ]),
    { [BORDER_SURROUND]: hairline },
  );

  const style: Record<string, string | number> = { ...props.style };

  if (color) {
    style.color = plain ? color : WHITE;

    if (!plain) {
      // Use background instead of backgroundColor to make linear-gradient work
      style.background = color;
    }

    // hide border when color is linear-gradient
    if (color.indexOf('gradient') !== -1) {
      style.border = 0;
    } else {
      style.borderColor = color;
    }
  }

  const onClick = (event) => {
    if (!loading && !disabled && props.onClick) {
      props.onClick(event);
    }
  };

  const renderLoadingIcon = () => {
    if (loading) {
      const { loadingSize = '20px', loadingType } = props;
      return (
        <Loading
          className={clsx(bem('loading'))}
          size={loadingSize}
          type={loadingType}
          color={type === 'default' ? undefined : ''}
        />
      );
    }
    return null;
  };

  const renderIcon = () => {
    if (props.loading) {
      return renderLoadingIcon();
    }

    if (typeof props.icon === 'string') {
      return <Icon name={props.icon} className={clsx(bem('icon'))} classPrefix={iconPrefix} />;
    }

    if (isValidElement(props.icon)) {
      return props.icon;
    }

    return null;
  };

  const renderText = () => {
    let text;
    if (loading) {
      text = loadingText;
    } else {
      text = props.children || props.text;
    }

    if (text) {
      return (
        <span key="text" className={clsx(bem('text'))}>
          {text}
        </span>
      );
    }
    return null;
  };

  const renderContent = () => (
    <div className={clsx(bem('content'))}>
      {iconPosition === 'left' && renderIcon()}
      {renderText()}
      {iconPosition === 'right' && renderIcon()}
    </div>
  );

  return (
    <TagElement className={classes} style={style} type={props.nativeType} onClick={onClick}>
      {renderContent()}
    </TagElement>
  );
};

Button.defaultProps = {
  size: 'normal',
  type: 'default',
  iconPosition: 'left',
};

export default Button;
