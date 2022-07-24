import React, { useState } from 'react'
import { LoadMore, Cell } from 'react-vant'
import { mockRequest } from './mock-request'

export default () => {
  const [data, setData] = useState<string[]>([])
  const [done, setDone] = useState(false)
  async function loadMore() {
    const append = await mockRequest()
    setData(val => [...val, ...append])
    setDone(append.length === 0)
  }

  return (
    <>
      {data.map((item, index) => (
        <Cell key={index} title={item} />
      ))}
      <LoadMore onLoad={loadMore} done={done} threshold={10} />
    </>
  )
}
