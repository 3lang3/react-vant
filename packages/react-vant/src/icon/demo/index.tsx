import React from 'react';
import icons from '@vant/icons';
import { Flex, Icon, Tabs, Toast } from 'react-vant';
import { components } from 'site-mobile-demo';
import './style.less';

const IconFont = Icon.createFromIconfontCN('//at.alicdn.com/t/font_2763890_w471tfudy4d.js');

// from https://30secondsofcode.org
function copyToClipboard(str: string) {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);

  const selection = document.getSelection();

  if (!selection) {
    return;
  }

  const selected = selection.rangeCount > 0 ? selection.getRangeAt(0) : false;

  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);

  if (selected) {
    selection.removeAllRanges();
    selection.addRange(selected);
  }
}

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const copy = (icon: string, option: Record<string, unknown> = {}) => {
    let tag = `<Icon name="${icon}"`;
    if ('dot' in option) {
      tag = `${tag} ${option.dot ? 'dot' : ''}`;
    }
    if ('badge' in option) {
      tag = `${tag} badge="${option.badge}"`;
    }
    if ('color' in option) {
      tag = `${tag} color="${option.color}"`;
    }
    if ('size' in option) {
      tag = `${tag} size="${option.size}"`;
    }
    tag = `${tag} />`;
    copyToClipboard(tag);

    Toast({
      duration: 1500,
      className: 'demo-icon-notify',
      message: `复制成功：${tag}`,
    });
  };

  return (
    <DemoSection>
      <Tabs active={0} sticky>
        <Tabs.TabPane title="用法示例">
          <DemoBlock title="基础用法">
            <Flex>
              <Flex.Item span={6}>
                <Icon color="red" name="chat-o" />
              </Flex.Item>
              <Flex.Item span={6}>
                <Icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
              </Flex.Item>
            </Flex>
          </DemoBlock>
          <DemoBlock title="徽标提示">
            <Flex>
              <Flex.Item span={6}>
                <Icon name="chat-o" badge={{ dot: true }} />
              </Flex.Item>
              <Flex.Item span={6}>
                <Icon name="chat-o" badge={{ content: 9 }} />
              </Flex.Item>
              <Flex.Item span={6}>
                <Icon name="chat-o" badge={{ content: '99+' }} />
              </Flex.Item>
            </Flex>
          </DemoBlock>
          <DemoBlock title="图标颜色">
            <Flex>
              <Flex.Item span={6}>
                <Icon name="cart-o" color="#f44336" />
              </Flex.Item>
              <Flex.Item span={6}>
                <Icon name="fire-o" color="#999" />
              </Flex.Item>
            </Flex>
          </DemoBlock>
          <DemoBlock title="图标大小">
            <Flex>
              <Flex.Item span={6}>
                <Icon name="close" size="40" />
              </Flex.Item>
              <Flex.Item span={6}>
                <Icon name="close" size="3rem" />
              </Flex.Item>
            </Flex>
          </DemoBlock>
          <DemoBlock title="自定义图标">
            <Flex>
              <Flex.Item span={6}>
                <IconFont name="cuIcon-classify" color="#f44336" />
              </Flex.Item>
              <Flex.Item span={6}>
                <IconFont name="cuIcon-classify_fill" color="green" />
              </Flex.Item>
            </Flex>
          </DemoBlock>
          <DemoBlock title="图标旋转">
            <Flex>
              <Flex.Item span={6}>
                <Icon name="clock-o" spin />
              </Flex.Item>
              <Flex.Item span={6}>
                <IconFont spin name="cuIcon-classify_fill" />
              </Flex.Item>
            </Flex>
          </DemoBlock>
        </Tabs.TabPane>
        <Tabs.TabPane title="基础图标">
          <Flex wrap="wrap">
            {icons.basic.map((icon) => (
              <Flex.Item onClick={() => copy(icon)} key={icon} span={6}>
                <Icon name={icon} />
                <span>{icon}</span>
              </Flex.Item>
            ))}
          </Flex>
        </Tabs.TabPane>
        <Tabs.TabPane title="线框风格">
          <Flex wrap="wrap">
            {icons.outline.map((icon) => (
              <Flex.Item onClick={() => copy(icon)} key={icon} span={6}>
                <Icon name={icon} />
                <span>{icon}</span>
              </Flex.Item>
            ))}
          </Flex>
        </Tabs.TabPane>
        <Tabs.TabPane title="实底风格">
          <Flex wrap="wrap">
            {icons.filled.map((icon) => (
              <Flex.Item onClick={() => copy(icon)} key={icon} span={6}>
                <Icon name={icon} />
                <span>{icon}</span>
              </Flex.Item>
            ))}
          </Flex>
        </Tabs.TabPane>
      </Tabs>
    </DemoSection>
  );
};
