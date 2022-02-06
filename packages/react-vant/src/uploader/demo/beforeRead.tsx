import React, { useState } from 'react';
import { Toast, Uploader } from 'react-vant';
import type { UploaderFileListItem } from 'react-vant';

export default () => {
  const [beforeReadDemo, setBeforeReadDemo] = useState<UploaderFileListItem[]>([]);

  // return Promise
  const asyncBeforeRead = async (file: File | File[]) => {
    // if multiple is true, `file` will be array type
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

  return (
    <Uploader
      multiple
      value={beforeReadDemo}
      onChange={setBeforeReadDemo}
      beforeRead={asyncBeforeRead}
    />
  );
};
