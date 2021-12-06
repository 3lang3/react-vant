import React, { useContext, useMemo } from 'react';
import cls from 'clsx';
import { StepsItemProps } from './PropsType';
import { BORDER } from '../utils/constant';
import Icon from '../icon';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

const StepsItem: React.FC<StepsItemProps> = ({ children, ...props }) => {
  const { index, parent: parentProps } = props;
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('step', prefixCls);

  if (!parentProps) {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.error('[React Vant] <Step> must be a child component of <Steps>.');
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
  }, [index, parentProps.active, parentProps.activeColor, parentProps.inactiveColor]);

  const onClickStep = () => {
    if (parentProps.onClickStep) parentProps.onClickStep(index);
  };

  const renderCircle = () => {
    const { iconPrefix, activeColor } = parentProps;

    const finishIcon = props.finishIcon ?? parentProps.finishIcon;
    const activeIcon = props.activeIcon ?? parentProps.activeIcon;
    const inactiveIcon = props.inactiveIcon ?? parentProps.inactiveIcon;

    if (isActive()) {
      if (React.isValidElement(activeIcon)) {
        return activeIcon;
      }

      return (
        <Icon
          className={cls(bem('icon', 'active'))}
          name={activeIcon as string}
          color={activeColor}
          classPrefix={iconPrefix}
        />
      );
    }

    if (getStatus() === 'finish' && (finishIcon || React.isValidElement(finishIcon))) {
      if (React.isValidElement(finishIcon)) {
        return finishIcon;
      }

      return (
        <Icon
          className={cls(bem('icon', 'finish'))}
          name={finishIcon as string}
          color={activeColor}
          classPrefix={iconPrefix}
        />
      );
    }

    if (React.isValidElement(inactiveIcon)) {
      return inactiveIcon;
    }

    if (inactiveIcon) {
      return (
        <Icon className={cls(bem('icon'))} name={inactiveIcon as string} classPrefix={iconPrefix} />
      );
    }

    return <i className={cls(bem('circle'))} style={lineStyle} />;
  };

  const status = getStatus();

  return (
    <div
      style={props.style}
      className={cls(props.className, BORDER, bem([parentProps.direction, { [status]: status }]))}
    >
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
