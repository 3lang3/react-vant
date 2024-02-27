import React, { CSSProperties } from 'react'
import clsx from 'clsx'
import { BadgeProps } from './PropsType'
import { isDef, addUnit, createNamespace } from '../utils'
import { isNumeric } from '../utils/validate/number'
import { mergeProps } from '../utils/get-default-props'

const [bem] = createNamespace('badge')

const Badge: React.FC<BadgeProps> = p => {
  const props = mergeProps(p, {
    tag: 'div',
    showZero: true,
  })
  const { content, max, dot, showZero, tag = 'div' } = props

  const TagElement = tag as React.ElementType

  const hasContent = () => {
    if (props.content) {
      return true
    }
    return isDef(content) && content !== '' && (showZero || +content !== 0)
  }

  const renderContent = () => {
    if (!dot && hasContent()) {
      if (isDef(max) && isNumeric(content?.toString()) && +content > max) {
        return `${max}+`
      }

      return content
    }
    return null
  }

  const renderBadge = () => {
    if (hasContent() || props.dot) {
      let style: CSSProperties = {
        background: props.color,
      }

      if (props.offset) {
        const [x, y] = props.offset

        if (props.children) {
          style.top = addUnit(y)
          style.right = addUnit(x)
        } else {
          style.marginTop = addUnit(y)
          style.marginLeft = addUnit(x)
        }
      }

      if (!props.children) {
        style = { ...props.style, ...style }
      }
      return (
        <div
          className={clsx(
            {
              [props.className]: props.className && !props.children,
            },
            bem({ dot: props.dot, fixed: !!props.children })
          )}
          style={style}
        >
          {renderContent()}
        </div>
      )
    }
    return null
  }

  if (props.children) {
    return (
      <TagElement
        className={clsx(bem('wrapper'), props.className)}
        style={props.style}
        onClick={props.onClick}
        onTouchStart={props.onTouchStart}
      >
        {props.children}
        {renderBadge()}
      </TagElement>
    )
  }

  return renderBadge()
}

export default Badge
