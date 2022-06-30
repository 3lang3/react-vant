import React from 'react';
import { Calendar, Cell } from 'react-vant';

export default () => {
  return (
    <>
      <Calendar showConfirm={false}>
        {(val: Date, actions) => (
          <Cell
            isLink
            title="单个日期"
            value={val.toLocaleDateString()}
            onClick={() => actions.open()}
          />
        )}
      </Calendar>

      <Calendar showConfirm={false} type="range">
        {(val: Date[], actions) => (
          <Cell
            isLink
            title="日期区间"
            titleStyle={{ flex: 'none' }}
            value={val.map((el) => el.toLocaleDateString()).join('~')}
            onClick={() => actions.open()}
          />
        )}
      </Calendar>
    </>
  );
};
