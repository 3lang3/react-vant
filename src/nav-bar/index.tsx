import React, { CSSProperties, MouseEvent, useRef } from 'react';
import classnames from 'classnames';

import { NavBarProps } from './PropsType';
import { createNamespace } from '../utils';
import { BORDER_BOTTOM } from '../utils/constant';

import Icon from '../icon';

const [bem] = createNamespace('nav-bar');

const NavBar: React.FC<NavBarProps> = (props) => {
  const navBarRef = useRef(null);

  const renderLeft = () => {
    if (props.leftSlot) {
      return props.leftSlot();
    }

    return [
      props.leftArrow && (
        <Icon key="arrow" className={classnames(bem('arrow'))} name="arrow-left" size={20} />
      ),
      props.leftText && (
        <span key="text" className={classnames(bem('text'))}>
          {props.leftText}
        </span>
      ),
    ];
  };

  const renderRight = () => {
    if (props.rightSlot) {
      return props.rightSlot();
    }

    return <span className={classnames(bem('text'))}>{props.rightText}</span>;
  };

  const renderNavBar = () => {
    const { title, fixed, border, zIndex } = props;

    const style: CSSProperties = {
      zIndex: zIndex !== undefined ? +zIndex : undefined,
      ...props.style,
    };

    const hasLeft = props.leftArrow || props.leftText || props.leftSlot;
    const hasRight = props.rightText || props.rightSlot;

    return (
      <div
        ref={navBarRef}
        style={style}
        className={classnames(
          bem({ fixed, 'safe-area-inset-top': props.safeAreaInsetTop }),
          {
            [BORDER_BOTTOM]: border,
          },
          props.className,
        )}
      >
        <div className={classnames(bem('content'))}>
          {hasLeft && (
            <div
              className={classnames(bem('left'))}
              onClick={(event: MouseEvent) => {
                if (props.onClickLeft) {
                  props.onClickLeft(event);
                }
              }}
            >
              {renderLeft()}
            </div>
          )}
          <div className={classnames(bem('title'), 'rv-ellipsis')}>
            {props.titleSlot ? props.titleSlot() : title}
          </div>
          {hasRight && (
            <div
              className={classnames(bem('right'))}
              onClick={(event: MouseEvent) => {
                if (props.onClickRight) {
                  props.onClickRight(event);
                }
              }}
            >
              {renderRight()}
            </div>
          )}
        </div>
      </div>
    );
  };

  return renderNavBar();
};

export default NavBar;
