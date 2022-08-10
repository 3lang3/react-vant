import React, { useState } from 'react'
import { Arrow, ArrowLeft } from '@react-vant/icons'
import { Pagination } from 'react-vant'

export default () => {
  const [page, setPage] = useState(1)
  return (
    <Pagination
      value={page}
      onChange={setPage}
      totalItems={125}
      showPageSize={5}
      prevText={<ArrowLeft />}
      nextText={<Arrow />}
      pageRender={({ text }) => `${text} 😀`}
    />
  )
}
