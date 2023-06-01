import React, { useRef } from 'react'
import cls from 'clsx'
import { LazyloadProps } from './PropsType'
import { useInViewport } from '../hooks'
import Skeleton from '../skeleton'
import { createNamespace } from '../utils'
import { mergeProps } from '../utils/get-default-props'

const [bem] = createNamespace('lazyload')

const Lazyload: React.FC<LazyloadProps> = p => {
  const props = mergeProps(p, {
    placeholder: <Skeleton title />,
  })
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

export default Lazyload
