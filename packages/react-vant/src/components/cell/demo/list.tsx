import React from 'react'
import { Cell, Image } from 'react-vant'

export default () => {
  return (
    <>
      {Array.from({ length: 4 }).map((_, idx) => (
        <Cell
          center
          key={idx}
          title={`Avatar ${idx}`}
          label='Deserunt dolor ea eaque eos'
          icon={<Image width={44} height={44} src='/demo_1.jpg' round />}
          isLink
        />
      ))}
    </>
  )
}
