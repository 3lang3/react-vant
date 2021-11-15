import React, { forwardRef, isValidElement, useContext, useImperativeHandle, useRef } from 'react';
import cls from 'clsx';
// Utils
import { isPromise, getSizeStyle, extend, pick } from '../utils';
import { isOversize, filterFiles, readFileContent, toArray, isImageFile } from './utils';
// Types
import { UploaderFileListItem, UploaderInstance, UploaderProps } from './PropsType';
import { UploaderPreviewItem } from './UploaderPreviewItem';
// Components
import ImagePreview from '../image-preview';
import Icon from '../icon';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

const Uploader = forwardRef<UploaderInstance, UploaderProps>((props, ref) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('uploader', prefixCls);

  const imagePreview = useRef(null);
  const inputRef = useRef<HTMLInputElement>();

  const getDetail = (index = props?.value.length || 0) => ({
    name: props.name,
    index,
  });

  const resetInput = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const onAfterRead = (items: UploaderFileListItem | UploaderFileListItem[]) => {
    resetInput();
    if (isOversize(items, props.maxSize)) {
      if (Array.isArray(items)) {
        const result = filterFiles(items, props.maxSize);
        items = result.valid;
        props.onOversize?.(result.invalid, getDetail());
        if (!items.length) {
          return;
        }
      } else {
        props.onOversize?.(items, getDetail());
        return;
      }
    }
    props.onChange?.([...props.value, ...toArray(items)]);
    if (props.afterRead) {
      props.afterRead(items, getDetail());
    }
  };

  const readFile = (files: File | File[]) => {
    const { maxCount, value, resultType } = props;

    if (Array.isArray(files)) {
      const remainCount = +maxCount - value.length;

      if (files.length > remainCount) {
        files = files.slice(0, remainCount);
      }

      Promise.all(files.map((file) => readFileContent(file, resultType))).then((contents) => {
        const fileList = (files as File[]).map((file, index) => {
          const result: UploaderFileListItem = {
            file,
            status: '',
            message: '',
          };

          if (contents[index]) {
            result.content = contents[index] as string;
          }

          return result;
        });
        onAfterRead(fileList);
      });
    } else {
      readFileContent(files, resultType).then((content) => {
        const result: UploaderFileListItem = {
          file: files as File,
          status: '',
          message: '',
        };
        if (content) {
          result.content = content;
        }

        onAfterRead(result);
      });
    }
  };

  const onChange = (event) => {
    const { files } = event.target as HTMLInputElement;

    if (props.disabled || !files || !files.length) {
      return;
    }

    const file = files.length === 1 ? files[0] : ([].slice.call(files) as File[]);

    if (props.beforeRead) {
      const response = props.beforeRead(file, getDetail()) as File | File[];
      if (!response) {
        resetInput();
        return;
      }

      if (isPromise(response)) {
        response
          .then((data) => {
            if (data) {
              readFile(data);
            } else {
              readFile(file);
            }
          })
          .catch(resetInput);
        return;
      }
    }
    readFile(file);
  };
  const onClosePreview = () => {
    if (props.onClosePreview) {
      props.onClosePreview();
    }
  };
  const previewImage = (item: UploaderFileListItem) => {
    if (props.previewFullImage) {
      const imageFiles = props.value.filter(isImageFile);
      const images = imageFiles
        .map((image) => image.content || image.url)
        .filter(Boolean) as string[];
      imagePreview.current = ImagePreview.open(
        extend(
          {
            images,
            startPosition: imageFiles.indexOf(item),
            onClose: onClosePreview,
          },
          props.previewOptions,
        ),
      );
    }
  };

  const closeImagePreview = () => {
    if (imagePreview.current) {
      imagePreview.current.close();
    }
  };

  const deleteFile = (item: UploaderFileListItem, index: number) => {
    const fileList = props.value.slice(0);
    fileList.splice(index, 1);

    props.onChange?.(fileList);
    props.onDelete?.(item, getDetail(index));
  };

  const renderPreviewItem = (item: UploaderFileListItem, index: number) => {
    const needPickData = ['imageFit', 'deletable', 'previewSize', 'beforeDelete'] as const;

    const previewData = extend(pick(props, needPickData), pick(item, needPickData, true));

    return (
      <UploaderPreviewItem
        item={item}
        key={index}
        index={index}
        previewCoverRender={props.previewCoverRender}
        onClick={() => {
          if (props.onClickPreview) props.onClickPreview(item, getDetail(index));
        }}
        onDelete={() => deleteFile(item, index)}
        onPreview={() => previewImage(item)}
        {...pick(props, ['name'])}
        {...previewData}
      />
    );
  };

  const renderPreviewList = () => {
    if (props.previewImage) {
      return props.value.map(renderPreviewItem);
    }
    return null;
  };

  const onClickUpload = (event) => {
    if (props.onClickUpload) props.onClickUpload(event);
  };

  const renderUploadIcon = () => {
    if (typeof props.uploadIcon === 'string') {
      return <Icon name={props.uploadIcon} className={cls(bem('upload-icon'))} />;
    }

    if (isValidElement(props.uploadIcon)) {
      return props.uploadIcon;
    }

    return null;
  };

  const renderUpload = () => {
    if (props.value.length >= props.maxCount || !props.showUpload) {
      return null;
    }

    const Input = props.readonly ? null : (
      <input
        ref={inputRef}
        type="file"
        className={cls(bem('input'))}
        accept={props.accept}
        capture={props.capture as unknown as boolean}
        multiple={props.multiple}
        disabled={props.disabled}
        onChange={onChange}
      />
    );

    if (props.children) {
      return (
        <div className={cls(bem('input-wrapper'))} onClick={onClickUpload}>
          {props.children}
          {Input}
        </div>
      );
    }

    return (
      <div
        className={cls(bem('upload', { readonly: props.readonly }))}
        style={getSizeStyle(props.previewSize)}
        onClick={onClickUpload}
      >
        {renderUploadIcon()}
        {props.uploadText && <span className={cls(bem('upload-text'))}>{props.uploadText}</span>}
        {Input}
      </div>
    );
  };

  const chooseFile = () => {
    if (inputRef.current && !props.disabled) {
      inputRef.current.click();
    }
  };

  useImperativeHandle(ref, () => ({
    chooseFile,
    closeImagePreview,
  }));

  return (
    <div className={cls(bem())}>
      <div className={cls(bem('wrapper', { disabled: props.disabled }))}>
        {renderPreviewList()}
        {renderUpload()}
      </div>
    </div>
  );
});

Uploader.defaultProps = {
  maxSize: Number.MAX_VALUE,
  maxCount: Number.MAX_VALUE,
  deletable: true,
  showUpload: true,
  previewImage: true,
  previewFullImage: true,
  name: '',
  accept: 'image/*',
  value: [],
  imageFit: 'cover',
  resultType: 'dataUrl',
  uploadIcon: 'photograph',
};

export default Uploader;
