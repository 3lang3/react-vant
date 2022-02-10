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
    <g fillRule="nonzero">
      <path d="M500 583.333c220.53 0 388.889 83.387 388.889 222.823 0 60.094-48.844 105.795-121.434 105.795h-534.91c-73.024 0-121.434-44.756-121.434-105.795 0-137.673 170.265-222.823 388.889-222.823zm0 55.556c-191.879 0-333.333 70.742-333.333 167.267 0 29.34 22.605 50.24 65.878 50.24h534.91c42.702 0 65.878-21.685 65.878-50.24 0-98.135-139.577-167.267-333.333-167.267zM500 444.444c92.047 0 166.667-74.619 166.667-166.666 0-92.048-74.62-166.667-166.667-166.667s-166.667 74.62-166.667 166.667S407.953 444.444 500 444.444zM500 500c-122.73 0-222.222-99.492-222.222-222.222S377.27 55.556 500 55.556s222.222 99.492 222.222 222.222S622.73 500 500 500z" />
    </g>
  </svg>
);

const SvgContact = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgContact" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgContact;
