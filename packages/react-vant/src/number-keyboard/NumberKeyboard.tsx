import React, { useContext, useMemo, useRef } from 'react';
import cls from 'clsx';
import { CSSTransition } from 'react-transition-group';
import { getZIndexStyle, noop, stopPropagation } from '../utils';
import { KeyType, KeyConfig, NumberKeyboardProps } from './PropsType';
import NumberKeyboardKey from './NumberKeyboardKey';
import { useUpdateEffect } from '../hooks';
import useClickAway from '../hooks/use-click-away';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

const NumberKeyboard: React.FC<NumberKeyboardProps> = ({ className, style, ...props }) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('number-keyboard', prefixCls);

  const root = useRef<HTMLDivElement>();

  const genBasicKeys = () => {
    const keys: KeyConfig[] = Array(9)
      .fill('')
      .map((_, i) => ({ text: i + 1 }));

    if (props.randomKeyOrder) {
      keys.sort(() => (Math.random() > 0.5 ? 1 : -1));
    }

    return keys;
  };

  const genDefaultKeys = (): KeyConfig[] => [
    ...genBasicKeys(),
    { text: props.extraKey as string, type: 'extra' },
    { text: 0 },
    {
      text: props.showDeleteKey ? props.deleteButtonText : '',
      type: props.showDeleteKey ? 'delete' : '',
    },
  ];

  const genCustomKeys = () => {
    const keys = genBasicKeys();
    const { extraKey } = props;
    const extraKeys = Array.isArray(extraKey) ? extraKey : [extraKey];

    if (extraKeys.length === 1) {
      keys.push({ text: 0, wider: true }, { text: extraKeys[0], type: 'extra' });
    } else if (extraKeys.length === 2) {
      keys.push(
        { text: extraKeys[0], type: 'extra' },
        { text: 0 },
        { text: extraKeys[1], type: 'extra' },
      );
    }

    return keys;
  };

  const keys = useMemo(
    () => (props.theme === 'custom' ? genCustomKeys() : genDefaultKeys()),
    [props.theme, genCustomKeys, genDefaultKeys],
  );

  const onBlur = () => {
    if (props.visible) {
      props.onBlur?.();
    }
  };

  const onClose = () => {
    props.onClose?.();
    if (props.blurOnClose) {
      onBlur();
    }
  };

  const onAnimationEnd = () => {
    props[props.visible ? 'onShow' : 'onHide']?.();
  };

  const onPress = (text: string, type: KeyType) => {
    if (text === '') {
      if (type === 'extra') {
        onBlur();
      }
      return;
    }

    const { value } = props;

    if (type === 'delete') {
      props.onDelete?.();
      props.onChange?.(value.slice(0, value.length - 1));
    } else if (type === 'close') {
      onClose();
    } else if (value.length < props.maxlength) {
      props.onInput?.(text);
      props.onChange?.(value + text);
    }
  };

  const renderTitle = () => {
    const { title, theme, closeButtonText } = props;
    const showClose = closeButtonText && theme === 'default';
    const showTitle = title || showClose;

    if (!showTitle) {
      return null;
    }

    return (
      <div className={cls(bem('header'))}>
        {title && <h2 className={cls(bem('title'))}>{title}</h2>}
        {showClose && (
          <button type="button" className={cls(bem('close'))} onClick={onClose}>
            {closeButtonText}
          </button>
        )}
      </div>
    );
  };

  const renderKeys = () =>
    keys.map((key, i) => {
      let keySlots = null;

      if (!key.type) {
        keySlots = props.numberKeyRender?.(key);
      }

      if (key.type === 'delete') {
        keySlots = props.deleteRender?.();
      }
      if (key.type === 'extra') {
        keySlots = props.extraKeyRender?.();
      }
      return (
        <NumberKeyboardKey
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          text={key.text}
          type={key.type}
          wider={key.wider}
          color={key.color}
          onPress={onPress}
          // eslint-disable-next-line react/no-children-prop
          children={keySlots}
        />
      );
    });

  const renderSidebar = () => {
    if (props.theme === 'custom') {
      return (
        <div className={cls(bem('sidebar'))}>
          {props.showDeleteKey && (
            <NumberKeyboardKey
              large
              text={props.deleteButtonText}
              type="delete"
              onPress={onPress}
            />
          )}
          <NumberKeyboardKey
            large
            text={props.closeButtonText}
            type="close"
            color="blue"
            loading={props.closeButtonLoading}
            onPress={onPress}
          />
        </div>
      );
    }
    return null;
  };

  useUpdateEffect(() => {
    if (!props.transition) {
      props[props.visible ? 'onShow' : 'onHide']?.();
    }
  }, [props.visible]);

  useClickAway(root, props.hideOnClickOutside ? onBlur : noop, 'touchstart');

  const Title = renderTitle();

  const Content = (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      nodeRef={root}
      in={props.visible}
      timeout={300}
      classNames={props.transition ? 'rv-slide-up' : ''}
      onExited={onAnimationEnd}
    >
      <div
        ref={root}
        style={getZIndexStyle(props.zIndex)}
        className={cls(
          bem({
            unfit: !props.safeAreaInsetBottom,
            'with-title': !!Title,
          }),
        )}
        onTouchStart={stopPropagation}
      >
        {Title}
        <div className={cls(bem('body'))}>
          <div className={cls(bem('keys'))}>{renderKeys()}</div>
          {renderSidebar()}
        </div>
      </div>
    </CSSTransition>
  );

  return Content;
};

NumberKeyboard.defaultProps = {
  transition: true,
  blurOnClose: true,
  showDeleteKey: true,
  hideOnClickOutside: true,
  safeAreaInsetBottom: true,
  theme: 'default',
  value: '',
  extraKey: '',
  maxlength: Number.MAX_VALUE,
};

export default NumberKeyboard;
