import React, { CSSProperties, isValidElement, MouseEvent, useRef } from 'react'
import clsx from 'clsx'
import { ArrowLeft } from '@react-vant/icons'

import { NavBarProps } from './PropsType'
import { BORDER_BOTTOM } from '../utils/constant'

import useHeight from '../hooks/use-height'
import { createNamespace } from '../utils'
import { mergeProps } from '../utils/get-default-props'

const [bem] = createNamespace('nav-bar')

const NavBar: React.FC<NavBarProps> = p => {
  const props = mergeProps(p, {
    border: true,
    leftArrow: <ArrowLeft />,
  })
  const navBarRef = useRef(null)

  const navBarHeight = useHeight(navBarRef)

  const onClickLeft = (event: MouseEvent) => {
    if (props.onClickLeft) props.onClickLeft(event)
  }

  const onClickRight = (event: MouseEvent) => {
    if (props.onClickRight) props.onClickRight(event)
  }

  const renderLeft = () => {
    if (typeof props.leftText !== 'string' && isValidElement(props.leftText)) {
      return props.leftText
    }

    return [
      props.leftArrow &&
        React.cloneElement(props.leftArrow as React.ReactElement, {
          key: 'arroe',
          className: clsx(bem('arrow')),
        }),
      props.leftText && (
        <span key='text' className={clsx(bem('text'))}>
          {props.leftText}
        </span>
      ),
    ]
  }

  const renderRight = () => {
    if (
      typeof props.rightText !== 'string' &&
      isValidElement(props.rightText)
    ) {
      return props.rightText
    }

    return <span className={clsx(bem('text'))}>{props.rightText}</span>
  }

  const renderNavBar = () => {
    const { title, fixed, border, zIndex } = props

    const style: CSSProperties = {
      zIndex: zIndex !== undefined ? +zIndex : undefined,
      ...props.style,
    }

    const hasLeft = props.leftArrow || props.leftText
    const hasRight = props.rightText

    return (
      <div
        ref={navBarRef}
        style={style}
        className={clsx(
          bem({ fixed, 'safe-area-inset-top': props.safeAreaInsetTop }),
          {
            [BORDER_BOTTOM]: border,
          },
          props.className
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
    )
  }

  const renderPlaceholder = () => {
    if (props.fixed && props.placeholder) {
      return (
        <div
          className={clsx(bem('placeholder'))}
          style={{ height: navBarHeight ? `${navBarHeight}px` : undefined }}
        />
      )
    }
    return null
  }

  return (
    <>
      {renderPlaceholder()}
      {renderNavBar()}
    </>
  )
}

export default NavBar
