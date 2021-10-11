/* eslint-disable no-console */
import React, { useRef, useState } from 'react';
import { Toast, Button, Grid, Popup, Picker, Cell } from 'react-vant';
import { components } from 'site-mobile-demo';
import { PopoverInstance, PopoverPlacement } from '../PropsType';
import Popover from '..'
import './style.less';

const actions = [{ text: '选项一' }, { text: '选项二' }, { text: '选项三' }];
const popupActions = [{ text: '选项一' }, { text: '选项二' }];

const iconActions = [
  { text: '选项一', icon: 'add-o' },
  { text: '选项二', icon: 'music-o' },
  { text: '选项三', icon: 'more-o' },
];

const disabledActions = [
  { text: '选项一', disabled: true },
  { text: '选项二', disabled: true },
  { text: '选项三' },
];

const placements = [
  'top',
  'top-start',
  'top-end',
  'left',
  'left-start',
  'left-end',
  'right',
  'right-start',
  'right-end',
  'bottom',
  'bottom-start',
  'bottom-end',
] as PopoverPlacement[];

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const popover = useRef<PopoverInstance>(null);
  const popover1 = useRef<PopoverInstance>(null);
  const [visible, setVisible] = useState(false);
  const [placement, updatePlacement] = useState(placements[0]);

  const select = (option) => Toast.info(option.text);

  const onPickerChange = (plc) => {
    updatePlacement(plc);
    setTimeout(() => popover.current.show(), 0);
  };
  return (
    <DemoSection className="demo-slider">
      <DemoBlock title="基础用法">
        <Popover
          placement="bottom-start"
          actions={actions}
          onSelect={select}
          reference={<Button type="primary">浅色风格</Button>}
        />
        <Popover
          actions={actions}
          theme="dark"
          onSelect={select}
          reference={<Button type="primary">深色风格</Button>}
        />
      </DemoBlock>
      <DemoBlock card title="弹出位置">
        <Cell title="选择弹出位置" onClick={() => setVisible(true)} isLink />
        <Popup round position="bottom" visible={visible} onClose={() => setVisible(false)}>
          <div className="demo-popover-box">
            <Popover
              ref={popover}
              theme="dark"
              actions={popupActions}
              onSelect={select}
              placement={placement}
              reference={<div className="demo-popover-refer" />}
            />
          </div>
          <Picker showToolbar={false} columns={placements} onChange={onPickerChange} />
        </Popup>
      </DemoBlock>
      <DemoBlock title="选项配置">
        <Popover
          placement="bottom-start"
          actions={iconActions}
          onSelect={select}
          reference={<Button type="primary">展示图标</Button>}
        />
        <Popover
          actions={disabledActions}
          onSelect={select}
          reference={<Button type="primary">禁用选项</Button>}
        />
      </DemoBlock>
      <DemoBlock title="自定义内容">
        <Popover
          ref={popover1}
          placement="top-start"
          reference={<Button type="primary">自定义内容</Button>}
        >
          <Grid square border={false} columnNum={3} style={{ width: 240 }}>
            {Array.from({ length: 6 }, (_, i) => (
              <Grid.Item
                onClick={() => popover1.current?.hide()}
                key={i}
                icon="photo-o"
                text="文字"
              />
            ))}
          </Grid>
        </Popover>
      </DemoBlock>
    </DemoSection>
  );
};
