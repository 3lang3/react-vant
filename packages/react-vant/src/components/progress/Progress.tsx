import React, { useMemo } from 'react'
import clsx from 'clsx'
import { ProgressProps } from './PropsType'
import { addUnit, createNamespace } from '../utils'
import { mergeProps } from '../utils/get-default-props'

const [bem] = createNamespace('progress')

const Progress: React.FC<ProgressProps> = p => {
  const props = mergeProps(p, {
    showPivot: true,
    percentage: 0,
  })
  const background = useMemo(
    () => (props.inactive ? '#cacaca' : props.color),
    [props.inactive, props.color]
  )

  const renderPivot = () => {
    const { textColor, pivotText, pivotColor, percentage } = props
    const text = pivotText ?? `${percentage}%`

    if (props.showPivot && text) {
      const style = {
        color: textColor,
        left: `${+percentage}%`,
        transform: `translate(-${+percentage}%,-50%)`,
        background: pivotColor || background,
      }

      return (
        <span style={style} className={clsx(bem('pivot'))}>
          {text}
        </span>
      )
    }
    return null
  }

  const { trackColor, percentage, strokeWidth } = props
  const rootStyle = {
    ...props.style,
    background: trackColor,
    height: addUnit(strokeWidth),
  }
  const portionStyle = {
    background,
    transform: `scaleX(${+percentage / 100})`,
  }

  return (
    <div className={clsx(bem(), props.className)} style={rootStyle}>
      <span className={clsx(bem('portion'))} style={portionStyle} />
      {renderPivot()}
    </div>
  )
}

export default Progress
