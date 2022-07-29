import React, { useRef } from 'react'
import cls from 'clsx'
import { LazyloadProps } from './PropsType'
import { useInViewport } from '../hooks'
import Skeleton from '../skeleton'
import { createNamespace } from '../utils'

const [bem] = createNamespace('lazyload')

const Lazyload: React.FC<LazyloadProps> = props => {
  const ref = useRef<HTMLDivElement>()
  const [inViewPort] = useInViewport(ref)

  const { height, placeholder, children, className, style } = props

  return inViewPort ? (
    <>{children}</>
  ) : (
    <div
      ref={ref}
      className={cls(bem(), className)}
      style={{ height, ...style }}
    >
      {placeholder}
    </div>
  )
}

Lazyload.defaultProps = {
  placeholder: <Skeleton title />,
}

export default Lazyload
