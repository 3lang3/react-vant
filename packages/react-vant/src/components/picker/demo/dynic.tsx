import React, { useRef } from 'react';
import { Picker, PickerInstance } from 'react-vant';

const cities = {
  浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
  福建: ['福州', '厦门', '莆田', '三明', '泉州'],
};

export default () => {
  const [value, setValue] = React.useState(['浙江', '温州']);
  const picker = useRef<PickerInstance>(null);

  return (
    <>
      <Picker<string>
        ref={picker}
        value={value}
        columns={[Object.keys(cities), cities['浙江']]}
        onChange={(values) => {
          // 动态设置第二列数据
          picker.current.setColumnOptions(1, cities[values[0]]);
          // 动态设置后需要重新获取picker值
          const newValues = picker.current.getValues<string>();
          const newSelectedOptions = picker.current.getOptions<string>();
          console.log(newValues, newSelectedOptions);
          setValue(newValues);
        }}
      />
    </>
  );
};
