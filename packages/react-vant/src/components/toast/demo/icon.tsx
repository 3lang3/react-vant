import { FireO } from '@react-vant/icons'
import React from 'react'
import { Toast, Cell, Image } from 'react-vant'

export default () => {
  return (
    <>
      <Cell
        title='自定义图标'
        isLink
        onClick={() =>
          Toast({
            message: '自定义图标',
            icon: <FireO />,
          })
        }
      />

      <Cell
        title='自定义图片'
        isLink
        onClick={() =>
          Toast({
            message: '自定义图片',
            icon: (
              <Image width={36} src='https://img01.yzcdn.cn/vant/logo.png' />
            ),
          })
        }
      />
      <Cell
        title='自定义加载图标'
        isLink
        onClick={() =>
          Toast.loading({
            message: '加载中...',
            forbidClick: true,
            loadingType: 'spinner',
          })
        }
      />
    </>
  )
}
