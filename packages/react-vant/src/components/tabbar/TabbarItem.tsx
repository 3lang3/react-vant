import React, { useContext, useMemo } from 'react'
import clsx from 'clsx'
import { TabbarItemProps } from './PropsType'
import TabbarContext from './TabbarContext'
import Badge from '../badge'
import { createNamespace } from '../utils'
import { devWarning } from '../utils/dev-log'

const [bem] = createNamespace('tabbar-item')

const TabbarItem: React.FC<TabbarItemProps> = props => {
  const { setActive, index } = props
  const { parent } = useContext(TabbarContext)
  const { activeColor, inactiveColor } = parent
  if (!parent) {
    if (process.env.NODE_ENV !== 'production') {
      devWarning(
        'Tabbar.Item',
        '<TabbarItem> must be a child component of <Tabbar>.'
      )
    }
  }

  const active = useMemo(() => {
    return (props.name || index) === parent.value
  }, [props.name, index, parent.value])

  const onClick = (event: React.MouseEvent) => {
    setActive(props.name ?? index)
    props.onClick?.(event)
  }

  const renderIcon = () => {
    if (typeof props.icon === 'function') {
      return props.icon(active)
    }
    if (props.icon) {
      return props.icon
    }
    return null
  }

  const color = active ? activeColor : inactiveColor

  return (
    <div
      className={clsx(props.className, bem({ active }))}
      style={{ ...props.style, color }}
      onClick={onClick}
    >
      <Badge {...props.badge} className={clsx(bem('icon'))}>
        {renderIcon()}
      </Badge>
      <div className={clsx(bem('text'))}>
        {typeof props.children === 'function'
          ? (props.children as Function)(active)
          : props.children}
      </div>
    </div>
  )
}

export default TabbarItem
