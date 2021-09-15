/* eslint-disable no-console */
import React, { useRef, useState } from 'react';
import { Toast, Field, Popup } from 'react-vant';
import { components } from 'site-mobile-demo';
import Picker from '..';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;

  const picker = useRef(null);

  const [fieldValue, setFieldValue] = useState('');
  const [showPicker, setShowPicker] = useState(false);

  const columns = ['南京', '苏州', '常州', '淮安', '扬州', '南通', '宿迁', '泰州', '无锡'];
  const cities = {
    浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
    福建: ['福州', '厦门', '莆田', '三明', '泉州'],
  };

  return (
    <DemoSection>
      <DemoBlock card title="基础用法">
        <Picker
          title="标题"
          columns={columns}
          onChange={(value: string, index: number) => Toast(`当前值：${value}, 当前索引：${index}`)}
          onCancel={() => Toast.info('点击取消按钮')}
          onConfirm={() => Toast.info('点击确认按钮')}
        />
      </DemoBlock>
      <DemoBlock card title="默认选中">
        <Picker
          columns={columns}
          defaultIndex={2}
          onChange={(value: string, index: number) => Toast(`当前值：${value}, 当前索引：${index}`)}
        />
      </DemoBlock>
      <DemoBlock card title="多列选择">
        <Picker
          onChange={(value: string, index: number) => {
            console.log(value, index);
          }}
          columns={[
            {
              values: ['周一', '周二', '周三', '周四', '周五'],
              defaultIndex: 2,
            },
            // 第二列
            {
              values: ['上午', '下午', '晚上'],
              defaultIndex: 1,
            },
          ]}
        />
      </DemoBlock>
      <DemoBlock card title="级联选择">
        <Picker
          onChange={(value: string, index: number) => {
            console.log(value, index);
          }}
          columns={[
            {
              text: '江苏',
              children: [
                {
                  text: '苏州',
                  children: [{ text: '姑苏区' }, { text: '吴中区' }],
                },
                {
                  text: '扬州',
                  children: [{ text: '广陵区' }, { text: '邗江区' }],
                },
              ],
            },
            {
              text: '浙江',
              children: [
                {
                  text: '杭州',
                  children: [{ text: '西湖区' }, { text: '余杭区' }],
                },
                {
                  text: '温州',
                  children: [{ text: '鹿城区' }, { text: '瓯海区' }],
                },
              ],
            },
          ]}
        />
      </DemoBlock>
      <DemoBlock card title="禁用选项">
        <Picker columns={[{ text: '南京', disabled: true }, { text: '苏州' }, { text: '扬州' }]} />
      </DemoBlock>
      <DemoBlock card title="动态选项设置">
        <Picker
          ref={picker}
          columns={[{ values: Object.keys(cities) }, { values: cities['浙江'], defaultIndex: 2 }]}
          onChange={(values) => {
            picker.current.setColumnValues(1, cities[values[0]]);
          }}
        />
      </DemoBlock>
      <DemoBlock card title="加载状态">
        <Picker
          loading
          columns={[
            {
              values: ['周一', '周二', '周三', '周四', '周五'],
              defaultIndex: 2,
            },
            // 第二列
            {
              values: ['上午', '下午', '晚上'],
              defaultIndex: 1,
            },
          ]}
        />
      </DemoBlock>
      <DemoBlock card title="搭配弹出层使用">
        <Field
          readonly
          clickable
          label="城市"
          value={fieldValue}
          placeholder="选择城市"
          onClick={() => setShowPicker(true)}
        />
      </DemoBlock>
      <Popup round visible={showPicker} position="bottom" onClose={() => setShowPicker(false)}>
        <Picker
          title="标题"
          onConfirm={(value: string) => {
            setFieldValue(value);
            setShowPicker(false);
          }}
          columns={columns}
        />
      </Popup>
      <DemoBlock card title="自定义Columns结构">
        <Picker
          title="标题"
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
      </DemoBlock>
    </DemoSection>
  );
};
