import React, { useMemo } from 'react';
import cls from 'classnames';
import { createNamespace } from '../utils';
import { StepsProps } from './PropsType';
import { BORDER } from '../utils/constant';
import Icon from '../icon';

const [bem] = createNamespace('step');

type InternalProps = {
  parent: StepsProps;
  index: number;
};

const StepsItem: React.FC<InternalProps> = ({ children, ...props }) => {
  const { index, parent: parentProps } = props;
  if (!parentProps) {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.error('[Vant] <Step> must be a child component of <Steps>.');
    }
  }

  const getStatus = () => {
    const active = +parentProps.active;
    if (index < active) {
      return 'finish';
    }
    return index === active ? 'process' : 'waiting';
  };

  const isActive = () => getStatus() === 'process';

  const lineStyle = useMemo(
    () => ({
      background: getStatus() === 'finish' ? parentProps.activeColor : parentProps.inactiveColor,
    }),
    [index, parentProps.active, parentProps.activeColor, parentProps.inactiveColor],
  );

  const titleStyle = useMemo(() => {
    if (isActive()) {
      return { color: parentProps.activeColor };
    }
    if (!getStatus()) {
      return { color: parentProps.inactiveColor };
    }
    return {};
  }, []);

  const onClickStep = () => parentProps.onClickStep(index);

  const renderCircle = () => {
    const { iconPrefix, finishIcon, activeIcon, activeColor, inactiveIcon } = parentProps;

    if (isActive()) {
      if (React.isValidElement[parentProps.activeIcon]) {
        return parentProps.activeIcon;
      }

      return (
        <Icon
          className={cls(bem('icon', 'active'))}
          name={activeIcon}
          color={activeColor}
          classPrefix={iconPrefix}
        />
      );
    }

    if (getStatus() === 'finish' && (finishIcon || React.isValidElement(parentProps.finishIcon))) {
      if (React.isValidElement(parentProps.finishIcon)) {
        return parentProps.finishIcon;
      }

      return (
        <Icon
          className={cls(bem('icon', 'finish'))}
          name={finishIcon}
          color={activeColor}
          classPrefix={iconPrefix}
        />
      );
    }

    if (React.isValidElement(parentProps.inactiveIcon)) {
      return parentProps.inactiveIcon;
    }

    if (inactiveIcon) {
      return <Icon className={cls(bem('icon'))} name={inactiveIcon} classPrefix={iconPrefix} />;
    }

    return <i className={cls(bem('circle'))} style={lineStyle} />;
  };

  const status = getStatus();

  return (
    <div className={cls(BORDER, bem([parentProps.direction, { [status]: status }]))}>
      <div
        className={cls(bem('title', { active: isActive() }))}
        style={titleStyle}
        onClick={onClickStep}
      >
        {children}
      </div>
      <div className={cls(bem('circle-container'))} onClick={onClickStep}>
        {renderCircle()}
      </div>
      <div className={cls(bem('line'))} style={lineStyle} />
    </div>
  );
};

export default StepsItem;
