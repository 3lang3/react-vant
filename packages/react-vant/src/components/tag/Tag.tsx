import React, { useMemo, MouseEvent, useRef } from 'react'
import clsx from 'clsx'
import { CSSTransition } from 'react-transition-group'
import { Cross } from '@react-vant/icons'
import { TagProps } from './PropsType'
import { createNamespace } from '../utils'
import { mergeProps } from '../utils/get-default-props'

const [bem] = createNamespace('tag')

const Tag: React.FC<TagProps> = p => {
  const props = mergeProps(p, {
    show: true,
    type: 'default',
  })
  const nodeRef = useRef(null)

  const onClose = (event: MouseEvent) => {
    event.stopPropagation()
    if (props.onClose) {
      props.onClose(event)
    }
  }

  const getStyle = useMemo(() => {
    if (props.plain) {
      return {
        color: props.textColor || props.color,
        borderColor: props.color,
      }
    }
    return {
      color: props.textColor,
      background: props.color,
    }
  }, [props.textColor, props.color, props.plain])

  const renderTag = () => {
    const { type, mark, plain, round, size, closeable } = props

    const classes: Record<string, unknown> = {
      mark,
      plain,
      round,
    }
    if (size) {
      classes[size] = size
    }

    const CloseIcon = closeable && (
      <Cross className={clsx(bem('close'))} onClick={onClose} />
    )

    return (
      <span
        ref={nodeRef}
        style={{ ...getStyle, ...props.style }}
        className={clsx(props.className, bem([classes, type]))}
        onClick={props.onClick}
      >
        {props.children}
        {CloseIcon}
      </span>
    )
  }

  return (
    <CSSTransition
      nodeRef={nodeRef}
      classNames='rv-fade'
      in={props.show}
      timeout={300}
      unmountOnExit
    >
      {renderTag()}
    </CSSTransition>
  )
}

export default Tag
