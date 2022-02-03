import React from 'react';
import { hooks, Calendar, Cell } from 'react-vant';

const formatDate = (date) => `${date.getMonth() + 1}/${date.getDate()}`;

export default () => {
  const [state, set] = hooks.useSetState({
    single: false,
    singleText: '',
    multi: false,
    multiText: '',
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
        showConfirm={false}
        visible={state.single}
        onClose={() => set({ single: false })}
        onConfirm={(v) => {
          set({ single: false, singleText: formatDate(v) });
        }}
      />

      <Cell
        title="选择日期区间"
        value={state.multiText}
        isLink
        onClick={() => set({ multi: true })}
      />
      <Calendar
        showConfirm={false}
        visible={state.multi}
        type="range"
        onClose={() => set({ multi: false })}
        onConfirm={(v: any[]) => {
          set({ multi: false, multiText: `选择了 ${v.length} 个日期` });
        }}
      />
    </>
  );
};
