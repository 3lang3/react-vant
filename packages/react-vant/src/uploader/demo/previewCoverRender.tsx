import React, { useState } from 'react';
import type { UploaderFileListItem } from 'react-vant';
import { Uploader } from 'react-vant';
import { previewData } from './data';
import './previewCoverRender.less';

export default () => {
  const [value, setValue] = useState<UploaderFileListItem[]>([previewData[0]]);

  return (
    <Uploader
      value={value}
      onChange={setValue}
      previewCoverRender={(item) => {
        return <div className="custom-preview-cover">{item.name}</div>;
      }}
    />
  );
};
