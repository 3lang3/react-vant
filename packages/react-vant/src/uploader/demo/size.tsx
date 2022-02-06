import React, { useState } from 'react';
import type { UploaderFileListItem } from 'react-vant';
import { Toast, Uploader } from 'react-vant';
import { previewData } from './data';

export default () => {
  const [value, setValue] = useState<UploaderFileListItem[]>(previewData);

  const onOversize = (file) => {
    console.log(file);
    Toast('文件大小不能超过 5kb');
  };

  return (
    <Uploader
      multiple
      value={value}
      onChange={setValue}
      maxSize={5 * 1024}
      onOversize={onOversize}
    />
  );
};
