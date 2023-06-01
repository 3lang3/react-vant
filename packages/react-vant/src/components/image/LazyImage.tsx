import React from 'react'
import clsx from 'clsx'
import { Photo, PhotoFail } from '@react-vant/icons'
import Image from './Image'
import Lazyload from '../lazyload'
import { LazyImageProps } from './PropsType'
import { COMPONENT_TYPE_KEY } from '../utils/constant'
import { BEM } from '../utils/create/bem'
import { createNamespace } from '../utils'
import { mergeProps } from '../utils/get-default-props'

export const getLazyImagePlaceholder = (bem: BEM): React.ReactNode => (
  <div className={clsx(bem('loading'))}>
    <Photo className={clsx(bem('loading-icon'))} />
  </div>
)

const [bem] = createNamespace('image')

const LazyImage: React.FC<LazyImageProps> = p => {
  const props = mergeProps(p, {
    fit: 'fill',
    errorIcon: <PhotoFail />,
    loadingIcon: <Photo />,
    showError: true,
    showLoading: true,
    block: true,
  })
  const { lazyload, ...imageProps } = props
  const renderPlaceholder = () => {
    if (typeof lazyload === 'boolean') return getLazyImagePlaceholder(bem)
    return lazyload.placeholder || getLazyImagePlaceholder(bem)
  }

  if (lazyload) {
    const { className, style, height, width } = imageProps
    const attrs = {
      className: clsx(className, bem({ block: imageProps.block })),
      style: { ...style, height, width },
    }
    return (
      <Lazyload {...attrs} placeholder={renderPlaceholder()}>
        <Image {...imageProps} />
      </Lazyload>
    )
  }
  return <Image {...imageProps} />
}

export const IMAGE_KEY = Symbol('image')
const ImageNamespace = Object.assign(LazyImage, {
  [COMPONENT_TYPE_KEY]: IMAGE_KEY,
})

export default ImageNamespace
