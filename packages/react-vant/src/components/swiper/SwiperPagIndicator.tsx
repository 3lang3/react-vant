import React from 'react'
import clsx from 'clsx'
import { PageIndicatorProps } from './PropsType'
import { createNamespace } from '../utils'

const [bem] = createNamespace('indicator')

const SwiperPagIndicator = React.memo<PageIndicatorProps>(
  ({ vertical, ...props }) => {
    const dots: React.ReactElement[] = []
    for (let i = 0; i < props.total; i++) {
      dots.push(
        <div
          key={i}
          className={clsx(
            bem('dot', {
              active: props.current === i,
            })
          )}
        />
      )
    }

    return (
      <div
        className={clsx(props.className, bem({ vertical }))}
        style={props.style}
      >
        {dots}
      </div>
    )
  }
)

export default SwiperPagIndicator
