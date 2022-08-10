import React, { useMemo, CSSProperties, forwardRef } from 'react'
import clsx from 'clsx'

import { TabsTitleProps } from './PropsType'
import { createNamespace, isObject } from '../utils'
import Badge from '../badge'

const [bem] = createNamespace('tab')

const TabsTitle = forwardRef<HTMLDivElement, TabsTitleProps>((props, ref) => {
  const {
    type,
    color,
    isActive,
    activeColor,
    inactiveColor,
    disabled,
    className,
  } = props

  const customStyle = useMemo(() => {
    const style: CSSProperties = { ...props.style }
    const isCard = type === 'card'

    // card theme color
    if (color) {
      if (isCard) {
        style.borderColor = color
      }

      if (!disabled) {
        if (isCard) {
          if (isActive) {
            style.backgroundColor = color
          } else {
            style.color = color
          }
        }
        if ((props.type === 'line' || props.type === 'jumbo') && isActive) {
          style.color = color
        }
      }
    }

    const titleColor = isActive ? activeColor : inactiveColor
    if (titleColor) {
      style.color = titleColor
    }

    return style
  }, [type, color, disabled, isActive, activeColor, inactiveColor])

  const renderText = () => {
    const Title = (
      <span
        className={clsx(
          bem('text', { ellipsis: !props.scrollable && props.type !== 'jumbo' })
        )}
        style={{
          backgroundColor: props.type === 'capsule' && isActive && color,
        }}
      >
        {(() => {
          if (typeof props.title === 'function') {
            return props.title(isActive)
          }
          return props.title
        })()}
      </span>
    )

    const Description =
      props.type === 'jumbo' && !!props.description ? (
        <div
          className={clsx(bem('description'))}
          style={{ backgroundColor: isActive && color }}
        >
          {(() => {
            if (typeof props.description === 'function') {
              return props.description(isActive)
            }
            return props.description
          })()}
        </div>
      ) : null

    const measureContent = (
      <>
        {Title}
        {Description}
      </>
    )

    if (props.badge) {
      const badgeProps = isObject(props.badge)
        ? props.badge
        : { content: props.badge }
      return <Badge {...badgeProps}>{measureContent}</Badge>
    }

    return measureContent
  }

  return (
    <div
      ref={ref}
      className={clsx([
        bem({
          active: props.isActive,
          disabled: props.disabled,
        }),
        className,
      ])}
      style={customStyle}
      aria-selected={props.isActive}
      onClick={props.onClick}
    >
      {renderText()}
    </div>
  )
})

export default TabsTitle
