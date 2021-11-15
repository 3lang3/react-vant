import React, { CSSProperties, isValidElement, MouseEvent, useContext, useRef } from 'react';
import clsx from 'clsx';

import { NavBarProps } from './PropsType';
import { BORDER_BOTTOM } from '../utils/constant';

import Icon from '../icon';
import useHeight from '../hooks/use-height';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

const NavBar: React.FC<NavBarProps> = (props) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('nav-bar', prefixCls);

  const navBarRef = useRef(null);

  const navBarHeight = useHeight(navBarRef);

  const onClickLeft = (event: MouseEvent) => {
    if (props.onClickLeft) props.onClickLeft(event);
  };

  const onClickRight = (event: MouseEvent) => {
    if (props.onClickRight) props.onClickRight(event);
  };

  const renderLeft = () => {
    if (typeof props.leftText !== 'string' && isValidElement(props.leftText)) {
      return props.leftText;
    }

    return [
      props.leftArrow && <Icon key="arrow" className={clsx(bem('arrow'))} name="arrow-left" />,
      props.leftText && (
        <span key="text" className={clsx(bem('text'))}>
          {props.leftText}
        </span>
      ),
    ];
  };

  const renderRight = () => {
    if (typeof props.rightText !== 'string' && isValidElement(props.rightText)) {
      return props.rightText;
    }

    return <span className={clsx(bem('text'))}>{props.rightText}</span>;
  };

  const renderNavBar = () => {
    const { title, fixed, border, zIndex } = props;

    const style: CSSProperties = {
      zIndex: zIndex !== undefined ? +zIndex : undefined,
      ...props.style,
    };

    const hasLeft = props.leftArrow || props.leftText;
    const hasRight = props.rightText;

    return (
      <div
        ref={navBarRef}
        style={style}
        className={clsx(
          bem({ fixed, 'safe-area-inset-top': props.safeAreaInsetTop }),
          {
            [BORDER_BOTTOM]: border,
          },
          props.className,
        )}
      >
        <div className={clsx(bem('content'))}>
          {hasLeft && (
            <div className={clsx(bem('left'))} onClick={onClickLeft}>
              {renderLeft()}
            </div>
          )}
          <div className={clsx(bem('title'), 'rv-ellipsis')}>{title}</div>
          {hasRight && (
            <div className={clsx(bem('right'))} onClick={onClickRight}>
              {renderRight()}
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderPlaceholder = () => {
    if (props.fixed && props.placeholder) {
      return (
        <div
          className={clsx(bem('placeholder'))}
          style={{ height: navBarHeight ? `${navBarHeight}px` : undefined }}
        />
      );
    }
    return null;
  };

  return (
    <>
      {renderPlaceholder()}
      {renderNavBar()}
    </>
  );
};

NavBar.defaultProps = {
  border: true,
};

export default NavBar;
