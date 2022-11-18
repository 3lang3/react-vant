import React, { useMemo } from 'react'
import cls from 'clsx'
import { Close, Cross, Description } from '@react-vant/icons'
// Utils
import { isImageFile } from './utils'
import { getSizeStyle, createNamespace } from '../utils'
// Components
import Image from '../image'
import Loading from '../loading'
import { UploaderPrviewItemProps } from './PropsType'

const [bem] = createNamespace('uploader')

export const UploaderPreviewItem: React.FC<UploaderPrviewItemProps> = props => {
  const { onPreview, statusTextRender, status, file, url } = props

  const isImage = useMemo(
    () => props.isImage || isImageFile({ file, url }),
    [file, url, props.isImage]
  )
  const imageSrc = useMemo(() => {
    if (isImage) {
      return url ? url : URL.createObjectURL(file)
    }
    return ''
  }, [isImage, file, url])

  const renderMask = () => {
    if (status === 'failed' || status === 'pending') {
      const MaskIcon =
        status === 'failed' ? (
          <Close className={cls(bem('mask-icon'))} />
        ) : (
          <Loading className={cls(bem('loading'))} />
        )

      return (
        <div className={cls(bem('mask'))}>
          {MaskIcon}
          {statusTextRender && (
            <div className={cls(bem('mask-message'))}>
              {statusTextRender(status)}
            </div>
          )}
        </div>
      )
    }
    return null
  }

  const renderDeleteIcon = () => {
    if (props.deletable) {
      return props.deleteRender ? (
        props.deleteRender(props.onDelete)
      ) : (
        <div className={cls(bem('preview-delete'))} onClick={props.onDelete}>
          <Cross className={cls(bem('preview-delete-icon'))} />
        </div>
      )
    }
    return null
  }

  const renderCover = () => props.previewCoverRender?.()

  const renderPreview = () => {
    if (isImage) {
      return (
        <Image
          fit={props.imageFit}
          src={imageSrc}
          className={cls(bem('preview-image'))}
          width={props.previewSize}
          height={props.previewSize}
          onClick={onPreview}
        >
          {renderCover()}
        </Image>
      )
    }

    return (
      <div className={cls(bem('file'))} style={getSizeStyle(props.previewSize)}>
        <Description className={cls(bem('file-icon'))} />
        <div className={cls(bem('file-name'), 'rv-ellipsis')}>
          {file ? file.name : url}
        </div>
        {renderCover()}
      </div>
    )
  }

  return (
    <div className={cls(bem('preview'))} onClick={props.onClick}>
      {renderPreview()}
      {renderMask()}
      {renderDeleteIcon()}
    </div>
  )
}
