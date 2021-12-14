import React, { useContext } from 'react';
import clsx from 'clsx';
import Loading from '../loading';
import { ButtonProps } from './PropsType';
import { BORDER_SURROUND, SHADOW, WHITE } from '../utils/constant';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

const Button: React.FC<ButtonProps> = (props) => {
  const {
    tag,
    type,
    color,
    plain,
    disabled,
    loading,
    hairline,
    className,
    loadingText,
    iconPosition,
  } = props;

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
      },
    ]),
    { [BORDER_SURROUND]: hairline },
    props.shadow && `${SHADOW}--${+props.shadow}`,
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

  function onClick(event) {
    if (!loading && !disabled && props.onClick) {
      props.onClick(event);
    }
  }

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

    if (props.icon) {
      return React.cloneElement(props.icon as React.ReactElement, {
        className: clsx(bem('icon')),
      });
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

  return React.createElement(
    tag,
    {
      style,
      className: classes,
      type: props.nativeType,
      disabled,
      onClick,
    },
    renderContent(),
  );
};

Button.defaultProps = {
  size: 'normal',
  type: 'default',
  tag: 'button',
  iconPosition: 'left',
};

export default Button;
