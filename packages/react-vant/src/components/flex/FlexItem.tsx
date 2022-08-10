/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react'
import clsx from 'clsx'
import FlexContext from './FlexContext'
import { FlexItemProps, FlexType } from './PropsType'
import { createNamespace } from '../utils'

const [bem] = createNamespace('flexitem')

const FlexItem: React.FC<FlexItemProps> = props => {
  const { style, className, span, children, flex, ...others } = props

  const classes = clsx(bem([span?.toString()]), className)

  const parseFlex = (_flex: FlexType): string => {
    if (typeof _flex === 'number') {
      return `${_flex} ${_flex} auto`
    }

    if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(_flex)) {
      return `0 0 ${_flex}`
    }

    return _flex
  }

  return (
    <FlexContext.Consumer>
      {({ gutter }) => {
        let mergedStyle: React.CSSProperties = { ...style }
        if (gutter) {
          mergedStyle = {
            ...(gutter[0]! > 0
              ? {
                  paddingLeft: gutter[0]! / 2,
                  paddingRight: gutter[0]! / 2,
                }
              : {}),
            ...(gutter[1]! > 0
              ? {
                  paddingTop: gutter[1]! / 2,
                  paddingBottom: gutter[1]! / 2,
                }
              : {}),
            ...mergedStyle,
          }
        }
        if (flex) {
          mergedStyle.flex = parseFlex(flex)
        }
        return (
          <div {...others} style={mergedStyle} className={classes}>
            {children}
          </div>
        )
      }}
    </FlexContext.Consumer>
  )
}

export default FlexItem
