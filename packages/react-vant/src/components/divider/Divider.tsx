import React from 'react'
import cls from 'clsx'
import { DividerProps } from './PropsType'
import { createNamespace } from '../utils'

const [bem] = createNamespace('divider')

const Divider: React.FC<DividerProps> = ({
  children,
  className,
  hairline = true,
  dashed,
  type = 'horizontal',
  contentPosition = 'center',
  ...props
}) => {
  return (
    <div
      role='separator'
      className={cls(
        className,
        bem({
          dashed,
          hairline,
          'vertical': type === 'vertical',
          [`content-${contentPosition}`]: !!children,
        })
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default Divider
