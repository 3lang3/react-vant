import React, { useContext } from 'react';
import clsx from 'clsx';
import { CellGroupProps } from './PropsType';
import { BORDER_TOP_BOTTOM } from '../utils/constant';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

const CellGroup: React.FC<CellGroupProps> = (props) => {
  const { title, border, inset } = props;

  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('cell-group', prefixCls);

  const renderGroup = () => (
    <div className={clsx(bem({ inset }), { [BORDER_TOP_BOTTOM]: !inset && border })}>
      {props.children}
    </div>
  );

  const renderTitle = () => {
    if (title) return <div className={clsx(bem('title'))}>{title}</div>;
    return null;
  };

  return (
    <div className={props.className} style={props.style}>
      {renderTitle()}
      {renderGroup()}
    </div>
  );
};

CellGroup.defaultProps = {
  border: true,
};

export default CellGroup;
