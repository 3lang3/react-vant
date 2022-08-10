import React from 'react'
import { Toast, Cell } from 'react-vant'

export default () => {
  const onDynicUpdate = () => {
    let remain = 4
    let timer = undefined
    const update = Toast.info({
      message: `还剩 ${remain + 1} 秒`,
      duration: 5000,
      onClose: () => {
        clearInterval(timer)
      },
    })
    timer = setInterval(() => {
      // eslint-disable-next-line no-plusplus
      update.config({ message: `还剩 ${remain--} 秒` })
    }, 1000)
  }

  return (
    <>
      <Cell title='动态更新提示' isLink onClick={onDynicUpdate} />
    </>
  )
}
