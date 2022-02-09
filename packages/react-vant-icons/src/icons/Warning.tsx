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
      <path d="M500 55.556c245.46 0 444.444 198.984 444.444 444.444S745.46 944.444 500 944.444 55.556 745.46 55.556 500 254.54 55.556 500 55.556zM502.778 675c-21.478 0-38.89 17.411-38.89 38.889s17.412 38.889 38.89 38.889 38.889-17.411 38.889-38.89c0-21.477-17.411-38.888-38.89-38.888zm28.887-427.778H473.89c-6.021 0-10.123 4.657-9.995 10.402l8.227 368.085c.135 6.035 4.731 10.402 10.28 10.402h40.75c5.272 0 10.15-4.657 10.28-10.402l8.226-368.085c.135-6.034-4.346-10.402-9.994-10.402z" />
    </g>
  </svg>
);

const SvgWarning = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgWarning" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgWarning;
