/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { Toast, Button } from 'react-vant';
import { components } from 'site-mobile-demo';
import Uploader, { UploaderFileListItem } from '..';
import './style.less';

const demoUploadValue = [
  {
    url: 'https://img.yzcdn.cn/vant/sand.jpg',
    status: 'done',
    name: '图片名称',
  },
  {
    url: 'https://img.yzcdn.cn/vant/tree.jpg',
    status: 'done',
    name: '图片名称',
  },
];

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const [demo, setDemo] = useState<UploaderFileListItem[]>([
    {
      url: 'https://img.yzcdn.cn/vant/leaf.jpg',
      status: 'uploading',
      message: '上传中...',
    },
    {
      url: 'https://img.yzcdn.cn/vant/tree.jpg',
      status: 'failed',
      message: '上传失败',
    },
  ]);
  const [beforeReadDemo, setBeforeReadDemo] = useState<UploaderFileListItem[]>([]);
  const [maxCountDemo, setMaxCountDemo] = useState<UploaderFileListItem[]>([demoUploadValue[0]]);
  const [maxSizeDemo, setMaxSizeDemo] = useState<UploaderFileListItem[]>([demoUploadValue[0]]);
  const [previewDemo, setPreviewDemo] = useState<UploaderFileListItem[]>(demoUploadValue);
  const [customPreview, setCustomPreview] = useState<UploaderFileListItem[]>([demoUploadValue[1]]);

  const afterRead = (file, { index }) => {
    file.status = 'uploading';
    file.message = '上传中...';
    const newValue = [...demo];
    newValue[index] = file;
    setDemo(newValue);

    setTimeout(() => {
      file.status = 'failed';
      file.message = '上传失败';
      file.content = 'xxxx.jpg';

      setDemo((v) => {
        const nv = [...v];
        nv[index] = file;
        return nv;
      });
    }, 1000);
  };

  // return Promise
  const asyncBeforeRead = async (file: File | File[]) => {
    // if multiple is true, `file` will be array type
    const files = Array.isArray(file) ? file : [file];
    return new Promise<File[]>((resolve) => {
      // filter invalid file
      const passFiles = files.filter((f) => {
        if (f.type !== 'image/jpeg') {
          Toast.info(`${f.name}格式错误，请上传 jpg 格式图片`);
          return false;
        }
        return true;
      });
      resolve(passFiles);
    });
  };

  const beforeRead = (file) => {
    if (file.type !== 'image/jpeg') {
      Toast('请上传 jpg 格式图片');
      return false;
    }
    return true;
  };

  const onOversize = (file) => {
    console.log(file);
    Toast('文件大小不能超过 5kb');
  };

  return (
    <DemoSection className="demo-uploadeer">
      <DemoBlock title="基础用法">
        <Uploader afterRead={(file) => console.log(file)} />
      </DemoBlock>
      <DemoBlock title="文件预览">
        <Uploader
          onClickPreview={(items, detail) => {
            console.log(items, detail);
          }}
          onClickUpload={() => {
            console.log('click upload tigger');
          }}
          value={previewDemo}
          onChange={setPreviewDemo}
        />
      </DemoBlock>
      <DemoBlock title="上传状态">
        <Uploader multiple value={demo} afterRead={afterRead} onChange={(v) => setDemo(v)} />
      </DemoBlock>
      <DemoBlock title="限制上传数量">
        <Uploader
          multiple
          maxCount={4}
          value={maxCountDemo}
          afterRead={afterRead}
          onChange={setMaxCountDemo}
        />
      </DemoBlock>
      <DemoBlock title="限制文件大小">
        <Uploader
          multiple
          value={maxSizeDemo}
          onChange={setMaxSizeDemo}
          maxSize={5 * 1024}
          onOversize={onOversize}
        />
      </DemoBlock>
      <DemoBlock title="自定义上传样式">
        <Uploader style={{ width: '100%' }}>
          <Button block type="primary" round>
            上传文件
          </Button>
        </Uploader>
      </DemoBlock>
      <DemoBlock title="自定义预览样式">
        <Uploader
          value={customPreview}
          onChange={setCustomPreview}
          previewCoverRender={(item) => {
            return <div className="preview-cover">{item.name}</div>;
          }}
        />
      </DemoBlock>
      <DemoBlock title="上传前置处理">
        <Uploader
          multiple
          value={beforeReadDemo}
          onChange={setBeforeReadDemo}
          beforeRead={asyncBeforeRead}
        />
      </DemoBlock>
      <DemoBlock title="禁用文件上传">
        <Uploader disabled />
      </DemoBlock>
    </DemoSection>
  );
};
