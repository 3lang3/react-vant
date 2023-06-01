import React, { useMemo } from 'react'
import cls from 'clsx'
import { addUnit, createNamespace } from '../utils'
import { GridProps, GridItemProps } from './PropsType'
import { BORDER } from '../utils/constant'
import Badge from '../badge'
import { devWarning } from '../utils/dev-log'

type InternalProps = {
  parent?: GridProps
  index?: number
}

const [bem] = createNamespace('grid-item')

const GridItem: React.FC<GridItemProps & InternalProps> = ({
  children,
  className,
  style,
  ...props
}) => {
  const { index = 0, parent = {} } = props
  if (!parent) {
    if (process.env.NODE_ENV !== 'production') {
      devWarning('GridItem', ' <GridItem> must be a child component of <Grid>.')
    }
  }

  const rootStyle = useMemo(() => {
    const { square, gutter, columnNum } = parent
    const percent = `${100 / +columnNum}%`
    const internalStyle: React.CSSProperties = {
      ...style,
      flexBasis: percent,
    }

    if (square) {
      internalStyle.paddingTop = percent
    } else if (gutter) {
      const gutterValue = addUnit(gutter)
      internalStyle.paddingRight = gutterValue

      if (index >= columnNum) {
        internalStyle.marginTop = gutterValue
      }
    }

    return internalStyle
  }, [parent.style, parent.gutter, parent.columnNum])

  const contentStyle = useMemo(() => {
    const { square, gutter } = parent

    if (square && gutter) {
      const gutterValue = addUnit(gutter)
      return {
        ...props.contentStyle,
        right: gutterValue,
        bottom: gutterValue,
        height: 'auto',
      }
    }
    return props.contentStyle
  }, [parent.gutter, parent.columnNum, props.contentStyle])

  const renderIcon = () => {
    if (props.icon) {
      return (
        <Badge {...props.badge}>
          {React.cloneElement(props.icon as React.ReactElement, {
            className: cls(bem('icon')),
            color: props.iconColor,
            fontSize: parent.iconSize,
          })}
        </Badge>
      )
    }

    return null
  }

  const renderText = () => {
    if (React.isValidElement(props.text)) {
      return props.text
    }
    if (props.text) {
      return <span className={cls(bem('text'))}>{props.text}</span>
    }
    return null
  }

  const renderContent = () => {
    if (children) {
      return children
    }
    return (
      <>
        {renderIcon()}
        {renderText()}
      </>
    )
  }

  const { center, border, square, gutter, reverse, direction } = parent

  const classes = cls(
    props.contentClassName,
    bem('content', [
      direction,
      {
        center,
        square,
        reverse,
        clickable: !!props.onClick,
        surround: border && gutter,
      },
    ]),
    { [BORDER]: border }
  )

  return (
    <div className={cls(className, bem({ square }))} style={rootStyle}>
      <div
        role={props.onClick ? 'button' : undefined}
        className={classes}
        style={contentStyle}
        onClick={props.onClick}
      >
        {renderContent()}
      </div>
    </div>
  )
}

export default GridItem
