import React, { useState } from 'react';
import type { UploaderFileListItem } from 'react-vant';
import { Uploader } from 'react-vant';
import { previewData } from './data';
import './style.less';

export default () => {
  const [value, setValue] = useState<UploaderFileListItem[]>(previewData);

  return (
    <Uploader
      onClickPreview={(items, detail) => {
        console.log(items, detail);
      }}
      onClickUpload={() => {
        console.log('click upload tigger');
      }}
      value={value}
      onChange={setValue}
    />
  );
};
