import React from 'react'
import { Calendar, Cell } from 'react-vant'

const formatter = day => {
  const month = day.date.getMonth() + 1
  const date = day.date.getDate()

  if (month === 5) {
    if (date === 1) {
      day.topInfo = '劳动节'
    } else if (date === 4) {
      day.topInfo = '青年节'
    } else if (date === 11) {
      day.text = '今天'
    }
  }

  if (day.type === 'start') {
    day.bottomInfo = '入住'
  } else if (day.type === 'end') {
    day.bottomInfo = '离店'
  }

  return day
}

export default () => {
  return (
    <>
      <Calendar type='range' color='#1989fa'>
        {(val: Date[], actions) => (
          <Cell
            isLink
            title='颜色'
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

      <Calendar
        type='multiple'
        minDate={new Date(2010, 0, 1)}
        maxDate={new Date(2010, 0, 31)}
      >
        {(val: Date[], actions) => (
          <Cell
            isLink
            title='日期范围'
            value={val ? `已选${val.length}个日期` : '请选择日期'}
            onClick={() => actions.open()}
          />
        )}
      </Calendar>

      <Calendar type='range' maxRange={3}>
        {(val: Date[], actions) => (
          <Cell
            isLink
            title='区间范围'
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

      <Calendar firstDayOfWeek={1}>
        {(val: Date, actions) => (
          <Cell
            isLink
            title='周起始日'
            value={val ? val.toLocaleDateString() : '请选择日期'}
            onClick={() => actions.open()}
          />
        )}
      </Calendar>

      <Calendar type='range' formatter={formatter}>
        {(val: Date[], actions) => (
          <Cell
            isLink
            title='日期文案'
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

      <Calendar
        formatMonthTitle={date =>
          `${date.getFullYear()}🥑${date.getMonth() + 1}🍪`
        }
        weekdays={['🌕', '🌖', '🌗', '🌘', '🌑', '🌒', '🌓']}
      >
        {(val: Date, actions) => (
          <Cell
            isLink
            title='周/月文案'
            value={val ? val.toLocaleDateString() : '请选择日期'}
            onClick={() => actions.open()}
          />
        )}
      </Calendar>
      <Calendar horizontal>
        {(val: Date, actions) => (
          <Cell
            isLink
            title='水平滑动'
            value={val ? val.toLocaleDateString() : '请选择日期'}
            onClick={() => actions.open()}
          />
        )}
      </Calendar>
    </>
  )
}
