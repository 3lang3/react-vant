import React, {
  useMemo,
  useRef,
  useContext,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react'
import clsx from 'clsx'

import Cell from '../cell'
import CollapseContext from './CollapseContext'
import useLazyRender from '../hooks/use-lazy-render'

import { CollapseItemInstance, CollapseItemProps } from './PropsType'
import { raf, doubleRaf } from '../utils/raf'
import { useUpdateEffect } from '../hooks'
import { createNamespace } from '../utils'
import { mergeProps } from '../utils/get-default-props'

const [bem] = createNamespace('collapse-item')

const CollapseItem = forwardRef<CollapseItemInstance, CollapseItemProps>(
  ({ className, style, ...p }, ref) => {
    const props = mergeProps(p, {
      isLink: true,
      border: true,
    })
    const { index } = props
    const parent = useContext(CollapseContext)

    const wrapperRef = useRef(null)
    const contentRef = useRef(null)

    const name = useMemo(() => props.name ?? index, [index, props.name])
    const expanded = useMemo(() => {
      if (parent) {
        return parent.isExpanded(name)
      }
      return null
    }, [parent, name])

    const [show, setShow] = useState(() => expanded)
    const lazyRender = useLazyRender(show)

    const onTransitionEnd = () => {
      if (!expanded) {
        setShow(false)
      } else {
        wrapperRef.current.style.height = ''
      }
    }

    useUpdateEffect(() => {
      if (expanded) {
        setShow(true)
      }

      raf(() => {
        if (!contentRef.current || !wrapperRef.current) {
          return
        }

        const { offsetHeight } = contentRef.current
        if (offsetHeight) {
          const contentHeight = `${offsetHeight}px`
          wrapperRef.current.style.height = expanded ? 0 : contentHeight

          // use double raf to ensure animation can start
          doubleRaf(() => {
            wrapperRef.current.style.height = expanded ? contentHeight : 0
          })
        } else {
          onTransitionEnd()
        }
      })
    }, [expanded])

    const toggle = (value = !expanded) => {
      parent.toggle(name, value)
    }

    const onClickTitle = () => {
      if (!props.disabled && !props.readOnly) {
        toggle()
      }
    }

    const renderTitle = () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { border, disabled, children, readOnly, ...others } = props

      return (
        <Cell
          className={clsx(
            bem('title', {
              disabled,
              expanded,
              borderless: !border,
            })
          )}
          aria-expanded={String(expanded)}
          onClick={onClickTitle}
          {...others}
          isLink={readOnly ? false : others.isLink}
          clickable={disabled || readOnly ? false : others.clickable}
        />
      )
    }

    const renderContent = lazyRender(() => (
      <div
        ref={wrapperRef}
        className={clsx(bem('wrapper'))}
        onTransitionEnd={onTransitionEnd}
      >
        <div ref={contentRef} className={clsx(bem('content'))}>
          {props.children}
        </div>
      </div>
    ))

    useImperativeHandle(ref, () => ({
      toggle,
    }))

    return (
      <div
        style={style}
        className={clsx(className, bem({ border: index && props.border }))}
      >
        {renderTitle()}
        {renderContent()}
      </div>
    )
  }
)

export default CollapseItem
