import React from 'react';
import { Picker } from 'react-vant';

export default () => {
  const [value, setValue] = React.useState(['福建', '福州', '台江区']);
  return (
    <Picker
      title="标题"
      value={value}
      onChange={(val, options) => {
        console.log(val, options);
        setValue(val);
      }}
      columnsFieldNames={{
        text: 'cityName',
        children: 'cities',
      }}
      columns={[
        {
          cityName: '浙江',
          cities: [
            {
              cityName: '杭州',
              cities: [{ cityName: '西湖区' }, { cityName: '余杭区' }],
            },
            {
              cityName: '温州',
              cities: [{ cityName: '鹿城区' }, { cityName: '瓯海区' }],
            },
          ],
        },
        {
          cityName: '福建',
          cities: [
            {
              cityName: '福州',
              cities: [{ cityName: '鼓楼区' }, { cityName: '台江区' }],
            },
            {
              cityName: '厦门',
              cities: [{ cityName: '思明区' }, { cityName: '海沧区' }],
            },
          ],
        },
      ]}
    />
  );
};
