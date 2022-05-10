import React, { useRef, useState } from 'react';
import { FloatingBall, Cell, Button, FloatingBallInstance, Toast, Form, Switch, Radio, FloatingBallProps, Stepper } from 'react-vant';
import { StarO, CartCircleO, GoldCoinO, WapHomeO, SettingO } from '@react-vant/icons';

export default () => {
  const [autoAdsorb, setAutoAdsorb] = useState(false)
  const floatingBallInstance = useRef<FloatingBallInstance>();
  const [floatingBallConfig, setFloatingBallConfig] = useState<FloatingBallProps>({
    disdrag: false,
    disabled: false,
    direction: 'around',
    position: 'bottom-right'
  });

  const handleFormChange = (values) => {
    console.log('>>>', values)
    setFloatingBallConfig(state => ({...state, ...values}))
  };

  const handleAutoAdsorb = (checked) => {
    setAutoAdsorb(checked);
    if (checked) {
      setFloatingBallConfig({...floatingBallConfig, adsorb: 5})
    } else {
      setFloatingBallConfig({...floatingBallConfig, adsorb: null})
    }
  };

  return (
    <div>
      <Cell title="设置悬浮球" />
      <Form onValuesChange={handleFormChange}>
        <Form.Item name="disabled" label="禁用">
          <Switch size={20} />
        </Form.Item>
        <Form.Item name="disdrag" label="禁止拖动">
          <Switch size={20} />
        </Form.Item>
        <Form.Item label="无操作自动靠边吸附">
          <Switch size={20} onChange={handleAutoAdsorb} />
        </Form.Item>
        {
          autoAdsorb &&
          <Form.Item name="adsorb" label="自动靠边时间(单位S)" initialValue={5}>
            <Stepper />
          </Form.Item>
        }
        <Form.Item name="direction" label="方向" initialValue="around">
          <Radio.Group>
            <Radio name="around">around</Radio>
            <Radio name="vertical">vertical</Radio>
            <Radio name="horizontal">horizontal</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item name="position" label="位置" initialValue="bottom-right">
          <Radio.Group>
            <Radio name="top-left">top-left</Radio>
            <Radio name="top-right">top-right</Radio>
            <Radio name="bottom-left">bottom-left</Radio>
            <Radio name="bottom-right">bottom-right</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
      <FloatingBall
        ref={floatingBallInstance}
        onAction={(active) => console.log('悬浮球当前激活状态>>>', active)}
        {...floatingBallConfig}
        menus={[
          { icon: <WapHomeO/>, onClick: () => Toast.info('点击了第1个') },
          { icon: <StarO/>, onClick: () => Toast.info('点击了第2个') },
          { icon: <CartCircleO/>, onClick: () => Toast.info('点击了第3个') },
          { icon: <GoldCoinO/>, onClick: () => Toast.info('点击了第4个') },
          { icon: <SettingO/>, onClick: () => Toast.info('点击了第5个') },
        ]}
      />
      <Cell>
        <Button
          type="primary"
          block
          round
          onClick={() => { floatingBallInstance.current.action(true); }}
        >激活悬浮球状态</Button>
      </Cell>
      <div style={{height: 1000}}></div>
    </div>
  );
};
