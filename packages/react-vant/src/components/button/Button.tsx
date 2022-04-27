import React, { useContext } from 'react';
import clsx from 'clsx';
import Loading from '../loading';
import { ButtonProps } from './PropsType';
import { BORDER_SURROUND, SHADOW, WHITE } from '../utils/constant';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';
import ButtonContext from './ButtonContext';

const Button: React.FC<ButtonProps> = (props) => {
  const { color, loading, className, hairline, loadingText } = props;

  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('button', prefixCls);

  const { parent } = useContext(ButtonContext);

  const size = React.useMemo(
    () => props.size || parent?.size || 'normal',
    [parent?.size, props.size],
  );

  const type = React.useMemo(
    () => props.type || parent?.type || 'default',
    [parent?.type, props.type],
  );

  const plain = React.useMemo(() => props.plain ?? parent?.plain, [parent?.plain, props.plain]);

  const block = React.useMemo(() => props.block ?? parent?.block, [parent?.block, props.block]);

  const iconPosition = React.useMemo(
    () => props.iconPosition || parent?.iconPosition || 'left',
    [parent?.iconPosition, props.iconPosition],
  );

  const disabled = React.useMemo(
    () => props.disabled ?? parent?.disabled,
    [parent?.disabled, props.disabled],
  );

  const nativeType = React.useMemo(
    () => props.nativeType || parent?.nativeType || 'button',
    [parent?.nativeType, props.nativeType],
  );

  const tag = React.useMemo(() => props.tag || parent?.tag || 'button', [parent?.tag, props.tag]);

  const TagElement = tag as React.ElementType;

  const classes = clsx(
    className,
    bem([
      type,
      size,
      {
        plain,
        loading,
        disabled,
        hairline,
        block,
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

  return (
    <TagElement className={classes} style={style} type={nativeType} onClick={onClick}>
      {renderContent()}
    </TagElement>
  );
};

export default Button;
