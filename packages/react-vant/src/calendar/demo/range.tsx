import React from 'react';
import { hooks, Calendar, Cell } from 'react-vant';

const formatDate = (date) => `${date.getMonth() + 1}/${date.getDate()}`;

export default () => {
  const [state, set] = hooks.useSetState({
    week: false,
    weekText: '',
    range: false,
    rangeText: '',
  });

  return (
    <>
      <Cell
        title="日期区间最大范围"
        value={state.rangeText}
        isLink
        onClick={() => set({ range: true })}
      />
      <Calendar
        type="range"
        maxRange={3}
        visible={state.range}
        onClose={() => set({ range: false })}
        onConfirm={(v) => {
          set({ range: false, rangeText: `${formatDate(v[0])} - ${formatDate(v[1])}` });
        }}
      />

      <Cell
        title="自定义周起始日"
        value={state.weekText}
        isLink
        onClick={() => set({ week: true })}
      />
      <Calendar
        firstDayOfWeek={1}
        visible={state.week}
        onClose={() => set({ week: false })}
        onConfirm={(v) => {
          set({ week: false, weekText: formatDate(v) });
        }}
      />
    </>
  );
};
