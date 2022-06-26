import React, { useRef } from 'react';
import { Picker } from 'react-vant';

const cities = {
  浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
  福建: ['福州', '厦门', '莆田', '三明', '泉州'],
};

async function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

async function request(key: string) {
  await sleep(1000);
  return cities[key];
}

export default () => {
  // const [value, setValue] = React.useState();
  const [columns, setColumns] = React.useState([
    { text: '浙江', children: [] },
    { text: '福建', children: [] },
  ]);

  return (
    <>
      <Picker<string>
        // value={value}
        columns={columns}
        onChange={(values) => {
          const key = values[0];
          if (!key) return;
          request(key).then((data) => {
            setColumns((columns) =>
              columns.map((column) => {
                if (column.text === key) {
                  return {
                    ...column,
                    children: data.map((x) => ({ text: x, value: x })),
                  };
                }
                return column;
              }),
            );
          });
          console.log(values)
        }}
      />
    </>
  );
};
