import React from 'react'
import cls from 'clsx'
import { Checked } from '@react-vant/icons'
import { StepsProps } from './PropsType'
import { createNamespace } from '../utils'
import { mergeProps } from '../utils/get-default-props'

const [bem] = createNamespace('steps')

const Steps: React.FC<StepsProps> = ({ children, className, style, ...p }) => {
  const props = mergeProps(p, {
    active: 0,
    direction: 'horizontal',
    activeIcon: <Checked />,
  })
  return (
    <div className={cls(className, bem([props.direction]))} style={style}>
      <div className={cls(bem('items'))}>
        {React.Children.toArray(children)
          .filter(Boolean)
          .map((child: React.ReactElement, index: number) =>
            React.cloneElement(child, {
              index,
              parent: props,
            })
          )}
      </div>
    </div>
  )
}

export default Steps
