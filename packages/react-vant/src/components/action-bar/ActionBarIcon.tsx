import React from 'react'
import clsx from 'clsx'
import { ActionBarIconProps } from './PropsType'
import Badge from '../badge'
import { createNamespace } from '../utils'

const [bem] = createNamespace('action-bar-icon')

const ActionBarIcon: React.FC<ActionBarIconProps> = props => {
  const renderIcon = () => {
    const { badge, icon } = props
    if (icon) {
      return (
        <Badge {...badge} className={clsx(bem('icon'))}>
          {icon}
        </Badge>
      )
    }
    return null
  }

  return (
    <div
      role='button'
      className={clsx(props.className, bem())}
      style={props.style}
      tabIndex={0}
      onClick={props.onClick}
    >
      {renderIcon()}
      {props.children || props.text}
    </div>
  )
}

export default ActionBarIcon
