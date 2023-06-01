import clsx from 'clsx'
import React, { FC, useMemo, useRef, useState } from 'react'
import { useIsomorphicLayoutEffect } from '../hooks'
import { useResizeEffect } from '../hooks/use-resize-effect'
import { withStopPropagation } from '../utils/dom/event'
import { mergeProps } from '../utils/get-default-props'
import { EllipsisProps } from './PropsType'

type EllipsisedValue = {
  leading?: string
  tailing?: string
}

const Ellipsis: FC<EllipsisProps> = p => {
  const props = mergeProps(p, {
    rows: 1,
    expandText: '',
    collapseText: '',
    suffixText: '',
    symbol: '...',
    stopPropagationForActionButtons: [],
  })
  const rootRef = useRef<HTMLDivElement>(null)

  const [ellipsised, setEllipsised] = useState<EllipsisedValue>({})
  const [expanded, setExpanded] = useState(false)
  const [exceeded, setExceeded] = useState(false)

  const suffixStr = useMemo(() => {
    if (props.suffixText) return props.suffixText
    if (props.suffixCount > 0) {
      return props.children.slice(-props.suffixCount).trim()
    }
    return ''
  }, [props.suffixCount, props.suffixText])

  function calcEllipsised() {
    const root = rootRef.current
    if (!root) return
    const originStyle = window.getComputedStyle(root)
    const container = document.createElement('div')
    const styleNames: string[] = Array.prototype.slice.apply(originStyle)
    styleNames.forEach(name => {
      container.style.setProperty(name, originStyle.getPropertyValue(name))
    })
    container.style.position = 'fixed'
    container.style.left = '999999px'
    container.style.top = '999999px'
    container.style.zIndex = '-1000'
    container.style.height = 'auto'
    container.style.minHeight = 'auto'
    container.style.maxHeight = 'auto'
    container.style.textOverflow = 'clip'
    container.style.whiteSpace = 'normal'
    container.style.webkitLineClamp = 'unset'
    container.style.display = 'block'

    const lineHeight = pxToNumber(originStyle.lineHeight)
    const maxHeight = Math.floor(
      lineHeight * (props.rows + 0.5) +
        pxToNumber(originStyle.paddingTop) +
        pxToNumber(originStyle.paddingBottom)
    )

    container.innerHTML = props.children
    document.body.appendChild(container)

    if (container.offsetHeight <= maxHeight) {
      setExceeded(false)
    } else {
      setExceeded(true)
      const end = props.children.length
      const actionText = expanded ? props.collapseText : props.expandText
      // eslint-disable-next-line no-inner-declarations
      function check(left: number, right: number): EllipsisedValue {
        if (right - left <= 1) {
          return {
            leading: props.children.slice(0, left) + props.symbol,
          }
        }
        const middle = Math.round((left + right) / 2)

        container.innerHTML =
          props.children.slice(0, middle) +
          props.symbol +
          suffixStr +
          actionText

        if (container.offsetHeight <= maxHeight) {
          return check(middle, right)
        }
        return check(left, middle)
      }

      const ellipsised = check(0, end)
      setEllipsised(ellipsised)
    }
    document.body.removeChild(container)
  }

  useResizeEffect(calcEllipsised, rootRef)
  useIsomorphicLayoutEffect(() => {
    calcEllipsised()
  }, [
    props.children,
    props.rows,
    suffixStr,
    props.expandText,
    props.collapseText,
  ])

  const onExpandClick = (isExpend: boolean) => {
    props.onExpend?.(isExpend)
    setExpanded(isExpend)
  }
  const expandActionElement =
    exceeded && props.expandText
      ? withStopPropagation(
          props.stopPropagationForActionButtons,
          <a
            onClick={() => {
              onExpandClick(true)
            }}
          >
            {props.expandText}
          </a>
        )
      : null

  const collapseActionElement =
    exceeded && props.expandText
      ? withStopPropagation(
          props.stopPropagationForActionButtons,
          <a
            onClick={() => {
              onExpandClick(false)
            }}
          >
            {props.collapseText}
          </a>
        )
      : null

  const renderContent = () => {
    if (!exceeded) {
      return props.children
    }
    if (expanded) {
      return (
        <>
          {props.children}
          {collapseActionElement}
        </>
      )
    } else {
      return (
        <>
          {ellipsised.leading}
          {suffixStr}
          {expandActionElement}
        </>
      )
    }
  }
  return (
    <div
      ref={rootRef}
      className={clsx('rv-typography__ellipsis', props.className)}
      style={props.style}
    >
      {renderContent()}
    </div>
  )
}

function pxToNumber(value: string | null): number {
  if (!value) return 0
  const match = value.match(/^\d*(\.\d*)?/)
  return match ? Number(match[0]) : 0
}

export default Ellipsis
