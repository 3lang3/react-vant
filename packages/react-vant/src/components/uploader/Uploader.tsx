import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import cls from 'clsx'
import { Photograph } from '@react-vant/icons'
// Utils
import { getSizeStyle, extend, createNamespace } from '../utils'
import { isOversize, filterFiles, readFileContent, isImageFile } from './utils'
// Types
import {
  UploaderInstance,
  UploaderProps,
  UploaderTask,
  UploaderValueItem,
} from './PropsType'
import { UploaderPreviewItem } from './UploaderPreviewItem'
// Components
import ImagePreview from '../image-preview'
import { useIsomorphicLayoutEffect, usePropsValue } from '../hooks'
import { mergeProps } from '../utils/get-default-props'

const [bem] = createNamespace('uploader')

const Uploader = forwardRef<UploaderInstance, UploaderProps>((p, ref) => {
  const props = mergeProps(p, {
    maxSize: Number.MAX_VALUE,
    maxCount: Number.MAX_VALUE,
    deletable: true,
    showUpload: true,
    previewImage: true,
    previewFullImage: true,
    name: '',
    accept: 'image/*',
    imageFit: 'cover',
    resultType: 'dataUrl',
    uploadIcon: <Photograph />,
  })
  const [value, setValue] = usePropsValue<UploaderValueItem[]>({
    ...props,
    defaultValue: props.defaultValue ?? [],
  })
  const imagePreview = useRef(null)
  const inputRef = useRef<HTMLInputElement>()

  const [tasks, setTasks] = useState<UploaderTask[]>([])

  const idCountRef = useRef(0)

  useIsomorphicLayoutEffect(() => {
    if (!Array.isArray(value)) return
    setTasks(prev =>
      prev.filter(task => {
        if (task.url === undefined) return true
        return !value.some(fileItem => fileItem.url === task.url)
      })
    )
  }, [value])

  const { maxCount, maxSize, resultType, beforeRead } = props

  async function processFile(file: File, fileList: File[]) {
    let transformedFile: File | false | undefined = file

    transformedFile = await beforeRead?.(file, fileList)

    return transformedFile
  }

  const onChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist()
    const { files: rawFiles } = event.target
    if (!rawFiles) return
    let files = [].slice.call(rawFiles) as File[]
    event.target.value = ''

    if (props.disabled) {
      return
    }
    if (props.beforeRead) {
      const postFiles = files.map(file => {
        return processFile(file, files)
      })

      await Promise.all(postFiles).then(filesList => {
        files = filesList.filter(Boolean) as File[]
      })
    }

    if (files.length === 0) {
      return
    }

    if (maxCount > 0) {
      const exceed = value.length + files.length - maxCount
      if (exceed > 0) {
        files = files.slice(0, files.length - exceed)
      }
      if (isOversize(files, maxSize)) {
        const result = filterFiles(files, maxSize)
        props.onOversize?.(result.invalid)
        return
      }
    }

    const newTasks = files.map(
      file =>
        ({
          id: idCountRef.current++,
          status: 'pending',
          file,
        } as UploaderTask)
    )

    setTasks(prev => [...prev, ...newTasks])

    await Promise.all(
      newTasks.map(async currentTask => {
        try {
          let result = {} as UploaderValueItem
          if (props.upload) {
            result = await props.upload(currentTask.file)
          } else {
            const dataUrl = (await readFileContent(
              currentTask.file,
              resultType
            )) as string
            result.url = dataUrl
            result.file = currentTask.file
            result.key = currentTask.id
          }
          setTasks(prev => {
            return prev.map(task => {
              if (task.id === currentTask.id) {
                return {
                  ...task,
                  url: result.url,
                }
              }
              return task
            })
          })
          setValue(prev => {
            const newVal = { ...result, file: currentTask.file }
            return [...prev, newVal]
          })
        } catch (e) {
          setTasks(prev => {
            return prev.map(task => {
              if (task.id === currentTask.id) {
                return {
                  ...task,
                  status: 'failed',
                }
              }
              return task
            })
          })
          throw e
        }
      })
    ).catch(error => console.error(error))
  }

  const previewImage = (item: UploaderValueItem) => {
    if (props.previewFullImage) {
      const imageFiles = value.filter(v =>
        isImageFile(v, props.isImageUrl?.(v))
      )
      const images = imageFiles
        .map(image => image.url || image.thumbnail)
        .filter(Boolean) as string[]
      imagePreview.current = ImagePreview.open(
        extend(
          {
            images,
            startPosition: imageFiles.indexOf(item),
            onClose: props.onClosePreview,
          },
          props.previewOptions
        )
      )
    }
  }

  const closeImagePreview = () => {
    if (imagePreview.current) {
      imagePreview.current.close()
    }
  }

  const renderPreviewItem = (item: UploaderValueItem, index: number) => {
    return (
      <UploaderPreviewItem
        file={item.file}
        key={item.key ?? `-${index}`}
        name={props.name}
        isImage={props.isImageUrl?.(item)}
        url={item.thumbnail ?? item.url}
        imageFit={props.imageFit}
        deletable={props.deletable}
        previewSize={props.previewSize}
        deleteRender={props.deleteRender}
        previewCoverRender={() => props.previewCoverRender?.(item)}
        onClick={() => props.onClickPreview?.(item, index)}
        onDelete={async () => {
          const canDelete = await props.onDelete?.(item)
          if (canDelete === false) return
          setValue(value.filter((_, i) => i !== index))
        }}
        onPreview={() => previewImage(item)}
      />
    )
  }

  const renderPreviewList = () => {
    if (props.previewImage) {
      return (
        <>
          {value.map(renderPreviewItem)}
          {tasks.map(task => {
            if (task.status === 'failed') return null
            return (
              <UploaderPreviewItem
                key={task.id}
                file={task.file}
                status={task.status}
                statusTextRender={props.statusTextRender}
                deletable={task.status !== 'pending'}
                deleteRender={props.deleteRender}
                imageFit={props.imageFit}
                onDelete={() => {
                  setTasks(tasks.filter(x => x.id !== task.id))
                }}
              />
            )
          })}
        </>
      )
    }
    return null
  }

  const renderUploadIcon = () => {
    if (props.uploadIcon) {
      return React.cloneElement(props.uploadIcon as React.ReactElement, {
        className: cls(bem('upload-icon')),
      })
    }

    return null
  }

  const renderUpload = () => {
    if (
      props.showUpload &&
      (maxCount === 0 || value.length + tasks.length < maxCount)
    ) {
      const Input = props.readOnly ? null : (
        <input
          ref={inputRef}
          type='file'
          className={cls(bem('input'))}
          accept={props.accept}
          capture={props.capture as unknown as boolean}
          multiple={props.multiple}
          disabled={props.disabled}
          onChange={onChange}
        />
      )

      if (props.children) {
        return (
          <div
            className={cls(bem('input-wrapper'))}
            onClick={props.onClickUpload}
          >
            {props.children}
            {Input}
          </div>
        )
      }

      return (
        <div
          className={cls(bem('upload', { readOnly: props.readOnly }))}
          style={getSizeStyle(props.previewSize)}
          onClick={props.onClickUpload}
        >
          {renderUploadIcon()}
          {props.uploadText && (
            <span className={cls(bem('upload-text'))}>{props.uploadText}</span>
          )}
          {Input}
        </div>
      )
    }
    return null
  }

  const chooseFile = () => {
    if (inputRef.current && !props.disabled) {
      inputRef.current.click()
    }
  }

  useImperativeHandle(ref, () => ({
    chooseFile,
    closeImagePreview,
  }))

  return (
    <div className={cls(bem())}>
      <div className={cls(bem('wrapper', { disabled: props.disabled }))}>
        {renderPreviewList()}
        {renderUpload()}
      </div>
    </div>
  )
})

export default Uploader
