import React, { useState } from 'react';
import { Button, Rate, Calendar, Field, Slider } from 'react-vant';
import { components } from 'site-mobile-demo';
import { enUS as locale } from '../../locale';
import ConfigProvider from '..';
import './style.less';

const themeVars = {
  rateIconFullColor: '#ffcc56',
  sliderBarHeight: '4px',
  sliderButtonWidth: '20px',
  sliderButtonHeight: '20px',
  sliderActiveBackgroundColor: '#951fff',
  buttonPrimaryBorderColor: '#951fff',
  buttonPrimaryBackgroundColor: '#951fff',
};

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const [rate, updateRate] = useState(4);
  const [slider, updateSlider] = useState(50);
  return (
    <DemoSection className="demo-config-prodiver">
      <DemoBlock title="定制主题">
        <ConfigProvider themeVars={themeVars} locale={locale}>
          <Field label="评分">
            <Rate value={rate} onChange={updateRate} />
          </Field>
          <Field label="滑块">
            <Slider value={slider} onChange={updateSlider} />
          </Field>
          <div style={{ margin: 16 }}>
            <Button block round type="primary">
              提交
            </Button>
          </div>
        </ConfigProvider>
      </DemoBlock>

      <DemoBlock title="语言切换">
        <ConfigProvider locale={locale}>
          <Calendar style={{ height: 420 }} poppable={false} />
        </ConfigProvider>
      </DemoBlock>
    </DemoSection>
  );
};
