import React, { useState } from 'react';
import { Toast, Button, Popup, Field, hooks } from 'react-vant';
import { components } from 'site-mobile-demo';
import Cascader from '..';
import './style.less';

const options = [
  {
    text: '浙江省',
    value: '330000',
    children: [
      {
        text: '杭州市',
        value: '330100',
        children: [
          {
            text: '上城区',
            value: '330102',
          },
          {
            text: '下城区',
            value: '330103',
          },
          {
            text: '江干区',
            value: '330104',
          },
        ],
      },
      {
        text: '宁波市',
        value: '330200',
        children: [
          {
            text: '海曙区',
            value: '330203',
          },
          {
            text: '江北区',
            value: '330205',
          },
          {
            text: '北仑区',
            value: '330206',
          },
        ],
      },
      {
        text: '温州市',
        value: '330300',
        children: [
          {
            text: '鹿城区',
            value: '330302',
          },
          {
            text: '龙湾区',
            value: '330303',
          },
          {
            text: '瓯海区',
            value: '330304',
          },
        ],
      },
    ],
  },
  {
    text: '江苏省',
    value: '320000',
    children: [
      {
        text: '南京市',
        value: '320100',
        children: [
          {
            text: '玄武区',
            value: '320102',
          },
          {
            text: '秦淮区',
            value: '320104',
          },
          {
            text: '建邺区',
            value: '320105',
          },
        ],
      },
      {
        text: '无锡市',
        value: '320200',
        children: [
          {
            text: '锡山区',
            value: '320205',
          },
          {
            text: '惠山区',
            value: '320206',
          },
          {
            text: '滨湖区',
            value: '320211',
          },
        ],
      },
      {
        text: '徐州市',
        value: '320300',
        children: [
          {
            text: '鼓楼区',
            value: '320302',
          },
          {
            text: '云龙区',
            value: '320303',
          },
          {
            text: '贾汪区',
            value: '320305',
          },
        ],
      },
    ],
  },
];

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
    t5: getTextFromValue(['330000', '330100', '330103'], options),
    value5: ['330000', '330100', '330103'],
  });
  const [dynamicOpts, setDynamicOpts] = useState([
    {
      text: '浙江省',
      value: '330000',
      children: [],
    },
  ]);
  const onChange = ({ value }) => {
    if (value === dynamicOpts[0].value) {
      Toast.loading({ message: '加载中...', duration: 0 });
      setTimeout(() => {
        Toast.clear();
        const newOpts = JSON.parse(JSON.stringify(dynamicOpts));
        newOpts[0].children = [
          { text: '杭州市', value: '330100' },
          { text: '宁波市', value: '330200' },
        ];
        setDynamicOpts(newOpts);
      }, 2000);
    }
  };

  return (
    <DemoSection className="demo-cascader">
      <DemoBlock card title="基础用法">
        <Field
          isLink
          value={state.t1}
          readonly
          label="地区"
          placeholder="请选择所在地区"
          onClick={() => set({ v1: true })}
        />
        <Popup visible={state.v1} round position="bottom" onClose={() => set({ v1: false })}>
          <Cascader
            title="请选择所在地区"
            options={options}
            onClose={() => set({ v1: false })}
            onFinish={({ selectedOptions }) => {
              set({ v1: false, t1: selectedOptions.map((option) => option.text).join('/') });
            }}
          />
        </Popup>
      </DemoBlock>
      <DemoBlock card title="自定义颜色">
        <Field
          isLink
          value={state.t2}
          readonly
          label="地区"
          placeholder="请选择所在地区"
          onClick={() => set({ v2: true })}
        />
        <Popup visible={state.v2} round position="bottom" onClose={() => set({ v2: false })}>
          <Cascader
            activeColor="#f44336"
            title="请选择所在地区"
            options={options}
            onClose={() => set({ v2: false })}
            onFinish={({ selectedOptions }) => {
              set({ v2: false, t2: selectedOptions.map((option) => option.text).join('/') });
            }}
          />
        </Popup>
      </DemoBlock>
      <DemoBlock card title="异步加载选项">
        <Field
          isLink
          value={state.t4}
          readonly
          label="地区"
          placeholder="请选择所在地区"
          onClick={() => set({ v4: true })}
        />
        <Popup visible={state.v4} round position="bottom" onClose={() => set({ v4: false })}>
          <Cascader
            title="请选择所在地区"
            options={dynamicOpts}
            onChange={onChange}
            onClose={() => set({ v4: false })}
            onFinish={({ selectedOptions }) => {
              set({ v4: false, t4: selectedOptions.map((option) => option.text).join('/') });
            }}
          />
        </Popup>
      </DemoBlock>

      <DemoBlock card title="自定义字段名">
        <Field
          isLink
          value={state.t3}
          readonly
          label="地区"
          placeholder="请选择所在地区"
          onClick={() => set({ v3: true })}
        />
        <Popup visible={state.v3} round position="bottom" onClose={() => set({ v3: false })}>
          <Cascader
            fieldNames={{
              text: 'name',
              value: 'code',
              children: 'items',
            }}
            title="请选择所在地区"
            options={[
              {
                name: '浙江省',
                code: '330000',
                items: [{ name: '杭州市', code: '330100' }],
              },
              {
                name: '江苏省',
                code: '320000',
                items: [{ name: '南京市', code: '320100' }],
              },
            ]}
            onClose={() => set({ v3: false })}
            onFinish={({ selectedOptions }) => {
              set({ v3: false, t3: selectedOptions.map((option) => option.name).join('/') });
            }}
          />
        </Popup>
      </DemoBlock>
      <DemoBlock card title="受控组件">
        <Field
          isLink
          value={state.t5}
          readonly
          label="地区"
          placeholder="请选择所在地区"
          errorMessage={<div>当前值:{JSON.stringify(state.value5)}</div>}
          onClick={() => set({ v5: true })}
        />

        <Button
          type="primary"
          size="small"
          block
          onClick={() =>
            set({
              value5: ['330000', '330100', '330104'],
              t5: getTextFromValue(['330000', '330100', '330104'], options),
            })
          }
        >
          外部设置
        </Button>
        <Popup visible={state.v5} round position="bottom" onClose={() => set({ v5: false })}>
          <Cascader
            title="请选择所在地区"
            value={state.value5}
            options={options}
            onClose={() => set({ v5: false })}
            onFinish={({ selectedOptions }) => {
              set({
                v5: false,
                value5: selectedOptions.map((option) => option.value),
                t5: selectedOptions.map((option) => option.text).join('/'),
              });
            }}
          />
        </Popup>
      </DemoBlock>
    </DemoSection>
  );
};

function getTextFromValue(value: any[], opts: any[]): string {
  const rs = [];
  value.reduce((a, v) => {
    const matchOpt = a.find((opt) => opt.value === v);
    rs.push(matchOpt.text);
    return matchOpt.children;
  }, opts);
  return rs.join('/');
}
