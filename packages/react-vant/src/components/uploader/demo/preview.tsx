import React from 'react'
import { Uploader } from 'react-vant'
import { upload, demoData } from './utils'
import { Fire } from '@react-vant/icons'
import './style.less'

export default () => {
  return (
    <Uploader
      defaultValue={demoData}
      upload={upload}
      previewSize={60} // 自定义视图尺寸
      uploadIcon={<Fire />} // 自定义上传图标
      previewCoverRender={(
        item // 自定义预览内容
      ) =>
        item.filename && (
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              width: ' 100%',
              color: '#fff',
              fontSize: 12,
              textAlign: 'center',
              background: '#00000030',
            }}
          >
            {item.filename}
          </div>
        )
      }
    />
  )
}
