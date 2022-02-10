import * as React from 'react';
import IconBase, { IconBaseProps } from './IconBase';

const SvgIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <g fillRule="evenodd">
      <path d="M472.222 472.442V277.998c0-15.341 12.437-27.778 27.778-27.778h.143c15.262.08 27.57 12.516 27.49 27.777l-1.009 194.445h195.598c15.341 0 27.778 12.437 27.778 27.778s-12.437 27.778-27.778 27.778H526.336l-1.017 195.743c-.076 14.646-11.97 26.48-26.617 26.48-14.624 0-26.48-11.856-26.48-26.48V527.997H277.778c-15.341 0-27.778-12.437-27.778-27.778s12.437-27.778 27.778-27.778h194.444z" />
      <path
        d="M500 888.889c214.777 0 388.889-174.112 388.889-388.889 0-214.777-174.112-388.889-388.889-388.889-214.777 0-388.889 174.112-388.889 388.889 0 214.777 174.112 388.889 388.889 388.889zm0 55.555C254.54 944.444 55.556 745.46 55.556 500S254.54 55.556 500 55.556 944.444 254.54 944.444 500 745.46 944.444 500 944.444z"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

const SvgAddO = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgAddO" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgAddO;
