import React from 'react';
import './index.less';

const DemoBlock = (props) => {
  const { title, card } = props;
  return (
    <div className="rokku-doc-demo-block">
      {title && <h2 className="rokku-doc-demo-block__title">{title}</h2>}
      {card ? (
        <div className="rokku-doc-demo-block__card">{props.children}</div>
      ) : (
        <>{props.children}</>
      )}
    </div>
  );
};

export default DemoBlock;
