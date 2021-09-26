import React, { useState } from 'react';
import { Icon } from 'react-vant';
import { components } from 'site-mobile-demo';
import Pagination from '..';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const [page1, setPage1] = useState(1);
  const [page2, setPage2] = useState(1);
  const [page3, setPage3] = useState(1);
  const [page4, setPage4] = useState(1);
  return (
    <DemoSection className="demo-badge">
      <DemoBlock title="基础用法">
        <Pagination value={page1} onChange={setPage1} totalItems={24} itemsPerPage={5} />
      </DemoBlock>
      <DemoBlock title="简单模式">
        <Pagination value={page2} mode="simple" onChange={setPage2} pageCount={12} />
      </DemoBlock>
      <DemoBlock title="显示省略号">
        <Pagination
          forceEllipses
          value={page3}
          onChange={setPage3}
          totalItems={125}
          showPageSize={3}
        />
      </DemoBlock>
      <DemoBlock title="自定义按钮">
        <Pagination
          value={page4}
          onChange={setPage4}
          totalItems={125}
          showPageSize={5}
          prevText={<Icon name="arrow-left" />}
          nextText={<Icon name="arrow" />}
          pageRender={({ text }) => `${text} 😀`}
        />
      </DemoBlock>
    </DemoSection>
  );
};
