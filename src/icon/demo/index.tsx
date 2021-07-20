import React from 'react';
import icons from '@vant/icons';
import { Icon, Tabs, Toast, Flex } from 'react-vant';
import { components } from 'site-mobile-demo';
import './style.less';

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
                <Icon name="chat-o" />
              </Flex.Item>
              <Flex.Item span={6}>
                <Icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
              </Flex.Item>
            </Flex>
          </DemoBlock>
          <DemoBlock title="图标颜色">
            <Flex>
              <Flex.Item span={6}>
                <Icon name="chat-o" dot />
              </Flex.Item>
              <Flex.Item span={6}>
                <Icon name="fire-o" color="red" />
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
