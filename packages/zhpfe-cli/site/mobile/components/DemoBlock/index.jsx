import React from 'react';
import './index.less';

const DemoBlock = (props) => {
  const { title, card } = props;
  return (
    <div className="vant-doc-demo-block">
      {title && <h2 className="vant-doc-demo-block__title">{title}</h2>}
      {card ? (
        <div className="vant-doc-demo-block__card">{props.children}</div>
      ) : (
        <>{props.children}</>
      )}
    </div>
  );
};

export default DemoBlock;
