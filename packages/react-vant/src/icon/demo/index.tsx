import React from 'react';
import { Flex, Tabs, Toast } from 'react-vant';
import * as Icons from '@react-vant/icons';
import icons from './config';
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

export default () => {
  const copy = (icon: string) => {
    const tag = `<${icon}  />`;
    copyToClipboard(tag);

    Toast({
      duration: 1500,
      className: 'demo-icon-notify',
      message: `复制成功: ${tag}`,
    });
  };

  return (
    <div className="demo-icon">
      <Tabs active={0} align="start" scrollspy>
        <Tabs.TabPane title="基础图标">
          <Flex wrap="wrap">
            {getTypeIcons('basic').map((item) => (
              <Flex.Item onClick={() => copy(item.name)} key={item.name}>
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
              <Flex.Item onClick={() => copy(item.name)} key={item.name}>
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
              <Flex.Item onClick={() => copy(item.name)} key={item.name}>
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
