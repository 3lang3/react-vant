/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { Uploader, Toast, Button } from 'react-vant';
import { components } from 'site-mobile-demo';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const [demo, setDemo] = useState([
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
  const [demo1, setDemo1] = useState([
    {
      url: 'https://img.yzcdn.cn/vant/sand.jpg',
      status: 'done',
    },
  ]);
  const [demo2, setDemo2] = useState([
    {
      url: 'https://img.yzcdn.cn/vant/sand.jpg',
      status: 'done',
    },
  ]);

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

  const beforeRead = (file) => {
    if (file.type !== 'image/jpeg') {
      Toast('请上传 jpg 格式图片');
      return false;
    }
    return true;
  };

  // 返回 Promise
  const asyncBeforeRead = (file) => {
    return new Promise((resolve, reject) => {
      if (file.type !== 'image/jpeg') {
        Toast('请上传 jpg 格式图片');
        reject();
      } else {
        resolve(file);
      }
    });
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
      <DemoBlock title="上传状态">
        <Uploader multiple value={demo} afterRead={afterRead} onChange={(v) => setDemo(v)} />
      </DemoBlock>
      <DemoBlock title="限制上传数量">
        <Uploader
          multiple
          maxCount={2}
          value={demo2}
          afterRead={afterRead}
          onChange={(v) => setDemo2(v)}
        />
      </DemoBlock>
      <DemoBlock title="限制文件大小">
        <Uploader multiple value={demo2} maxSize={5 * 1024} onOversize={onOversize} />
      </DemoBlock>
      <DemoBlock title="自定义上传样式">
        <Uploader style={{ width: '100%' }}>
          <Button block type="primary" round>
            上传文件
          </Button>
        </Uploader>
      </DemoBlock>
      <DemoBlock title="上传前置处理">
        <Uploader
          value={demo1}
          onChange={(v) => setDemo1(v)}
          multiple
          beforeRead={asyncBeforeRead}
        />
      </DemoBlock>
    </DemoSection>
  );
};
