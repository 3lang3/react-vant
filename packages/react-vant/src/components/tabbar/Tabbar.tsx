import React, { useRef } from 'react'
import clsx from 'clsx'
import { TabbarProps } from './PropsType'
import { createNamespace, getZIndexStyle } from '../utils'
import { BORDER_TOP_BOTTOM } from '../utils/constant'
import useHeight from '../hooks/use-height'
import TabbarContext from './TabbarContext'
import useMergedState from '../hooks/use-merged-state'
import { mergeProps } from '../utils/get-default-props'

const [bem] = createNamespace('tabbar')

const Tabbar: React.FC<TabbarProps> = p => {
  const props = mergeProps(p, {
    fixed: true,
    border: true,
    defaultValue: 0,
  })
  const [current, setCurrent] = useMergedState({
    value: props.value,
    defaultValue: props.defaultValue,
  })
  const root = useRef<HTMLDivElement>()
  const height = useHeight(root)

  const renderPlaceholder = renderContent => {
    return (
      <div className={clsx(bem('placeholder'))} style={{ height }}>
        {renderContent()}
      </div>
    )
  }

  // enable safe-area-inset-bottom by default when fixed
  const enableSafeArea = () => props.safeAreaInsetBottom ?? props.fixed

  const setActive = (active: number | string) => {
    if (active !== props.value) {
      props.onChange?.(active)
      setCurrent(active)
    }
  }

  const renderTabbar = () => {
    const { fixed, zIndex, border } = props
    return (
      <TabbarContext.Provider value={{ parent: { ...props, value: current } }}>
        <div
          ref={root}
          style={{ ...props.style, ...getZIndexStyle(zIndex) }}
          className={clsx(props.className, bem({ fixed }), {
            [BORDER_TOP_BOTTOM]: border,
            'rv-safe-area-bottom': enableSafeArea(),
          })}
        >
          {React.Children.toArray(props.children)
            .filter(Boolean)
            .map((child: React.ReactElement, index) =>
              React.cloneElement(child, {
                setActive,
                index,
              })
            )}
        </div>
      </TabbarContext.Provider>
    )
  }

  if (props.fixed && props.placeholder) {
    return renderPlaceholder(renderTabbar)
  }
  return renderTabbar()
}

export default Tabbar
