import React, { useMemo } from 'react'
import clsx from 'clsx'
import { SpaceProps } from './PropsType'
import { createNamespace } from '../utils'

const formatGap = (gap: string | number) =>
  typeof gap === 'number' ? `${gap}px` : gap

const [bem] = createNamespace('space')

const Space: React.FC<SpaceProps> = props => {
  const { wrap, block, direction = 'horizontal', align, justify } = props
  const style = React.useMemo(() => {
    if (props.gap !== undefined && props.gap !== null) {
      if (Array.isArray(props.gap)) {
        const [gapV, gapH] = props.gap
        return {
          ...props.style,
          '--gap': `${formatGap(gapV)} ${formatGap(gapH)}`,
        }
      }
      return {
        ...props.style,
        '--gap': formatGap(props.gap as string | number),
      }
    }
    return props.style
  }, [props.style, props.gap])

  const childList = useMemo(
    () =>
      React.Children.map(props.children, c => c).filter(
        c => c !== null && c !== undefined
      ),
    [props.children]
  )

  return (
    <div
      className={clsx(
        props.className,
        bem({
          wrap,
          block,
          [`${direction}`]: !!direction,
          [`align-${align}`]: !!align,
          [`justify-${justify}`]: !!justify,
        })
      )}
      style={style}
      onClick={props.onClick}
    >
      {childList.map((child, idx) => {
        return (
          <React.Fragment key={idx}>
            <div className={clsx(bem('item'))}>{child}</div>
            {!!props.divider && idx !== childList.length - 1 && (
              <div className={clsx(bem('item-divider'))}>{props.divider}</div>
            )}
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default Space
