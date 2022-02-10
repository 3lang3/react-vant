import React, { useContext, useMemo } from 'react';
import clsx from 'clsx';
import { ProgressProps } from './PropsType';
import { addUnit } from '../utils';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

const Progress: React.FC<ProgressProps> = (props) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('progress', prefixCls);

  const background = useMemo(
    () => (props.inactive ? '#cacaca' : props.color),
    [props.inactive, props.color],
  );

  const renderPivot = () => {
    const { textColor, pivotText, pivotColor, percentage } = props;
    const text = pivotText ?? `${percentage}%`;

    if (props.showPivot && text) {
      const style = {
        color: textColor,
        left: `${+percentage}%`,
        transform: `translate(-${+percentage}%,-50%)`,
        background: pivotColor || background,
      };

      return (
        <span style={style} className={clsx(bem('pivot'))}>
          {text}
        </span>
      );
    }
    return null;
  };

  const { trackColor, percentage, strokeWidth } = props;
  const rootStyle = {
    background: trackColor,
    height: addUnit(strokeWidth),
  };
  const portionStyle = {
    background,
    transform: `scaleX(${+percentage / 100})`,
  };

  return (
    <div className={clsx(bem())} style={rootStyle}>
      <span className={clsx(bem('portion'))} style={portionStyle} />
      {renderPivot()}
    </div>
  );
};

Progress.defaultProps = {
  showPivot: true,
  percentage: 0,
};

export default Progress;
