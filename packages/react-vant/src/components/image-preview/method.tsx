import React, { useEffect, useState } from 'react'
import { Clear } from '@react-vant/icons'
import { noop } from '../utils'
import { CloseParams, ImagePreviewProps, ImagePreviewStatic } from './PropsType'
import BaseImagePreview from './ImagePreview'
import { resolveContainer } from '../utils/dom/getContainer'
import { render, unmount } from '../utils/dom/render'
import canUseDom from '../utils/dom/canUseDom'

const defaultConfig: ImagePreviewProps = {
  images: [],
  className: '',
  showIndex: true,
  closeable: false,
  closeIcon: <Clear />,
  startPosition: 0,
  swipeDuration: 300,
  closeOnPopstate: true,
  closeIconPosition: 'top-right',
}

// 可返回用于销毁此弹窗的方法
const open = (props: ImagePreviewProps) => {
  if (!canUseDom()) return null
  const { onClose = noop, beforeClose, ...restProps } = props

  const userContainer = resolveContainer(props.teleport)
  const container = document.createElement('div')
  userContainer.appendChild(container)
  let destroy = noop as (p?: CloseParams) => void

  const TempDialog = () => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
      setVisible(true)
    }, [])

    destroy = (p: CloseParams) => {
      setVisible(false)
      if (onClose) onClose(p)
    }

    const _afterClose = async p => {
      if ((await beforeClose?.(0)) !== false) {
        destroy(p)

        const unmountResult = unmount(container)
        if (unmountResult && container.parentNode) {
          container.parentNode.removeChild(container)
        }
        return true
      }
      return false
    }

    return (
      <BaseImagePreview
        {...defaultConfig}
        {...restProps}
        visible={visible}
        teleport={() => container}
        onClose={destroy}
        beforeClose={_afterClose}
      />
    )
  }
  render(<TempDialog />, container)

  return destroy
}

const ImagePreview = Object.assign(BaseImagePreview, {
  open,
}) as ImagePreviewStatic

export default ImagePreview
