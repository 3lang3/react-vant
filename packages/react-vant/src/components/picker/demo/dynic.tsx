import React, { useRef } from 'react';
import { Picker } from 'react-vant';

export default () => {
  const picker = useRef(null);

  const cities = {
    浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
    福建: ['福州', '厦门', '莆田', '三明', '泉州'],
  };

  return (
    <Picker
      ref={picker}
      columns={[{ values: Object.keys(cities) }, { values: cities['浙江'], defaultIndex: 2 }]}
      onChange={(values) => {
        picker.current.setColumnValues(1, cities[values[0]]);
      }}
    />
  );
};
