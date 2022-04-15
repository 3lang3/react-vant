import React from 'react';
import { Popup, Cell, ConfigProvider } from 'react-vant';

const theme = {
  '--rv-popup-background-color': '#000',
};

export default () => {
  const [visible, setVisible] = React.useState(false);
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  return (
    <ConfigProvider themeVars={theme}>
      <div ref={wrapperRef}>
        <Cell title="ConfigProvider配置" isLink onClick={() => setVisible(true)} />
        <Popup
          teleport={() => wrapperRef.current}
          visible={visible}
          closeable
          title="标题"
          descrition="这是一段很长很长的描述这是一段很长很长的描述这是一段很长很长的描述这是一段很长很长的描述"
          style={{ height: '30%' }}
          position="bottom"
          round
          onClose={() => setVisible(false)}
        />
      </div>
    </ConfigProvider>
  );
};
