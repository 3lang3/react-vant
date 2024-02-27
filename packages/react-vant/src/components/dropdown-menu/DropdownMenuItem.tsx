import React, {
  CSSProperties,
  forwardRef,
  useImperativeHandle,
  useContext,
} from 'react'
import { Success } from '@react-vant/icons'
import clsx from 'clsx'
import Cell from '../cell'
import { useSetState } from '../hooks'
import Popup from '../popup'
import { createNamespace, getZIndexStyle, pick } from '../utils'
import { renderToContainer } from '../utils/dom/renderToContainer'
import DropdownMenuContext from './DropdownMenuContext'
import {
  DropdownMenuItemProps,
  DropdownMenuItemOption,
  DropdownItemInstance,
} from './PropsType'

const inheritPropsKey = [
  'overlay',
  'overlayClass',
  'overlayStyle',
  'disabled',
  'placeholder',
  'onOpen',
  'onClosed',
  'onOpened',
  'teleport',
  'closeOnClickOverlay',
] as const

function inheritProps(parentProps, props) {
  return { ...parentProps, ...props }
}

const [bem] = createNamespace('dropdown-item')

const DropdownMenuItem = forwardRef<
  DropdownItemInstance,
  DropdownMenuItemProps
>(({ options = [], placeholder = '请选择', ...props }, ref) => {
  const [state, setState] = useSetState({
    transition: true,
    showWrapper: false,
  })
  const parent = useContext(DropdownMenuContext)
  const currentValue = parent.value?.[props.name]

  const onClosed = () => {
    setState({ showWrapper: false })
    ;(props.onClosed ?? parent.props.onClosed)?.()
  }

  const onClickWrapper = event => {
    // prevent being identified as clicking outside and closed when using teleport
    if (props.teleport) {
      event.stopPropagation()
    }
  }

  const onClose = () => {
    parent.close()
    ;(props.onClose ?? parent.props.onClose)?.()
  }

  const toggle = (
    show = !props.showPopup,
    options: { immediate?: boolean } = {}
  ) => {
    if (show === props.showPopup) {
      return
    }
    const newState = {} as typeof state
    newState.transition = !options.immediate

    if (show) {
      newState.showWrapper = true
    } else {
      onClose()
    }
    setState(newState)
  }

  const renderTitle = itemValue => {
    if (props.title) {
      return props.title
    }
    const match = options.find(option => option.value === itemValue)
    return match ? match.text : placeholder
  }

  const renderOption = (option: DropdownMenuItemOption) => {
    const { activeColor, activeIcon } = parent.props
    const active = option.value === currentValue

    const onClick = () => {
      if (option.value !== currentValue) {
        parent.onChange({ [props.name]: option.value })
      }
      onClose()
    }

    return (
      <Cell
        clickable
        key={option.value}
        icon={option.icon}
        title={option.text}
        className={clsx(bem('option', { active }))}
        style={{ color: active ? activeColor : '' }}
        onClick={onClick}
      >
        {active &&
          (activeIcon || (
            <Success className={clsx(bem('icon'))} color={activeColor} />
          ))}
      </Cell>
    )
  }

  const renderContent = () => {
    const { offset } = props
    const { zIndex, overlayStyle, duration, direction } = parent.props

    const style: CSSProperties = getZIndexStyle(zIndex)
    if (direction === 'down') {
      style.top = `${offset}px`
    } else {
      style.bottom = `${offset}px`
    }

    const attrs = pick(inheritProps(parent.props, props), inheritPropsKey)

    return (
      <div
        style={{ ...style, display: state.showWrapper ? 'block' : 'none' }}
        className={clsx(bem([direction]))}
        onClick={onClickWrapper}
      >
        <Popup
          {...attrs}
          visible={props.showPopup}
          className={clsx(bem('content'))}
          position={direction === 'down' ? 'top' : 'bottom'}
          duration={state.transition ? +duration : 0}
          overlayStyle={{ position: 'absolute', ...overlayStyle }}
          onClose={onClose}
          onClosed={onClosed}
        >
          {options?.map(renderOption)}
          {props.children}
        </Popup>
      </div>
    )
  }

  useImperativeHandle(ref, () => ({
    toggle,
    renderTitle,
    state,
    titleClass: props.titleClass,
    disabled: props.disabled,
    name: props.name,
    options,
  }))

  if (props.teleport) return renderToContainer(props.teleport, renderContent())
  return renderContent()
})

export default DropdownMenuItem
