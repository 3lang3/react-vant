import * as React from 'react';

function kebabCase(str: string): string {
  return str
    .substring(3)
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '');
}

export interface IconBaseProps extends React.HTMLProps<HTMLSpanElement> {
  /** 是否开启旋转动画	 */
  spin?: boolean;
  /** 图标旋转角度 */
  rotate?: number;
  /** 自定义图标名 */
  name?: string;
  style?: React.CSSProperties;
  className?: string;
}

const IconBase = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const {
    name = '',
    className,
    style,
    spin,
    rotate,
    tabIndex,
    onClick,
    children,
    ...restProps
  } = props;
  const svgStyle = {} as React.CSSProperties;
  if (rotate) {
    svgStyle.msTransform = `rotate(${rotate}deg)`;
    svgStyle.transform = `rotate(${rotate}deg)`;
  }

  const kebabCaseName = name ? kebabCase(name) : undefined;

  let iconTabIndex = tabIndex;
  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }

  const attrs = {
    'aria-label': kebabCaseName,
    className: ['rv-icon', kebabCaseName ? `rv-icon-${kebabCaseName}` : '', className]
      .join(' ')
      .trim(),
    style: { display: 'inline-block', lineHeight: 0, verticalAlign: '-0.125em', ...style },
    ...restProps,
  };
  return (
    <span
      role="img"
      aria-label={kebabCaseName}
      {...attrs}
      ref={ref}
      tabIndex={iconTabIndex}
      onClick={onClick}
    >
      {React.cloneElement(children as React.ReactElement, {
        className: spin ? 'rv-icon--spin' : '',
        style: svgStyle,
        focusable: 'false',
        'data-icon': kebabCaseName,
        'aria-hidden': 'true',
      })}
    </span>
  );
});

export default IconBase;
