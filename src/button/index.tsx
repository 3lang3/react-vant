import React from 'react';
import classnames from 'classnames';
import Icon from '../icon';
import Loading from '../loading';
import { ButtonProps } from './PropsType';
import { createNamespace } from '../utils';
import { BORDER_SURROUND, WHITE } from '../utils/constant';

const [bem] = createNamespace('button');

const Button: React.FC<ButtonProps> = (props) => {
  const {
    tag = 'button',
    icon,
    type,
    color,
    plain,
    disabled,
    loading,
    hairline,
    className,
    iconPrefix,
    loadingText,
    // iconPosition,
  } = props;

  const classes = classnames(
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

  function onClick(event: Event) {
    if (!loading && !disabled && props.onClick) {
      props.onClick(event);
    }
  }

  const renderLoadingIcon = () => {
    if (loading) {
      const { loadingSize = '20px', loadingType } = props;
      return (
        <Loading
          className={classnames(bem('loading'))}
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
      return <Icon name={icon} className={classnames(bem('icon'))} classPrefix={iconPrefix} />;
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
        <span key="text" className={classnames(bem('text'))}>
          {text}
        </span>
      );
    }
    return null;
  };

  const Content = () => (
    <div className={classnames(bem('content'))}>
      {renderIcon()}
      {renderText()}
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
    Content(),
  );
};

Button.defaultProps = {
  size: 'normal',
  type: 'default',
};

export default Button;
