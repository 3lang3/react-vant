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
    <path
      d="M500 944.444C254.54 944.444 55.556 745.46 55.556 500S254.54 55.556 500 55.556 944.444 254.54 944.444 500 745.46 944.444 500 944.444zm167.75-422.707a27.778 27.778 0 004.337-4.338c9.584-11.98 7.642-29.46-4.338-39.043L462.215 313.928a27.778 27.778 0 00-17.352-6.086c-15.342 0-27.778 12.436-27.778 27.777v328.854a27.778 27.778 0 006.087 17.353c9.584 11.98 27.064 13.922 39.043 4.338L667.75 521.737z"
      fillRule="evenodd"
    />
  </svg>
);

const SvgPlayCircle = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgPlayCircle" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgPlayCircle;
