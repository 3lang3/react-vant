import { FireO, LocationO } from '@react-vant/icons'
import React from 'react'
import { Cell } from 'react-vant'

export default () => {
  return (
    <>
      <Cell title='单元格' icon={<LocationO />} />
      <Cell title='单元格' icon={<FireO />} />
    </>
  )
}
