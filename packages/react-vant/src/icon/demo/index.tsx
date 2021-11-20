import React from 'react';
import { Flex, Icon, Badge, Tabs, Toast } from 'react-vant';
import * as Icons from '@react-vant/icons';
import { components } from 'site-mobile-demo';
import icons from './config';
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

function camelize(str) {
  return str
    .split('-')
    .map((el) => el.replace(/^\S/, (s) => s.toUpperCase()))
    .join('');
}

function getTypeIcons(type) {
  return icons[type].map((icon) => {
    const name = camelize(icon);
    const component = Icons[name];
    return { name, component };
  });
}

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const copy = (icon: string) => {
    const tag = `<${icon}  />`;
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
                <Icons.ChatO />
              </Flex.Item>
              <Flex.Item span={6}>
                <Icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
              </Flex.Item>
            </Flex>
          </DemoBlock>
          <DemoBlock title="徽标提示">
            <Flex>
              <Flex.Item span={6}>
                <Badge dot>
                  <Icons.ChatO />
                </Badge>
              </Flex.Item>
              <Flex.Item span={6}>
                <Badge content={9}>
                  <Icons.ChatO />
                </Badge>
              </Flex.Item>
              <Flex.Item span={6}>
                <Badge content="99+">
                  <Icons.ChatO />
                </Badge>
              </Flex.Item>
            </Flex>
          </DemoBlock>
          <DemoBlock title="图标颜色">
            <Flex>
              <Flex.Item span={6}>
                <Icons.ChatO color="#f44336" />
              </Flex.Item>
              <Flex.Item span={6}>
                <Icons.FireO color="#999" />
              </Flex.Item>
            </Flex>
          </DemoBlock>
          <DemoBlock title="图标大小">
            <Flex>
              <Flex.Item span={6}>
                <Icons.Close />
              </Flex.Item>
              <Flex.Item span={6}>
                <Icons.Close />
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
            {getTypeIcons('basic').map((item) => (
              <Flex.Item onClick={() => copy(item.name)} key={item.name} span={6}>
                <item.component />
                <span>{item.name}</span>
              </Flex.Item>
            ))}
          </Flex>
        </Tabs.TabPane>
        <Tabs.TabPane title="线框风格">
          <Flex wrap="wrap">
            {getTypeIcons('outline').map((item) => (
              <Flex.Item onClick={() => copy(item.name)} key={item.name} span={6}>
                <item.component />
                <span>{item.name}</span>
              </Flex.Item>
            ))}
          </Flex>
        </Tabs.TabPane>
        <Tabs.TabPane title="实底风格">
          <Flex wrap="wrap">
            {getTypeIcons('filled').map((item) => (
              <Flex.Item onClick={() => copy(item.name)} key={item.name} span={6}>
                <item.component />
                <span>{item.name}</span>
              </Flex.Item>
            ))}
          </Flex>
        </Tabs.TabPane>
      </Tabs>
    </DemoSection>
  );
};
