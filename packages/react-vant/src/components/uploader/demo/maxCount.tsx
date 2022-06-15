import React, { useState } from 'react';
import { Uploader } from 'react-vant';
import type { UploaderFileListItem } from 'react-vant';
import { previewData } from './data';

export default () => {
  const [value, setValue] = useState<UploaderFileListItem[]>([previewData[0]]);

  const afterRead = (file, { index }) => {
    file.status = 'uploading';
    file.message = '上传中...';
    const newValue = [...value];
    newValue[index] = file;
    setValue(newValue);

    setTimeout(() => {
      file.status = 'failed';
      file.message = '上传失败';
      file.content = 'xxxx.jpg';

      setValue((v) => {
        const nv = [...v];
        nv[index] = file;
        return nv;
      });
    }, 1000);
  };

  return <Uploader multiple maxCount={4} value={value} afterRead={afterRead} onChange={setValue} />;
};
