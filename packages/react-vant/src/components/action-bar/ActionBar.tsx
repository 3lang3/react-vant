import React, { useMemo } from 'react'
import clsx from 'clsx'
import { ActionBarProps } from './PropsType'
import ActionBarContext from './ActionBarContext'
import { createNamespace } from '../utils'
import { mergeProps } from '../utils/get-default-props'

const [bem] = createNamespace('action-bar')

const ActionBar: React.FC<ActionBarProps> = p => {
  const props = mergeProps(p, {
    safeAreaInsetBottom: true,
  })
  const children = useMemo(
    () => React.Children.toArray(props.children),
    [props.children]
  )

  return (
    <ActionBarContext.Provider value={{ parent: { children } }}>
      <div
        className={clsx(props.className, bem(), {
          'rv-safe-area-bottom': props.safeAreaInsetBottom,
        })}
        style={props.style}
      >
        {React.Children.toArray(props.children)
          .filter(Boolean)
          .map((child: React.ReactElement, index: number) =>
            React.cloneElement(child, {
              index,
            })
          )}
      </div>
    </ActionBarContext.Provider>
  )
}

export default ActionBar
