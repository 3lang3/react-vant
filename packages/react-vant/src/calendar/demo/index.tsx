/* eslint-disable no-console */
import React from 'react';
import { Toast, Cell } from 'react-vant';
import { components } from 'site-mobile-demo';
import Calendar from '..';
import hooks from '../../hooks';
import './style.less';

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

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const [state, set] = hooks.useSetState({
    v1: false,
    t1: '',
    v2: false,
    t2: '',
    v3: false,
    t3: '',
    v4: false,
    t4: '',
    v5: false,
    t5: '',
    v6: false,
    t6: '',
    v7: false,
    t7: '',
    v8: false,
    t8: '',
    v9: false,
    t9: '',
    v10: false,
    t10: '',
    v11: false,
    t11: '',
    v12: false,
    t12: '',
    v13: false,
    t13: '',
  });

  return (
    <DemoSection className="demo-calendar">
      <DemoBlock card title="基础用法">
        <Cell title="选择单个日期" value={state.t1} isLink onClick={() => set({ v1: true })} />
        <Calendar
          visible={state.v1}
          onClose={() => set({ v1: false })}
          onConfirm={(v) => {
            set({ v1: false, t1: formatDate(v) });
          }}
        />

        <Cell title="选择多个日期" value={state.t2} isLink onClick={() => set({ v2: true })} />
        <Calendar
          visible={state.v2}
          type="multiple"
          onClose={() => set({ v2: false })}
          onConfirm={(v: any[]) => {
            set({ v2: false, t2: `选择了 ${v.length} 个日期` });
          }}
        />

        <Cell title="选择日期区间" value={state.t3} isLink onClick={() => set({ v3: true })} />
        <Calendar
          visible={state.v3}
          type="range"
          onClose={() => set({ v3: false })}
          onConfirm={(v) => {
            set({ v3: false, t3: `${formatDate(v[0])} - ${formatDate(v[1])}` });
          }}
        />
      </DemoBlock>
      <DemoBlock card title="快捷选择">
        <Cell title="选择单个日期" value={state.t4} isLink onClick={() => set({ v4: true })} />
        <Calendar
          visible={state.v4}
          onClose={() => set({ v4: false })}
          onConfirm={(v) => {
            set({ v4: false, t4: formatDate(v) });
          }}
          showConfirm={false}
        />

        <Cell title="选择日期区间" value={state.t5} isLink onClick={() => set({ v5: true })} />
        <Calendar
          visible={state.v5}
          type="range"
          onClose={() => set({ v5: false })}
          onConfirm={(v) => {
            set({ v5: false, t5: `${formatDate(v[0])} - ${formatDate(v[1])}` });
          }}
          showConfirm={false}
        />
      </DemoBlock>

      <DemoBlock card title="自定义日历">
        <Cell title="自定义颜色" value={state.t6} isLink onClick={() => set({ v6: true })} />
        <Calendar
          color="#1989fa"
          type="range"
          visible={state.v6}
          onClose={() => set({ v6: false })}
          onConfirm={(v) => {
            set({ v6: false, t6: `${formatDate(v[0])} - ${formatDate(v[1])}` });
          }}
        />

        <Cell title="自定义日期范围" value={state.t7} isLink onClick={() => set({ v7: true })} />
        <Calendar
          minDate={new Date(2010, 0, 1)}
          maxDate={new Date(2010, 0, 31)}
          visible={state.v7}
          onClose={() => set({ v7: false })}
          onConfirm={(v) => {
            set({ v7: false, t7: formatDate(v) });
          }}
        />

        <Cell title="自定义按钮文字" value={state.t8} isLink onClick={() => set({ v8: true })} />
        <Calendar
          type="range"
          confirmText="完成咯"
          confirmDisabledText="请选择结束时间啊"
          visible={state.v8}
          onClose={() => set({ v8: false })}
          onConfirm={(v) => {
            set({ v8: false, t8: `${formatDate(v[0])} - ${formatDate(v[1])}` });
          }}
        />

        <Cell title="自定义日期文案" value={state.t9} isLink onClick={() => set({ v9: true })} />
        <Calendar
          type="range"
          minDate={new Date(2010, 4, 1)}
          maxDate={new Date(2010, 4, 31)}
          formatter={formatter}
          visible={state.v9}
          onClose={() => set({ v9: false })}
          onConfirm={(v) => {
            set({ v9: false, t9: `${formatDate(v[0])} - ${formatDate(v[1])}` });
          }}
        />

        <Cell
          title="自定义星期文案/月标题"
          value={state.t13}
          isLink
          onClick={() => set({ v13: true })}
        />
        <Calendar
          formatMonthTitle={(date) => `${date.getFullYear()}🥑${date.getMonth() + 1}🍪`}
          weekdays={['🌕', '🌖', '🌗', '🌘', '🌑', '🌒', '🌓']}
          visible={state.v13}
          onClose={() => set({ v13: false })}
          onConfirm={(v) => {
            set({ v13: false, t13: formatDate(v) });
          }}
        />

        <Cell title="自定义弹出位置" value={state.t10} isLink onClick={() => set({ v10: true })} />
        <Calendar
          round={false}
          position="right"
          visible={state.v10}
          onClose={() => set({ v10: false })}
          onConfirm={(v) => {
            set({ v10: false, t10: formatDate(v) });
          }}
        />

        <Cell
          title="日期区间最大范围"
          value={state.t11}
          isLink
          onClick={() => set({ v11: true })}
        />
        <Calendar
          type="range"
          maxRange={3}
          visible={state.v11}
          onClose={() => set({ v11: false })}
          onConfirm={(v) => {
            set({ v11: false, t11: `${formatDate(v[0])} - ${formatDate(v[1])}` });
          }}
        />

        <Cell title="自定义周起始日" value={state.t12} isLink onClick={() => set({ v12: true })} />
        <Calendar
          firstDayOfWeek={1}
          visible={state.v12}
          onClose={() => set({ v12: false })}
          onConfirm={(v) => {
            set({ v12: false, t12: formatDate(v) });
          }}
        />
      </DemoBlock>

      <DemoBlock card title="平铺展示">
        <Calendar
          style={{ height: 500 }}
          showConfirm={false}
          poppable={false}
          onConfirm={(v) => {
            Toast.info(formatDate(v));
          }}
        />
      </DemoBlock>
    </DemoSection>
  );
};
