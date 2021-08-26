/* eslint-disable no-console */
import React from 'react';
import { Toast, Cell, Calendar } from 'react-vant';
import { components } from 'site-mobile-demo';
import useSetState from '../../hooks/use-set-state';
import './style.less';

const formatDate = (date) => `${date.getFullYear()}年/${date.getMonth() + 1}月/${date.getDate()}日`;

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
  const [state, set] = useSetState({
    v1: false,
    v2: false,
    v3: false,
    v4: false,
    v5: false,
    v6: false,
    v7: false,
    v8: false,
    v9: false,
    v10: false,
    v11: false,
    v12: false,
  });
  const confirm = (v) => {
    const info = Array.isArray(v) ? v.map(formatDate) : formatDate(v);
    Toast.info(info.toString());
  };
  return (
    <DemoSection className="demo-calendar">
      <DemoBlock card title="基础用法">
        <Cell title="选择单个日期" isLink onClick={() => set({ v1: true })} />
        <Calendar
          show={state.v1}
          onClose={() => set({ v1: false })}
          onConfirm={(v) => {
            confirm(v);
            set({ v1: false });
          }}
        />

        <Cell title="选择多个日期" isLink onClick={() => set({ v2: true })} />
        <Calendar
          show={state.v2}
          type="multiple"
          onClose={() => set({ v2: false })}
          onConfirm={(v) => {
            confirm(v);
            set({ v2: false });
          }}
        />

        <Cell title="选择日期区间" isLink onClick={() => set({ v3: true })} />
        <Calendar
          show={state.v3}
          type="range"
          onClose={() => set({ v3: false })}
          onConfirm={(v) => {
            confirm(v);
            set({ v3: false });
          }}
        />
      </DemoBlock>
      <DemoBlock card title="基础用法">
        <Cell title="选择单个日期" isLink onClick={() => set({ v4: true })} />
        <Calendar
          show={state.v4}
          onClose={() => set({ v4: false })}
          onConfirm={(v) => {
            confirm(v);
            set({ v4: false });
          }}
          showConfirm={false}
        />

        <Cell title="选择日期区间" isLink onClick={() => set({ v5: true })} />
        <Calendar
          show={state.v5}
          type="range"
          onClose={() => set({ v5: false })}
          onConfirm={(v) => {
            confirm(v);
            set({ v5: false });
          }}
          showConfirm={false}
        />
      </DemoBlock>

      <DemoBlock card title="自定义日历">
        <Cell title="自定义颜色" isLink onClick={() => set({ v6: true })} />
        <Calendar
          color="#1989fa"
          type="range"
          show={state.v6}
          onClose={() => set({ v6: false })}
          onConfirm={(v) => {
            confirm(v);
            set({ v6: false });
          }}
        />

        <Cell title="自定义日期范围" isLink onClick={() => set({ v7: true })} />
        <Calendar
          minDate={new Date(2010, 0, 1)}
          maxDate={new Date(2010, 0, 31)}
          show={state.v7}
          onClose={() => set({ v7: false })}
          onConfirm={(v) => {
            confirm(v);
            set({ v7: false });
          }}
        />

        <Cell title="自定义按钮文字" isLink onClick={() => set({ v8: true })} />
        <Calendar
          type="range"
          confirmText="完成咯"
          show={state.v8}
          onClose={() => set({ v8: false })}
          onConfirm={(v) => {
            confirm(v);
            set({ v8: false });
          }}
        />

        <Cell title="自定义日期文案" isLink onClick={() => set({ v9: true })} />
        <Calendar
          type="range"
          minDate={new Date(2010, 4, 1)}
          maxDate={new Date(2010, 4, 31)}
          formatter={formatter}
          show={state.v9}
          onClose={() => set({ v9: false })}
          onConfirm={(v) => {
            confirm(v);
            set({ v9: false });
          }}
        />

        <Cell title="自定义弹出位置" isLink onClick={() => set({ v10: true })} />
        <Calendar
          round={false}
          position="right"
          show={state.v10}
          onClose={() => set({ v10: false })}
          onConfirm={(v) => {
            confirm(v);
            set({ v10: false });
          }}
        />

        <Cell title="日期区间最大范围" isLink onClick={() => set({ v11: true })} />
        <Calendar
          type="range"
          maxRange={3}
          show={state.v11}
          onClose={() => set({ v11: false })}
          onConfirm={(v) => {
            confirm(v);
            set({ v11: false });
          }}
        />

        <Cell title="自定义周起始日" isLink onClick={() => set({ v12: true })} />
        <Calendar
          firstDayOfWeek={1}
          show={state.v12}
          onClose={() => set({ v12: false })}
          onConfirm={(v) => {
            confirm(v);
            set({ v12: false });
          }}
        />
      </DemoBlock>

      <DemoBlock card title="平铺展示">
        <Calendar
          style={{ height: 500 }}
          showConfirm={false}
          poppable={false}
          onConfirm={(v) => {
            confirm(v);
          }}
        />
      </DemoBlock>
    </DemoSection>
  );
};
