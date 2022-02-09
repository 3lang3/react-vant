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
      d="M166.667 696.66v192.229h666.666v-192.23L654.09 611.112H345.91L166.667 696.66zm-23.93-50.138l179.245-85.549a55.556 55.556 0 0123.93-5.417h308.177c8.28 0 16.456 1.85 23.93 5.417l179.244 85.549a55.556 55.556 0 0131.626 50.138v192.229c0 30.682-24.873 55.555-55.556 55.555H166.667c-30.683 0-55.556-24.873-55.556-55.555v-192.23a55.556 55.556 0 0131.626-50.137zM500 444.444c92.047 0 166.667-74.619 166.667-166.666 0-92.048-74.62-166.667-166.667-166.667s-166.667 74.62-166.667 166.667S407.953 444.444 500 444.444zM500 500c-122.73 0-222.222-99.492-222.222-222.222S377.27 55.556 500 55.556s222.222 99.492 222.222 222.222S622.73 500 500 500zm83.333 222.222h111.111c15.342 0 27.778 12.437 27.778 27.778s-12.436 27.778-27.778 27.778h-111.11c-15.342 0-27.778-12.437-27.778-27.778s12.436-27.778 27.777-27.778z"
      fillRule="nonzero"
    />
  </svg>
);

const SvgManagerO = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>((props, ref) => {
  return (
    <IconBase name="SvgManagerO" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default SvgManagerO;
