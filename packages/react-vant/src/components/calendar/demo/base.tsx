import React from 'react'
import { Calendar, Cell } from 'react-vant'

export default () => {
  return (
    <>
      <Calendar>
        {(val: Date, actions) => (
          <Cell
            isLink
            title='单个日期'
            value={val ? val.toLocaleDateString() : '请选择日期'}
            onClick={() => actions.open()}
          />
        )}
      </Calendar>
      <Calendar type='multiple'>
        {(val: Date[], actions) => (
          <Cell
            isLink
            title='多个日期'
            value={val ? `已选${val.length}个日期` : '请选择日期'}
            onClick={() => actions.open()}
          />
        )}
      </Calendar>
      <Calendar type='range'>
        {(val: Date[], actions) => (
          <Cell
            isLink
            title='日期区间'
            titleStyle={{ flex: 'none' }}
            value={
              val
                ? val.map(el => el.toLocaleDateString()).join('~')
                : '请选择日期'
            }
            onClick={() => actions.open()}
          />
        )}
      </Calendar>
    </>
  )
}
