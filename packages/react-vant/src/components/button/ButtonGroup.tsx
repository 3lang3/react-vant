import React from 'react'
import clsx from 'clsx'
import { ButtonGroupProps } from './PropsType'
import ButtonContext from './ButtonContext'
import { SHADOW } from '../utils/constant'
import { createNamespace } from '../utils'

const [bem] = createNamespace('button-group')

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  className,
  style,
  children,
  onClick,
  ...props
}) => {
  const internalClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (props.disabled) return
    onClick?.(e)
  }

  return (
    <div
      onClick={internalClick}
      style={style}
      className={clsx(
        className,
        bem([
          props.type,
          {
            round: props.round,
            plain: props.plain,
            disabled: props.disabled,
          },
        ]),
        props.shadow && `${SHADOW}--${+props.shadow}`
      )}
    >
      <ButtonContext.Provider value={{ parent: props }}>
        {children}
      </ButtonContext.Provider>
    </div>
  )
}

export default ButtonGroup
