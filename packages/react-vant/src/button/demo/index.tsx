import React from 'react';
import { components } from 'site-mobile-demo';
import Button from '..'
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  return (
    <DemoSection>
      <DemoBlock title="基础用法">
        <div className="demo-button-row">
          <Button type="primary">主要按钮</Button>
          <Button type="info">信息按钮</Button>
          <Button type="default">默认按钮</Button>
        </div>
        <Button type="warning">警告按钮</Button>
        <Button type="danger">危险按钮</Button>
      </DemoBlock>
      <DemoBlock title="朴素按钮">
        <Button plain type="primary">
          朴素按钮
        </Button>
        <Button plain type="info">
          朴素按钮
        </Button>
      </DemoBlock>
      <DemoBlock title="细边框按钮">
        <Button plain hairline type="primary">
          细边框按钮
        </Button>
        <Button plain hairline type="info">
          细边框按钮
        </Button>
      </DemoBlock>
      <DemoBlock title="禁用状态">
        <Button disabled type="primary">
          禁用状态
        </Button>
        <Button disabled type="info">
          禁用状态
        </Button>
      </DemoBlock>
      <DemoBlock title="加载状态">
        <Button loading type="primary" />
        <Button loading type="primary" loadingType="spinner" />
        <Button loading loadingText="加载中..." type="info" />
      </DemoBlock>
      <DemoBlock title="按钮形状">
        <Button square type="primary">
          方形按钮
        </Button>
        <Button round type="info">
          圆形按钮
        </Button>
      </DemoBlock>
      <DemoBlock title="图标按钮">
        <Button icon="plus" type="primary" />
        <Button icon="plus" iconPosition="left" type="primary">
          按钮
        </Button>
        <Button icon="https://img.yzcdn.cn/vant/user-active.png" plain type="primary">
          按钮
        </Button>
      </DemoBlock>
      <DemoBlock title="按钮尺寸">
        <Button type="primary" size="large">
          大号按钮
        </Button>
        <Button type="primary" size="normal">
          普通按钮
        </Button>
        <Button type="primary" size="small">
          小型按钮
        </Button>
        <Button type="primary" size="mini">
          迷你按钮
        </Button>
      </DemoBlock>
      <DemoBlock title="块级元素">
        <Button type="primary" block round>
          块级元素
        </Button>
      </DemoBlock>
      <DemoBlock title="阴影">
        <Button type="primary" block shadow>
          阴影按钮
        </Button>
      </DemoBlock>
      <DemoBlock title="自定义颜色">
        <Button color="#7232dd">单色按钮</Button>
        <Button color="#7232dd" plain>
          单色按钮
        </Button>
        <Button color="linear-gradient(to right, #ff6034, #ee0a24)">渐变色按钮</Button>
      </DemoBlock>
      <DemoBlock title="按钮组">
        <Button.Group>
          <Button icon="arrow-left" block>上一步</Button>
          <Button icon="replay" block>刷新</Button>
          <Button icon="arrow" block>
            下一步
          </Button>
        </Button.Group>
      </DemoBlock>
    </DemoSection>
  );
};
