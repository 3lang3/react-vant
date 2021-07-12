import React, { useRef, useState } from 'react';
import { Picker, Toast, Field, Popup } from '@zhpfe/design';
import { components } from 'site-mobile-demo';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;

  const picker = useRef(null);

  const [fieldValue, setFieldValue] = useState('');
  const [showPicker, setShowPicker] = useState(false);

  const columns = ['南京', '苏州', '常州', '淮安', '扬州', '南通', '宿迁', '泰州', '无锡'];
  const cities = {
    江苏: ['南京', '苏州', '常州', '淮安', '扬州'],
    浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
  };

  return (
    <DemoSection>
      <DemoBlock card title="基础用法">
        <Picker
          columns={columns}
          onChange={(value: string, index: number) => Toast(`当前值：${value}, 当前索引：${index}`)}
        />
      </DemoBlock>
      <DemoBlock card title="默认选中">
        <Picker
          columns={columns}
          defaultIndex="2"
          onChange={(value: string, index: number) => Toast(`当前值：${value}, 当前索引：${index}`)}
        />
      </DemoBlock>
      <DemoBlock card title="多列选择">
        <Picker
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
          onChange={(values: string[]) => {
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
      <DemoBlock card title="确认按钮">
        <Picker
          showSubmitBtn
          onConfirm={(value: string, index: number) =>
            Toast(`提交值：${value}, 提交索引：${index}`)
          }
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
      <Popup
        title="请选择城市"
        closeable
        visible={showPicker}
        round
        position="bottom"
        onClose={() => setShowPicker(false)}
      >
        <Picker
          showSubmitBtn
          onConfirm={(value: string) => {
            setFieldValue(value);
            setShowPicker(false);
          }}
          columns={columns}
        />
      </Popup>
    </DemoSection>
  );
};
