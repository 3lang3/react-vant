import React from 'react';

function kebabCase(str: string): string {
  return str
    .substr(3)
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '');
}

export interface IconBaseProps extends React.SVGProps<SVGSVGElement> {
  /** 是否开启旋转动画	 */
  spin?: boolean;
  /** 图标旋转角度 */
  rotate?: number;
  /** 自定义图标名 */
  name?: string;
  style?: React.CSSProperties;
  className?: string;
}

const IconBase: React.FC<IconBaseProps> = ({
  name = '',
  className,
  style,
  spin,
  rotate,
  children,
  color,
  ...props
}) => {
  const svgStyle = {} as React.CSSProperties;
  if (rotate) {
    svgStyle.msTransform = `rotate(${rotate}deg)`;
    svgStyle.transform = `rotate(${rotate}deg)`;
  }
  if (color) {
    svgStyle.color = color;
  }

  const kebabCaseName = name ? kebabCase(name) : undefined;

  const attrs = {
    'aria-label': kebabCaseName,
    className: [
      'rv-icon',
      kebabCaseName ? `rv-icon-${kebabCaseName}` : '',
      className,
      spin ? 'rv-icon--spin' : '',
    ]
      .join(' ')
      .trim(),
    style: { ...style, ...svgStyle },
    ...props,
  };
  return React.cloneElement(children as React.ReactElement, attrs);
};

export default IconBase;
