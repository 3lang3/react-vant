import React from 'react';
import { hooks, Calendar, Cell } from 'react-vant';

const formatDate = (date) => `${date.getMonth() + 1}/${date.getDate()}`;

const formatter = (day) => {
  const month = day.date.getMonth() + 1;
  const date = day.date.getDate();

  if (month === 5) {
    if (date === 1) {
      day.topInfo = '劳动节';
    } else if (date === 4) {
      day.topInfo = '青年节';
    } else if (date === 11) {
      day.text = '今天';
    }
  }

  if (day.type === 'start') {
    day.bottomInfo = '入住';
  } else if (day.type === 'end') {
    day.bottomInfo = '离店';
  }

  return day;
};

export default () => {
  const [state, set] = hooks.useSetState({
    single: false,
    singleText: '',
    multi: false,
    multiText: '',
    range: false,
    rangeText: '',
  });

  return (
    <>
      <Cell
        title="自定义颜色"
        value={state.singleText}
        isLink
        onClick={() => set({ single: true })}
      />
      <Calendar
        color="#1989fa"
        type="range"
        visible={state.single}
        onClose={() => set({ single: false })}
        onConfirm={(v) => {
          set({ single: false, singleText: formatDate(v) });
        }}
      />

      <Cell
        title="自定义日期范围"
        value={state.multiText}
        isLink
        onClick={() => set({ multi: true })}
      />
      <Calendar
        minDate={new Date(2010, 0, 1)}
        maxDate={new Date(2010, 0, 31)}
        visible={state.multi}
        type="multiple"
        onClose={() => set({ multi: false })}
        onConfirm={(v: any[]) => {
          set({ multi: false, multiText: `选择了 ${v.length} 个日期` });
        }}
      />

      <Cell
        title="自定义日期文案"
        value={state.rangeText}
        isLink
        onClick={() => set({ range: true })}
      />
      <Calendar
        type="range"
        minDate={new Date(2010, 4, 1)}
        maxDate={new Date(2010, 4, 31)}
        formatter={formatter}
        onClose={() => set({ range: false })}
        onConfirm={(v) => {
          set({ range: false, rangeText: `${formatDate(v[0])} - ${formatDate(v[1])}` });
        }}
      />
    </>
  );
};
