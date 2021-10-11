import React, { useContext, useMemo } from 'react';
import classnames from 'classnames';
import { addUnit, getSizeStyle } from '../utils';
import { LoadingProps } from './PropsType';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

const SpinIcon = ({ bem }) => (
  <>
    {Array(12)
    .fill(null)
    // eslint-disable-next-line react/no-array-index-key
    .map((_, index) => <i key={index} className={classnames(bem('line', String(index + 1)))} />)}
  </>
)

const CircularIcon = ({ bem }) => (
  <svg className={classnames(bem('circular'))} viewBox="25 25 50 50">
    <circle cx="50" cy="50" r="20" fill="none" />
  </svg>
);

const BallIcon = ({ bem }) => (
  <div className={classnames(bem('ball'))}>
    <div />
    <div />
    <div />
  </div>
);

const Icon = (bem) =>  ({
  spinner: <SpinIcon bem={bem} />,
  circular: <CircularIcon bem={bem} />,
  ball: <BallIcon bem={bem} />,
});

const Loading: React.FC<LoadingProps> = (props) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('loading', prefixCls);
  const { className, type, vertical, color, size, textColor, children, textSize } = props;

  const spinnerStyle = useMemo(
    () => ({
      color,
      ...getSizeStyle(size),
    }),
    [color, size],
  );

  const renderText = () => {
    if (children) {
      return (
        <span
          className={classnames(bem('text'))}
          style={{
            fontSize: addUnit(textSize),
            color: textColor ?? color,
          }}
        >
          {children}
        </span>
      );
    }
    return null;
  };

  return (
    <div className={classnames(className, bem([type, { vertical }]))}>
      <span className={classnames(bem('spinner', type))} style={spinnerStyle}>
        {Icon(bem)[type]}
      </span>
      {renderText()}
    </div>
  );
};

Loading.defaultProps = {
  type: 'circular',
};

export default Loading;
