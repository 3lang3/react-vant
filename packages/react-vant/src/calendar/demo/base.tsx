import React from 'react';
import { hooks, Calendar, Cell } from 'react-vant';

const formatDate = (date) => `${date.getMonth() + 1}/${date.getDate()}`;

export default () => {
  const [state, set] = hooks.useSetState({
    single: false,
    singleText: '',
    multi: false,
    multiText: '',
    between: false,
    betweenText: '',
  });

  return (
    <>
      <Cell
        title="选择单个日期"
        value={state.singleText}
        isLink
        onClick={() => set({ single: true })}
      />
      <Calendar
        visible={state.single}
        onClose={() => set({ single: false })}
        onConfirm={(v) => {
          set({ single: false, singleText: formatDate(v) });
        }}
      />

      <Cell
        title="选择多个日期"
        value={state.multiText}
        isLink
        onClick={() => set({ multi: true })}
      />
      <Calendar
        visible={state.multi}
        type="multiple"
        onClose={() => set({ multi: false })}
        onConfirm={(v: any[]) => {
          set({ multi: false, multiText: `选择了 ${v.length} 个日期` });
        }}
      />

      <Cell
        title="选择日期区间"
        value={state.betweenText}
        isLink
        onClick={() => set({ between: true })}
      />
      <Calendar
        visible={state.between}
        type="range"
        onClose={() => set({ between: false })}
        onConfirm={(v) => {
          set({ between: false, betweenText: `${formatDate(v[0])} - ${formatDate(v[1])}` });
        }}
      />
    </>
  );
};
