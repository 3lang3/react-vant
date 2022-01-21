import React from 'react';
import { Flex, Badge, Tabs, Toast } from 'react-vant';
import * as Icons from '@react-vant/icons';
import icons from './config';
import './style.less';

const DemoBlock = ({ title, children }) => {
  return (
    <>
      {title && <h2 className="vant-doc-demo-block__title">{title}</h2>}
      {children}
    </>
  );
};

const IconFont = Icons.createFromIconfontCN('//at.alicdn.com/t/font_1619071_dqiwns2g0d.js');

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
    <div className="demo-icon">
      <Tabs active={0} sticky>
        <Tabs.TabPane title="用法示例">
          <DemoBlock title="基础用法">
            <Flex>
              <Flex.Item span={6}>
                <Icons.ChatO />
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
                <Icons.FireO color="#3f45ff" />
              </Flex.Item>
            </Flex>
          </DemoBlock>
          <DemoBlock title="图标大小">
            <Flex>
              <Flex.Item span={6}>
                <Icons.Close fontSize={40} />
              </Flex.Item>
              <Flex.Item span={6}>
                <Icons.Close fontSize="3rem" />
              </Flex.Item>
            </Flex>
          </DemoBlock>
          <DemoBlock title="自定义图标">
            <Flex>
              <Flex.Item span={6}>
                <IconFont name="icon-weunblock" />
              </Flex.Item>
              <Flex.Item span={6}>
                <IconFont name="icon-1111" />
              </Flex.Item>
            </Flex>
          </DemoBlock>
          <DemoBlock title="图标旋转">
            <Flex>
              <Flex.Item span={6}>
                <Icons.ClockO spin />
              </Flex.Item>
              <Flex.Item span={6}>
                <Icons.FireO spin />
              </Flex.Item>
              <Flex.Item span={6}>
                <IconFont name="icon-weunblock" spin />
              </Flex.Item>
            </Flex>
          </DemoBlock>
        </Tabs.TabPane>
        <Tabs.TabPane title="基础图标">
          <Flex wrap="wrap">
            {getTypeIcons('basic').map((item) => (
              <Flex.Item onClick={() => copy(item.name)} key={item.name} span={6}>
                <div className="icon-box">
                  <item.component />
                </div>
                <div className="icon-name">{item.name}</div>
              </Flex.Item>
            ))}
          </Flex>
        </Tabs.TabPane>
        <Tabs.TabPane title="线框风格">
          <Flex wrap="wrap">
            {getTypeIcons('outline').map((item) => (
              <Flex.Item onClick={() => copy(item.name)} key={item.name} span={6}>
                <div className="icon-box">
                  <item.component />
                </div>
                <div className="icon-name">{item.name}</div>
              </Flex.Item>
            ))}
          </Flex>
        </Tabs.TabPane>
        <Tabs.TabPane title="实底风格">
          <Flex wrap="wrap">
            {getTypeIcons('filled').map((item) => (
              <Flex.Item onClick={() => copy(item.name)} key={item.name} span={6}>
                <div className="icon-box">
                  <item.component />
                </div>
                <div className="icon-name">{item.name}</div>
              </Flex.Item>
            ))}
          </Flex>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};
