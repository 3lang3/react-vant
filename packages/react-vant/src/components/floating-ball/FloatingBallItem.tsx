import React from 'react'
import clsx from 'clsx'
import FloatingBallContext from './FloatingBallContext'
import { FloatingBallItemProps } from './PropsType'

export default (props: FloatingBallItemProps) => {
  const parent = React.useContext(FloatingBallContext)
  const handleItemClick = () => {
    parent?.close()
  }

  return (
    <div
      className={clsx('rv-floating-ball__menu__item')}
      onClick={handleItemClick}
    >
      {props.children}
    </div>
  )
}
