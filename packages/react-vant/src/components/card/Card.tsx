import React from 'react'
import cls from 'clsx'
import {
  CardProps,
  CardHeaderProps,
  CardBodyProps,
  CardFooterProps,
  CardCoverProps,
} from './PropsType'
import { BORDER_BOTTOM, BORDER_TOP } from '../utils/constant'
import { createNamespace } from '../utils'

export const CardHeader: React.FC<CardHeaderProps> = props => {
  const [bem] = createNamespace('card-header')
  return (
    <div
      className={cls(props.className, bem(), { [BORDER_BOTTOM]: props.border })}
      style={props.style}
      onClick={props.onClick}
    >
      <div className={cls(bem('content'))}>{props.children}</div>
      {props.extra && <div className={cls(bem('extra'))}>{props.extra}</div>}
    </div>
  )
}

export const CardBody: React.FC<CardBodyProps> = props => {
  const [bem] = createNamespace('card-body')
  return (
    <div
      className={cls(props.className, bem())}
      style={props.style}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  )
}

export const CardFooter: React.FC<CardFooterProps> = props => {
  const [bem] = createNamespace('card-footer')
  return (
    <div
      className={cls(props.className, bem({ compact: props.compact }), {
        [BORDER_TOP]: props.border,
      })}
      style={props.style}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  )
}

export const CardCover: React.FC<CardCoverProps> = props => {
  const [bem] = createNamespace('card-cover')
  return (
    <div
      className={cls(props.className, bem())}
      style={props.style}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  )
}

const Card: React.FC<CardProps> = props => {
  const [bem] = createNamespace('card')

  const { className, style, round, border, children } = props

  return (
    <div
      className={cls(bem({ round, border }), className)}
      style={style}
      onClick={props.onClick}
    >
      {children}
    </div>
  )
}

export default Card
