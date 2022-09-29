import React, { useMemo } from 'react'
import clsx from 'clsx'
import { TypographyBaseProps } from './PropsType'
import { createNamespace, isObject } from '../utils'
import Ellipsis from './Ellipsis'

const [bem] = createNamespace('typography')

const ellipsisDefaultValue = {
  rows: 1,
}

const TypographyBase: React.FC<
  TypographyBaseProps & { renderType: string }
> = ({
  tag = 'div',
  type,
  size = 'md',
  level = 5,
  center,
  ellipsis,
  className,
  children,
  strong,
  underline,
  disabled,
  renderType,
  delete: del,
  onClick,
  ...props
}) => {
  const internalClick = (e: React.MouseEvent) => {
    if (disabled) {
      e.stopPropagation()
    }
    onClick?.(e)
  }
  const ellipsisNumber = useMemo(() => {
    if (typeof ellipsis === 'boolean' && ellipsis) return 1
    if (typeof ellipsis === 'number') return ellipsis
    if (isObject(ellipsis) && ellipsis.rows) return ellipsis.rows
    return 0
  }, [ellipsis])

  const isEllipsis = !!ellipsis
  const isCssEllipsis = useMemo(() => {
    if (typeof ellipsis === 'boolean') return true
    if (typeof ellipsis === 'number') return true
    if (isObject(ellipsis)) {
      const p = { ...ellipsisDefaultValue, ...ellipsis }
      if (
        !p.collapseText &&
        !p.expandText &&
        !p.suffixCount &&
        !p.suffixText &&
        !p.symbol
      )
        return true
    }
    return false
  }, [ellipsis])

  const isEnhanceEllipsis = isEllipsis && !isCssEllipsis

  const TagElement = useMemo<React.ElementType>(() => {
    if (renderType === 'title') {
      if (level === 1) return 'h1'
      if (level === 2) return 'h2'
      if (level === 3) return 'h3'
      if (level === 4) return 'h4'
      if (level === 5) return 'h5'
      return 'h6'
    }
    return tag as React.ElementType
  }, [tag])

  const measureStyle = useMemo(() => {
    const propsStyle = { ...props.style, '--rv-typography-color': props.color }
    if (isEllipsis && isCssEllipsis && ellipsisNumber > 1) {
      return { ...propsStyle, '--line-clamp': ellipsisNumber }
    }
    return propsStyle
  }, [props.style, isCssEllipsis])

  const renderContent = () => {
    if (isEnhanceEllipsis)
      return (
        <Ellipsis
          onContentClick={internalClick}
          className={clsx(
            className,
            `rv-typography__${renderType}`,
            bem([
              type,
              size,
              {
                center,
                strong,
                underline,
                disabled,
                delete: del,
                [`l${level}`]: renderType === 'title' && level,
              },
            ])
          )}
          {...props}
          {...(ellipsis as Object)}
          style={measureStyle}
        >
          {children as string}
        </Ellipsis>
      )
    return (
      <TagElement
        className={clsx(
          className,
          `rv-typography__${renderType}`,
          bem([
            type,
            size,
            {
              center,
              strong,
              underline,
              disabled,
              delete: del,
              [`l${level}`]: renderType === 'title' && level,
            },
          ]),
          {
            'rv-ellipsis': isEllipsis && isCssEllipsis && ellipsisNumber === 1,
            'rv-typography__ellipsis--multi':
              isEllipsis && isCssEllipsis && ellipsisNumber > 1,
          }
        )}
        {...props}
        onClick={internalClick}
        style={measureStyle}
      >
        {children}
      </TagElement>
    )
  }
  return renderContent()
}

export default TypographyBase
