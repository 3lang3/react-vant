import React, { isValidElement } from 'react'
import clsx from 'clsx'
import { EmptyProps } from './PropsType'
import { createNamespace, getSizeStyle } from '../utils'
import { Network } from './Network'

const PRESET_IMAGES = ['error', 'search', 'default']
const [bem] = createNamespace('empty')

const Empty: React.FC<EmptyProps> = props => {
  const renderImage = () => {
    let { image } = props

    if (isValidElement(image)) {
      return image
    }

    if (image === 'network') {
      return Network
    }

    if (PRESET_IMAGES.includes(image as string)) {
      image = `https://img.yzcdn.cn/vant/empty-image-${image}.png`
    }

    return <img src={image as string} alt='' />
  }

  const renderDescription = () => {
    if (props.description) {
      return <div className={clsx(bem('description'))}>{props.description}</div>
    }
    return null
  }

  const renderBottom = () => {
    if (props.children) {
      return <div className={clsx(bem('bottom'))}>{props.children}</div>
    }
    return null
  }

  return (
    <div className={clsx(props.className, bem())} style={props.style}>
      <div className={clsx(bem('image'))} style={getSizeStyle(props.imageSize)}>
        {renderImage()}
      </div>
      {renderDescription()}
      {renderBottom()}
    </div>
  )
}

Empty.defaultProps = {
  image: 'default',
}

export default Empty
